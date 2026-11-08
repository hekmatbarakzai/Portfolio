
'use strict';
const $ = (selector, element = document) => element.querySelector(selector);
const $$ = (selector, element = document) => [...element.querySelectorAll(selector)];

const NAME = 'Hekmatullah Barakzai';
const EMAIL = 'hikmatbarakzai99@gmail.com';

const translations = {
  en: {
    nav_about: 'About', nav_services: 'Interests', nav_work: 'Projects', nav_exp: 'Journey', nav_contact: 'Contact',
    hire: 'Contact Me', hero_eyebrow: 'WELCOME TO MY PORTFOLIO',
    role: 'Computer Science Student & IT Developer',
    lead: "I'm interested in networking, software development, and building useful web applications.",
    viewwork: 'Explore My Projects', contactcta: 'Get in Touch',
    s1: 'Featured Projects', s2: 'Degree in Progress', s3: 'Development & Networking', avail: 'Learning & Building',
    t_about: 'About Me',
    bio: "I'm a Computer Science student interested in networking, software development, and building useful web applications.",
    bio_extra: 'I enjoy learning by building real projects and improving my skills in programming and information technology.',
    skills_heading: 'Technologies & Interests',
    skills_note: 'Technologies I have worked with or am currently learning — not proficiency ratings.',
    t_services: "What I'm Interested In",
    sv1: 'Web Development', sv1d: 'Building responsive and practical web applications.',
    sv2: 'Programming', sv2d: 'Learning and creating projects with Python, C++, and JavaScript.',
    sv3: 'Networking & IT', sv3d: 'Exploring computer networks, troubleshooting, and IT systems.',
    sv4: 'Problem Solving', sv4d: 'Turning ideas into tools that can help people with everyday tasks.',
    t_work: 'Featured Projects', work_intro: 'Nine software projects, including web applications, databases, and desktop systems.',
    filter_all: 'All Projects', filter_ai: 'AI & Web', filter_management: 'Management', filter_tools: 'Web Tools', filter_fitness: 'Fitness',
    filter_database: 'Databases', filter_website: 'Websites',
    live: 'Visit Website', code: 'View Code',
    t_exp: 'My Learning Journey', journey_status: 'In progress',
    journey_education: "Bachelor's in Computer Science",
    journey_education_detail: 'Studying computer science and IT fundamentals, including programming and networking.',
    journey_practical: 'Hands-on practice', journey_projects: 'Personal Software Projects',
    journey_projects_detail: 'Building Hikmat AI, Gym Management System, CV Maker, BeFit, Construction ERP, QarzDB, Supermarket DB, HEKMAT TECH Website, and Pharmacy DB.',
    t_contact: "Let's Connect", contact_title: 'Write me a message',
    contact_note: 'This form opens your email app with a draft. Please send it from there.',
    p_name: 'Your name', p_email: 'Your email', p_message: 'Your message',
    send: 'Open Email Draft', draft_status: 'Your email app should open with a draft. Please click Send in your email app.',
    direct_email: 'Prefer email? Reach me directly:', together: 'Email Me', email_label: 'Email',
    footer_note: 'Built with HTML, CSS & JavaScript'
  },
  fa: {
    nav_about: 'درباره من', nav_services: 'علاقه‌مندی‌ها', nav_work: 'پروژه‌ها', nav_exp: 'مسیر یادگیری', nav_contact: 'تماس',
    hire: 'تماس با من', hero_eyebrow: 'به وب‌سایت شخصی من خوش آمدید',
    role: 'محصل علوم کمپیوتر و توسعه‌دهنده فناوری معلوماتی',
    lead: 'به شبکه‌های کمپیوتر، توسعه نرم‌افزار و ساخت برنامه‌های کاربردی وب علاقه دارم.',
    viewwork: 'دیدن پروژه‌های من', contactcta: 'ارتباط با من',
    s1: 'پروژه‌های معرفی‌شده', s2: 'در حال تحصیل', s3: 'توسعه نرم‌افزار و شبکه', avail: 'در حال یادگیری و ساخت',
    t_about: 'درباره من',
    bio: 'من محصل علوم کمپیوتر هستم و به شبکه‌های کمپیوتر، توسعه نرم‌افزار و ساخت برنامه‌های کاربردی و مفید وب علاقه دارم.',
    bio_extra: 'دوست دارم با ساخت پروژه‌های واقعی یاد بگیرم و مهارت‌هایم را در برنامه‌نویسی و فناوری معلوماتی تقویت کنم.',
    skills_heading: 'فناوری‌ها و علاقه‌مندی‌ها',
    skills_note: 'فناوری‌هایی که با آن‌ها کار کرده‌ام یا اکنون در حال یادگیری‌شان هستم؛ نه امتیاز مهارت.',
    t_services: 'زمینه‌های مورد علاقه من',
    sv1: 'توسعه وب', sv1d: 'ساخت برنامه‌های کاربردی وب با طراحی سازگار با دستگاه‌های مختلف.',
    sv2: 'برنامه‌نویسی', sv2d: 'یادگیری و ساخت پروژه‌ها با پایتون، سی‌پلاس‌پلاس و جاوااسکریپت.',
    sv3: 'شبکه و فناوری معلوماتی', sv3d: 'آشنایی بیشتر با شبکه‌های کمپیوتر، عیب‌یابی و سیستم‌های IT.',
    sv4: 'حل مسئله', sv4d: 'تبدیل ایده‌ها به ابزارهایی که در کارهای روزمره مفید باشند.',
    t_work: 'پروژه‌های من', work_intro: 'نه پروژه نرم‌افزاری، شامل برنامه‌های وب، دیتابیس‌ها و سیستم‌های دسکتاپ.',
    filter_all: 'همه پروژه‌ها', filter_ai: 'هوش مصنوعی و وب', filter_management: 'مدیریتی', filter_tools: 'ابزارهای وب', filter_fitness: 'ورزش و فیتنس',
    filter_database: 'دیتابیس‌ها', filter_website: 'وب‌سایت‌ها',
    live: 'مشاهده وب‌سایت', code: 'مشاهده کود',
    t_exp: 'مسیر یادگیری من', journey_status: 'در حال تحصیل',
    journey_education: 'دوره لیسانس علوم کمپیوتر',
    journey_education_detail: 'در حال مطالعه مبانی علوم کمپیوتر و فناوری معلوماتی، از جمله برنامه‌نویسی و شبکه.',
    journey_practical: 'تمرین عملی', journey_projects: 'پروژه‌های شخصی نرم‌افزاری',
    journey_projects_detail: 'توسعه Hikmat AI، سیستم مدیریت باشگاه، CV Maker، BeFit، Construction ERP، QarzDB، Supermarket DB، وب‌سایت HEKMAT TECH و Pharmacy DB.',
    t_contact: 'ارتباط با من', contact_title: 'برایم پیام بنویسید',
    contact_note: 'این فورم برنامه ایمیل شما را همراه با متن آماده باز می‌کند. لطفاً ایمیل را از همان‌جا ارسال کنید.',
    p_name: 'نام شما', p_email: 'ایمیل شما', p_message: 'پیام شما',
    send: 'باز کردن پیش‌نویس ایمیل', draft_status: 'برنامه ایمیل شما باید با یک پیام آماده باز شود. لطفاً در برنامه ایمیل دکمه ارسال را بزنید.',
    direct_email: 'برای ارتباط مستقیم، به این آدرس ایمیل بفرستید:', together: 'ارسال ایمیل', email_label: 'ایمیل',
    footer_note: 'ساخته‌شده با HTML، CSS و JavaScript'
  }
};

