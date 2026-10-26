# Content & Personal Information Guide

This website now keeps **all personal content in one file**:

```
C:\Users\gy_d\OneDrive\Desktop\mywebsite\js\profile.js
```

You should not need to edit `index.html`, `main.js`, `projects.js`, or `typewriter.js` to change your name, bio, projects, skills, education, links, or contact details.

The rest of the site reads from `profile.js` automatically and rebuilds the same layout, animations, theme switch, language switch, project filters, project pop-up, and contact form.

---

## 1. Before you edit anything

1. Make a backup copy of `js/profile.js`.
   - In File Explorer, copy `profile.js` and paste it as `profile.backup.js` in the same folder.
   - The backup is not loaded by the website, so it is safe to keep there.
2. Open `js/profile.js` in any plain-text editor (VS Code, Notepad++, or Notepad).
3. Use **Ctrl+F** to jump to the section names:
   - `1. SITE SETTINGS`
   - `2. SEO / BROWSER TAB / SOCIAL PREVIEW`
   - `3. PERSONAL DETAILS`
   - `4. SOCIAL MEDIA / CONTACT LINKS`
   - `5. HERO SECTION`
   - `6. ABOUT ME`
   - `7. EDUCATION, INTERNSHIPS, WORK EXPERIENCE & CERTIFICATES`
   - `8. PROGRAMMING LANGUAGES & TECHNICAL SKILLS`
   - `9. PROJECTS`
   - `10. CONTACT SECTION`
   - `11. FOOTER`
   - `12. SMALL INTERFACE LABELS`
4. Edit one section at a time, then save and refresh the site.

### The two text formats used in the file

Most text is written in English/Arabic pairs:

```js
title: {
  en: "My Project",
  ar: "مشروعي"
}
```

Change the `en` value, the `ar` value, or both. If a value is missing in Arabic, the English value is used as a fallback.

You can also use a plain string when the same text works in both languages:

```js
name: "Python"
```

### Important syntax rules

- Keep the keys (the words before the colons) exactly as they are.
- Keep the commas between items, and the opening/closing `{ }` braces.
- Use straight quotes `"` or `'`, not curly quotes `“ ”` or `‘ ’`.
- When adding an item, put a comma after the previous item's closing `}`.
- Do **not** leave a comma after the last item in a list.
- Section headings ending in `Html` (for example `titleHtml`) allow simple HTML. Keep the `<span class="accent">` part if you want the highlighted color.

If the site suddenly becomes mostly empty, there is almost always a missing comma, quote, or brace in `js/profile.js`. Restore your backup and compare the changed section.

---

## 2. File map

