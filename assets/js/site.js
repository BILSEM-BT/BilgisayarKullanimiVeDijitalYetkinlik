(function(){
  const key = "bilsem-dijital-yetkinlik-progress-v2";
  let state;
  try{
    state = JSON.parse(localStorage.getItem(key) || '{"completed":[],"quizScores":{}}');
  }catch(err){
    state = {completed:[], quizScores:{}};
  }
  if(!Array.isArray(state.completed)) state.completed = [];
  if(!state.quizScores || typeof state.quizScores !== "object") state.quizScores = {};

  function saveProgress(){
    try{
      localStorage.setItem(key, JSON.stringify(state));
    }catch(err){
      // Yerel depolama kapalıysa sayfanın diğer işlevlerini durdurma.
    }
  }

  function isCompleted(id){
    return state.completed.includes(Number(id));
  }

  function applyModuleCompletionStyles(){
    document.querySelectorAll(".module-card[data-module-id]").forEach(card => {
      const id = Number(card.dataset.moduleId);
      const done = isCompleted(id);
      card.classList.toggle("is-completed", done);

      const link = card.querySelector(".card-link:not(.disabled)");
      if(link){
        link.classList.toggle("is-completed", done);
        link.textContent = done ? "Tamamlandı — Derse Gir" : "Derse Gir";
        link.setAttribute(
          "aria-label",
          done ? `${card.dataset.moduleTitle || "Ders"} tamamlandı; derse gir` : "Derse gir"
        );
      }
    });
  }

  document.querySelectorAll("[data-complete-lesson]").forEach(btn => {
    const id = Number(btn.dataset.completeLesson);

    const syncButton = () => {
      const done = isCompleted(id);
      btn.textContent = done ? "Tamamlandı — İşareti Kaldır" : "Dersi tamamlandı olarak işaretle";
      btn.classList.toggle("is-completed", done);
      btn.setAttribute("aria-pressed", done ? "true" : "false");
    };

    syncButton();

    btn.addEventListener("click", () => {
      const idx = state.completed.indexOf(id);
      if(idx >= 0){
        state.completed.splice(idx, 1);
      }else{
        state.completed.push(id);
      }
      saveProgress();
      syncButton();
      applyModuleCompletionStyles();
      renderProgress();
    });
  });

  const search = document.getElementById("moduleSearch");
  const filter = document.getElementById("sectionFilter");
  const cards = [...document.querySelectorAll(".module-card")];
  function applyFilter(){
    if(!cards.length) return;
    const q = (search?.value || "").toLocaleLowerCase("tr-TR");
    const section = filter?.value || "all";
    cards.forEach(card => {
      const title = (card.dataset.moduleTitle || "").toLocaleLowerCase("tr-TR");
      const okTitle = !q || title.includes(q);
      const okSection = section === "all" || card.dataset.section === section;
      card.style.display = (okTitle && okSection) ? "" : "none";
    });
  }
  search?.addEventListener("input", applyFilter);
  filter?.addEventListener("change", applyFilter);

  function renderProgress(){
    const c = document.getElementById("completedCount");
    if(c) c.textContent = state.completed.length;
  }
  renderProgress();
  applyModuleCompletionStyles();

  function tocSlug(text){
    return (text || "")
      .toString()
      .trim()
      .toLocaleLowerCase("tr-TR")
      .replace(/ğ/g,"g").replace(/ü/g,"u").replace(/ş/g,"s")
      .replace(/ı/g,"i").replace(/ö/g,"o").replace(/ç/g,"c")
      .replace(/[^a-z0-9\s-]/g,"")
      .replace(/\s+/g,"-")
      .replace(/-+/g,"-");
  }

  function buildLessonToc(){
    const tocContainer = document.querySelector("[data-lesson-toc]");
    const lessonContent = document.querySelector("[data-lesson-content]");
    const toc = document.querySelector(".lesson-toc");
    const toggle = document.querySelector("[data-toc-toggle]");
    if(!tocContainer || !lessonContent || !toc) return;

    const headings = [...lessonContent.querySelectorAll("h2")];
    if(!headings.length){
      toc.remove();
      return;
    }

    const usedIds = new Set();
    headings.forEach((heading,index) => {
      let base = heading.id || tocSlug(heading.textContent) || `baslik-${index+1}`;
      let id = base;
      let n = 2;
      while(usedIds.has(id)) id = `${base}-${n++}`;
      usedIds.add(id);
      heading.id = id;
    });

    const list = document.createElement("ol");
    list.className = "lesson-toc-items";

    const links = headings.map(heading => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = `#${heading.id}`;
      link.textContent = heading.textContent.trim();
      link.dataset.tocTarget = heading.id;
      li.appendChild(link);
      list.appendChild(li);
      return link;
    });

    tocContainer.innerHTML = "";
    tocContainer.appendChild(list);

    function setActive(id){
      links.forEach(link => link.classList.toggle("is-active", link.dataset.tocTarget === id));
      const active = links.find(link => link.dataset.tocTarget === id);
      if(active) active.scrollIntoView({block:"nearest"});
    }

    list.addEventListener("click", event => {
      const link = event.target.closest("a[data-toc-target]");
      if(!link) return;
      const target = document.getElementById(link.dataset.tocTarget);
      if(!target) return;
      event.preventDefault();
      setActive(target.id);
      target.scrollIntoView({behavior:"smooth", block:"start"});
      history.replaceState(null,"",`#${target.id}`);
    });

    if("IntersectionObserver" in window){
      const observer = new IntersectionObserver(entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a,b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if(visible.length) setActive(visible[0].target.id);
      }, {rootMargin:"-105px 0px -70% 0px", threshold:[0,0.01,1]});
      headings.forEach(heading => observer.observe(heading));
    } else {
      setActive(headings[0].id);
    }

    toggle?.addEventListener("click", () => {
      const collapsed = toc.classList.toggle("is-collapsed");
      toggle.textContent = collapsed ? "Göster" : "Gizle";
      toggle.setAttribute("aria-expanded", collapsed ? "false" : "true");
    });

    if(location.hash){
      const initial = document.getElementById(location.hash.slice(1));
      if(initial){
        setActive(initial.id);
        setTimeout(() => initial.scrollIntoView({behavior:"auto", block:"start"}), 30);
      }
    } else {
      setActive(headings[0].id);
    }
  }

  buildLessonToc();
})();