const projects = [
  {
    name: 'Hikmat AI', category: 'ai', visual: 'AI', style: 'ai',
    technologies: ['Python', 'HTML', 'CSS', 'JavaScript', 'Groq API'],
    description: {
      en: 'A personal AI chatbot website project with a multilingual interface, built to explore AI integration and web development.',
      fa: 'پروژه وب‌سایت چت‌بات هوش مصنوعی با رابط چندزبانه که برای تجربه اتصال هوش مصنوعی و توسعه وب ساخته شده است.'
    },
    website: 'https://hekmat-wp61xv9hl-hekmatbarakzai.vercel.app/',
    github: null
  },
  {
    name: 'Gym Management System', category: 'management', visual: 'GM', style: 'gym',
    technologies: ['Python', 'Flask', 'PostgreSQL', 'HTML', 'CSS'],
    description: {
      en: 'A practice management app for organizing trainers and students, tracking fees and payments, and reviewing records.',
      fa: 'یک برنامه تمرینی برای مدیریت مربیان و شاگردان، پیگیری فیس و پرداخت‌ها و مشاهده سوابق.'
    },
    website: 'https://gym-management-system-e28b.onrender.com/',
    github: 'https://github.com/hekmatbarakzai/gym-management-system'
  },
  {
    name: 'CV Maker', category: 'tools', visual: 'CV', style: 'cv',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description: {
      en: 'A bilingual English–Dari resume builder with multiple templates, live CV preview, and PDF export.',
      fa: 'ابزار ساخت سی‌وی به زبان‌های انگلیسی و دری با قالب‌های مختلف، پیش‌نمایش زنده و قابلیت دریافت فایل PDF.'
    },
    website: 'https://cv-maker-pied-theta.vercel.app/',
    github: 'https://github.com/hekmatbarakzai/CV-maker'
  },
  {
    name: 'BeFit', category: 'fitness', visual: 'BF', style: 'befit',
    technologies: ['Fitness', 'Web Project'],
    description: {
      en: 'A fitness-themed web project. Visit the live website to explore its design and current features.',
      fa: 'یک پروژه وب‌سایت با موضوع ورزش و فیتنس. برای آشنایی با طراحی و امکانات فعلی آن، وب‌سایت را باز کنید.'
    },
    website: 'https://befit-hekmat.vercel.app/',
    github: null
  },
  {
    name: 'HEKMAT Construction ERP', category: 'management', visual: 'CE', style: 'construction',
    gradient: 'radial-gradient(circle at 18% 18%, rgba(245,174,82,.78), transparent 54%), linear-gradient(135deg,#30251b,#72502b 58%,#1d3449)',
    technologies: ['Electron', 'SQLite', 'Desktop ERP'],
    description: {
      en: 'A desktop ERP for organizing construction projects, tracking payments and installments, and managing project records.',
      fa: 'یک سیستم ERP دسکتاپ برای تنظیم پروژه‌های ساختمانی، پیگیری پرداخت‌ها و قسط‌ها و مدیریت سوابق پروژه.'
    },
    website: null, github: null,
    status: { en: 'Private desktop application', fa: 'برنامه دسکتاپ خصوصی' }
  },
  {
    name: 'QarzDB', category: 'database', visual: 'QZ', style: 'qarz',
    gradient: 'radial-gradient(circle at 82% 18%, rgba(180,126,255,.72), transparent 54%), linear-gradient(135deg,#241638,#4a2c68 58%,#17324a)',
    technologies: ['Database', 'Debt Tracking'],
    description: {
      en: 'A database project for recording debts, payments, remaining balances, and customer records.',
      fa: 'یک پروژه دیتابیس برای ثبت قرض‌ها، پرداخت‌ها، باقی‌داری و سوابق مشتریان.'
    },
    website: null, github: 'https://github.com/hekmatbarakzai/QarzDB'
  },
  {
    name: 'Supermarket DB', category: 'database', visual: 'SM', style: 'supermarket',
    gradient: 'radial-gradient(circle at 20% 20%, rgba(76,219,161,.78), transparent 54%), linear-gradient(135deg,#123b35,#1e6759 58%,#17334c)',
    technologies: ['Database', 'Inventory', 'Sales Management'],
    description: {
      en: 'A supermarket database project for organizing product, inventory, and sales records.',
      fa: 'یک پروژه دیتابیس سوپرمارکیت برای تنظیم سوابق اجناس، موجودی گدام و فروشات.'
    },
    website: null, github: 'https://github.com/hekmatbarakzai/supermarketDB'
  },
  {
    name: 'HEKMAT TECH Website', category: 'website', visual: 'HT', style: 'hekmat',
    gradient: 'radial-gradient(circle at 78% 18%, rgba(103,181,255,.78), transparent 54%), linear-gradient(135deg,#142744,#31558b 58%,#39265f)',
    technologies: ['Business Website', 'Dari & English'],
    description: {
      en: 'The HEKMAT TECH business website presenting website, database, and custom software services.',
      fa: 'وب‌سایت تجارتی HEKMAT TECH برای معرفی خدمات طراحی وب‌سایت، دیتابیس و نرم‌افزارهای اختصاصی.'
    },
    website: null, github: 'https://github.com/hekmatbarakzai/Advertize_web'
  },
  {
    name: 'Pharmacy DB', category: 'database', visual: 'PH', style: 'pharmacy',
    gradient: 'radial-gradient(circle at 20% 18%, rgba(95,224,203,.76), transparent 54%), linear-gradient(135deg,#123a43,#176a70 58%,#27375e)',
    technologies: ['Pharmacy Management', 'Database'],
    description: {
      en: 'A completed pharmacy database application.',
      fa: 'یک برنامه دیتابیس دواخانه که تکمیل شده است.'
    },
    website: null, github: null,
    status: { en: 'Completed', fa: 'تکمیل‌شده' }
  }
];

