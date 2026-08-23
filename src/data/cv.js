export const profile = {
  name: "Haresh",
  title: "Software Engineer",
  email: "haresh.swe@gmail.com",
  phone: "+92-306-5805656",
  linkedin: "https://www.linkedin.com/in/haresh-kumar-9bb353251/",
  github: "https://github.com/Hareshku",
  portfolio: "https://github.com/Hareshku",
};

export const stats = [
  { value: "3.2", suffix: "/4.0", label: "CGPA" },
  { value: "10", suffix: "+", label: "Competitions" },
  { value: "100", suffix: "+", label: "Students Taught" },
  { value: "125", suffix: "", label: "Duolingo" },
];

export const achievements = [
  
  {
    tag: "Section Leader (Trainer)",
    category: "Stanford University",
    title: "Code in Place",
    detail: "Selected from 2,000+ global applicants to join Stanford's teaching team and instruct CS106A Python to 100+ international students.",
    link: "#", // TODO: replace with certificate / proof URL
  },
  {
    tag: "Top Performar",
    category: "Harvard University",
    title: "CS50x Puzzle Day",
    detail: "Solved all (10/10) logical puzzles with my team at Harvard University's flagship computational puzzle event.",
    link: "#", // TODO: replace with certificate / proof URL
  },
  {
    tag: "Leadership Fellowship",
    category: "Harvard University",
    title: "Aspire Leaders Program",
    detail: "Selected for a global leadership development program identifying high-potential emerging leaders.",
    link: "#", // TODO: replace with certificate / proof URL
  }, 
  {
    tag: "Scholarship",
    category: "Undergraduate",
    title: "Bachelor's Merit Scholarship",
    detail: "Awarded full tuition scholarship for the entire undergraduate program on academic merit.",
    link: "#", // TODO: replace with certificate / proof URL
  },
  {
    tag: "Hackathon",
    category: "Yale University",
    title: "Peaked Hackathon 2026",
    detail: "Ranked in top 13% globally, solving 6/10 Peak Circuit challenges using quantum circuit analysis and simulation techniques.",
    link: "#", // TODO: replace with certificate / proof URL
  },
 
  {
    tag: "AI Hackathons",
    category: "Lablab.ai",
    title: "International Participation",
    detail: "Competed in 10+ international AI hackathons, delivering production-ready AI solutions under tight deadlines.",
    link: "#", // TODO: replace with certificate / proof URL
  },
  {
    tag: "Coding Competition",
    category: "Facebook (Meta)",
    title: "Meta Hacker Cup",
    detail: "Qualified for Round 1 of Meta Hacker Cup by solving complex algorithmic problems under competitive time constraints.",
    link: "#", // TODO: replace with certificate / proof URL
  },
  {
    tag: "Coding Competition",
    category: "UC Berkeley",
    title: "CALICO Coding competition",
    detail: "Solved 3 of 12 problems in CALICO Coding Competition, a three-hour algorithmic contest.",
    link: "#", // TODO: replace with certificate / proof URL
  },

  {
    tag: "Coding Competition",
    category: "MIT",
    title: "MIT Informatics Tournament",
    detail: "Solved 2 of 10 data structures and algorithms problems at the MIT Informatics Tournament.",
    link: "#", // TODO: replace with certificate / proof URL
  },
];

export const education = [
  {
    degree: "B.E. Software Engineering",
    institution: "Mehran University of Engineering & Technology",
    location: "Jamshoro, Sindh, Pakistan",
    period: "2021 - 2025",
    gpa: "CGPA 3.2 / 4.0",
    link: "thesis link",
    thesisLink: "this",
  },
  {
    degree: "Pre-Engineering",
    institution: "GOVT: Higher Secondary Samaro Town",
    location: "Samaro, Sindh, Pakistan",
    period: "2019 - 2021",
    gpa: "90.54%",
    link: "I did my intermediate in Pre-Engineering from GOVT: Higher Secondary School Samaro town "
    
  },
];

