(function(){
  const data=window.W001_QUIZZES; const grid=document.getElementById('quizGrid');
  const weekFilter=document.getElementById('weekFilter'); const searchBox=document.getElementById('searchBox');
  const phaseColors={"UNDERSTAND":"#4E7B76","TRY":"#B58A3C","DEVELOP":"#5B6F8C","SHOW & REFLECT":"#7A6A8F"};
  function sessionCode(){return Math.random().toString(36).slice(2,8).toUpperCase()}
  function studentUrl(id,session){const u=new URL('quiz.html',window.location.href);u.searchParams.set('id',id);u.searchParams.set('s',session);return u.href}
  function drawQR(holder,url){holder.innerHTML=''; if(window.QRCode){new QRCode(holder,{text:url,width:140,height:140,correctLevel:QRCode.CorrectLevel.M});}else{holder.innerHTML='<div class="tiny">QR library did not load. Use the link instead.</div>';}}
  function render(){
    const w=weekFilter.value, q=searchBox.value.trim().toLowerCase(); grid.innerHTML='';
    data.quizzes.filter(x=>(w==='all'||String(x.week)===w)&&(!q||(x.title+' '+x.reviews+' '+x.day).toLowerCase().includes(q))).forEach(x=>{
      const card=document.createElement('article');card.className='quiz-card';card.style.setProperty('--phase',phaseColors[x.phase]||'#4E7B76');
      card.innerHTML=`<div class="meta">Week ${x.week} · ${x.day} · Meeting ${x.meeting}</div><h2>${x.title}</h2><p>${x.reviews}</p><div class="meta">${x.phase} · ${x.questions.length} questions</div><div class="teacher-panel"><button class="btn teal makeqr">New session QR</button> <a class="btn secondary preview" href="quiz.html?id=${encodeURIComponent(x.id)}" target="_blank" rel="noopener">Preview quiz</a><div class="qrbox"><div class="qr-canvas"></div><div><strong>Student link</strong><div class="shareurl"></div><button class="btn small secondary copy">Copy link</button> <button class="btn small secondary refresh">Refresh code</button></div></div></div>`;
      const box=card.querySelector('.qrbox'), qr=card.querySelector('.qr-canvas'), urlEl=card.querySelector('.shareurl');
      function make(){const url=studentUrl(x.id,sessionCode());urlEl.textContent=url;drawQR(qr,url);box.classList.add('open')}
      card.querySelector('.makeqr').addEventListener('click',make);card.querySelector('.refresh').addEventListener('click',make);
      card.querySelector('.copy').addEventListener('click',async e=>{try{await navigator.clipboard.writeText(urlEl.textContent);e.currentTarget.textContent='Copied';setTimeout(()=>e.currentTarget.textContent='Copy link',1200)}catch{}});
      grid.appendChild(card);
    });
  }
  weekFilter.addEventListener('change',render);searchBox.addEventListener('input',render);render();
})();
