const translations = {
  en: {
    meta: {
      title: "Yazeed Almalki",
      description: "Portfolio of Yazeed Almalki, an IT graduate student focused on building thoughtful digital products and data-driven solutions."
    },
    aria: {
      home: "Go to home",
      primaryNav: "Primary navigation",
      displayControls: "Display controls",
      themeToggle: "Switch color mode",
      languageToggle: "Switch language",
      openNav: "Open navigation",
      closeNav: "Close navigation",
      socialLinks: "Social links",
      email: "Email",
      filterProjects: "Filter projects",
      githubProject: "GitHub project",
      liveDemo: "Live demo",
      reportDemo: "Report or demo",
      backTop: "Back to top",
      closeProject: "Close project details"
    },
    nav: {
      home: "Home",
      about: "About",
      education: "Education",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      kicker: "Hello, my name is",
      name: 'Yazeed<br><span class="accent">Almalki.</span>',
      copy: "I turn complex ideas into thoughtful digital experiences, combining strong technical foundations with curiosity, clarity, and a drive to keep learning.",
      workBtn: "Explore My Work",
      connectBtn: "Let's Connect",
      scroll: "Scroll to explore",
      typewriter: ["IT Graduate Student", "Aspiring Developer", "Building Data Skills"]
    },
    about: {
      eyebrow: "01 / About",
      title: 'Curious by nature.<br><span class="accent">Technical by choice.</span>',
      photoAlt: "Profile photo placeholder for Yazeed Almalki",
      photoLabel: "Replace photo",
      nameLabel: "Name",
      nameValue: "Yazeed Almalki",
      degreeLabel: "Degree",
      degreeValue: "M.Sc. in Information Technology (in progress)",
      universityLabel: "University",
      universityValue: "[University Name]",
      cityLabel: "Based in",
      cityValue: "[City, Saudi Arabia]",
      emailLabel: "Email",
      interestsLabel: "Interests",
      interestsValue: "[Your real research or career interests]",
      statusLabel: "Status",
      statusValue: "Available for internships & collaborations",
      bio: "I am an IT graduate student interested in the intersection of software, data, and real-world problem solving. I enjoy turning challenging questions into clean, useful systems while building the skills to contribute to ambitious teams.",
      touchBtn: "Get In Touch"
    },
    education: {
      eyebrow: "02 / Journey",
      title: 'Education & <span class="accent">Activities</span>',
      copy: "A timeline for your verified education, academic work, internships, volunteer work, or projects. Remove any card that does not apply yet.",
      mscDate: "[Start Year] - Present",
      mscTitle: "M.Sc. in Information Technology",
      mscSchool: "[University Name]",
      mscDescription: "[Write one honest sentence about your current study focus, courses, or thesis plan.]",
      bscDate: "[Start Year] - [Graduation Year]",
      bscTitle: "B.Sc. in [Your Major]",
      bscSchool: "[University Name]",
      bscDescription: "[Write one honest sentence about your undergraduate background. Add GPA only if you want to publish it.]",
      tagGraduate: "Graduate Study",
      tagIT: "Information Technology",
      tagProgress: "In Progress",
      tagUndergraduate: "Undergraduate",
      tagCoursework: "Coursework",
      tagProjects: "Projects"
    },
    skills: {
      eyebrow: "03 / Toolkit",
      title: 'Skills built through <span class="accent">practice.</span>',
      copy: "A growing set of technologies I use to explore ideas, analyze data, and build useful products.",
      core: "Core skills",
      tools: "Tools & frameworks",
      addPercent: "[Add %]",
      tool1: "[Tool or Language 1]",
      tool2: "[Tool or Language 2]",
      tool3: "[Tool or Language 3]",
      tool4: "[Tool or Language 4]"
    },
    projects: {
      eyebrow: "04 / Selected work",
      title: 'Projects with <span class="accent">purpose.</span>',
      copy: "Replace these cards with real academic, personal, or course projects. If a project is not ready, delete its card before publishing.",
      items: Array.from({ length: 6 }, () => ({
        title: "[Project Title]",
        summary: "[Two-line summary of the real project.]",
        description: "[Write a short real description of what the project does.]",
        goal: "[Write the real goal of this project.]",
        result: "[Write the real result, feature, or learning outcome.]",
        tags: ["[Tech 1]", "[Tech 2]", "[Tech 3]"]
      }))
    },
    filters: {
      all: "All",
      web: "Web Dev",
      ai: "AI / ML",
      research: "Research",
      academic: "Academic"
    },
    contact: {
      eyebrow: "05 / Contact",
      title: 'Let\'s build something <span class="accent">meaningful.</span>',
      copy: "I am open to suitable opportunities, academic conversations, and technology projects that match my current skills.",
      emailLabel: "Email",
      locationLabel: "Location",
      locationValue: "[City, Saudi Arabia]",
      responseLabel: "Response time",
      responseValue: "Usually within 48 hours"
    },
    form: {
      name: "Name *",
      email: "Email *",
      subject: "Subject",
      message: "Message *",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@example.com",
      subjectPlaceholder: "What would you like to discuss?",
      messagePlaceholder: "Tell me a little about your idea or opportunity...",
      send: "Send Message",
      sending: "Sending..."
    },
    modal: {
      goal: "Goal",
      result: "Result"
    },
    footer: {
      name: "Yazeed Almalki",
      tagline: "Learning deeply. Building thoughtfully.",
      copyright: "© 2026 Yazeed Almalki. All rights reserved."
    },
    toast: {
      missingEndpoint: "Add your Formspree endpoint to enable message delivery.",
      success: "Thanks! Your message has been sent.",
      error: "Message could not be sent. Please try email instead."
    }
  },
  ar: {
    meta: {
      title: "يزيد المالكي",
      description: "ملف تعريفي ليزيد المالكي، طالب دراسات عليا في تقنية المعلومات مهتم ببناء حلول رقمية وتحليلية مفيدة."
    },
    aria: {
      home: "الانتقال إلى الرئيسية",
      primaryNav: "التنقل الرئيسي",
      displayControls: "خيارات العرض",
      themeToggle: "تبديل وضع الألوان",
      languageToggle: "تبديل اللغة",
      openNav: "فتح القائمة",
      closeNav: "إغلاق القائمة",
      socialLinks: "روابط التواصل",
      email: "البريد الإلكتروني",
      filterProjects: "تصفية المشاريع",
      githubProject: "مشروع GitHub",
      liveDemo: "عرض مباشر",
      reportDemo: "تقرير أو عرض",
      backTop: "العودة للأعلى",
      closeProject: "إغلاق تفاصيل المشروع"
    },
    nav: {
      home: "الرئيسية",
      about: "نبذة",
      education: "التعليم",
      skills: "المهارات",
      projects: "المشاريع",
      contact: "التواصل"
    },
    hero: {
      kicker: "مرحباً، اسمي",
      name: "يزيد المالكي",
      copy: "أحوّل الأفكار المعقدة إلى تجارب رقمية واضحة، مستفيداً من أساس تقني قوي وفضول دائم للتعلم.",
      workBtn: "استعرض أعمالي",
      connectBtn: "لنتواصل",
      scroll: "مرر للاستكشاف",
      typewriter: ["طالب دراسات عليا في تقنية المعلومات", "مطوّر طموح", "أطوّر مهاراتي في البيانات"]
    },
    about: {
      eyebrow: "01 / نبذة",
      title: 'فضولي بطبيعتي.<br><span class="accent">وتقني باختياري.</span>',
      photoAlt: "صورة شخصية مؤقتة ليزيد المالكي",
      photoLabel: "استبدل الصورة",
      nameLabel: "الاسم",
      nameValue: "يزيد المالكي",
      degreeLabel: "الدرجة",
      degreeValue: "ماجستير في تقنية المعلومات (قيد الدراسة)",
      universityLabel: "الجامعة",
      universityValue: "[اسم الجامعة]",
      cityLabel: "الموقع",
      cityValue: "[المدينة، السعودية]",
      emailLabel: "البريد",
      interestsLabel: "الاهتمامات",
      interestsValue: "[اهتماماتك البحثية أو المهنية الحقيقية]",
      statusLabel: "الحالة",
      statusValue: "متاح للتدريب والتعاون",
      bio: "أنا طالب دراسات عليا في تقنية المعلومات، مهتم بالجمع بين البرمجيات والبيانات وحل المشكلات الواقعية. أستمتع بتحويل الأسئلة الصعبة إلى أنظمة واضحة ومفيدة مع تطوير مهاراتي باستمرار.",
      touchBtn: "تواصل معي"
    },
    education: {
      eyebrow: "02 / المسار",
      title: 'التعليم و<span class="accent">الأنشطة</span>',
      copy: "مسار زمني للتعليم والأعمال الأكاديمية أو التطوعية أو المشاريع المؤكدة. احذف أي بطاقة لا تنطبق عليك حالياً.",
      mscDate: "[سنة البداية] - الآن",
      mscTitle: "ماجستير في تقنية المعلومات",
      mscSchool: "[اسم الجامعة]",
      mscDescription: "[اكتب جملة صادقة عن تركيزك الدراسي الحالي أو مقرراتك أو خطة الرسالة.]",
      bscDate: "[سنة البداية] - [سنة التخرج]",
      bscTitle: "بكالوريوس في [تخصصك]",
      bscSchool: "[اسم الجامعة]",
      bscDescription: "[اكتب جملة صادقة عن خلفيتك الجامعية. أضف المعدل فقط إذا أردت نشره.]",
      tagGraduate: "دراسات عليا",
      tagIT: "تقنية المعلومات",
      tagProgress: "قيد الدراسة",
      tagUndergraduate: "مرحلة البكالوريوس",
      tagCoursework: "مقررات",
      tagProjects: "مشاريع"
    },
    skills: {
      eyebrow: "03 / الأدوات",
      title: 'مهارات مبنية عبر <span class="accent">الممارسة.</span>',
      copy: "مجموعة متنامية من التقنيات التي أستخدمها لاستكشاف الأفكار وتحليل البيانات وبناء منتجات مفيدة.",
      core: "المهارات الأساسية",
      tools: "الأدوات والأطر",
      addPercent: "[أضف النسبة]",
      tool1: "[أداة أو لغة 1]",
      tool2: "[أداة أو لغة 2]",
      tool3: "[أداة أو لغة 3]",
      tool4: "[أداة أو لغة 4]"
    },
    projects: {
      eyebrow: "04 / أعمال مختارة",
      title: 'مشاريع ذات <span class="accent">هدف.</span>',
      copy: "استبدل هذه البطاقات بمشاريع حقيقية أكاديمية أو شخصية أو دراسية. إذا لم يكن المشروع جاهزاً، احذف بطاقته قبل النشر.",
      items: Array.from({ length: 6 }, () => ({
        title: "[عنوان المشروع]",
        summary: "[ملخص قصير للمشروع الحقيقي.]",
        description: "[اكتب وصفاً حقيقياً قصيراً لما يفعله المشروع.]",
        goal: "[اكتب الهدف الحقيقي من هذا المشروع.]",
        result: "[اكتب النتيجة أو الميزة أو ما تعلمته فعلياً.]",
        tags: ["[تقنية 1]", "[تقنية 2]", "[تقنية 3]"]
      }))
    },
    filters: {
      all: "الكل",
      web: "تطوير الويب",
      ai: "الذكاء الاصطناعي",
      research: "بحث",
      academic: "أكاديمي"
    },
    contact: {
      eyebrow: "05 / التواصل",
      title: 'لنبنِ شيئاً <span class="accent">ذا معنى.</span>',
      copy: "أنا منفتح على الفرص المناسبة والنقاشات الأكاديمية والمشاريع التقنية التي تناسب مهاراتي الحالية.",
      emailLabel: "البريد",
      locationLabel: "الموقع",
      locationValue: "[المدينة، السعودية]",
      responseLabel: "وقت الرد",
      responseValue: "عادة خلال 48 ساعة"
    },
    form: {
      name: "الاسم *",
      email: "البريد الإلكتروني *",
      subject: "الموضوع",
      message: "الرسالة *",
      namePlaceholder: "اسمك",
      emailPlaceholder: "you@example.com",
      subjectPlaceholder: "ما الذي تود مناقشته؟",
      messagePlaceholder: "اكتب نبذة قصيرة عن فكرتك أو الفرصة...",
      send: "إرسال الرسالة",
      sending: "جارٍ الإرسال..."
    },
    modal: {
      goal: "الهدف",
      result: "النتيجة"
    },
    footer: {
      name: "يزيد المالكي",
      tagline: "أتعلم بعمق. وأبني بعناية.",
      copyright: "© 2026 يزيد المالكي. جميع الحقوق محفوظة."
    },
    toast: {
      missingEndpoint: "أضف رابط Formspree لتفعيل إرسال الرسائل.",
      success: "شكراً لك! تم إرسال رسالتك.",
      error: "تعذر إرسال الرسالة. يرجى استخدام البريد الإلكتروني بدلاً من ذلك."
    }
  }
};