/* Add the new project categories without changing index.html. */
[
  { category: 'database', key: 'filter_database' },
  { category: 'website', key: 'filter_website' }
].forEach(({ category, key }) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'chip';
  button.dataset.f = category;
  button.dataset.i18n = key;
  $('#filters').append(button);
});

/* Keep the project count in the hero synchronized with the project list. */
const projectCount = $('.stats > div:first-child b');
if (projectCount) projectCount.textContent = String(projects.length).padStart(2, '0');

const skillNames = ['HTML', 'CSS', 'JavaScript', 'Python', 'C++', 'Flask', 'SQL', 'Networking'];
const safeStorage = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch {} }
};
let lang = safeStorage.get('portfolio-lang') === 'fa' ? 'fa' : 'en';
let category = 'all';
let typingTimer;

function renderProjects() {
  const labels = translations[lang];
  $('#projects').innerHTML = projects.filter(p => category === 'all' || category === p.category).map(p => `
    <article class="card proj tilt" data-c="${p.category}">
      <div class="thumb thumb-${p.style}" ${p.gradient ? `style="background:${p.gradient}"` : ''} aria-hidden="true"><span class="thumb-pattern"></span><span class="thumb-initials">${p.visual}</span></div>
      <div class="body">
        <h3>${p.name}</h3>
        <p class="muted project-description">${p.description[lang]}</p>
        <div class="tags">
          ${p.technologies.map(tag => `<span>${tag}</span>`).join('')}
          ${p.status ? `<span>${p.status[lang]}</span>` : ''}
        </div>
        <div class="links">
          ${p.website ? `<a href="${p.website}" target="_blank" rel="noopener noreferrer">${labels.live} ↗</a>` : ''}
          ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer">${labels.code} ↗</a>` : ''}
        </div>
      </div>
    </article>`).join('');
}

function typeText() {
  clearInterval(typingTimer);
  const el = $('#typed');
  const text = lang === 'fa' ? `من ${NAME} هستم` : `Hi, I'm ${NAME}`;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = text;
    return;
  }
  let i = 0;
  el.textContent = '';
  typingTimer = setInterval(() => {
    el.textContent = text.slice(0, ++i);
    if (i >= text.length) clearInterval(typingTimer);
  }, 45);
}

