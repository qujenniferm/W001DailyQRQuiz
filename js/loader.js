// Loads question data. Uses the published spreadsheet if configured, otherwise the bundled file.
(function () {
  const CFG = window.W001_CONFIG || {};
  window.W001_PHASE_COLORS = { "UNDERSTAND": "#4E7B76", "TRY": "#B58A3C", "DEVELOP": "#5B6F8C", "WRITE & REFLECT": "#7A6A8F", "SHOW & REFLECT": "#7A6A8F", "TYPING": "#8C6A5D" };

  function parseCSV(text) {
    const rows = []; let row = [], cell = '', q = false;
    for (let i = 0; i < text.length; i++) {
      const c = text[i];
      if (q) {
        if (c === '"') { if (text[i + 1] === '"') { cell += '"'; i++; } else q = false; } else cell += c;
      } else if (c === '"') q = true;
      else if (c === ',') { row.push(cell); cell = ''; }
      else if (c === '\n' || c === '\r') { if (c === '\r' && text[i + 1] === '\n') i++; row.push(cell); rows.push(row); row = []; cell = ''; }
      else cell += c;
    }
    if (cell.length || row.length) { row.push(cell); rows.push(row); }
    return rows.filter((r) => r.some((x) => x.trim() !== ''));
  }

  const num = (s) => (/^\d+$/.test(String(s).trim()) ? Number(s) : String(s).trim());
  const shuffle = (a) => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };

  function rowToQuestion(r) {
    const t = r.type.trim();
    const q = { type: t, prompt: r.prompt, explanation: r.explanation || '' };
    if (r.cat) q.cat = r.cat.trim();
    if (r.qunit !== undefined && r.qunit !== '') q.unit = num(r.qunit);
    if (t === 'mcq' || t === 'error') {
      q.options = [r.a, r.b, r.c, r.d].filter((x) => x !== undefined && x !== '');
      q.answer = 'ABCD'.indexOf(r.answer.trim().toUpperCase());
    } else if (t === 'gap') {
      q.answers = r.answers.split(' | ').map((x) => x.trim()).filter(Boolean);
      q.displayAnswer = r.display || q.answers[0];
    } else if (t === 'reorder') {
      q.answer = r.answers.split(' || ').map((x) => x.trim());
      q.items = shuffle(q.answer);
    } else if (t === 'sort') {
      q.categories = r.categories.split(' | ').map((x) => x.trim());
      q.items = r.items.split(' || ').map((x) => { const p = x.lastIndexOf(' > '); return { text: x.slice(0, p).trim(), category: x.slice(p + 3).trim() }; });
    } else if (t === 'identify') {
      q.mode = (r.mode || 'words').trim();
      q.tokens = q.mode === 'sentences' ? r.tokens.split(' || ').map((x) => x.trim()) : r.tokens.split(' ').filter(Boolean);
      q.answer = r.answer.split(/[,;]/).map((x) => Number(x.trim()) - 1).filter((x) => x >= 0);
    }
    return q;
  }

  function valid(q) {
    if (q.type === 'mcq' || q.type === 'error') return q.options.length >= 2 && q.answer >= 0 && q.answer < q.options.length;
    if (q.type === 'gap') return q.answers.length > 0;
    if (q.type === 'reorder') return q.answer.length >= 2;
    if (q.type === 'sort') return q.categories.length >= 2 && q.items.length >= 2 && q.items.every((i) => q.categories.includes(i.category));
    if (q.type === 'identify') return q.tokens.length > 0 && q.answer.length > 0 && q.answer.every((i) => i < q.tokens.length);
    return false;
  }
  function rowsToQuizzes(rows) {
    window.W001_SKIPPED = [];
    const head = rows[0].map((h) => h.trim()); const out = []; const byId = {};
    rows.slice(1).forEach((cells) => {
      const r = {}; head.forEach((h, i) => { r[h] = cells[i] === undefined ? '' : cells[i]; });
      if (!r.id || !r.type) return;
      if (!byId[r.id]) { byId[r.id] = { id: r.id, unit: num(r.unit), week: Number(r.week), day: r.day, meeting: Number(r.meeting), phase: r.phase, title: r.title, reviews: r.reviews, questions: [], _n: [] }; out.push(byId[r.id]); }
      let q = null; try { q = rowToQuestion(r); } catch (e) { q = null; }
      if (q && valid(q)) byId[r.id].questions.push({ n: Number(r.q) || 0, q }); else window.W001_SKIPPED.push(r.id + ' Q' + r.q);
    });
    out.forEach((x) => { x.questions = x.questions.sort((a, b) => a.n - b.n).map((e) => e.q); delete x._n; });
    return out;
  }

  window.W001Loader = { parseCSV, rowsToQuizzes };
  window.W001_SOURCE = 'bundled';
  window.W001Load = function (cb) {
    const url = CFG.SHEET_CSV_URL;
    if (!url || typeof fetch !== 'function') { cb(); return; }
    const ctl = typeof AbortController === 'function' ? new AbortController() : null;
    const timer = setTimeout(() => ctl && ctl.abort(), CFG.TIMEOUT_MS || 15000);
    fetch(url, { cache: 'no-store', signal: ctl ? ctl.signal : undefined })
      .then((r) => { if (!r.ok) throw new Error('http'); return r.text(); })
      .then((txt) => { const qz = rowsToQuizzes(parseCSV(txt)); if (!qz.length) throw new Error('empty'); window.W001_QUIZZES.quizzes = qz; window.W001_SOURCE = 'spreadsheet'; })
      .catch(() => { window.W001_SOURCE = 'bundled'; })
      .then(() => { clearTimeout(timer); cb(); });
  };
})();
