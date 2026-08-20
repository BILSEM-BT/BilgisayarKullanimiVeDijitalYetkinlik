(function(){
  const key = "bilsem-dijital-yetkinlik-progress-v3";
  const legacyKey = "bilsem-dijital-yetkinlik-progress-v2";
  let state;
  try{ state = JSON.parse(localStorage.getItem(key) || "null"); }catch(err){ state=null; }
  if(!state || !Array.isArray(state.completedCodes)){
    state = {completedCodes:[], quizScores:{}};
    try{
      const old = JSON.parse(localStorage.getItem(legacyKey) || '{"completed":[],"quizScores":{}}');
      const map = {1:"1-2",2:"1-3",3:"1-4",4:"1-5",5:"1-6",6:"1-7"};
      if(Array.isArray(old.completed)) old.completed.forEach(id => { if(map[id] && !state.completedCodes.includes(map[id])) state.completedCodes.push(map[id]); });
      if(old.quizScores && typeof old.quizScores === "object") state.quizScores = old.quizScores;
      localStorage.setItem(key, JSON.stringify(state));
    }catch(err){}
  }
  if(!state.quizScores || typeof state.quizScores !== "object") state.quizScores={};

  function saveProgress(){ try{ localStorage.setItem(key,JSON.stringify(state)); }catch(err){} }
  function isCompleted(code){ return state.completedCodes.includes(String(code)); }

  function applyModuleCompletionStyles(){
    document.querySelectorAll(".module-card[data-module-code]").forEach(card => {
      const code=card.dataset.moduleCode; const done=isCompleted(code);
      card.classList.toggle("is-completed",done);
      const link=card.querySelector(".card-link:not(.disabled)");
      if(link){
        link.classList.toggle("is-completed",done);
        link.textContent=done?"Tamamlandı — Derse Gir":"Derse Gir";
        link.setAttribute("aria-label",done?`${card.dataset.moduleName || "Ders"} tamamlandı; derse gir`:`${card.dataset.moduleName || "Ders"}; derse gir`);
      }
    });
  }

  document.querySelectorAll("[data-complete-code]").forEach(btn => {
    const code=String(btn.dataset.completeCode);
    function syncButton(){
      const done=isCompleted(code);
      btn.textContent=done?"Tamamlandı — İşareti Kaldır":"Dersi tamamlandı olarak işaretle";
      btn.classList.toggle("is-completed",done);
      btn.setAttribute("aria-pressed",done?"true":"false");
    }
    syncButton();
    btn.addEventListener("click",()=>{
      const idx=state.completedCodes.indexOf(code);
      if(idx>=0) state.completedCodes.splice(idx,1); else state.completedCodes.push(code);
      saveProgress(); syncButton(); applyModuleCompletionStyles(); renderProgress();
    });
  });

  const search=document.getElementById("moduleSearch");
  const filter=document.getElementById("sectionFilter");
  const cards=[...document.querySelectorAll(".module-card")];
  function applyFilter(){
    if(!cards.length)return;
    const q=(search?.value||"").toLocaleLowerCase("tr-TR"); const section=filter?.value||"all";
    cards.forEach(card=>{
      const title=(card.dataset.moduleTitle||"").toLocaleLowerCase("tr-TR");
      card.style.display=((!q||title.includes(q))&&(section==="all"||card.dataset.section===section))?"":"none";
    });
  }
  search?.addEventListener("input",applyFilter); filter?.addEventListener("change",applyFilter);

  function renderProgress(){
    const c=document.getElementById("completedCount"); if(!c)return;
    const available=new Set([...document.querySelectorAll(".module-card[data-module-code]")].map(x=>x.dataset.moduleCode));
    c.textContent=String(state.completedCodes.filter(code=>available.has(code)).length);
  }
  renderProgress(); applyModuleCompletionStyles();

  function tocSlug(text){ return (text||"").toString().trim().toLocaleLowerCase("tr-TR").replace(/ğ/g,"g").replace(/ü/g,"u").replace(/ş/g,"s").replace(/ı/g,"i").replace(/ö/g,"o").replace(/ç/g,"c").replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-"); }
  function buildLessonToc(){
    const tocContainer=document.querySelector("[data-lesson-toc]"); const lessonContent=document.querySelector("[data-lesson-content]"); const toc=document.querySelector(".lesson-toc"); const toggle=document.querySelector("[data-toc-toggle]");
    if(!tocContainer||!lessonContent||!toc)return;
    const headings=[...lessonContent.querySelectorAll("h2")]; if(!headings.length){toc.remove();return;}
    const usedIds=new Set();
    headings.forEach((heading,index)=>{ let base=heading.id||tocSlug(heading.textContent)||`baslik-${index+1}`; let id=base,n=2; while(usedIds.has(id))id=`${base}-${n++}`; usedIds.add(id); heading.id=id; });
    const list=document.createElement("ol"); list.className="lesson-toc-items";
    const links=headings.map(heading=>{ const li=document.createElement("li"),link=document.createElement("a"); link.href=`#${heading.id}`; link.textContent=heading.textContent.trim(); link.dataset.tocTarget=heading.id; li.appendChild(link); list.appendChild(li); return link; });
    tocContainer.innerHTML=""; tocContainer.appendChild(list);
    function setActive(id){ links.forEach(link=>link.classList.toggle("is-active",link.dataset.tocTarget===id)); const active=links.find(link=>link.dataset.tocTarget===id); if(active)active.scrollIntoView({block:"nearest"}); }
    list.addEventListener("click",event=>{ const link=event.target.closest("a[data-toc-target]"); if(!link)return; const target=document.getElementById(link.dataset.tocTarget); if(!target)return; event.preventDefault(); setActive(target.id); target.scrollIntoView({behavior:"smooth",block:"start"}); history.replaceState(null,"",`#${target.id}`); });
    if("IntersectionObserver" in window){ const observer=new IntersectionObserver(entries=>{ const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top); if(visible.length)setActive(visible[0].target.id); },{rootMargin:"-105px 0px -70% 0px",threshold:[0,0.01,1]}); headings.forEach(h=>observer.observe(h)); }
    else setActive(headings[0].id);
    toggle?.addEventListener("click",()=>{ const collapsed=toc.classList.toggle("is-collapsed"); toggle.textContent=collapsed?"Göster":"Gizle"; toggle.setAttribute("aria-expanded",collapsed?"false":"true"); });
    if(location.hash){ const initial=document.getElementById(location.hash.slice(1)); if(initial){setActive(initial.id);setTimeout(()=>initial.scrollIntoView({behavior:"auto",block:"start"}),30);} } else setActive(headings[0].id);
  }
  buildLessonToc();
})();