function setLang(next) {
  lang = next === 'fa' ? 'fa' : 'en';
  safeStorage.set('portfolio-lang', lang);
  document.documentElement.lang = lang === 'fa' ? 'fa-AF' : 'en';
  document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  const dict = translations[lang];
  $$('[data-i18n]').forEach(el => {
    const value = dict[el.dataset.i18n];
    if (value !== undefined) el.textContent = value;
  });
  $$('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = dict[el.dataset.i18nPlaceholder] || '';
  });
  $('#lang').textContent = lang === 'fa' ? 'EN' : 'FA';
  $('#status').textContent = '';
  renderProjects();
  typeText();
}

function setTheme(next) {
  const t = next === 'light' ? 'light' : 'dark';
  document.documentElement.dataset.theme = t;
  safeStorage.set('portfolio-theme', t);
  $('#theme').textContent = t === 'dark' ? '☾' : '☀';
}

$('#lang').addEventListener('click', () => setLang(lang === 'fa' ? 'en' : 'fa'));
$('#theme').addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
setTheme(safeStorage.get('portfolio-theme') || 'dark');
$('#skills').innerHTML = skillNames.map(name => `<span class="skill-pill">${name}</span>`).join('');

$('#filters').addEventListener('click', e => {
  const button = e.target.closest('.chip');
  if (!button) return;
  category = button.dataset.f;
  $$('.chip', $('#filters')).forEach(chip => {
    const active = chip === button;
    chip.classList.toggle('on', active);
    chip.setAttribute('aria-pressed', String(active));
  });
  renderProjects();
});

$('#form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const fields = new FormData(form);
  const subject = `Portfolio message from ${fields.get('name')}`;
  const body = `Name: ${fields.get('name')}\nEmail: ${fields.get('email')}\n\n${fields.get('message')}`;
  const href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  $('#status').textContent = translations[lang].draft_status;
  window.location.href = href;
});

const menuButton = $('#burger');
menuButton.addEventListener('click', () => {
  const isOpen = $('#links').classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
$$('#links a').forEach(link => link.addEventListener('click', () => {
  $('#links').classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('in');
    revealObserver.unobserve(entry.target);
  });
}, { threshold: .1 }) : null;
$$('.reveal').forEach(el => revealObserver ? revealObserver.observe(el) : el.classList.add('in'));

window.addEventListener('scroll', () => {
  $('#nav').classList.toggle('scrolled', scrollY > 40);
  $('#top').classList.toggle('show', scrollY > 600);
}, { passive: true });
$('#top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

document.addEventListener('click', event => {
  const button = event.target.closest('.btn');
  if (!button) return;
  const rect = button.getBoundingClientRect();
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  const size = rect.width;
  ripple.style.cssText = `width:${size}px;height:${size}px;left:${event.clientX - rect.left - size / 2}px;top:${event.clientY - rect.top - size / 2}px`;
  button.append(ripple);
  setTimeout(() => ripple.remove(), 600);
});

if (window.matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches) {
  $$('.magnetic').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .15}px, ${(e.clientY - r.top - r.height / 2) * .18}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });
}

$('#yr').textContent = new Date().getFullYear();
setLang(lang);
