document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");
  const modal = document.getElementById("project-modal");
  const modalDialog = modal?.querySelector(".modal-dialog");
  const closeModalButton = modal?.querySelector(".modal-close");
  let lastFocused = null;
  let activeCard = null;

  const closeModal = () => {
    modal.classList.remove("open");
    document.body.classList.remove("modal-open");
    activeCard = null;
    if (lastFocused) lastFocused.focus();
  };

  const fillModal = card => {
    document.getElementById("modal-title").textContent = card.dataset.title;
    document.getElementById("modal-description").textContent = card.dataset.description;
    document.getElementById("modal-goal").textContent = card.dataset.goal;
    document.getElementById("modal-result").textContent = card.dataset.result;
    document.getElementById("modal-icon").className = `fa-solid ${card.dataset.icon}`;
    document.getElementById("modal-tags").innerHTML = card.querySelector(".tags").innerHTML;
  };

  const openModal = card => {
    lastFocused = document.activeElement;
    activeCard = card;
    fillModal(card);
    modal.classList.add("open");
    document.body.classList.add("modal-open");
    closeModalButton.focus();
  };

  filterButtons.forEach(button => button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    projectCards.forEach(card => {
      const matches = filter === "all" || card.dataset.category.split(" ").includes(filter);
      card.classList.toggle("hide", !matches);
    });
  }));

  projectCards.forEach(card => {
    card.addEventListener("click", event => { if (!event.target.closest("a")) openModal(card); });
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(card);
      }
    });
  });

  closeModalButton?.addEventListener("click", closeModal);
  modal?.addEventListener("click", event => { if (event.target === modal) closeModal(); });
  modalDialog?.addEventListener("click", event => event.stopPropagation());
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal?.classList.contains("open")) closeModal();
  });

  document.addEventListener("languagechange", event => {
    window.portfolioI18n.applyProjectTranslations(event.detail.language);
    if (activeCard && modal.classList.contains("open")) fillModal(activeCard);
  });
});
