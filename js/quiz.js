// Student quiz page. Supports: mcq, error, gap, reorder, sort, identify.
(function () {
  function start() {
    const quizzes = window.W001_QUIZZES.quizzes;
    const params = new URLSearchParams(location.search);
    const quiz = quizzes.find((q) => q.id === params.get('id'));
    const app = document.getElementById('app');
    if (!quiz) { app.innerHTML = '<div class="score-card"><h1>Quiz not found</h1><p>Ask your teacher for today\u2019s QR code.</p></div>'; return; }
    document.documentElement.style.setProperty('--phase', (window.W001_PHASE_COLORS || {})[quiz.phase] || '#4E7B76');

    const N = quiz.questions.length;
    let idx = 0;
    const answers = new Array(N).fill(null), checked = new Array(N).fill(false), results = new Array(N).fill(false);
    const norm = (s) => String(s || '').trim().toLowerCase().replace(/[\u2019]/g, "'").replace(/[.?!,]+$/, '').replace(/\s+/g, ' ');
    const shuffled = (a) => a.slice().sort(() => Math.random() - 0.5);
    const isChoice = (q) => q.type === 'mcq' || q.type === 'error';

    function answerText(q) {
      if (isChoice(q)) return q.options[q.answer];
      if (q.type === 'gap') return q.displayAnswer || q.answers[0];
      if (q.type === 'reorder') return q.answer.join(' \u2192 ');
      if (q.type === 'sort') return q.items.map((i) => i.text + ' \u2192 ' + i.category).join(' \u00b7 ');
      if (q.type === 'identify') return q.answer.map((i) => q.tokens[i]).join(q.mode === 'sentences' ? '  ' : ' ');
      return '';
    }
    function isCorrect(q, a) {
      if (isChoice(q)) return a === q.answer;
      if (q.type === 'gap') return q.answers.some((x) => norm(x) === norm(a));
      if (q.type === 'reorder') return JSON.stringify(a) === JSON.stringify(q.answer);
      if (q.type === 'sort') return !!a && q.items.every((it) => a[it.text] === it.category);
      if (q.type === 'identify') return Array.isArray(a) && a.length === q.answer.length && q.answer.every((i) => a.includes(i));
      return false;
    }
    function hasAnswer(q, a) {
      if (a === null) return false;
      if (q.type === 'identify') return a.length > 0;
      if (q.type === 'gap') return String(a).trim() !== '';
      if (q.type === 'sort') return Object.keys(a).length > 0;
      return true;
    }

    function header() {
      return `<section class="quiz-head"><div class="eyebrow">Week ${quiz.week} \u00b7 ${quiz.day}</div><h1>${quiz.title}</h1><div class="tiny">${quiz.reviews}</div><div class="progress"><div id="bar"></div></div><div class="progress-text" id="ptext"></div></section><div id="qmount"></div>`;
    }
    function render() { app.innerHTML = header(); renderQuestion(); updateProgress(); }
    function updateProgress() {
      document.getElementById('bar').style.width = ((idx + 1) / N) * 100 + '%';
      document.getElementById('ptext').textContent = `Question ${idx + 1} of ${N}`;
    }

    function renderQuestion() {
      const q = quiz.questions[idx], mount = document.getElementById('qmount');
      const card = document.createElement('section'); card.className = 'qcard';
      card.innerHTML = `<div class="qnum">Question ${idx + 1}</div><div class="qprompt">${q.prompt}</div><div id="inputArea"></div><div id="feedback" class="feedback"></div><div class="navrow"><button id="prev" class="btn secondary" ${idx === 0 ? 'disabled' : ''}>Back</button><div><button id="check" class="btn teal">Check</button> <button id="next" class="btn" style="display:none">${idx === N - 1 ? 'Finish' : 'Next'}</button></div></div>`;
      mount.appendChild(card);
      buildInput(q, card.querySelector('#inputArea'));
      card.querySelector('#prev').onclick = () => { if (idx > 0) { idx--; render(); } };
      card.querySelector('#check').onclick = () => check(q, card);
      card.querySelector('#next').onclick = () => { if (idx === N - 1) finish(); else { idx++; render(); } };
      if (checked[idx]) showChecked(q, card);
    }

    function buildInput(q, area) {
      const i = idx;
      if (isChoice(q)) {
        area.className = 'choices';
        q.options.forEach((o, k) => {
          const b = document.createElement('button'); b.className = 'choice' + (answers[i] === k ? ' selected' : ''); b.textContent = o;
          b.onclick = () => { if (checked[i]) return; answers[i] = k; area.querySelectorAll('.choice').forEach((x) => x.classList.remove('selected')); b.classList.add('selected'); };
          area.appendChild(b);
        });
      } else if (q.type === 'gap') {
        const input = document.createElement('input'); input.className = 'gap-input'; input.placeholder = 'Type your answer'; input.value = answers[i] || '';
        input.autocapitalize = 'off'; input.autocomplete = 'off'; input.spellcheck = false;
        input.oninput = () => { answers[i] = input.value; };
        area.appendChild(input);
      } else if (q.type === 'reorder') {
        if (!Array.isArray(answers[i])) answers[i] = shuffled(q.items);
        area.className = 'reorder-list';
        const redraw = () => {
          area.innerHTML = '';
          answers[i].forEach((text, k) => {
            const row = document.createElement('div'); row.className = 'reorder-item'; row.draggable = true;
            row.innerHTML = '<span></span><span class="move-buttons"><button aria-label="move up">\u2191</button><button aria-label="move down">\u2193</button></span>';
            row.firstChild.textContent = text;
            const [up, down] = row.querySelectorAll('button');
            up.onclick = () => { if (k) { [answers[i][k - 1], answers[i][k]] = [answers[i][k], answers[i][k - 1]]; redraw(); } };
            down.onclick = () => { if (k < answers[i].length - 1) { [answers[i][k + 1], answers[i][k]] = [answers[i][k], answers[i][k + 1]]; redraw(); } };
            let from = null;
            row.addEventListener('dragstart', () => { from = k; row.classList.add('dragging'); });
            row.addEventListener('dragend', () => row.classList.remove('dragging'));
            row.addEventListener('dragover', (e) => e.preventDefault());
            row.addEventListener('drop', (e) => { e.preventDefault(); if (from !== null && from !== k) { const [m] = answers[i].splice(from, 1); answers[i].splice(k, 0, m); redraw(); } });
            area.appendChild(row);
          });
        };
        redraw();
      } else if (q.type === 'sort') {
        if (!answers[i] || typeof answers[i] !== 'object' || Array.isArray(answers[i])) answers[i] = {};
        area.className = 'sort-area';
        const bank = document.createElement('div'); bank.className = 'sort-items'; const cats = document.createElement('div'); cats.className = 'categories'; let selected = null;
        const move = (text, cat) => { answers[i][text] = cat; redraw(); };
        const redraw = () => {
          bank.innerHTML = '<div class="tiny">Tap a card, then tap a category. Dragging also works.</div>';
          q.items.filter((it) => !answers[i][it.text]).forEach((it) => {
            const c = document.createElement('span'); c.className = 'sort-chip'; c.textContent = it.text; c.draggable = true;
            c.onclick = () => { bank.querySelectorAll('.sort-chip').forEach((x) => x.classList.remove('selected')); c.classList.add('selected'); selected = it.text; };
            c.addEventListener('dragstart', (e) => e.dataTransfer.setData('text/plain', it.text));
            bank.appendChild(c);
          });
          cats.innerHTML = '';
          q.categories.forEach((cat) => {
            const box = document.createElement('div'); box.className = 'category-box'; box.innerHTML = '<h4></h4>'; box.firstChild.textContent = cat;
            Object.entries(answers[i]).filter(([, c]) => c === cat).forEach(([t]) => {
              const chip = document.createElement('span'); chip.className = 'sort-chip'; chip.textContent = t;
              chip.onclick = () => { if (checked[i]) return; delete answers[i][t]; redraw(); };
              box.appendChild(chip);
            });
            box.onclick = (e) => { if (checked[i]) return; if ((e.target === box || e.target.tagName === 'H4') && selected) { move(selected, cat); selected = null; } };
            box.addEventListener('dragover', (e) => { e.preventDefault(); box.classList.add('over'); });
            box.addEventListener('dragleave', () => box.classList.remove('over'));
            box.addEventListener('drop', (e) => { e.preventDefault(); box.classList.remove('over'); if (!checked[i]) move(e.dataTransfer.getData('text/plain'), cat); });
            cats.appendChild(box);
          });
        };
        area.append(bank, cats); redraw();
      } else if (q.type === 'identify') {
        if (!Array.isArray(answers[i])) answers[i] = [];
        const bySentence = q.mode === 'sentences';
        area.className = 'identify ' + (bySentence ? 'by-sentence' : 'by-word');
        const hint = document.createElement('div'); hint.className = 'tiny'; hint.textContent = bySentence ? 'Tap the sentence or sentences. Tap again to undo.' : 'Tap the word or words. Tap again to undo.';
        const box = document.createElement('div'); box.className = 'tokbox';
        q.tokens.forEach((t, k) => {
          const b = document.createElement('button'); b.type = 'button'; b.className = 'tok' + (answers[i].includes(k) ? ' selected' : ''); b.textContent = t; b.dataset.k = k;
          b.onclick = () => { if (checked[i]) return; const a = answers[i]; const p = a.indexOf(k); if (p >= 0) a.splice(p, 1); else a.push(k); b.classList.toggle('selected'); };
          box.appendChild(b);
        });
        area.append(hint, box);
      }
    }

    function check(q, card) {
      if (!hasAnswer(q, answers[idx])) return;
      results[idx] = isCorrect(q, answers[idx]); checked[idx] = true; showChecked(q, card);
    }
    function showChecked(q, card) {
      const fb = card.querySelector('#feedback'), ok = results[idx];
      fb.className = 'feedback show ' + (ok ? 'good' : 'bad');
      fb.innerHTML = `<strong>${ok ? 'Correct' : 'Not quite'}</strong><br>${q.explanation || ''}${ok ? '' : `<br><span class="tiny">Answer: ${answerText(q)}</span>`}`;
      card.querySelector('#check').style.display = 'none'; card.querySelector('#next').style.display = 'inline-block';
      const area = card.querySelector('#inputArea');
      if (isChoice(q)) card.querySelectorAll('.choice').forEach((b, k) => { b.disabled = true; if (k === q.answer) b.classList.add('correct'); if (answers[idx] === k && k !== q.answer) b.classList.add('incorrect'); });
      if (q.type === 'identify') card.querySelectorAll('.tok').forEach((b) => { const k = Number(b.dataset.k), sel = (answers[idx] || []).includes(k), want = q.answer.includes(k); b.disabled = true; if (want && sel) b.classList.add('correct'); else if (want) b.classList.add('missed'); else if (sel) b.classList.add('incorrect'); });
      const inp = card.querySelector('.gap-input'); if (inp) inp.disabled = true;
      if (q.type === 'reorder' || q.type === 'sort') area.classList.add('locked');
    }
    function finish() {
      const score = results.filter(Boolean).length, pct = Math.round(score / N * 100);
      const msg = pct >= 90 ? 'Excellent retrieval.' : pct >= 70 ? 'Good start. Review the few that slipped.' : pct >= 50 ? 'You remembered some of it. Use the answer review below.' : 'Today\u2019s review did its job: it found what needs another look.';
      app.innerHTML = `<section class="score-card"><div class="eyebrow">Finished \u00b7 ${quiz.day}</div><div class="score-big">${score}/${N}</div><h2>${msg}</h2><p>Your answers are not sent anywhere. Use the review below, then you are ready for class.</p><div class="answers-review" id="review"></div></section>`;
      const r = document.getElementById('review');
      quiz.questions.forEach((q, i) => {
        const d = document.createElement('div'); d.className = 'answer-row';
        d.innerHTML = `<strong>${i + 1}. ${results[i] ? '\u2713' : '\u2717'} ${q.prompt}</strong><div></div><div class="tiny">${q.explanation || ''}</div>`;
        d.children[1].textContent = answerText(q);
        r.appendChild(d);
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    render();
  }
  (window.W001Load || function (cb) { cb(); })(start);
})();
