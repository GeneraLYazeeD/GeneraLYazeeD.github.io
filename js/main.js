/* ============================================================================
   WEBSITE BEHAVIOUR
   ----------------------------------------------------------------------------
   Do not edit personal information in this file. All content lives in
   js/profile.js. This file reads that data and builds the page, then handles
   the theme, language switch, navigation, animations, and contact form.
============================================================================ */

(() => {
  "use strict";

  const data = window.PORTFOLIO_DATA;

  if (!data) {
    console.error("Portfolio data was not found. Make sure js/profile.js loads before js/main.js.");
    return;
  }

  const state = {
    activeFilter: "all"
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const htmlEscapes = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };

  const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, character => htmlEscapes[character]);

  const getDefaultLanguage = () => data.ui?.[data.settings.defaultLanguage]
    ? data.settings.defaultLanguage
    : "en";

  const getCurrentLanguage = () => {
    const current = document.documentElement.lang;
    return data.ui?.[current] ? current : getDefaultLanguage();
  };

  const resolveLocalized = (value, language = getCurrentLanguage()) => {
    if (value === null || value === undefined) return "";
    if (typeof value === "string" || typeof value === "number") return String(value);
    return value[language] ?? value.en ?? Object.values(value)[0] ?? "";
  };

  const resolveList = (value, language = getCurrentLanguage()) => {
    if (Array.isArray(value)) return value;
    if (!value || typeof value !== "object") return [];
    return value[language] ?? value.en ?? [];
  };

  const getFullName = (language = getCurrentLanguage()) => {
    if (data.person.fullName) return resolveLocalized(data.person.fullName, language);
    const first = resolveLocalized(data.person.firstName, language);
    const last = resolveLocalized(data.person.lastName, language);
    return `${first} ${last}`.trim();
  };

  const personValue = (field, language = getCurrentLanguage()) => {
    if (field === "email") return data.person.email;
    if (field === "fullName") return getFullName(language);
    return resolveLocalized(data.person[field], language);
  };

  const getUi = (key, language = getCurrentLanguage()) => key
    .split(".")
    .reduce((value, part) => value?.[part], data.ui?.[language] ?? data.ui?.en);

  const setText = (id, value) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value ?? "";
  };

  const setHtml = (id, value) => {
    const element = document.getElementById(id);
    if (element) element.innerHTML = value ?? "";
  };

  const applyMeta = language => {
    const html = document.documentElement;
    html.lang = language;
    html.dir = language === "ar" ? "rtl" : "ltr";

    const title = data.meta.title
      ? resolveLocalized(data.meta.title, language)
      : getFullName(language);
    const description = resolveLocalized(data.meta.description, language);
    const keywords = resolveLocalized(data.meta.keywords, language);

    document.title = title;

    const setMeta = (selector, content) => {
      const element = $(selector);
      if (element) element.setAttribute("content", content ?? "");
    };

    setMeta('meta[name="description"]', description);
    setMeta('meta[name="keywords"]', keywords);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:image"]', data.meta.ogImage);
    setMeta('meta[name="theme-color"]', data.meta.themeColor);

    const initials = data.person.initials || "";
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#0A192F"/><text x="32" y="41" text-anchor="middle" font-size="27" font-family="Arial" font-weight="700" fill="#64FFDA">${escapeHtml(initials)}</text></svg>`;
    const favicon = $('link[rel="icon"]');
    if (favicon) favicon.setAttribute("href", `data:image/svg+xml,${encodeURIComponent(svg)}`);
  };

  const applyUiTranslations = language => {
    $$("[data-i18n]").forEach(element => {
      const text = getUi(element.dataset.i18n, language);
      if (text !== undefined) element.textContent = text;
    });

    $$("[data-i18n-html]").forEach(element => {
      const text = getUi(element.dataset.i18nHtml, language);
      if (text !== undefined) element.innerHTML = text;
    });

    $$("[data-i18n-placeholder]").forEach(element => {
      const text = getUi(element.dataset.i18nPlaceholder, language);
      if (text !== undefined) element.setAttribute("placeholder", text);
    });

    $$("[data-i18n-aria]").forEach(element => {
      const text = getUi(element.dataset.i18nAria, language);
      if (text !== undefined) element.setAttribute("aria-label", text);
    });

    $$("[data-i18n-attr]").forEach(element => {
      element.dataset.i18nAttr.split(";").forEach(pair => {
        const [attribute, key] = pair.split(":").map(item => item.trim());
        const text = getUi(key, language);
        if (attribute && text !== undefined) element.setAttribute(attribute, text);
      });
    });

    const languageToggle = document.getElementById("language-toggle");
    if (languageToggle) languageToggle.textContent = language === "ar" ? "EN" : "AR";
  };

  const renderSocials = (containerId, ids, language) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = (ids ?? data.socials.map(social => social.id)).map(id => {
      const social = data.socials.find(item => item.id === id);
      if (!social) return "";

      const label = resolveLocalized(social.label, language);
      const href = social.type === "email" || social.id === "email"
        ? `mailto:${data.person.email}`
        : social.url;

      if (!href) return "";

      const external = href.startsWith("http")
        ? ' target="_blank" rel="noopener"'
        : "";

      return `<a class="social-link" href="${escapeHtml(href)}"${external} aria-label="${escapeHtml(label)}"><i class="${escapeHtml(social.icon)}"></i></a>`;
    }).join("");
  };

  const renderHero = language => {
    setText("hero-kicker", resolveLocalized(data.hero.kicker, language));
    setText("hero-copy", resolveLocalized(data.hero.copy, language));

    const firstName = escapeHtml(resolveLocalized(data.person.firstName, language));
    const lastName = escapeHtml(resolveLocalized(data.person.lastName, language));
    const nameHtml = language === "en"
      ? `${firstName}<br><span class="accent">${lastName}.</span>`
      : `${firstName} ${lastName}`;
    setHtml("hero-name", nameHtml);

    setText("hero-primary-label", resolveLocalized(data.hero.primaryButton.label, language));
    setText("hero-secondary-label", resolveLocalized(data.hero.secondaryButton.label, language));

    const primary = document.getElementById("hero-primary");
    const secondary = document.getElementById("hero-secondary");
    if (primary) primary.setAttribute("href", data.hero.primaryButton.href);
    if (secondary) secondary.setAttribute("href", data.hero.secondaryButton.href);

    setText("scroll-cue", resolveLocalized(data.hero.scroll, language));
    renderSocials("hero-socials", data.hero.socialIds, language);
  };

  const renderAbout = language => {
    setText("about-eyebrow", resolveLocalized(data.about.eyebrow, language));
    setHtml("about-title", resolveLocalized(data.about.titleHtml, language));

    const photo = document.getElementById("about-photo");
    if (photo) {
      if (data.about.photo.src) {
        photo.setAttribute("src", data.about.photo.src);
      } else {
        photo.removeAttribute("src");
      }
      photo.setAttribute("alt", resolveLocalized(data.about.photo.alt, language));
    }

    const photoLabel = document.getElementById("about-photo-label");
    if (photoLabel) {
      const labelText = resolveLocalized(data.about.photo.label, language);
      photoLabel.textContent = labelText;
      photoLabel.hidden = !labelText;
    }

    const details = document.getElementById("about-details");
    if (details) {
      details.innerHTML = data.about.detailRows.map(row => {
        const value = row.field ? personValue(row.field, language) : resolveLocalized(row.value, language);
        const extraClass = row.className ? ` ${escapeHtml(row.className)}` : "";
        return `<div class="info-row"><span class="info-label">${escapeHtml(resolveLocalized(row.label, language))}</span><span class="info-value${extraClass}">${escapeHtml(value)}</span></div>`;
      }).join("");
    }

    setText("about-bio", resolveLocalized(data.about.bio, language));
    setText("about-button-label", resolveLocalized(data.about.button.label, language));

    const button = document.getElementById("about-button");
    if (button) button.setAttribute("href", data.about.button.href);
  };

  const renderEducation = language => {
    setText("education-eyebrow", resolveLocalized(data.education.eyebrow, language));
    setHtml("education-title", resolveLocalized(data.education.titleHtml, language));
    setText("education-copy", resolveLocalized(data.education.copy, language));

    const timeline = document.getElementById("education-timeline");
    if (!timeline) return;

    timeline.innerHTML = data.education.items.map(item => {
      const tags = resolveList(item.tags, language)
        .map(tag => `<span class="tag">${escapeHtml(tag)}</span>`)
        .join("");

      return `<article class="timeline-item reveal">
        <span class="timeline-dot" aria-hidden="true"></span>
        <div class="timeline-card glass">
          <div class="timeline-top">
            <span class="institution-logo"><i class="${escapeHtml(item.icon || "fa-solid fa-graduation-cap")}"></i></span>
            <div><span class="timeline-date">${escapeHtml(resolveLocalized(item.date, language))}</span><h3>${escapeHtml(resolveLocalized(item.title, language))}</h3></div>
          </div>
          <p><strong>${escapeHtml(resolveLocalized(item.school, language))}</strong><br><span>${escapeHtml(resolveLocalized(item.description, language))}</span></p>
          <div class="tags">${tags}</div>
        </div>
      </article>`;
    }).join("");
  };

  const renderSkills = language => {
    setText("skills-eyebrow", resolveLocalized(data.skills.eyebrow, language));
    setHtml("skills-title", resolveLocalized(data.skills.titleHtml, language));
    setText("skills-copy", resolveLocalized(data.skills.copy, language));
    setText("skills-core-title", resolveLocalized(data.skills.coreTitle, language));
    setText("skills-tools-title", resolveLocalized(data.skills.toolsTitle, language));

    const bars = document.getElementById("skill-bars");
    if (bars) {
      bars.innerHTML = data.skills.bars.map(skill => {
        const rawPercent = skill.percent;
        const hasPercent = rawPercent !== null
          && rawPercent !== undefined
          && rawPercent !== ""
          && Number.isFinite(Number(rawPercent));
        const percent = hasPercent ? Math.min(100, Math.max(0, Number(rawPercent))) : 0;
        const percentLabel = hasPercent
          ? `${percent}%`
          : resolveLocalized(data.skills.addPercent, language);

        return `<div class="skill">
          <div class="skill-meta"><span>${escapeHtml(resolveLocalized(skill.name, language))}</span><span>${escapeHtml(percentLabel)}</span></div>
          <div class="skill-track"><div class="skill-fill" style="width:${percent}%"></div></div>
        </div>`;
      }).join("");
    }

    const tools = document.getElementById("skills-tools");
    if (tools) {
      tools.innerHTML = data.skills.tools.map(tool => `<div class="tech-badge"><i class="${escapeHtml(tool.icon)}"></i><span>${escapeHtml(resolveLocalized(tool.name, language))}</span></div>`).join("");
    }
  };

  const renderProjectFilters = language => {
    const container = document.getElementById("project-filters");
    if (!container) return;

    const filterIds = data.projects.filters.map(filter => filter.id);
    if (!filterIds.includes(state.activeFilter)) state.activeFilter = "all";

    container.innerHTML = data.projects.filters.map(filter => {
      const active = filter.id === state.activeFilter ? " active" : "";
      return `<button class="filter-btn${active}" type="button" data-filter="${escapeHtml(filter.id)}">${escapeHtml(resolveLocalized(filter.label, language))}</button>`;
    }).join("");
  };

  const renderProjects = language => {
    setText("projects-eyebrow", resolveLocalized(data.projects.eyebrow, language));
    setHtml("projects-title", resolveLocalized(data.projects.titleHtml, language));
    setText("projects-copy", resolveLocalized(data.projects.copy, language));

    renderProjectFilters(language);

    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    grid.innerHTML = data.projects.items.map((project, index) => {
      const title = resolveLocalized(project.title, language);
      const categories = (project.categories ?? []).join(" ");
      const categoryId = (project.categories ?? []).find(id => id !== "all") || "";
      const categoryFilter = data.projects.filters.find(filter => filter.id === categoryId);
      const categoryLabel = categoryFilter ? resolveLocalized(categoryFilter.label, language) : "";
      const summary = resolveLocalized(project.summary, language);
      const tags = resolveList(project.tags, language)
        .map(tag => `<span class="tag">${escapeHtml(tag)}</span>`)
        .join("");

      const github = project.links?.github;
      const demo = project.links?.demo;
      let linkMarkup = "";

      if (github) {
        linkMarkup += `<a class="project-link" href="${escapeHtml(github)}" target="_blank" rel="noopener" aria-label="${escapeHtml(getUi("aria.githubProject", language))}"><i class="fa-brands fa-github"></i></a>`;
      }

      if (demo) {
        const demoLabel = project.demoType === "report"
          ? getUi("aria.reportDemo", language)
          : getUi("aria.liveDemo", language);
        linkMarkup += `<a class="project-link" href="${escapeHtml(demo)}" target="_blank" rel="noopener" aria-label="${escapeHtml(demoLabel)}"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>`;
      }

      const visual = project.screenshot
        ? `<img class="project-thumb" src="${escapeHtml(project.screenshot)}" alt="${escapeHtml(title)}" loading="lazy">`
        : `<i class="${escapeHtml(project.icon || "fa-solid fa-laptop-code")}"></i>`;

      const matches = state.activeFilter === "all" || categories.split(" ").includes(state.activeFilter);
      const hiddenClass = matches ? "" : " hide";
      const categoryBadge = categoryLabel
        ? `<span class="project-category${categoryId ? ` category-${escapeHtml(categoryId)}` : ""}">${escapeHtml(categoryLabel)}</span>`
        : "";

      return `<article class="project-card glass reveal${hiddenClass}" tabindex="0" data-category="${escapeHtml(categories)}" data-category-id="${escapeHtml(categoryId)}" data-category-label="${escapeHtml(categoryLabel)}" data-project-id="${escapeHtml(project.id)}" data-icon="${escapeHtml(project.icon || "fa-solid fa-laptop-code")}" data-title="${escapeHtml(title)}" data-description="${escapeHtml(resolveLocalized(project.description, language))}" data-goal="${escapeHtml(resolveLocalized(project.goal, language))}" data-result="${escapeHtml(resolveLocalized(project.result, language))}">
        <div class="project-image${project.screenshot ? " has-image" : ""}"><span class="project-number">${String(index + 1).padStart(2, "0")}</span>${visual}</div>
        <div class="project-body">
          ${categoryBadge}
          <div class="project-top">
            <h3 class="project-title">${escapeHtml(title)}</h3>
            ${linkMarkup ? `<div class="project-links">${linkMarkup}</div>` : ""}
          </div>
          ${summary ? `<p class="project-summary">${escapeHtml(summary)}</p>` : ""}
          ${tags ? `<div class="tags project-tags">${tags}</div>` : ""}
        </div>
      </article>`;
    }).join("");
  };

  const renderContact = language => {
    setText("contact-eyebrow", resolveLocalized(data.contact.eyebrow, language));
    setHtml("contact-title", resolveLocalized(data.contact.titleHtml, language));
    setText("contact-copy", resolveLocalized(data.contact.copy, language));

    const details = document.getElementById("contact-details");
    if (details) {
      details.innerHTML = data.contact.details.map(item => {
        const value = item.field ? personValue(item.field, language) : resolveLocalized(item.value, language);
        const isEmail = item.kind === "email" || item.field === "email";
        const href = item.href || (isEmail ? `mailto:${data.person.email}` : "");
        const content = href
          ? `<a href="${escapeHtml(href)}">${escapeHtml(value)}</a>`
          : `<strong>${escapeHtml(value)}</strong>`;

        return `<div class="contact-item"><i class="${escapeHtml(item.icon)}"></i><div><span>${escapeHtml(resolveLocalized(item.label, language))}</span>${content}</div></div>`;
      }).join("");
    }

    const form = document.getElementById("contact-form");
    if (form) form.setAttribute("action", data.contact.formEndpoint || "");
  };

  const renderFooter = language => {
    setText("footer-name", getFullName(language));
    setText("footer-tagline", resolveLocalized(data.footer.tagline, language));
    setText("footer-copyright", resolveLocalized(data.footer.copyright, language));
    renderSocials("footer-socials", data.footer.socialIds, language);
  };

  let revealObserver;
  let skillObserver;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const initReveal = () => {
    revealObserver?.disconnect();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .13 });

    revealObserver = observer;
    $$(".reveal").forEach(element => observer.observe(element));
  };

  const initSkillAnimation = () => {
    skillObserver?.disconnect();
    const skillBars = document.getElementById("skill-bars");
    if (!skillBars) return;

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        $$(".skill-fill", skillBars).forEach((bar, index) => {
          setTimeout(() => bar.classList.add("animate"), reducedMotion ? 0 : index * 70);
        });
        observer.disconnect();
      }
    }, { threshold: .25 });

    skillObserver = observer;
    observer.observe(skillBars);
  };

  const renderAll = language => {
    applyMeta(language);
    applyUiTranslations(language);

    const initials = data.person.initials || "";
    setText("brand-logo", initials);

    renderHero(language);
    renderAbout(language);
    renderEducation(language);
    renderSkills(language);
    renderProjects(language);
    renderContact(language);
    renderFooter(language);

    initReveal();
    initSkillAnimation();
  };

  const setTheme = theme => {
    const isLight = theme === "light";
    document.documentElement.classList.toggle("light-mode", isLight);
    const toggle = document.getElementById("theme-toggle");
    if (toggle) toggle.textContent = isLight ? "☀" : "🌙";
    localStorage.setItem("portfolioTheme", theme);
  };

  const setLanguage = language => {
    if (!data.ui?.[language]) return;
    localStorage.setItem("portfolioLanguage", language);
    renderAll(language);
    document.dispatchEvent(new CustomEvent("languagechange", { detail: { language } }));
  };

  const filterProjects = filter => {
    state.activeFilter = filter;

    $$(".filter-btn").forEach(button => {
      button.classList.toggle("active", button.dataset.filter === filter);
    });

    $$(".project-card").forEach(card => {
      const matches = filter === "all" || card.dataset.category.split(" ").includes(filter);
      card.classList.toggle("hide", !matches);
    });
  };

  // Used by js/typewriter.js and js/projects.js.
  window.portfolio = {
    data,
    getCurrentLanguage,
    resolveLocalized,
    setLanguage,
    setTheme,
    filterProjects
  };

  document.addEventListener("DOMContentLoaded", () => {
    const storedLanguage = localStorage.getItem("portfolioLanguage");
    const initialLanguage = data.ui?.[storedLanguage] ? storedLanguage : getDefaultLanguage();
    const storedTheme = localStorage.getItem("portfolioTheme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    setLanguage(initialLanguage);

    const navbar = document.getElementById("navbar");
    const navLinks = $$(".nav-link");
    const sections = $$("main section[id]");
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-links");
    const backTop = document.getElementById("back-top");

    const handleScroll = () => {
      navbar?.classList.toggle("scrolled", window.scrollY > 40);
      backTop?.classList.toggle("show", window.scrollY > 300);
      let current = "home";
      sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 180) current = section.id;
      });
      navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${current}`));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const closeMenu = () => {
      navMenu?.classList.remove("open");
      document.body.classList.remove("menu-open");
      menuToggle?.setAttribute("aria-expanded", "false");
      if (menuToggle) {
        menuToggle.setAttribute("aria-label", getUi("aria.openNav"));
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      }
    };

    menuToggle?.addEventListener("click", () => {
      const open = navMenu.classList.toggle("open");
      document.body.classList.toggle("menu-open", open);
      menuToggle.setAttribute("aria-expanded", open);
      menuToggle.setAttribute("aria-label", getUi(open ? "aria.closeNav" : "aria.openNav"));
      menuToggle.innerHTML = `<i class="fa-solid fa-${open ? "xmark" : "bars"}"></i>`;
    });

    navLinks.forEach(link => link.addEventListener("click", closeMenu));
    backTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    document.getElementById("language-toggle")?.addEventListener("click", () => {
      setLanguage(getCurrentLanguage() === "ar" ? "en" : "ar");
    });

    document.getElementById("theme-toggle")?.addEventListener("click", () => {
      setTheme(document.documentElement.classList.contains("light-mode") ? "dark" : "light");
    });

    const canvas = document.getElementById("particle-canvas");
    const ctx = canvas?.getContext("2d");
    let particles = [];

    const resizeCanvas = () => {
      if (!canvas || !ctx) return;
      canvas.width = window.innerWidth * Math.min(window.devicePixelRatio, 2);
      canvas.height = canvas.clientHeight * Math.min(window.devicePixelRatio, 2);
      ctx.setTransform(Math.min(window.devicePixelRatio, 2), 0, 0, Math.min(window.devicePixelRatio, 2), 0, 0);
      const count = Math.min(70, Math.floor(window.innerWidth / 18));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * canvas.clientHeight,
        vx: (Math.random() - .5) * .22,
        vy: (Math.random() - .5) * .22,
        r: Math.random() * 1.4 + .4
      }));
    };

    const drawParticles = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, window.innerWidth, canvas.clientHeight);
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.clientHeight) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(100,255,218,.7)";
        ctx.fill();

        particles.slice(index + 1).forEach(other => {
          const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(100,255,218,${.12 * (1 - distance / 120)})`;
            ctx.stroke();
          }
        });
      });
      if (!reducedMotion) requestAnimationFrame(drawParticles);
    };

    resizeCanvas();
    drawParticles();
    window.addEventListener("resize", resizeCanvas);

    const form = document.getElementById("contact-form");
    const submitButton = form?.querySelector(".form-submit");
    const toast = document.getElementById("toast");

    const showToast = (message, error = false) => {
      if (!toast) return;
      toast.textContent = message;
      toast.classList.toggle("error", error);
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 4200);
    };

    form?.addEventListener("submit", async event => {
      event.preventDefault();
      const language = getCurrentLanguage();
      const endpoint = form.getAttribute("action") || "";

      if (!endpoint || endpoint.includes("YOUR_FORM_ID")) {
        showToast(getUi("toast.missingEndpoint", language), true);
        return;
      }

      submitButton.disabled = true;
      submitButton.innerHTML = `<span>${escapeHtml(getUi("form.sending", language))}</span><i class="fa-solid fa-circle-notch fa-spin"></i>`;

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" }
        });
        if (!response.ok) throw new Error("Submission failed");
        form.reset();
        showToast(getUi("toast.success", language));
      } catch (error) {
        showToast(getUi("toast.error", language), true);
      } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = `<span>${escapeHtml(getUi("form.send", getCurrentLanguage()))}</span><i class="fa-regular fa-paper-plane"></i>`;
      }
    });
  });
})();