| File | What it is for | Should you edit it for personal content? |
|---|---|---|
| `C:\Users\gy_d\OneDrive\Desktop\mywebsite\js\profile.js` | **Single source of truth for all content** | **Yes** |
| `C:\Users\gy_d\OneDrive\Desktop\mywebsite\index.html` | Page structure only (section containers) | No, unless you are changing the layout or adding a new section |
| `C:\Users\gy_d\OneDrive\Desktop\mywebsite\js\main.js` | Builds the page from `profile.js`, theme, language, navigation, animations, form | No |
| `C:\Users\gy_d\OneDrive\Desktop\mywebsite\js\projects.js` | Project filtering and project pop-up behaviour | No |
| `C:\Users\gy_d\OneDrive\Desktop\mywebsite\js\typewriter.js` | Hero typewriter animation | No; phrases are in `profile.js` |
| `C:\Users\gy_d\OneDrive\Desktop\mywebsite\css\style.css` | Colors, spacing, layout, light/dark theme | Only for design changes |
| `C:\Users\gy_d\OneDrive\Desktop\mywebsite\css\animations.css` | Animation styles | Only for animation changes |
| `C:\Users\gy_d\OneDrive\Desktop\mywebsite\assets\img\profile.jpg` | Profile photo | Replace the file, or update the path in `profile.js` |
| `C:\Users\gy_d\OneDrive\Desktop\mywebsite\assets\img\projects\` | Folder for project screenshots | Add screenshots here |
| `C:\Users\gy_d\OneDrive\Desktop\mywebsite\assets\cv.pdf` | Existing CV file (not currently linked on the page) | Use only if you decide to add a CV button |

---

## 3. Exact location for each requested item

Everything below is inside `C:\Users\gy_d\OneDrive\Desktop\mywebsite\js\profile.js`, in the main object `window.PORTFOLIO_DATA`.

| What you want to change | Exact location inside `profile.js` |
|---|---|
| Full name / first name / last name | `person.firstName`, `person.lastName` |
| Optional custom display name | `person.fullName` (optional; otherwise built from first + last name) |
| Email address | `person.email` |
| Logo initials / browser favicon initials | `person.initials` |
| Degree | `person.degree` |
| University | `person.university` |
| City / location | `person.location` |
| Interests | `person.interests` |
| Availability status | `person.status` |
| Hero tagline, buttons, typewriter roles | `hero` |
| About biography | `about.bio` |
| About heading and eyebrow | `about.titleHtml`, `about.eyebrow` |
| Profile photo and its description | `about.photo.src`, `about.photo.alt`, `about.photo.label` |
| About information card rows | `about.detailRows` |
| Education / internships / work / certificates | `education.items` |
| Education section heading and intro | `education.eyebrow`, `education.titleHtml`, `education.copy` |
| Skill names, order, and percentages | `skills.bars` |
| Tools and frameworks badges | `skills.tools` |
| Skills section heading and intro | `skills.eyebrow`, `skills.titleHtml`, `skills.copy`, `skills.coreTitle`, `skills.toolsTitle` |
| Project cards, names, summaries, technologies | `projects.items` |
| Project screenshots | `projects.items[n].screenshot` |
| Project GitHub and demo links | `projects.items[n].links.github`, `projects.items[n].links.demo` |
| Project filters | `projects.filters` |
| Project pop-up description, goal, result | `projects.items[n].description`, `projects.items[n].goal`, `projects.items[n].result` |
| Contact intro text | `contact.copy`, `contact.eyebrow`, `contact.titleHtml` |
| Contact rows (email, location, response time, phone) | `contact.details` |
| Contact form destination | `contact.formEndpoint` |
| Social media / GitHub / LinkedIn / X / email links | `socials` |
| Which social links appear in the hero | `hero.socialIds` |
| Which social links appear in the footer | `footer.socialIds` |
| Footer tagline and copyright | `footer.tagline`, `footer.copyright` |
| Browser-tab title, description, keywords, social preview image | `meta` |
| Navigation labels, form labels, pop-up labels, accessibility labels | `ui.en` and `ui.ar` |
| Default language for a first-time visitor | `settings.defaultLanguage` |
| Theme colors and other design tokens | `css/style.css` → `:root` and `html.light-mode` |

---

## 4. Personal details

**File:** `C:\Users\gy_d\OneDrive\Desktop\mywebsite\js\profile.js`  
**Object:** `window.PORTFOLIO_DATA.person`

```js
person: {
  firstName: {
    en: "Yazeed",
    ar: "يزيد"
  },
  lastName: {
    en: "Almalki",
    ar: "المالكي"
  },
  initials: "YN",
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
}
```

### How the name works

- The hero name is built from `person.firstName` and `person.lastName`.
- The About card name, footer name, and browser-tab title are built from `firstName + lastName`.
- If you want a different display name, add an optional pair:

```js
fullName: {
  en: "Yazeed A. Almalki",
  ar: "يزيد أ. المالكي"
}
```

When `person.fullName` exists, it is used in the About card, footer, and tab title.

### After changing your name, also check

These keys are intentionally editable free text and contain the current name:

- `meta.description` — the search-engine description.
- `about.photo.alt` — the screen-reader description of your photo.
- `footer.copyright` — the copyright line.

### Email

Change `person.email` once. It automatically updates:

- The email icon in the hero.
- The email icon in the footer.
- The email row in the contact section.
- The `mailto:` link in the contact section.

### Initials

Change `person.initials` to update the top-left logo and the browser-tab favicon. Keep it short (1–3 characters).

---

## 5. My Projects

**File:** `C:\Users\gy_d\OneDrive\Desktop\mywebsite\js\profile.js`  
**Object:** `window.PORTFOLIO_DATA.projects`  
**List:** `projects.items`

Each project is one `{ ... }` block in the `items` array. The order in the file is the order on the page, and the card numbers (`01`, `02`, …) are generated automatically.

### One complete project

```js
{
  id: "my-new-project",
  categories: ["academic"],
  icon: "fa-solid fa-code",
  screenshot: "assets/img/projects/my-new-project.jpg",
  links: {
    github: "https://github.com/your-username/my-new-project",
    demo: "https://my-new-project.example.com"
  },
  demoType: "live",
  title: {
    en: "My New Project",
    ar: "مشروعي الجديد"
  },
  summary: {
    en: "A short two-line summary that appears on the card.",
    ar: "ملخص قصير يظهر على البطاقة."
  },
  description: {
    en: "A fuller description that appears in the project pop-up.",
    ar: "وصف أطول يظهر في نافذة المشروع."
  },
  goal: {
    en: "What problem was this project trying to solve?",
    ar: "ما المشكلة التي حاول هذا المشروع حلها؟"
  },
  result: {
    en: "What did you build, learn, or achieve?",
    ar: "ماذا بنيت أو تعلمت أو حققت؟"
  },
  tags: {
    en: ["HTML", "CSS", "JavaScript"],
    ar: ["HTML", "CSS", "JavaScript"]
  }
}
```

### Field meanings

| Key | What it controls |
|---|---|
| `id` | A unique name for the project. Used internally. Do not reuse an id. |
| `categories` | Which filter buttons show this project. Use ids from `projects.filters`. The first category also supplies the badge on the card. |
| `icon` | Font Awesome icon shown when there is no screenshot. Include the style prefix (`fa-solid`, `fa-brands`, or `fa-regular`), for example `fa-solid fa-code`. |
| `screenshot` | Path to an image. Leave as `""` to keep the gradient/icon placeholder. |
| `links.github` | GitHub URL. Set to `""` to hide the GitHub button. |
| `links.demo` | Live demo, report, or case-study URL. Set to `""` to hide it. |
| `demoType` | `"live"` for a live demo, `"report"` for a report/case study. Changes the screen-reader label. |
| `title` | Project name on the card and in the pop-up. |
| `summary` | The two-line text on the card. Leave as `""` to hide it. |
| `description` | The main description in the pop-up. Leave as `""` to hide it. |
| `goal` | The “Goal” section in the pop-up. Leave as `""` to hide it. |
| `result` | The “Result” section in the pop-up. Leave as `""` to hide it. |
| `tags` | Technology chips on the card and in the pop-up. Use `[]` to hide them. |

If a project has no description, goal, result, or tags yet, the website hides the empty sections and shows “More details coming soon.” in the pop-up. No placeholder project details are invented.

### Add a project

1. Find `projects: { ... items: [`.
2. Copy one entire project block, from its opening `{` to its closing `}`.
3. Paste it after the last project.
4. Put a comma after the previous project's `}` and after your new project's `}` only if another item follows.
5. At minimum, change the `id`, `categories`, `title`, and `icon`. Fill in optional details when you have them.
6. Save and refresh.

Example of adding at the end:

```js
    items: [
      {
        id: "existing-project",
        // ...
      },
      {
        id: "my-new-project",
        // ...
      }
    ]
