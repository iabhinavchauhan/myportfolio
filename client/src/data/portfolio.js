export const profile = {
  name: 'Abhinav Chauhan',
  location: 'Haridwar, Uttarakhand, India',
  phone: '+91 7417466232',
  email: 'iabhinavchauhan.ac@gmail.com',
  linkedin: 'https://www.linkedin.com/in/iabhinavchauhan',
  github: 'https://github.com/iabhinavchauhan',
  portfolio: 'https://abhinavchauhan.pages.dev',
  title: 'Full-Stack Developer',
  summary: 'Results-driven Computer Science Engineering graduate and Full-Stack Developer specializing in the MERN stack. Delivered 5+ production-grade web applications and improved development efficiency by up to 30% through AI-assisted engineering workflows. Proven track record of shipping scalable, maintainable code in fast-paced, remote individual-contributor roles.'
};

export const skillGroups = [
  { title: 'Languages', skills: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Java'] },
  { title: 'Frameworks & Libraries', skills: ['React.js', 'Node.js', 'Express.js', 'EJS', 'Tailwind CSS', 'GSAP', 'Locomotive Scroll'] },
  { title: 'Databases & Tools', skills: ['MongoDB', 'Mongoose', 'SQL — Basic', 'Git', 'GitHub', 'VS Code', 'Postman', 'Thunder Client', 'Vercel', 'Netlify', 'Cloudflare'] },
  { title: 'Core Concepts', skills: ['DSA', 'OOP', 'CRUD', 'REST API Design', 'Full-Stack Architecture', 'Payment Gateway Integration', 'SEO', 'Google Business Profile', 'Search Console'] },
  { title: 'AI / ML', skills: ['LLMs', 'Generative AI', 'AI API Integration', 'Prompt Engineering'] }
];

export const experiences = [
  {
    role: 'ERP Operations Executive Apprenticeship', company: 'Percos India Pvt Ltd', location: 'Haridwar', period: 'May 2026 — Jul 2026', tag: 'Operations',
    points: [
      'Improved data-entry accuracy by 10% across 2 ERP modules by applying enterprise CBO and ERP platforms to daily workflows.',
      'Reduced process turnaround time by 8% for a 4-member operations team by streamlining ERP-driven processes and data workflows.',
      'Increased reporting efficiency by 10% by standardizing and optimizing daily operational tasks.'
    ]
  },
  {
    role: 'Frontend Developer', company: 'Prodesk IT', location: 'Noida', period: 'Jan 2026 — Apr 2026', tag: 'Frontend',
    points: [
      'Built responsive, production-ready React interfaces while meeting performance benchmarks across 4+ weekly technical missions.',
      'Reduced personal development time by 10% using AI prompt engineering and documenting 10+ reusable prompt templates.',
      'Improved code reusability by 15% across 5+ components through modular React components and clean state management.'
    ]
  }
];

export const projects = [
  {
    number: '01', title: 'Samthar Hill-Stay', subtitle: 'Peaceful mountain homestays in Kalimpong', category: 'TRAVEL · FULL STACK',
    description: 'A responsive website presenting a Kalimpong mountain homestay and the village experience to travelers, with search-friendly metadata for discoverability.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Payment Gateway', 'Cloudflare', 'CSS'],
    live: 'https://samtharhillstay.pages.dev', visual: 'mountain'
  },
  {
    number: '02', title: 'Vypax Technologies', subtitle: 'Training, internships & technology services', category: 'TECHNOLOGY · BUSINESS',
    description: 'A company website presenting career training, internships, hackathons, and technology services for learners and businesses, supported by SEO and social-sharing metadata.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Cloudflare', 'CSS', 'SEO'],
    live: 'https://vypax.pages.dev', visual: 'vypax'
  },
  {
    number: '03', title: 'Google Drive Clone', subtitle: 'Cloud storage web application', category: 'CLOUD · FULL STACK',
    description: 'A cloud storage application supporting 50+ file uploads, persistent file metadata, and core file operations through RESTful APIs and a responsive interface.',
    stack: ['EJS', 'Node.js', 'Express.js', 'MongoDB', 'CSS3', 'Tailwind CSS', 'XML'],
    visual: 'cloud'
  },
  {
    number: '04', title: 'K72 Animated Web Application', subtitle: 'A motion-led digital experience', category: 'CREATIVE DEVELOPMENT · MOTION',
    description: 'A high-fidelity animation-driven web experience inspired by K72, using custom GSAP timelines and smooth-scrolling interactions to create fluid motion sequences.',
    stack: ['React.js', 'Node.js', 'Express.js', 'GSAP', 'Locomotive Scroll', 'Tailwind CSS'],
    visual: 'motion'
  }
];

export const education = [
  { degree: 'B.Tech — Computer Science & Engineering', institution: 'Roorkee College of Engineering (VMSBUTU), Roorkee', period: '2022 — 2026', result: 'CGPA 8.1 / 10.0' },
  { degree: 'Class XII — Science (PCM)', institution: 'Spring Field School, Bahadrabad, Haridwar', period: '2022', result: '75%' },
  { degree: 'Class X — Mathematics Standard', institution: 'Spring Field School, Bahadrabad, Haridwar', period: '2020', result: '85%' }
];

export const certifications = [
  { name: 'Full Stack Development', issuer: 'ByteXL' },
  { name: 'React Development', issuer: 'IBM' },
  { name: 'Python for Data Science', issuer: 'IBM' },
  { name: 'Web Foundation', issuer: 'Nasscom' },
  { name: 'Web Developer', issuer: 'NSDC · Skill India' }
];