export const experience = [
  {
    role: "Software Engineer Intern",
    org: "Pak Navy Engineering College",
    location: "Onsite - Karachi, Sindh, Pakistan",
    period: "April - June 2026",
    points: [
      "Contributed to system design and integration for marine monitoring and control dashboards.",
      "Built scalable UI components and integration workflows for navigation and telemetry systems.",
      "Developed a custom Blue Robotics extension in Python enabling seamless integration of custom maps.",
    ],
  },
  {
    role: "Front-end Developer Intern",
    org: "NFTP",
    location: "Onsite - Jamshoro, Sindh, Pakistan",
    period: "November 2022 - March 2023",
    points: [
      "Developed responsive pages and registration forms using HTML, CSS, JavaScript, and React.",
      "Designed intuitive employee dashboards with Bootstrap and React, cutting design-iteration time by 25%.",
      "Built dynamic e-commerce features including product catalogs and cart functionality.",
      "Optimized database connectivity with PHP and SQL, reducing query response time by 30%.",
    ],
  },
];

export const projects = [
  {
    title: "SkillSwap | Peer-to-Peer Skill Trading Platform",
    period: "2025",
    type: "Final Year Project",
    category: "academic",
    description:
      "A free skill-exchange platform enabling users to trade skills without monetary exchange, designed to support underprivileged learners through collaborative, money-free skill development.",
    points: [
      "Developed a matching system that connects users based on complementary skill needs, such as JavaScript and Java.",
      "Implemented chat, session scheduling, feedback, and contribution-based badges to support community engagement.",
    ],
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express", "MySQL"],
  },
  {
    title: "Code Analysis for Enhanced Software Security using AI",
    period: "2025",
    type: "Semester Project",
    category: "academic",
    description:
      "An AI-powered security scanner that detects vulnerability patterns in Python source code and CI/CD pipelines. It uses AST parsing, rule-based static analysis, and a Random Forest classifier for real-time vulnerability detection.",
    points: [
      "Built a weighted risk-scoring engine covering 22 named security rules. It produces quantitative 0–100 risk scores with severity classification.",
      "Developed a Flask dashboard that allows developers to upload files and receive AI-generated security reports with ML confidence percentages.",
    ],
    stack: ["Python", "Flask", "scikit-learn", "PyYAML", "pandas"],
  },
  {
  title: "Smart Lost & Found Portal",
  period: "2025",
  type: "Semester Project",
  category: "academic",
  description:
    "A comprehensive web application that helps users report and search lost or found items through an intelligent matching system, connecting reports based on item attributes to reunite people with their belongings.",
  points: [
    "Built a similarity-based matching algorithm weighing item name, category, location, description keywords, and date proximity to rank potential matches.",
    "Implemented a RESTful Express.js API with JWT and session-based authentication, plus a separate admin dashboard for report and user management.",
  ],
  stack: ["Node.js", "Express.js", "MySQL", "Tailwind CSS", "JWT"],
},
{
  title: "E-Learning App",
  period: "2024",
  type: "Semester Project",
  category: "academic",
  description:
    "A mobile application enabling students to buy and sell educational courses such as Java and Python, connecting learners directly with peer instructors in a self-serve course economy.",
  points: [
    "Designed course listing, purchase, and enrollment flows supporting multiple subject categories and instructor-created content.",
    "Integrated Firebase Authentication for secure user sign-up and login, alongside a backend data layer managing course transactions.",
  ],
  stack: ["Flutter", "Dart", "Firebase"],
  link: "https://github.com/Hareshku/E-Learning-app_6th_semester_project",
},
  {
    title: "DayOne | AI-Powered Startup Validation Platform",
    period: "Aug 2026",
    type: "AI Factory Native.builder Hackathon",
    category: "hackathon",
    description:
      "Day One is an AI-powered startup validation platform designed to help founders evaluate their ideas before investing significant time and money. Instead of relying on a single AI response, Day One brings together six specialized AI agents representing: Research, Product, Finance, Legal, Marketing, CEO.",
    points: [
      "Focused on responsive UI and clear presentation of AI-generated insights.",
      "Coordinated team task distribution and cross-functional integration with backend engineer.",
    ],
    stack: ["React", "Tailwind CSS", "FastAPI", "Pydantic", "GPT-4o-mini"],
  },
  {
    title: "NeuroFocus | BCI-Powered Interaction System",
    period: "Sep 2025",
    type: "The Internet of Agents Hackathon",
    category: "hackathon",
    description:
      "A brain-computer interface system that combines EEG, PPG, and motion data to infer user mental states such as focus, stress, and fatigue. It uses an empathetic, LLM-driven adaptive agent.",
    points: [
      "Integrated multiple autonomous agents via the Coral Protocol.",
      "Guided UI/UX design in Figma to support interface accessibility for varying cognitive states.",
    ],
    stack: ["EEG/PPG Signals", "Coral Protocol", "LLM Agents", "Figma"],
  },
  {
    title: "Farmer to Customer | Direct Agricultural Marketplace",
    period: "Aug - Oct 2025",
    type: "GNEC Hackathon 2025 Fall · Team Lead",
    category: "hackathon",
    description:
      "A transparent digital marketplace directly connecting farmers with consumers to eliminate middlemen and promote equitable pricing in Pakistan's agricultural economy.",
    points: [ 
      "Designed the platform to support fair compensation and sustainable market access for farmers.",
      "Led backend development and guided the team through the full project lifecycle, from ideation and UI/UX to deployment.",
     
    ],
    stack: ["React", "Node.js", "Express", "MySQL"],
  },
  {
    title: "Podify | AI Podcast & Meeting Summarizer",
    period: "Jul - Sep 2025",
    type: "Code with Kiro Hackathon (AWS)",
    category: "hackathon",
    description:
      "An AI-powered tool that transcribes podcast episodes, generates concise summaries and key insights, and lets users ask questions about the content. It turns long-form podcasts into short, actionable knowledge.",
    points: [
      "Integrated frontend with backend APIs for smooth audio-to-text processing.",
      "Designed UX for real-time transcription readability under live-audio latency.",
    ],
    stack: ["React.js", "REST APIs", "FAISS", "OpenAI", "Machine Learning"],
  },
];


