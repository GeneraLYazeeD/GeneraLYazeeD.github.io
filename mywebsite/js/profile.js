/* ============================================================================
   PORTFOLIO CONTENT — EDIT THIS FILE TO UPDATE YOUR PERSONAL INFORMATION
   ============================================================================

   This is the ONLY file you need to edit for personal content.

   HOW TO CHANGE TEXT
   ------------------
   Most text is written as a pair:
       { en: "English text", ar: "Arabic text" }
   Change the English value, the Arabic value, or both.

   If you only want one language, you can also use a plain string:
       title: "My Project"

   HOW TO USE HTML IN A HEADING
   ----------------------------
   Section titles allow simple HTML. Keep the <span class="accent"> part if
   you want part of the title to stay highlighted:
       titleHtml: 'Education & <span class="accent">Experience</span>'

   IMPORTANT
   ---------
   - Keep the commas, quotes, brackets, and braces exactly as they are.
   - Add/remove whole objects in the lists (each { ... } block is one item).
   - Do not rename the keys (the words before the colons). The website uses
     those exact names to know where each value belongs.
   - After editing, save this file and refresh the website.
   - A complete guide with examples is in CONTENT_GUIDE.md.
============================================================================ */

window.PORTFOLIO_DATA = {
  /* ==========================================================================
     1. SITE SETTINGS
     ========================================================================== */
  settings: {
    // Used only on the first visit. A visitor's saved choice takes priority.
    defaultLanguage: "en"
  },

  /* ==========================================================================
     2. SEO / BROWSER TAB / SOCIAL PREVIEW
     ========================================================================== */
  meta: {
    // The browser-tab title is built automatically from person.firstName and
    // person.lastName. Add a localized "title" here only if you want a custom
    // browser-tab title instead.
    // Update this description if you change your name or professional focus.
    description: {
      en: "Portfolio of Yazeed Almalki, an IT graduate with a Bachelor's degree in Information Technology from Taif University, focused on building thoughtful digital products and data-driven solutions.",
      ar: "ملف تعريفي ليزيد المالكي، خريج بكالوريوس في تقنية المعلومات من جامعة الطائف، مهتم ببناء حلول رقمية وتحليلية مفيدة."
    },
    keywords: {
      en: "Yazeed Almalki, IT graduate, Bachelor of Science in Information Technology, developer, data analyst, portfolio",
      ar: "يزيد المالكي, خريج بكالوريوس تقنية المعلومات, مطور, محلل بيانات, ملف تعريفي"
    },
    ogImage: "https://placehold.co/1200x630/0A0E27/64FFDA?text=YN+Portfolio",
    themeColor: "#0A192F"
  },

  /* ==========================================================================
     3. PERSONAL DETAILS (name, email, degree, university, location, status)
     --------------------------------------------------------------------------
     These values are reused automatically in the hero, About card, contact
     section, footer, logo, and browser favicon.
     ========================================================================== */
  person: {
    firstName: {
      en: "Yazeed",
      ar: "يزيد"
    },
    lastName: {
      en: "Almalki",
      ar: "المالكي"
    },
    // The full name shown in the About card and footer is built automatically
    // from firstName + lastName. You can add an optional "fullName" pair here
    // if you ever want a different display name.
    // Shown in the top-left logo and in the browser-tab icon.
    initials: "YN",
    // Change this once and every email link on the site updates.
    email: "almalkii.yazeed@gmail.com",
    degree: {
      en: "B.Sc. in Information Technology",
      ar: "بكالوريوس في تقنية المعلومات"
    },
    university: {
      en: "Taif University",
      ar: "جامعة الطائف"
    },
    location: {
      en: "Taif, Saudi Arabia",
      ar: "الطائف، المملكة العربية السعودية"
    },
    interests: {
      en: "[Your real research or career interests]",
      ar: "[اهتماماتك البحثية أو المهنية الحقيقية]"
    },
    status: {
      en: "Available for internships & collaborations",
      ar: "متاح للتدريب والتعاون"
    }
  },

  /* ==========================================================================
     4. SOCIAL MEDIA / CONTACT LINKS
     --------------------------------------------------------------------------
     Add a new link by copying one object and changing id, label, icon, url.
     Then add its id to hero.socialIds and footer.socialIds below.
     The "email" entry automatically uses person.email above.
     Font Awesome icon examples: fa-brands fa-github, fa-brands fa-linkedin-in,
     fa-brands fa-x-twitter, fa-brands fa-instagram, fa-solid fa-envelope.
     ========================================================================== */
  socials: [
    {
      id: "github",
      label: { en: "GitHub", ar: "GitHub" },
      icon: "fa-brands fa-github",
      url: "https://github.com/GeneraLYazeeD"
    },
    {
      id: "linkedin",
      label: { en: "LinkedIn", ar: "LinkedIn" },
      icon: "fa-brands fa-linkedin-in",
      url: "https://linkedin.com/"
    },
    {
      id: "email",
      label: { en: "Email", ar: "البريد الإلكتروني" },
      icon: "fa-solid fa-envelope",
      type: "email"
    },
    {
      id: "x",
      label: { en: "X", ar: "X" },
      icon: "fa-brands fa-x-twitter",
      url: "https://x.com/FA_P"
    }
  ],

  /* ==========================================================================
     5. HERO SECTION (first screen)
     --------------------------------------------------------------------------
     Your name is built from person.firstName and person.lastName, so you do
     not need to repeat it here.
     ========================================================================== */
  hero: {
    kicker: {
      en: "Hello, my name is",
      ar: "مرحباً، اسمي"
    },
    copy: {
      en: "I turn complex ideas into thoughtful digital experiences, combining strong technical foundations with curiosity, clarity, and a drive to keep learning.",
      ar: "أحوّل الأفكار المعقدة إلى تجارب رقمية واضحة، مستفيداً من أساس تقني قوي وفضول دائم للتعلم."
    },
    // The animated typewriter phrases. Add or remove lines freely.
    roles: {
      en: ["B.Sc. IT Graduate", "Aspiring Developer", "Building Data Skills"],
      ar: ["خريج بكالوريوس في تقنية المعلومات", "مطوّر طموح", "أطوّر مهاراتي في البيانات"]
    },
    primaryButton: {
      label: { en: "Explore My Work", ar: "استعرض أعمالي" },
      href: "#projects"
    },
    secondaryButton: {
      label: { en: "Let's Connect", ar: "لنتواصل" },
      href: "#contact"
    },
    socialIds: ["github", "linkedin", "email", "x"],
    scroll: {
      en: "Scroll to explore",
      ar: "مرر للاستكشاف"
    }
  },

  /* ==========================================================================
     6. ABOUT ME
     --------------------------------------------------------------------------
     Bio, profile photo, and the rows inside the "Name / Degree / University"
     card. The rows can point to a person field (field: "email") or hold their
     own custom value (value: { en: "...", ar: "..." }).
     ========================================================================== */
  about: {
    eyebrow: {
      en: "01 / About",
      ar: "01 / نبذة"
    },
    titleHtml: {
      en: 'Curious by nature.<br><span class="accent">Technical by choice.</span>',
      ar: 'فضولي بطبيعتي.<br><span class="accent">وتقني باختياري.</span>'
    },
    photo: {
      src: "assets/img/profile.jpg",
      // Screen-reader description of the photo. Update it if your name changes.
      alt: {
        en: "Profile photo placeholder for Yazeed Almalki",
        ar: "صورة شخصية مؤقتة ليزيد المالكي"
      },
      // Set this to "" to hide the small label under the photo.
      label: {
        en: "Replace photo",
        ar: "استبدل الصورة"
      }
    },
    detailRows: [
      {
        label: { en: "Name", ar: "الاسم" },
        field: "fullName"
      },
      {
        label: { en: "Degree", ar: "الدرجة" },
        field: "degree"
      },
      {
        label: { en: "University", ar: "الجامعة" },
        field: "university"
      },
      {
        label: { en: "Based in", ar: "الموقع" },
        field: "location"
      },
      {
        label: { en: "Email", ar: "البريد" },
        field: "email"
      },
      {
        label: { en: "Interests", ar: "الاهتمامات" },
        field: "interests"
      },
      {
        label: { en: "Status", ar: "الحالة" },
        field: "status",
        className: "status"
      }
    ],
    bio: {
      en: "I am an IT graduate with a Bachelor's degree in Information Technology from Taif University. I am interested in the intersection of software, data, and real-world problem solving, and I enjoy turning challenging questions into clean, useful systems while building the skills to contribute to ambitious teams.",
      ar: "أنا خريج بكالوريوس في تقنية المعلومات من جامعة الطائف. أهتم بالجمع بين البرمجيات والبيانات وحل المشكلات الواقعية، وأستمتع بتحويل الأسئلة الصعبة إلى أنظمة واضحة ومفيدة مع تطوير مهاراتي باستمرار."
    },
    button: {
      label: { en: "Get In Touch", ar: "تواصل معي" },
      href: "#contact"
    }
  },

  /* ==========================================================================
     7. EDUCATION, INTERNSHIPS, WORK EXPERIENCE & CERTIFICATES
     --------------------------------------------------------------------------
     This one timeline holds education, internships, jobs, volunteering, and
     certificates. Add a new item by copying a whole { ... } block, including
     the comma between items. Remove an item by deleting its whole block.
     ========================================================================== */
  education: {
    eyebrow: {
      en: "02 / Journey",
      ar: "02 / المسار"
    },
    titleHtml: {
      en: 'Education & <span class="accent">Activities</span>',
      ar: 'التعليم و<span class="accent">الأنشطة</span>'
    },
    copy: {
      en: "A timeline for your verified education, academic work, internships, volunteer work, or projects. Remove any card that does not apply yet.",
      ar: "مسار زمني للتعليم والأعمال الأكاديمية أو التطوعية أو المشاريع المؤكدة. احذف أي بطاقة لا تنطبق عليك حالياً."
    },
    items: [
      {
        id: "bsc",
        icon: "fa-solid fa-user-graduate",
        date: {
          en: "2020 - 2026",
          ar: "2020 - 2026"
        },
        title: {
          en: "B.Sc. in Information Technology",
          ar: "بكالوريوس في تقنية المعلومات"
        },
        school: {
          en: "Taif University",
          ar: "جامعة الطائف"
        },
        description: {
          en: "Completed a Bachelor's degree in Information Technology at Taif University.",
          ar: "أكملت درجة البكالوريوس في تقنية المعلومات في جامعة الطائف."
        },
        tags: {
          en: ["Bachelor's Degree", "Information Technology", "Completed"],
          ar: ["بكالوريوس", "تقنية المعلومات", "مكتمل"]
        }
      }

      // To add an internship, job, or certificate, copy the object above,
      // paste it here with a comma after the previous object, and change its
      // values. Full examples are in CONTENT_GUIDE.md.
    ]
  },

  /* ==========================================================================
     8. PROGRAMMING LANGUAGES & TECHNICAL SKILLS
     --------------------------------------------------------------------------
     bars  = skills with a proficiency percentage.
             percent: 85  -> shows 85% and animates the bar to 85%.
             percent: null -> shows the "[Add %]" placeholder and zero-width bar.
     tools = badges for languages, tools, and frameworks (no percentage).
     ========================================================================== */
  skills: {
    eyebrow: {
      en: "03 / Toolkit",
      ar: "03 / الأدوات"
    },
    titleHtml: {
      en: 'Skills built through <span class="accent">practice.</span>',
      ar: 'مهارات مبنية عبر <span class="accent">الممارسة.</span>'
    },
    copy: {
      en: "A growing set of technologies I use to explore ideas, analyze data, and build useful products.",
      ar: "مجموعة متنامية من التقنيات التي أستخدمها لاستكشاف الأفكار وتحليل البيانات وبناء منتجات مفيدة."
    },
    coreTitle: {
      en: "Core skills",
      ar: "المهارات الأساسية"
    },
    toolsTitle: {
      en: "Tools & frameworks",
      ar: "الأدوات والأطر"
    },
    addPercent: {
      en: "[Add %]",
      ar: "[أضف النسبة]"
    },
    bars: [
      { name: "HTML / CSS", percent: null },
      { name: "Python", percent: null },
      { name: "JavaScript", percent: null },
      { name: "Java", percent: null },
      { name: "SQL", percent: null },
      { name: "Git", percent: null },
      { name: "Linux", percent: null },
      { name: "Machine Learning", percent: null }
    ],
    tools: [
      {
        name: { en: "[Tool or Language 1]", ar: "[أداة أو لغة 1]" },
        icon: "fa-brands fa-html5"
      },
      {
        name: { en: "[Tool or Language 2]", ar: "[أداة أو لغة 2]" },
        icon: "fa-brands fa-python"
      },
      {
        name: { en: "[Tool or Language 3]", ar: "[أداة أو لغة 3]" },
        icon: "fa-solid fa-database"
      },
      {
        name: { en: "[Tool or Language 4]", ar: "[أداة أو لغة 4]" },
        icon: "fa-solid fa-code-branch"
      }
    ]
  },

  /* ==========================================================================
     9. PROJECTS
     --------------------------------------------------------------------------
     Add a project by copying a whole { ... } block and putting a comma after
     the previous one. Remove a project by deleting its whole block.

     categories: any labels from filters below. Use [] to show it only under
                 "All". Use ["web", "ai"] to show it in both filters.
     screenshot: "" for the gradient icon placeholder, or a path such as
                 "assets/img/projects/my-project.jpg".
     links: set live/github to "" to show that icon in a disabled
            "link coming soon" state. Add the real URL to activate it.
     icon: Font Awesome classes used in the card and pop-up.
     ========================================================================== */
  projects: {
    eyebrow: {
      en: "04 / Selected work",
      ar: "04 / أعمال مختارة"
    },
    titleHtml: {
      en: 'Projects with <span class="accent">purpose.</span>',
      ar: 'مشاريع ذات <span class="accent">هدف.</span>'
    },
    copy: {
      en: "A focused selection of academic and entertainment projects.",
      ar: "مجموعة مختارة من المشاريع الأكاديمية والترفيهية."
    },
    filters: [
      { id: "all", label: { en: "All", ar: "الكل" } },
      { id: "academic", label: { en: "Academic", ar: "أكاديمي" } },
      { id: "entertainment", label: { en: "Entertainment", ar: "ترفيه" } }
    ],
    items: [
      // These three projects currently show only the information available:
      // title, category, icon, and number. Add a summary, description, goal,
      // result, tags, links, or screenshot whenever that information is ready.
      {
        id: "hajj-umrah-plan-assistant",
        categories: ["academic"],
        icon: "fa-solid fa-route",
        screenshot: "",
        links: { github: "", live: "" },
        title: {
          en: "Hajj/Umrah Plan Assistant",
          ar: "مساعد تخطيط الحج والعمرة"
        },
        summary: { en: "", ar: "" },
        description: { en: "", ar: "" },
        goal: { en: "", ar: "" },
        result: { en: "", ar: "" },
        tags: { en: [], ar: [] }
      },
      {
        id: "final-whistle-2026",
        categories: ["entertainment"],
        icon: "fa-solid fa-futbol",
        screenshot: "",
        links: { github: "", live: "" },
        title: {
          en: "Final Whistle (FIFA World Cup 2026)",
          ar: "صافرة النهاية (كأس العالم FIFA 2026)"
        },
        summary: { en: "", ar: "" },
        description: { en: "", ar: "" },
        goal: { en: "", ar: "" },
        result: { en: "", ar: "" },
        tags: { en: [], ar: [] }
      },
      {
        id: "lawh",
        categories: ["entertainment"],
        icon: "fa-solid fa-tablet-screen-button",
        screenshot: "",
        links: { github: "", live: "" },
        title: {
          en: "Lawh",
          ar: "لوح"
        },
        summary: { en: "", ar: "" },
        description: { en: "", ar: "" },
        goal: { en: "", ar: "" },
        result: { en: "", ar: "" },
        tags: { en: [], ar: [] }
      }
    ]
  },

  /* ==========================================================================
     10. CONTACT SECTION
     --------------------------------------------------------------------------
     The email row automatically follows person.email.
     The location row follows person.location.
     Add another row by copying one object in details.
     formEndpoint: create a free form at https://formspree.io and paste the
     endpoint here. Until then the form shows a helpful message.
     ========================================================================== */
  contact: {
    eyebrow: {
      en: "05 / Contact",
      ar: "05 / التواصل"
    },
    titleHtml: {
      en: 'Let\'s build something <span class="accent">meaningful.</span>',
      ar: 'لنبنِ شيئاً <span class="accent">ذا معنى.</span>'
    },
    copy: {
      en: "I am open to suitable opportunities, academic conversations, and technology projects that match my current skills.",
      ar: "أنا منفتح على الفرص المناسبة والنقاشات الأكاديمية والمشاريع التقنية التي تناسب مهاراتي الحالية."
    },
    details: [
      {
        icon: "fa-solid fa-envelope",
        label: { en: "Email", ar: "البريد" },
        field: "email",
        kind: "email"
      },
      {
        icon: "fa-solid fa-location-dot",
        label: { en: "Location", ar: "الموقع" },
        field: "location"
      },
      {
        icon: "fa-solid fa-clock",
        label: { en: "Response time", ar: "وقت الرد" },
        value: {
          en: "Usually within 48 hours",
          ar: "عادة خلال 48 ساعة"
        }
      }
    ],
    formEndpoint: "https://formspree.io/f/YOUR_FORM_ID"
  },

  /* ==========================================================================
     11. FOOTER
     ========================================================================== */
  footer: {
    tagline: {
      en: "Learning deeply. Building thoughtfully.",
      ar: "أتعلم بعمق. وأبني بعناية."
    },
    // Update the year (and name, if it changes) here.
    copyright: {
      en: "© 2026 Yazeed Almalki. All rights reserved.",
      ar: "© 2026 يزيد المالكي. جميع الحقوق محفوظة."
    },
    socialIds: ["github", "linkedin", "x", "email"]
  },

  /* ==========================================================================
     12. SMALL INTERFACE LABELS (navigation, form, accessibility, pop-ups)
     --------------------------------------------------------------------------
     These are not personal details. Change them only if you rename a button,
     add a language, or want different wording in the contact form.
     ========================================================================== */
  ui: {
    en: {
      nav: {
        home: "Home",
        about: "About",
        education: "Education",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact"
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
        viewLive: "View Live Project",
        viewSource: "View Source Code",
        liveComingSoon: "Live link coming soon",
        sourceComingSoon: "Source link coming soon",
        liveUnavailable: "Live project link not available yet",
        sourceUnavailable: "Source code link not available yet",
        backTop: "Back to top",
        closeProject: "Close project details"
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
        result: "Result",
        empty: "More details coming soon."
      },
      toast: {
        missingEndpoint: "Add your Formspree endpoint to enable message delivery.",
        success: "Thanks! Your message has been sent.",
        error: "Message could not be sent. Please try email instead."
      }
    },
    ar: {
      nav: {
        home: "الرئيسية",
        about: "نبذة",
        education: "التعليم",
        skills: "المهارات",
        projects: "المشاريع",
        contact: "التواصل"
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
        viewLive: "عرض الموقع المباشر",
        viewSource: "عرض الكود المصدري",
        liveComingSoon: "رابط الموقع المباشر قريباً",
        sourceComingSoon: "رابط الكود المصدري قريباً",
        liveUnavailable: "رابط الموقع المباشر غير متوفر بعد",
        sourceUnavailable: "رابط الكود المصدري غير متوفر بعد",
        backTop: "العودة إلى الأعلى",
        closeProject: "إغلاق تفاصيل المشروع"
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
        result: "النتيجة",
        empty: "المزيد من التفاصيل قريباً."
      },
      toast: {
        missingEndpoint: "أضف رابط Formspree لتفعيل إرسال الرسائل.",
        success: "شكراً لك! تم إرسال رسالتك.",
        error: "تعذر إرسال الرسالة. يرجى استخدام البريد الإلكتروني بدلاً من ذلك."
      }
    }
  }
};
