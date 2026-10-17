(function(){
  const all=window.W001_QUIZZES.quizzes; const params=new URLSearchParams(location.search); const quiz=all.find(q=>q.id===params.get('id')); const app=document.getElementById('app');
  const phaseColors={"UNDERSTAND":"#4E7B76","TRY":"#B58A3C","DEVELOP":"#5B6F8C","WRITE & REFLECT":"#7A6A8F","SHOW & REFLECT":"#7A6A8F"};
  if(!quiz){app.innerHTML='<div class="score-card"><h1>Quiz not found</h1><p>Ask your teacher for today\'s QR code.</p></div>';return;}
  document.documentElement.style.setProperty('--phase',phaseColors[quiz.phase]||'#4E7B76');
  let idx=0,answers=new Array(quiz.questions.length).fill(null),checked=new Array(quiz.questions.length).fill(false),results=new Array(quiz.questions.length).fill(false);
  function norm(s){return String(s||'').trim().toLowerCase().replace(/[.?!,]+$/,'').replace(/\s+/g,' ')}
  function header(){return `<section class="quiz-head"><div class="eyebrow">Week ${quiz.week} · ${quiz.day}</div><h1>${quiz.title}</h1><div class="tiny">${quiz.reviews}</div><div class="progress"><div id="bar"></div></div><div class="progress-text" id="ptext"></div></section><div id="qmount"></div>`}
  function render(){app.innerHTML=header();renderQuestion();updateProgress()}
  function updateProgress(){document.getElementById('bar').style.width=`${((idx+1)/quiz.questions.length)*100}%`;document.getElementById('ptext').textContent=`Question ${idx+1} of ${quiz.questions.length}`}
  function renderQuestion(){
    const q=quiz.questions[idx],mount=document.getElementById('qmount'); const card=document.createElement('section');card.className='qcard';
    card.innerHTML=`<div class="qnum">Question ${idx+1}</div><div class="qprompt">${q.prompt}</div><div id="inputArea"></div><div id="feedback" class="feedback"></div><div class="navrow"><button id="prev" class="btn secondary" ${idx===0?'disabled':''}>Back</button><div><button id="check" class="btn teal">Check</button> <button id="next" class="btn" style="display:none">${idx===quiz.questions.length-1?'Finish':'Next'}</button></div></div>`;
    mount.appendChild(card); const area=card.querySelector('#inputArea');buildInput(q,area);
    card.querySelector('#prev').onclick=()=>{if(idx>0){idx--;render()}}; card.querySelector('#check').onclick=()=>check(q,card); card.querySelector('#next').onclick=()=>{if(idx===quiz.questions.length-1)finish();else{idx++;render()}};
    if(checked[idx])showCheckedState(q,card);
  }
  function buildInput(q,area){
    if(['mcq','error'].includes(q.type)){
      area.className='choices';q.options.forEach((o,i)=>{const b=document.createElement('button');b.className='choice'+(answers[idx]===i?' selected':'');b.textContent=o;b.onclick=()=>{answers[idx]=i;area.querySelectorAll('.choice').forEach(x=>x.classList.remove('selected'));b.classList.add('selected')};area.appendChild(b)});
    }else if(q.type==='gap'){
      const input=document.createElement('input');input.className='gap-input';input.placeholder='Type your answer';input.value=answers[idx]||'';input.oninput=()=>answers[idx]=input.value;area.appendChild(input);
    }else if(q.type==='reorder'){
      if(!Array.isArray(answers[idx]))answers[idx]=[...q.items].sort(()=>Math.random()-.5);
      area.className='reorder-list';const redraw=()=>{area.innerHTML='';answers[idx].forEach((text,i)=>{const row=document.createElement('div');row.className='reorder-item';row.draggable=true;row.innerHTML=`<span>${text}</span><span class="move-buttons"><button aria-label="move up">↑</button><button aria-label="move down">↓</button></span>`;row.querySelectorAll('button')[0].onclick=()=>{if(i){[answers[idx][i-1],answers[idx][i]]=[answers[idx][i],answers[idx][i-1]];redraw()}};row.querySelectorAll('button')[1].onclick=()=>{if(i<answers[idx].length-1){[answers[idx][i+1],answers[idx][i]]=[answers[idx][i],answers[idx][i+1]];redraw()}};let from=null;row.addEventListener('dragstart',()=>{from=i;row.classList.add('dragging')});row.addEventListener('dragend',()=>row.classList.remove('dragging'));row.addEventListener('dragover',e=>e.preventDefault());row.addEventListener('drop',e=>{e.preventDefault();if(from!==null&&from!==i){const [m]=answers[idx].splice(from,1);answers[idx].splice(i,0,m);redraw()}});area.appendChild(row)})};redraw();
    }else if(q.type==='sort'){
      if(!answers[idx]||typeof answers[idx]!=='object'||Array.isArray(answers[idx]))answers[idx]={};
      area.className='sort-area';const bank=document.createElement('div');bank.className='sort-items';const cats=document.createElement('div');cats.className='categories';let selected=null;
      function move(text,cat){answers[idx][text]=cat;redraw()}
      function redraw(){bank.innerHTML='<div class="tiny">Tap a card, then tap a category. Dragging also works.</div>';q.items.filter(it=>!answers[idx][it.text]).forEach(it=>{const c=document.createElement('span');c.className='sort-chip';c.textContent=it.text;c.draggable=true;c.onclick=()=>{bank.querySelectorAll('.sort-chip').forEach(x=>x.classList.remove('selected'));c.classList.add('selected');selected=it.text};c.addEventListener('dragstart',e=>e.dataTransfer.setData('text/plain',it.text));bank.appendChild(c)});cats.innerHTML='';q.categories.forEach(cat=>{const box=document.createElement('div');box.className='category-box';box.innerHTML=`<h4>${cat}</h4>`;Object.entries(answers[idx]).filter(([t,c])=>c===cat).forEach(([t])=>{const chip=document.createElement('span');chip.className='sort-chip';chip.textContent=t;chip.onclick=()=>{delete answers[idx][t];redraw()};box.appendChild(chip)});box.onclick=e=>{if(e.target===box||e.target.tagName==='H4'){if(selected){move(selected,cat);selected=null}}};box.addEventListener('dragover',e=>{e.preventDefault();box.classList.add('over')});box.addEventListener('dragleave',()=>box.classList.remove('over'));box.addEventListener('drop',e=>{e.preventDefault();box.classList.remove('over');move(e.dataTransfer.getData('text/plain'),cat)});cats.appendChild(box)});}
      area.append(bank,cats);redraw();
    }
  }
  function evaluate(q){
    if(['mcq','error'].includes(q.type))return answers[idx]===q.answer;
    if(q.type==='gap')return q.answers.some(a=>norm(a)===norm(answers[idx]));
    if(q.type==='reorder')return JSON.stringify(answers[idx])===JSON.stringify(q.answer);
    if(q.type==='sort')return q.items.every(it=>answers[idx]&&answers[idx][it.text]===it.category);
    return false;
  }
  function check(q,card){if(answers[idx]===null){return} results[idx]=evaluate(q);checked[idx]=true;showCheckedState(q,card)}
  function showCheckedState(q,card){
    const fb=card.querySelector('#feedback');const ok=results[idx];fb.className='feedback show '+(ok?'good':'bad');let ans='';if(['mcq','error'].includes(q.type))ans=q.options[q.answer];else if(q.type==='gap')ans=q.displayAnswer||q.answers[0];else if(q.type==='reorder')ans=q.answer.join(' → ');else if(q.type==='sort')ans=q.items.map(i=>`${i.text} → ${i.category}`).join(' · ');
    fb.innerHTML=`<strong>${ok?'Correct':'Not quite'}</strong><br>${q.explanation}${ok?'':`<br><span class="tiny">Answer: ${ans}</span>`}`;card.querySelector('#check').style.display='none';card.querySelector('#next').style.display='inline-block';
    if(['mcq','error'].includes(q.type)){card.querySelectorAll('.choice').forEach((b,i)=>{b.disabled=true;if(i===q.answer)b.classList.add('correct');if(answers[idx]===i&&i!==q.answer)b.classList.add('incorrect')})}
    const inp=card.querySelector('.gap-input');if(inp)inp.disabled=true;
  }
  function finish(){
    const score=results.filter(Boolean).length;const pct=Math.round(score/quiz.questions.length*100);let msg=pct>=90?'Excellent retrieval.':pct>=70?'Good start. Review the few that slipped.':pct>=50?'You remembered some of it. Use the answer review below.':'Today’s review did its job: it found what needs another look.';
    app.innerHTML=`<section class="score-card"><div class="eyebrow">Finished · ${quiz.day}</div><div class="score-big">${score}/${quiz.questions.length}</div><h2>${msg}</h2><p>Your answers are not sent anywhere. Use the review below, then you are ready for class.</p><div class="answers-review" id="review"></div></section>`;
    const r=document.getElementById('review');quiz.questions.forEach((q,i)=>{let ans='';if(['mcq','error'].includes(q.type))ans=q.options[q.answer];else if(q.type==='gap')ans=q.displayAnswer||q.answers[0];else if(q.type==='reorder')ans=q.answer.join(' → ');else ans=q.items.map(it=>`${it.text} → ${it.category}`).join(' · ');const d=document.createElement('div');d.className='answer-row';d.innerHTML=`<strong>${i+1}. ${results[i]?'✓':'✗'} ${q.prompt}</strong><div>${ans}</div><div class="tiny">${q.explanation}</div>`;r.appendChild(d)});window.scrollTo({top:0,behavior:'smooth'});
  }
  render();
})();