export const teaching = [
  {
    role: "Section Leader (Trainer)",
    university: "Stanford University",
    program: "Code in Place",
    period: "20 April - 30 May 2026",
    points: [
      "Selected from 2,000+ applicants worldwide to join Stanford's global teaching team.",
      "Taught CS106A Python to 100+ international students, fostering an inclusive learning environment.",
      "Led 10+ problem-solving sessions covering Python fundamentals, Karel, console programming, graphics, and computational thinking.",
    ],
  },
  {
    role: "Python Programming Trainer",
    university: "CA, USA",
    program: "iCodeGuru",
    period: "26 Jan - 21 Feb 2026",
    points: [
      "Taught Python from basic syntax through advanced concepts.",
      "Guided students through hands-on projects and real-world problem-solving exercises.",
      "Mentored learners individually to strengthen understanding and coding proficiency.",
    ],
  },
  {
    role: "Team Lead",
    university: "Online",
    program: "GNEC Hackathon 2025",
    period: "12 Aug - 12 Oct 2025",
     points: [
      "Led a team of Pakistani developers in building the Farmer to Customer platform.",
      "Oversaw the full development lifecycle from ideation and UI/UX design to deployment and final presentation.",
    ],
  },
  {
    role: "Member",
    university: "Mehran University",
    program: "Prime Minister Green Youth Movement (PMGYM)",
    period: "2023 - 2024",
    points: [
      "Participated in tree-plantation drives, awareness campaigns, and sustainability initiatives.",
      "Promoted environmental responsibility among students and the wider community.",
    ],
  },
];
export const skills = {
  Languages: ["Java", "C++", "Python", "JavaScript"],
  "Frameworks & Libraries": ["React.js", "Tailwind CSS", "Bootstrap"],
  "Backend Technologies": ["Express.js", "Node.js", "REST APIs", "Flask", "WebSockets"],
  "Developer Tools": ["VS Code", "Eclipse", "AWS Cloud Services", "Git", "GitHub", "Postman", "Android Studio"],
  "Web Technologies": ["HTML", "CSS"],
  "Databases & CMS": ["MySQL", "MongoDB", "WordPress"],
};

export const competitions = [
  "Meta Hacker Cup",
  "CALICO | UC Berkeley",
  "MIT Informatics Tournament",
];
