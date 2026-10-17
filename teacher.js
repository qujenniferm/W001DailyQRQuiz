function W001Start(){
  // Button row on each card: a round QR button and two lozenges on one line.
  if(!document.getElementById('w001-btnrow-style')){const st=document.createElement('style');st.id='w001-btnrow-style';st.textContent='.teacher-panel .btnrow{display:flex;gap:8px;align-items:center}.teacher-panel .qrbtn{flex:0 0 44px;width:44px;height:44px;border-radius:50%;border:0;padding:0;background:#4E7B76;display:grid;place-items:center;cursor:pointer}.teacher-panel .qrbtn:hover{filter:brightness(1.1)}.teacher-panel .qrbtn:focus-visible,.teacher-panel .pill:focus-visible{outline:3px solid rgba(78,123,118,.4);outline-offset:2px}.teacher-panel .qrbtn svg{width:24px;height:24px;fill:#fff}.teacher-panel .pill{flex:1 1 0;min-width:0;height:44px;border-radius:999px;border:1px solid #d8d6d0;background:#fff;color:#26313A;display:flex;align-items:center;justify-content:center;font:700 14px Arial;text-decoration:none;white-space:nowrap}.teacher-panel .pill:hover{border-color:#4E7B76;background:#f8faf9}';document.head.appendChild(st);}
  const data=window.W001_QUIZZES; const srcNote=document.getElementById('sourceNote'); if(srcNote&&window.W001_SOURCE==='spreadsheet'){srcNote.style.display='block';srcNote.innerHTML='<strong>Live data.</strong> These questions were loaded from the published spreadsheet.'+((window.W001_SKIPPED||[]).length?' <strong>'+window.W001_SKIPPED.length+' rows were skipped because they are incomplete:</strong> '+window.W001_SKIPPED.slice(0,6).join(', ')+((window.W001_SKIPPED.length>6)?' ...':'')+'.':'');} const grid=document.getElementById('quizGrid');
  if(!data.quizzes.length&&srcNote){srcNote.style.display='block';srcNote.innerHTML='<strong>No questions loaded.</strong> The Hub could not read the spreadsheet. Check the link in js/config.js and that the sheet is published as CSV.';}
  const unitFilter=document.getElementById('unitFilter'); const weekFilter=document.getElementById('weekFilter'); const searchBox=document.getElementById('searchBox');
  const phaseColors=window.W001_PHASE_COLORS||{};
  const DAYS=["Sunday","Monday","Tuesday","Wednesday","Thursday"];
  const plan=(data.course&&data.course.plan)||[];
  const unitOfWeek={}; const nameOfWeek={};
  plan.forEach(p=>p.weeks.forEach(w=>{unitOfWeek[w]=p.unit;nameOfWeek[w]=p.name}));
  function unitLabel(u){return typeof u==='number'?'Unit '+u:String(u)}
  function studentUrl(id){const u=new URL('quiz.html',window.location.href);u.searchParams.set('id',id);return u.href}
  function drawQR(holder,url){holder.innerHTML=''; if(window.QRCode){new QRCode(holder,{text:url,width:140,height:140,correctLevel:QRCode.CorrectLevel.M});}else{holder.innerHTML='<div class="tiny">QR library did not load. Use the link instead.</div>';}}
  function esc(s){return String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}

  // build slot list: every planned week x day, with a quiz if one exists
  const byKey={}; data.quizzes.forEach(x=>{byKey[x.week+'|'+x.day]=x});
  const weeks=[]; plan.forEach(p=>p.weeks.forEach(w=>weeks.push(w))); data.quizzes.forEach(x=>{if(!weeks.includes(x.week))weeks.push(x.week)});
  weeks.sort((a,b)=>a-b);
  const slots=[];
  weeks.forEach(w=>DAYS.forEach((d,i)=>{const q=byKey[w+'|'+d]; slots.push({week:w,day:d,meeting:(w-2)*5+i+1,unit:(q&&q.unit)||unitOfWeek[w]||'',quiz:q||null})}));

  // filters
  unitFilter.innerHTML='<option value="all">All units</option>'+plan.map(p=>`<option value="${esc(p.unit)}">${esc(unitLabel(p.unit))} · ${esc(p.name)}</option>`).join('');
  weekFilter.innerHTML='<option value="all">All weeks</option>'+weeks.map(w=>`<option value="${w}">Week ${w}</option>`).join('');

  function render(){
    const u=unitFilter.value, w=weekFilter.value, q=searchBox.value.trim().toLowerCase(); grid.innerHTML='';
    let lastHead='';
    slots.filter(s=>(u==='all'||String(s.unit)===u)&&(w==='all'||String(s.week)===w)&&(!q||(s.quiz&&(s.quiz.title+' '+s.quiz.reviews+' '+s.day).toLowerCase().includes(q)))).forEach(s=>{
      const head=unitLabel(s.unit)+' · Week '+s.week+(nameOfWeek[s.week]?' · '+nameOfWeek[s.week]:'');
      if(head!==lastHead){const h=document.createElement('h3');h.className='week-head';h.textContent=head;h.style.gridColumn='1 / -1';grid.appendChild(h);lastHead=head}
      const x=s.quiz; const card=document.createElement('article'); card.className='quiz-card'+(x?'':' soon');
      if(!x){
        card.style.setProperty('--phase','#9AA1A8');
        card.innerHTML=`<div class="meta">Week ${s.week} · ${s.day} · Meeting ${s.meeting}</div><h2>Coming soon</h2><p>This quiz has not been written yet.</p><div class="meta">${esc(unitLabel(s.unit))}</div>`;
        grid.appendChild(card); return;
      }
      card.style.setProperty('--phase',phaseColors[x.phase]||'#4E7B76');
      card.innerHTML=`<div class="meta">Week ${x.week} · ${x.day} · Meeting ${x.meeting}</div><h2>${esc(x.title)}</h2><p>${esc(x.reviews)}</p><div class="meta">${esc(x.phase)} · ${x.questions.length} questions</div><div class="teacher-panel"><div class="btnrow"><button class="qrbtn makeqr" aria-label="Show QR code" title="Show QR code"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M3 3h7v7H3zM5 5v3h3V5zM14 3h7v7h-7zM16 5v3h3V5zM3 14h7v7H3zM5 16v3h3v-3z"/><rect x="6" y="6" width="1" height="1"/><rect x="17" y="6" width="1" height="1"/><rect x="6" y="17" width="1" height="1"/><rect x="14" y="14" width="3" height="3"/><rect x="19" y="14" width="2" height="2"/><rect x="14" y="19" width="2" height="2"/><rect x="18" y="18" width="3" height="3"/></svg></button><a class="pill preview" href="quiz.html?id=${encodeURIComponent(x.id)}" target="_blank" rel="noopener">Preview</a><a class="pill key" href="key.html?id=${encodeURIComponent(x.id)}" target="_blank" rel="noopener">Answers</a></div><div class="qrbox"><div class="qr-canvas"></div><div><strong>Student link</strong><div class="shareurl"></div><button class="btn small secondary copy">Copy link</button> <button class="btn small secondary dl">Download QR image</button></div></div></div>`;
      const box=card.querySelector('.qrbox'), qr=card.querySelector('.qr-canvas'), urlEl=card.querySelector('.shareurl');
      function make(){if(box.classList.contains('open')){box.classList.remove('open');return}const url=studentUrl(x.id);urlEl.textContent=url;drawQR(qr,url);box.classList.add('open')}
      function download(){const tmp=document.createElement('div');tmp.style.cssText='position:fixed;left:-9999px;top:0';document.body.appendChild(tmp);try{new QRCode(tmp,{text:studentUrl(x.id),width:600,height:600,correctLevel:QRCode.CorrectLevel.M});const cv=tmp.querySelector('canvas');const a=document.createElement('a');a.href=cv.toDataURL('image/png');a.download='W001_'+x.id+'_QR.png';document.body.appendChild(a);a.click();a.remove();}catch(e){alert('The QR library did not load. Use the link instead.');}tmp.remove();}
      card.querySelector('.makeqr').addEventListener('click',make);card.querySelector('.dl').addEventListener('click',download);
      card.querySelector('.copy').addEventListener('click',async e=>{try{await navigator.clipboard.writeText(urlEl.textContent);e.currentTarget.textContent='Copied';setTimeout(()=>e.currentTarget.textContent='Copy link',1200)}catch{}});
      grid.appendChild(card);
    });
  }
  unitFilter.addEventListener('change',render);weekFilter.addEventListener('change',render);searchBox.addEventListener('input',render);render();
}
(window.W001Load||function(c){c()})(W001Start);