const getTranslation = (language, key) => key.split(".").reduce((value, part) => value?.[part], translations[language]);
const getCurrentLanguage = () => document.documentElement.lang || "en";

const translatePage = language => {
  const html = document.documentElement;
  html.lang = language;
  html.dir = language === "ar" ? "rtl" : "ltr";

  document.title = translations[language].meta.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", translations[language].meta.description);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", translations[language].meta.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", translations[language].meta.description);

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const text = getTranslation(language, element.dataset.i18n);
    if (text !== undefined) element.textContent = text;
  });

  document.querySelectorAll("[data-i18n-html]").forEach(element => {
    const text = getTranslation(language, element.dataset.i18nHtml);
    if (text !== undefined) element.innerHTML = text;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    const text = getTranslation(language, element.dataset.i18nPlaceholder);
    if (text !== undefined) element.setAttribute("placeholder", text);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach(element => {
    const text = getTranslation(language, element.dataset.i18nAria);
    if (text !== undefined) element.setAttribute("aria-label", text);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach(element => {
    element.dataset.i18nAttr.split(";").forEach(pair => {
      const [attr, key] = pair.split(":").map(item => item.trim());
      const text = getTranslation(language, key);
      if (attr && text !== undefined) element.setAttribute(attr, text);
    });
  });

  document.getElementById("language-toggle").textContent = language === "ar" ? "EN" : "AR";
  document.dispatchEvent(new CustomEvent("languagechange", { detail: { language } }));
};

const applyProjectTranslations = language => {
  const items = translations[language].projects.items;
  document.querySelectorAll(".project-card").forEach(card => {
    const project = items[Number(card.dataset.projectIndex)];
    if (!project) return;
    card.dataset.title = project.title;
    card.dataset.description = project.description;
    card.dataset.goal = project.goal;
    card.dataset.result = project.result;
    card.querySelector(".project-title").textContent = project.title;
    card.querySelector(".project-summary").textContent = project.summary;
    card.querySelector(".project-tags").innerHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join("");
  });
};

const setLanguage = language => {
  localStorage.setItem("portfolioLanguage", language);
  translatePage(language);
  applyProjectTranslations(language);
};

const setTheme = theme => {
  const isLight = theme === "light";
  document.documentElement.classList.toggle("light-mode", isLight);
  document.getElementById("theme-toggle").textContent = isLight ? "☀" : "🌙";
  localStorage.setItem("portfolioTheme", theme);
};

window.portfolioI18n = {
  translations,
  getCurrentLanguage,
  getTranslation,
  setLanguage,
  applyProjectTranslations
};

document.addEventListener("DOMContentLoaded", () => {
  const storedLanguage = localStorage.getItem("portfolioLanguage");
  const initialLanguage = storedLanguage === "ar" ? "ar" : "en";
  const storedTheme = localStorage.getItem("portfolioTheme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

  setTheme(initialTheme);
  setLanguage(initialLanguage);

  const navbar = document.getElementById("navbar");
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const sections = [...document.querySelectorAll("main section[id]")];
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-links");
  const backTop = document.getElementById("back-top");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handleScroll = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
    backTop.classList.toggle("show", window.scrollY > 300);
    let current = "home";
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 180) current = section.id;
    });
    navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${current}`));
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  const closeMenu = () => {
    navMenu.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", getTranslation(getCurrentLanguage(), "aria.openNav"));
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  };

  menuToggle.addEventListener("click", () => {
    const open = navMenu.classList.toggle("open");
    document.body.classList.toggle("menu-open", open);
    menuToggle.setAttribute("aria-expanded", open);
    menuToggle.setAttribute("aria-label", getTranslation(getCurrentLanguage(), open ? "aria.closeNav" : "aria.openNav"));
    menuToggle.innerHTML = `<i class="fa-solid fa-${open ? "xmark" : "bars"}"></i>`;
  });

  navLinks.forEach(link => link.addEventListener("click", closeMenu));
  backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  document.getElementById("language-toggle").addEventListener("click", () => {
    setLanguage(getCurrentLanguage() === "ar" ? "en" : "ar");
  });

  document.getElementById("theme-toggle").addEventListener("click", () => {
    setTheme(document.documentElement.classList.contains("light-mode") ? "dark" : "light");
  });

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .13 });
  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

  const skillBars = document.getElementById("skill-bars");
  if (skillBars) {
    const skillObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        document.querySelectorAll(".skill-fill").forEach((bar, index) => {
          setTimeout(() => bar.classList.add("animate"), reducedMotion ? 0 : index * 70);
        });
        skillObserver.disconnect();
      }
    }, { threshold: .25 });
    skillObserver.observe(skillBars);
  }

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
    particles.forEach((p, i) => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.clientHeight) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(100,255,218,.7)";
      ctx.fill();
      particles.slice(i + 1).forEach(q => {
        const distance = Math.hypot(p.x - q.x, p.y - q.y);
        if (distance < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
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
    toast.textContent = message;
    toast.classList.toggle("error", error);
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 4200);
  };
  form?.addEventListener("submit", async event => {
    event.preventDefault();
    const language = getCurrentLanguage();
    if (form.action.includes("YOUR_FORM_ID")) {
      showToast(getTranslation(language, "toast.missingEndpoint"), true);
      return;
    }
    submitButton.disabled = true;
    submitButton.innerHTML = `<span>${getTranslation(language, "form.sending")}</span><i class="fa-solid fa-circle-notch fa-spin"></i>`;
    try {
      const response = await fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      showToast(getTranslation(language, "toast.success"));
    } catch (error) {
      showToast(getTranslation(language, "toast.error"), true);
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = `<span>${getTranslation(getCurrentLanguage(), "form.send")}</span><i class="fa-regular fa-paper-plane"></i>`;
    }
  });
});
