document.addEventListener("DOMContentLoaded", () => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const typeTarget = document.getElementById("typewriter");
  if (!typeTarget) return;

  let phrases = window.portfolioI18n.translations[window.portfolioI18n.getCurrentLanguage()].hero.typewriter;
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;
  let timerId = null;

  const schedule = delay => {
    timerId = setTimeout(type, delay);
  };

  const resetTypewriter = language => {
    clearTimeout(timerId);
    phrases = window.portfolioI18n.translations[language].hero.typewriter;
    phraseIndex = 0;
    charIndex = 0;
    deleting = false;
    typeTarget.textContent = "";
    schedule(reducedMotion ? 10 : 120);
  };

  const type = () => {
    const phrase = phrases[phraseIndex];
    typeTarget.textContent = phrase.slice(0, charIndex);

    if (!deleting && charIndex < phrase.length) {
      charIndex++;
      schedule(reducedMotion ? 10 : 75);
    } else if (!deleting) {
      deleting = true;
      schedule(reducedMotion ? 10 : 1500);
    } else if (charIndex > 0) {
      charIndex--;
      schedule(reducedMotion ? 10 : 38);
    } else {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      schedule(reducedMotion ? 10 : 280);
    }
  };

  document.addEventListener("languagechange", event => resetTypewriter(event.detail.language));
  type();
});