```

### Remove a project

Delete the entire project block, including its opening `{` and closing `}`. Make sure the previous item still has a comma only if another item follows. The card numbers update automatically.

### Screenshots

1. Put the image in:

```
C:\Users\gy_d\OneDrive\Desktop\mywebsite\assets\img\projects\
```

2. Set the path in the project:

```js
screenshot: "assets/img/projects/my-project.jpg"
```

3. Use forward slashes `/`, not backslashes `\`.
4. A good size is about **1200 × 750 px** (16:10), with a reasonably small file size (JPG or WebP).
5. If the image does not appear, check the file name, extension, and letter casing. Hosting servers are usually case-sensitive.
6. Set `screenshot: ""` to return to the gradient-and-icon placeholder.

### Project filters

The filter buttons come from `projects.filters`:

```js
filters: [
  { id: "all", label: { en: "All", ar: "الكل" } },
  { id: "academic", label: { en: "Academic", ar: "أكاديمي" } },
  { id: "entertainment", label: { en: "Entertainment", ar: "ترفيه" } }
]
```

To add a filter:

1. Add a filter object with a new `id`.
2. Add that same `id` to the `categories` array of every project that should appear under it.

Example:

```js
{ id: "mobile", label: { en: "Mobile", ar: "تطبيقات الجوال" } }
```

```js
categories: ["mobile"]
```

A project can appear in more than one filter:

```js
categories: ["academic", "entertainment"]
```

---

## 6. Programming Languages & Skills

**File:** `C:\Users\gy_d\OneDrive\Desktop\mywebsite\js\profile.js`  
**Object:** `window.PORTFOLIO_DATA.skills`

### Skills with percentages — `skills.bars`

```js
bars: [
  { name: "HTML / CSS", percent: 85 },
  { name: "Python", percent: 70 },
  { name: "JavaScript", percent: 60 },
  { name: "Java", percent: null },
  { name: "SQL", percent: null },
  { name: "Git", percent: null },
  { name: "Linux", percent: null },
  { name: "Machine Learning", percent: null }
]
```

- `percent` must be a number from `0` to `100`.
- `percent: 85` shows `85%` and animates the bar to 85% when the section scrolls into view.
- `percent: 0` shows `0%` with an empty bar.
- `percent: null` keeps the existing `[Add %]` placeholder with an empty bar.
- The displayed percentage and bar width update automatically.
- Add or remove a whole `{ name: ..., percent: ... }` object to add or remove a skill.
- The order in the array is the order on the page.

Example of adding a skill:

```js
{ name: "React", percent: 65 }
```

### Tools and frameworks — `skills.tools`

```js
tools: [
  {
    name: { en: "HTML5", ar: "HTML5" },
    icon: "fa-brands fa-html5"
  },
  {
    name: { en: "Python", ar: "Python" },
    icon: "fa-brands fa-python"
  }
]
```

- `name` is the badge text.
- `icon` is a Font Awesome class. Include the style prefix (`fa-solid`, `fa-brands`, or `fa-regular`). Browse free icons at <https://fontawesome.com/search?o=r&m=free>.
- Add or remove a whole object to add or remove a badge.
- The order in the array is the order on the page.

Example:

```js
{
  name: { en: "React", ar: "React" },
  icon: "fa-brands fa-react"
}
```

### Skills section text

The headings and intro are at:

- `skills.eyebrow`
- `skills.titleHtml`
- `skills.copy`
- `skills.coreTitle`
- `skills.toolsTitle`
- `skills.addPercent` (the placeholder shown when `percent` is `null`)

---

## 7. About Me

**File:** `C:\Users\gy_d\OneDrive\Desktop\mywebsite\js\profile.js`  
**Object:** `window.PORTFOLIO_DATA.about`  
**Related object:** `window.PORTFOLIO_DATA.person`

### Introduction and biography

Edit `about.bio`:

```js
bio: {
  en: "I am an IT graduate with a Bachelor's degree in Information Technology from Taif University...",
  ar: "أنا خريج بكالوريوس في تقنية المعلومات من جامعة الطائف..."
}
```

Career goals can also live in the bio, or in a custom row in the information card:

```js
{
  label: { en: "Career goal", ar: "الهدف المهني" },
  value: {
    en: "Become a data engineer building reliable, useful systems.",
    ar: "أن أصبح مهندس بيانات أبني أنظمة موثوقة ومفيدة."
  }
}
```

### About heading

```js
eyebrow: { en: "01 / About", ar: "01 / نبذة" },
titleHtml: {
  en: 'Curious by nature.<br><span class="accent">Technical by choice.</span>',
  ar: 'فضولي بطبيعتي.<br><span class="accent">وتقني باختياري.</span>'
}
```

Keep `<br>` for the line break and `<span class="accent">` for the highlighted text.

### Profile photo

```js
photo: {
  src: "assets/img/profile.jpg",
  alt: {
    en: "Profile photo placeholder for Yazeed Almalki",
    ar: "صورة شخصية مؤقتة ليزيد المالكي"
  },
  label: {
    en: "Replace photo",
    ar: "استبدل الصورة"
  }
}
```

- Replace `assets/img/profile.jpg` with your own image, or change `src` to another path.
- Use forward slashes.
- Update `alt` so screen readers describe the photo accurately.
- Set `label` to `""` if you do not want the small overlay label.

### Information card — `about.detailRows`

The rows are listed in order:

```js
detailRows: [
  { label: { en: "Name", ar: "الاسم" }, field: "fullName" },
  { label: { en: "Degree", ar: "الدرجة" }, field: "degree" },
  { label: { en: "University", ar: "الجامعة" }, field: "university" },
  { label: { en: "Based in", ar: "الموقع" }, field: "location" },
  { label: { en: "Email", ar: "البريد" }, field: "email" },
  { label: { en: "Interests", ar: "الاهتمامات" }, field: "interests" },
  { label: { en: "Status", ar: "الحالة" }, field: "status", className: "status" }
]
```

There are two ways to fill a row:

**1. Use a value from `person`:**

```js
{ label: { en: "Degree", ar: "الدرجة" }, field: "degree" }
```

Available fields include `fullName`, `degree`, `university`, `location`, `email`, `interests`, and `status`.

**2. Use your own value:**

```js
{
  label: { en: "Languages", ar: "اللغات" },
  value: { en: "Arabic, English", ar: "العربية، الإنجليزية" }
}
```

To remove a row, delete its whole `{ ... }` block. The special `className: "status"` adds the green animated dot; remove that property if you do not want the dot.

---

## 8. Experience & Education

**File:** `C:\Users\gy_d\OneDrive\Desktop\mywebsite\js\profile.js`  
**Object:** `window.PORTFOLIO_DATA.education`  
**List:** `education.items`

This single timeline is designed for:

- University degrees
- Internships
- Work experience
- Volunteer work
- Academic projects
- Certificates

The cards alternate left/right automatically, and the same layout is used on mobile.

### Item fields

```js
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
```

| Key | Meaning |
|---|---|
| `id` | Internal unique name for the entry. |
| `icon` | Font Awesome icon class. |
| `date` | Date range shown above the title. |
| `title` | Degree, job title, or certificate name. |
| `school` | University, company, or certificate issuer. |
| `description` | One or two sentences about the entry. |
| `tags` | Small chips such as “Internship”, “Python”, or “2026”. |

### Add an internship or job

Copy this block and add it to `education.items`:

```js
{
  id: "internship-2026",
  icon: "fa-solid fa-briefcase",
  date: {
    en: "Jun 2026 - Aug 2026",
    ar: "يونيو 2026 - أغسطس 2026"
  },
  title: {
    en: "Software Engineering Intern",
    ar: "متدرب هندسة برمجيات"
  },
  school: {
    en: "Company Name",
    ar: "اسم الشركة"
  },
  description: {
    en: "Built and tested features for an internal web application.",
    ar: "طوّرت واختبرت ميزات لتطبيق ويب داخلي."
  },
  tags: {
    en: ["Internship", "JavaScript", "Teamwork"],
    ar: ["تدريب", "JavaScript", "عمل جماعي"]
  }
}
```

### Add a certificate

```js
{
  id: "certificate-2026",
  icon: "fa-solid fa-certificate",
  date: {
    en: "2026",
    ar: "2026"
  },
  title: {
    en: "Certificate Name",
    ar: "اسم الشهادة"
  },
  school: {
    en: "Issuing Organization",
    ar: "الجهة المانحة"
  },
  description: {
    en: "One sentence about what the certificate covered.",
    ar: "جملة عن محتوى الشهادة."
  },
  tags: {
    en: ["Certificate"],
    ar: ["شهادة"]
  }
}
```

### Remove an entry

Delete the entire `{ ... }` block. Keep the commas correct for the remaining items.

### Change the section from “Education” to “Experience & Education”

Edit:

```js
education.titleHtml: {
  en: 'Education & <span class="accent">Activities</span>',
  ar: 'التعليم و<span class="accent">الأنشطة</span>'
}
```

For example:

```js
titleHtml: {
  en: 'Experience & <span class="accent">Education</span>',
  ar: 'الخبرة و<span class="accent">التعليم</span>'
}
```

The navigation label is separate. If you also want the nav to say “Experience”, change `ui.en.nav.education` and `ui.ar.nav.education` in section 12 of `profile.js`.

---

## 9. Contact Information

**File:** `C:\Users\gy_d\OneDrive\Desktop\mywebsite\js\profile.js`

### Email

Change it once in `person.email`:

```js
person: {
  email: "almalkii.yazeed@gmail.com"
}
```

This updates the contact row, the hero email icon, and the footer email icon.

### GitHub, LinkedIn, X, and other social links

**List:** `window.PORTFOLIO_DATA.socials`

```js
socials: [
  {
    id: "github",
    label: { en: "GitHub", ar: "GitHub" },
    icon: "fa-brands fa-github",
    url: "https://github.com/"
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
    url: "https://x.com/"
  }
]
```

- Replace the `url` values with your real profile URLs.
- The `email` item automatically uses `person.email`.
- The icon is a Font Awesome class.
- The order in the hero and footer is controlled by `hero.socialIds` and `footer.socialIds`.

### Add Instagram (or any other social link)

1. Add an object to `socials`:

```js
{
  id: "instagram",
  label: { en: "Instagram", ar: "Instagram" },
  icon: "fa-brands fa-instagram",
  url: "https://instagram.com/your-username"
}
```

2. Add `"instagram"` to the hero list:

```js
hero: {
  socialIds: ["github", "linkedin", "email", "x", "instagram"]
}
```

3. Add `"instagram"` to the footer list:

```js
footer: {
  socialIds: ["github", "linkedin", "x", "email", "instagram"]
}
```

If you add it to `socials` but forget the two id lists, it will not appear. If you remove it from `socials`, it is automatically skipped even if its id is still listed.

### Contact rows

**List:** `contact.details`

```js
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
]
```

- `field` reads a value from `person`.
- `value` is a custom value written directly here.
- `kind: "email"` turns the row into a `mailto:` link.
- `href` can be added to make any custom row a link.

Example phone row:

```js
{
  icon: "fa-solid fa-phone",
  label: { en: "Phone", ar: "الهاتف" },
  value: {
    en: "+966 5X XXX XXXX",
    ar: "+966 5X XXX XXXX"
  },
  href: "tel:+9665XXXXXXXX"
}
```

### Contact form

Create a free form at <https://formspree.io>, then replace:

```js
formEndpoint: "https://formspree.io/f/YOUR_FORM_ID"
```

with your endpoint:

```js
formEndpoint: "https://formspree.io/f/abcdwxyz"
```

Until you do, the form shows a helpful message instead of sending.

### Contact section text

- `contact.eyebrow`
- `contact.titleHtml`
- `contact.copy`

---

## 10. Footer

**Object:** `window.PORTFOLIO_DATA.footer`

```js
footer: {
  tagline: {
    en: "Learning deeply. Building thoughtfully.",
    ar: "أتعلم بعمق. وأبني بعناية."
  },
  copyright: {
    en: "© 2026 Yazeed Almalki. All rights reserved.",
    ar: "© 2026 يزيد المالكي. جميع الحقوق محفوظة."
  },
  socialIds: ["github", "linkedin", "x", "email"]
}
```

- The footer name is built automatically from `person.firstName` + `person.lastName`.
- Change the tagline and copyright year here.
- Reorder or remove footer social icons in `footer.socialIds`.

---

## 11. SEO, browser tab, and social preview

**Object:** `window.PORTFOLIO_DATA.meta`

```js
meta: {
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
}
```

- The browser-tab title is built automatically from your name.
- If you want a custom tab title, add an optional `title` pair inside `meta`.
- Update `description` and `keywords` when your name or focus changes.
- `ogImage` is the image shown when the site is shared on social media. For the best result, use a full public URL to a real image.
- `themeColor` colors the browser interface on some mobile devices.

---

## 12. Other customizable sections and details

### Navigation labels

**Object:** `window.PORTFOLIO_DATA.ui.en.nav` and `ui.ar.nav`

```js
nav: {
  home: "Home",
  about: "About",
  education: "Education",
  skills: "Skills",
  projects: "Projects",
  contact: "Contact"
}
```

Change the text, but keep the keys (`home`, `about`, and so on) unchanged.

### Contact form labels and placeholders

**Object:** `ui.en.form` and `ui.ar.form`

This includes:

- Field labels
- Placeholders
- “Send Message”
- “Sending...”

Change both languages if you change one.

### Project pop-up labels

**Object:** `ui.en.modal` and `ui.ar.modal`

- `goal`
- `result`

### Accessibility labels

**Object:** `ui.en.aria` and `ui.ar.aria`

These are read by screen readers (for example “Email”, “GitHub project”, “Close project details”). Update them if you rename a section or link.

### Toast messages

**Object:** `ui.en.toast` and `ui.ar.toast`

Messages shown after the contact form is submitted.

### Default language

**Object:** `settings.defaultLanguage`

```js
settings: {
  defaultLanguage: "en"
}
```

This applies only on a visitor's first visit. If a visitor has already chosen Arabic or English, the site remembers that choice in their browser.

### Theme colors and fonts

**File:** `C:\Users\gy_d\OneDrive\Desktop\mywebsite\css\style.css`

At the top:

- `:root { ... }` contains the dark-theme colors, fonts, radius, shadows.
- `html.light-mode { ... }` contains the light-theme overrides.

Change a value such as `--accent-blue` or `--bg-primary` to change the design. Keep the property names unchanged. This is optional and separate from personal information.

### Animations

**File:** `C:\Users\gy_d\OneDrive\Desktop\mywebsite\css\animations.css`

Used for the fade-in reveal, blinking cursor, status pulse, and skill-bar animation.

### CV file

The site currently contains an accurate one-page CV with the Bachelor's degree:

```
C:\Users\gy_d\OneDrive\Desktop\mywebsite\assets\cv.pdf
```

Replace this file whenever you have a newer, fuller resume. It is not linked anywhere on the page yet. To make the existing “Let's Connect” or “Explore My Work” button point to it, change the relevant `href` in `hero`:

```js
secondaryButton: {
  label: { en: "Download CV", ar: "تحميل السيرة الذاتية" },
  href: "assets/cv.pdf"
}
```

If you want a **third** button while keeping both existing buttons, that requires a small markup change in `index.html` and the renderer in `js/main.js`. Ask a developer before doing that.

### Section order and layout

**File:** `C:\Users\gy_d\OneDrive\Desktop\mywebsite\index.html`

The page structure is in this file. Personal text should not be added here because the renderer replaces it. Reordering the `<section>` blocks changes the page order, but the navigation links and scroll behavior must still point to the same section ids (`home`, `about`, `education`, `skills`, `projects`, `contact`).

---

## 13. Step-by-step update workflow

Use this every time you want to update personal information.

### Step 1 — Open the right file

Open:

```
C:\Users\gy_d\OneDrive\Desktop\mywebsite\js\profile.js
```

Do not start in `index.html` or `main.js`.

### Step 2 — Find the section

Press **Ctrl+F** and search for one of the section comments, for example:

- `9. PROJECTS`
- `8. PROGRAMMING LANGUAGES & TECHNICAL SKILLS`
- `7. EDUCATION, INTERNSHIPS, WORK EXPERIENCE & CERTIFICATES`
- `6. ABOUT ME`
- `3. PERSONAL DETAILS`

### Step 3 — Change one item

Change only the values after the colons. For example:

```js
github: "https://github.com/your-username"
```

or:

```js
percent: 85
```

Keep the surrounding keys, commas, and braces.

### Step 4 — Save

Save the file in your editor.

### Step 5 — Preview the website

Option A — simplest:

1. Open `C:\Users\gy_d\OneDrive\Desktop\mywebsite\index.html` in your browser.
2. Press **Ctrl+F5** to hard-refresh.

Option B — recommended for testing the contact form:

```powershell
cd C:\Users\gy_d\OneDrive\Desktop\mywebsite
python -m http.server 8000
```

Then open:

```
http://localhost:8000
```

Stop the server with **Ctrl+C** when finished.

### Step 6 — Verify each area

Check these in the browser:

1. **Browser tab:** your name appears in the tab.
2. **Logo:** your initials appear in the top-left.
3. **Hero:** name, tagline, typewriter roles, buttons, and social icons.
4. **About:** photo, information card, bio, and button.
5. **Education:** all timeline cards appear in the right order.
6. **Skills:** names, percentage labels, animated bars, and tool badges.
7. **Projects:** cards, filters, screenshots, links, and the pop-up.
8. **Contact:** email, location, response time, and form.
9. **Footer:** name, tagline, social links, and copyright.
10. **Arabic:** click the `AR` button and check the Arabic text and right-to-left layout.
11. **Theme:** click the moon/sun button and check both themes.
12. **Mobile:** in your browser's developer tools, switch to a phone width and check the layout and menu.
13. **Console:** open developer tools → Console. There should be no red errors.

### Step 7 — If something breaks

1. Do not keep editing the broken file.
2. Replace `js/profile.js` with `js/profile.backup.js`.
3. Refresh and confirm the site works again.
4. Re-apply your change one item at a time, checking for:
   - A missing comma between items.
   - A missing closing `}`.
   - A missing quote.
   - Curly quotes instead of straight quotes.
   - A comma after the last item in a list.

---

## 14. Common tasks (copy-paste recipes)

### Change my name

```js
person: {
  firstName: { en: "NewFirst", ar: "الاسم الأول" },
  lastName: { en: "NewLast", ar: "اسم العائلة" },
  // ...
}
```

Then update `meta.description`, `about.photo.alt`, and `footer.copyright` if they mention your old name.

### Change my email

```js
person: {
  email: "new-email@example.com"
}
```

### Replace my profile photo

1. Put the new photo here:

```
C:\Users\gy_d\OneDrive\Desktop\mywebsite\assets\img\profile.jpg
```

2. Or change `about.photo.src` to the new path.
3. Update `about.photo.alt`.

### Add a project

Copy a project object, paste it into `projects.items`, add a comma, and fill in:

- `id`
- `categories`
- `screenshot`
- `links.github`
- `links.demo`
- `title`
- `summary`
- `description`
- `goal`
- `result`
- `tags`

### Remove a project

Delete the entire project object from `projects.items`.

### Add a skill with a percentage

```js
bars: [
  { name: "React", percent: 65 }
]
```

### Add an internship

Copy one `education.items` object and use `icon: "fa-solid fa-briefcase"`.

### Add a certificate

Copy one `education.items` object and use `icon: "fa-solid fa-certificate"`.

### Add a social link

1. Add an object to `socials`.
2. Add its `id` to `hero.socialIds`.
3. Add its `id` to `footer.socialIds`.

### Change a section heading

Edit the matching `titleHtml`:

```js
projects: {
  titleHtml: {
    en: 'My <span class="accent">Work</span>',
    ar: 'أعمالي <span class="accent">المختارة</span>'
  }
}
```

### Change the contact form destination

```js
contact: {
  formEndpoint: "https://formspree.io/f/your-form-id"
}
```

---

## 15. Quick troubleshooting

| Problem | Likely cause | Fix |
|---|---|---|
| Page is blank or most sections disappear | Syntax error in `profile.js` | Open the browser console; look for a red error. Restore `profile.backup.js` and re-check commas, quotes, and braces. |
| A new project does not appear | Missing comma, missing brace, or the object was added outside `projects.items` | Check the array structure. |
| A project does not appear under a filter | Its `categories` does not include the filter `id` | Add the id to `categories`. |
| Project screenshot does not show | Wrong path or file name | Use `assets/img/projects/file-name.jpg` with forward slashes; check case and extension. |
| Skill bar is empty | `percent` is `null`, `0`, or not a number | Set a number from 0–100. |
| Arabic text still shows English | The `ar` value is missing | Add the `ar` value; English is used as fallback. |
| Name changed in the hero but not in the About card/footer | The optional `fullName` is set to the old name | Update or remove `person.fullName`. |
| Name changed everywhere but the browser tab is still old | A custom `meta.title` was added | Update the custom title, or remove it so the name is generated automatically. |
| Social icon does not appear | Its id is not in `hero.socialIds` / `footer.socialIds`, or the object is missing from `socials` | Add both. |
| Contact form does not send | `formEndpoint` still contains `YOUR_FORM_ID` | Create a Formspree form and paste the endpoint. |
| Old content still appears | Browser cache | Press **Ctrl+F5**. The site does not cache content, only the chosen language and theme. |
| Contact form behaves differently when opening `index.html` directly | The browser may restrict form requests from `file://` | Use the local server command above or test on the deployed site. |

---

## 16. What to check before publishing

- [ ] Name, email, initials, degree, university, location, interests, and status are current.
- [ ] About bio and career goal are current.
- [ ] Profile photo is real and the alt text is accurate.
- [ ] All timeline entries are real and in the desired order.
- [ ] Every skill percentage is honest and between 0 and 100.
- [ ] Every project id is unique.
- [ ] Every project has real title, summary, description, goal, result, and tags.
- [ ] Project screenshots exist in `assets/img/projects/`.
- [ ] GitHub and demo links work.
- [ ] Project categories match the available filters.
- [ ] Email, GitHub, LinkedIn, X, and other social URLs are real.
- [ ] Contact form endpoint is set.
- [ ] Footer year and copyright are correct.
- [ ] Browser-tab title, description, keywords, and share image are correct.
- [ ] English and Arabic both look right.
- [ ] Light and dark themes both look right.
- [ ] Mobile layout and menu work.
- [ ] Project pop-up and filters work.
- [ ] Browser console has no red errors.
