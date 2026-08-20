(function(){
  const qs = Array.isArray(window.BILSEM_QUIZ) ? window.BILSEM_QUIZ : [];
  const title = window.BILSEM_QUIZ_TITLE || "Uygulama";
  const root = document.getElementById("quizApp");
  const progressEl = document.getElementById("quizProgress");
  const correctEl = document.getElementById("quizCorrect");
  const wrongEl = document.getElementById("quizWrong");
  const finalEl = document.getElementById("quizFinal");
  const resetEl = document.getElementById("quizReset");

  if(!root || !progressEl || !correctEl || !wrongEl || !finalEl) return;

  const state = { answers:{}, correct:0, wrong:0 };

  function update(){
    const done = Object.keys(state.answers).length;
    progressEl.textContent = `${done} / ${qs.length}`;
    correctEl.textContent = String(state.correct);
    wrongEl.textContent = String(state.wrong);

    if(done === qs.length && qs.length){
      const pct = Math.round((state.correct / qs.length) * 100);
      finalEl.classList.add("completed");
      finalEl.innerHTML = `
        <strong>${title} tamamlandı.</strong><br>
        Sonuç: ${state.correct}/${qs.length} doğru (%${pct}). 
        Yanlış yanıtlanan sorularda doğru seçenekler ve açıklamalar yukarıda gösterildi.
      `;

      try{
        const key = "bilsem-dijital-yetkinlik-progress-v3";
        const global = JSON.parse(localStorage.getItem(key) || '{"completedCodes":[],"quizScores":{}}');
        if(!global.quizScores) global.quizScores = {};
        global.quizScores[title] = {
          score: state.correct,
          total: qs.length,
          percent: pct,
          date: new Date().toISOString()
        };
        localStorage.setItem(key, JSON.stringify(global));
      }catch(err){
        // Yerel depolama kapalıysa uygulamanın çalışmasını engelleme.
      }
    }
  }

  function setFeedback(card, type, html){
    const fb = card.querySelector(".feedback");
    fb.className = `feedback show ${type}`;
    fb.innerHTML = html;
  }

  function checkAnswer(q, card, list, checkButton){
    if(state.answers[q.id] !== undefined) return;

    const selected = list.querySelector(".option-button.selected");
    if(!selected){
      setFeedback(
        card,
        "info",
        "<strong>Henüz cevap seçmedin.</strong> Önce seçeneklerden birini işaretle, ardından tekrar kontrol et."
      );
      return;
    }

    const selectedIndex = Number(selected.dataset.index);
    const correctIndex = Number(q.answer);

    if(!Number.isInteger(correctIndex) || correctIndex < 0 || correctIndex >= q.options.length){
      setFeedback(
        card,
        "info",
        "<strong>Bu sorunun cevap anahtarında teknik bir sorun var.</strong> Öğretmenine bildir."
      );
      return;
    }

    const isCorrect = selectedIndex === correctIndex;
    state.answers[q.id] = {
      selected: selectedIndex,
      correct: correctIndex,
      ok: isCorrect
    };

    if(isCorrect) state.correct++;
    else state.wrong++;

    const buttons = [...list.querySelectorAll(".option-button")];
    buttons.forEach((button, idx) => {
      button.disabled = true;
      button.classList.remove("selected");
      if(idx === correctIndex) button.classList.add("correct-answer");
      if(idx === selectedIndex && !isCorrect) button.classList.add("wrong-answer");
    });
    checkButton.disabled = true;

    const selectedText = q.options[selectedIndex];
    const correctText = q.options[correctIndex];
    const explanation = q.explanation || "Bu soru için ek açıklama bulunmuyor.";

    if(isCorrect){
      setFeedback(
        card,
        "correct",
        `<strong>Doğru cevap.</strong><br>
         <span class="feedback-line"><b>Doğru seçenek:</b> ${escapeHtml(correctText)}</span>
         <span class="feedback-line"><b>Açıklama:</b> ${escapeHtml(explanation)}</span>`
      );
    }else{
      setFeedback(
        card,
        "wrong",
        `<strong>Yanlış cevap.</strong><br>
         <span class="feedback-line"><b>Senin seçimin:</b> ${escapeHtml(selectedText)}</span>
         <span class="feedback-line"><b>Doğru seçenek:</b> ${escapeHtml(correctText)}</span>
         <span class="feedback-line"><b>Açıklama:</b> ${escapeHtml(explanation)}</span>`
      );
    }

    update();
  }

  function escapeHtml(value){
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  qs.forEach((q, i) => {
    const card = document.createElement("section");
    card.className = "question-card";
    card.innerHTML = `
      <span class="question-number">Soru ${i+1} / ${qs.length}</span>
      <h3></h3>
    `;
    card.querySelector("h3").textContent = q.question;

    const list = document.createElement("div");
    list.className = "option-list";

    q.options.forEach((opt, idx) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "option-button";
      button.dataset.index = String(idx);

      const label = document.createElement("span");
      label.className = "option-label";
      label.textContent = `${String.fromCharCode(65 + idx)})`;

      const text = document.createElement("span");
      text.textContent = opt;

      button.append(label, text);

      button.addEventListener("click", () => {
        if(state.answers[q.id] !== undefined) return;
        list.querySelectorAll(".option-button").forEach(x => x.classList.remove("selected"));
        button.classList.add("selected");
        const fb = card.querySelector(".feedback");
        if(fb.classList.contains("info")){
          fb.className = "feedback";
          fb.textContent = "";
        }
      });

      list.appendChild(button);
    });

    const actions = document.createElement("div");
    actions.className = "question-actions";

    const check = document.createElement("button");
    check.type = "button";
    check.className = "primary-button";
    check.textContent = "Cevabı Kontrol Et";
    check.addEventListener("click", () => checkAnswer(q, card, list, check));

    actions.appendChild(check);

    const fb = document.createElement("div");
    fb.className = "feedback";
    fb.setAttribute("aria-live", "polite");

    card.append(list, actions, fb);
    root.appendChild(card);
  });

  resetEl?.addEventListener("click", () => {
    if(!confirm("Bu uygulamadaki bütün işaretlemeleri ve sonucu sıfırlamak istiyor musun?")) return;
    location.reload();
  });

  update();
})();
