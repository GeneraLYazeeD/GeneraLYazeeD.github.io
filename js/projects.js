/* ============================================================================
   PROJECT FILTERS AND POP-UP
   ----------------------------------------------------------------------------
   Project content is managed in js/profile.js -> projects.items.
   This file only handles filtering cards and opening the details pop-up.
============================================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("project-modal");
  const modalDialog = modal?.querySelector(".modal-dialog");
  const closeModalButton = modal?.querySelector(".modal-close");
  const projectsGrid = document.getElementById("projects-grid");
  const projectFilters = document.getElementById("project-filters");

  let lastFocused = null;
  let activeProjectId = null;
  let lockedScrollY = 0;

  const lockPageScroll = () => {
    lockedScrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${lockedScrollY}px`;
    document.body.style.width = "100%";
    document.body.classList.add("modal-open");
  };

  const unlockPageScroll = () => {
    if (!document.body.classList.contains("modal-open")) return;

    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.classList.remove("modal-open");

    const html = document.documentElement;
    const previousBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, lockedScrollY);
    html.style.scrollBehavior = previousBehavior;
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove("open");
    unlockPageScroll();
    activeProjectId = null;
    if (lastFocused) lastFocused.focus({ preventScroll: true });
  };

  const fillModal = card => {
    const descriptionText = card.dataset.description || "";
    const goalText = card.dataset.goal || "";
    const resultText = card.dataset.result || "";
    const tagsHtml = card.querySelector(".project-tags")?.innerHTML || "";
    const categoryLabel = card.dataset.categoryLabel || "";
    const categoryId = card.dataset.categoryId || "";
    const language = window.portfolio?.getCurrentLanguage?.() || "en";

    document.getElementById("modal-title").textContent = card.dataset.title || "";
    document.getElementById("modal-icon").className = card.dataset.icon || "fa-solid fa-laptop-code";

    const description = document.getElementById("modal-description");
    description.textContent = descriptionText;
    description.hidden = !descriptionText;

    const goal = document.getElementById("modal-goal");
    const goalTitle = document.getElementById("modal-goal-title");
    goal.textContent = goalText;
    goal.hidden = !goalText;
    goalTitle.hidden = !goalText;

    const result = document.getElementById("modal-result");
    const resultTitle = document.getElementById("modal-result-title");
    result.textContent = resultText;
    result.hidden = !resultText;
    resultTitle.hidden = !resultText;

    const tags = document.getElementById("modal-tags");
    tags.innerHTML = tagsHtml;
    tags.hidden = !tagsHtml;

    const category = document.getElementById("modal-category");
    category.textContent = categoryLabel;
    category.hidden = !categoryLabel;
    category.className = `project-category modal-category${categoryId ? ` category-${categoryId}` : ""}`;

    const empty = document.getElementById("modal-empty");
    empty.textContent = window.portfolio?.data?.ui?.[language]?.modal?.empty || "";
    empty.hidden = Boolean(descriptionText || goalText || resultText || tagsHtml);
  };

  const openModal = card => {
    if (!modal) return;
    lastFocused = document.activeElement;
    activeProjectId = card.dataset.projectId;
    fillModal(card);
    lockPageScroll();
    modal.classList.add("open");
    closeModalButton?.focus();
  };

  projectFilters?.addEventListener("click", event => {
    const button = event.target.closest(".filter-btn");
    if (!button) return;
    window.portfolio?.filterProjects?.(button.dataset.filter);
  });

  projectsGrid?.addEventListener("click", event => {
    if (event.target.closest("a")) return;
    const card = event.target.closest(".project-card");
    if (card) openModal(card);
  });

  projectsGrid?.addEventListener("keydown", event => {
    const card = event.target.closest(".project-card");
    if (!card) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal(card);
    }
  });

  closeModalButton?.addEventListener("click", closeModal);
  modal?.addEventListener("click", event => { if (event.target === modal) closeModal(); });
  modalDialog?.addEventListener("click", event => event.stopPropagation());

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal?.classList.contains("open")) closeModal();
  });

  document.addEventListener("languagechange", () => {
    if (!activeProjectId || !modal?.classList.contains("open")) return;
    const freshCard = projectsGrid?.querySelector(`.project-card[data-project-id="${activeProjectId}"]`);
    if (freshCard) {
      fillModal(freshCard);
    } else {
      closeModal();
    }
  });
});
