// Teacher answer key: all questions and answers for one day, printable.
(function () {
  function start() {
    const quiz = window.W001_QUIZZES.quizzes.find((q) => q.id === new URLSearchParams(location.search).get('id'));
    const app = document.getElementById('app');
    if (!quiz) { app.innerHTML = '<div class="score-card"><h1>Quiz not found</h1></div>'; return; }
    const CAT = { V: 'Vocabulary', G: 'Grammar', K: 'Knowledge', S: 'Skill' };
    function ans(q) {
      if (q.type === 'mcq' || q.type === 'error') return q.options[q.answer];
      if (q.type === 'gap') return q.displayAnswer || q.answers[0];
      if (q.type === 'reorder') return q.answer.join(' \u2192 ');
      if (q.type === 'sort') return q.items.map((i) => i.text + ' \u2192 ' + i.category).join(' \u00b7 ');
      if (q.type === 'identify') return q.answer.map((i) => q.tokens[i]).join(' ');
      return '';
    }
    app.innerHTML = `<section class="quiz-head"><div class="eyebrow">Week ${quiz.week} \u00b7 ${quiz.day} \u00b7 Teacher key</div><h1>${quiz.title}</h1><div class="tiny">${quiz.reviews}</div><p><button class="btn secondary" onclick="window.print()">Print</button></p></section><div id="rows"></div>`;
    const rows = document.getElementById('rows');
    quiz.questions.forEach((q, i) => {
      const d = document.createElement('div'); d.className = 'answer-row';
      d.innerHTML = `<strong>${i + 1}. [${CAT[q.cat] || ''} \u00b7 ${q.type}] ${q.prompt}</strong><div></div><div class="tiny">${q.explanation || ''}</div>`;
      d.children[1].textContent = 'Answer: ' + ans(q);
      rows.appendChild(d);
    });
  }
  (window.W001Load || function (cb) { cb(); })(start);
})();
