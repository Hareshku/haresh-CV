export const profile = {
  name: "Haresh",
  title: "Software Engineer",
  focus: "Research Interests: AI Agent Systems, Human-Computer Interaction, Applied Security & ML",
  tagline:
    "Software engineer and Stanford-trained educator building at the intersection of AI systems, human-computer interaction, and applied security — seeking a research home for doctoral study.",
  email: "haresh.swe@gmail.com",
  phone: "+92-306-5805656",
  linkedin: "LinkedIn",
  github: "GitHub",
  portfolio: "Portfolio",
  location: "Karachi, Sindh, Pakistan",
};

export const stats = [
  { value: "3.2", suffix: "/4.0", label: "Undergraduate CGPA" },
  { value: "5", suffix: "+", label: "Int'l Competitions" },
  { value: "100", suffix: "+", label: "Students Taught" },
  { value: "6", suffix: "", label: "Research-Adjacent Projects" },
];

export const achievements = [
  {
    tag: "Team Result",
    category: "Harvard University",
    title: "CS50x Puzzle Day 2026",
    detail:
      "Solved all ten puzzles (10/10) with team at Harvard University's flagship computational puzzle event.",
  },
  {
    tag: "Selected Trainer",
    category: "Stanford University",
    title: "Code in Place — Section Leader",
    detail:
      "Selected from 2,000+ global applicants to join Stanford's teaching team and instruct CS106A Python to 100+ international students.",
  },
  {
    tag: "Leadership Fellowship",
    category: "Harvard University",
    title: "Aspire Leaders Program",
    detail:
      "Selected for a global leadership development program identifying high-potential emerging leaders.",
  },
  {
    tag: "Global Rank #70",
    category: "Yale University",
    title: "Peaked Hackathon 2026",
    detail:
      "Ranked 70th globally, solving 6/10 Peak Circuit challenges using quantum circuit analysis and simulation techniques.",
  },
  {
    tag: "Full Funding",
    category: "Undergraduate",
    title: "Bachelor's Merit Scholarship",
    detail: "Awarded full tuition scholarship for the entire undergraduate program on academic merit.",
  },
];

export const education = [
  {
    degree: "B.E. Software Engineering",
    institution: "Mehran University of Engineering & Technology",
    location: "Jamshoro, Sindh, Pakistan",
    period: "2021 — 2025",
    gpa: "CGPA 3.2 / 4.0",
    note: "Transcript available on request.",
    coursework: [
      "Agent-Based Intelligent Systems",
      "Computer Networks",
      "Data Science & Analytics",
      "Cloud Computing",
      "Human-Computer Interaction",
      "Database Systems",
    ],
  },
];

export const experience = [
  {
    role: "Software Engineer Intern",
    org: "Pak Navy Engineering College",
    location: "Onsite — Karachi, Sindh, Pakistan",
    period: "April — June 2026",
    points: [
      "Contributed to system design and integration for marine monitoring and control dashboards.",
      "Built scalable UI components and integration workflows for navigation and telemetry systems.",
      "Developed a custom Blue Robotics extension in Python enabling seamless integration of custom maps.",
    ],
  },
  {
    role: "Front-end Developer Intern",
    org: "NFTP",
    location: "Onsite — Jamshoro, Sindh, Pakistan",
    period: "November 2022 — March 2023",
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
    title: "Code Analysis for Enhanced Software Security using AI",
    period: "2025",
    type: "Independent Research Project",
    description:
      "An AI-powered security scanner analyzing Python source code and CI/CD pipelines using AST parsing, rule-based static analysis, and a Random Forest classifier for real-time vulnerability detection.",
    points: [
      "Weighted risk-scoring engine spanning 22 named security rules, producing quantitative 0–100 risk scores with severity classification.",
      "Flask dashboard allowing developers to upload files and instantly receive AI-generated security reports with ML confidence percentages.",
    ],
    stack: ["Python", "Flask", "scikit-learn", "PyYAML", "pandas"],
  },
  {
    title: "SkillSwap — Peer-to-Peer Skill Trading Platform",
    period: "2025",
    type: "Final Year Project",
    description:
      "A free skill-exchange platform enabling users to trade skills without monetary exchange, designed to support underprivileged learners through collaborative, money-free skill development.",
    points: [
      "Matching system connecting users by complementary skill needs (e.g., JavaScript ↔ Java).",
      "Chat, session scheduling, feedback, and contribution-based badges to sustain community engagement.",
    ],
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express", "MySQL"],
  },
  {
    title: "DayOne — AI-Powered Startup Validation Platform",
    period: "Aug 2026",
    type: "AI Factory Native.builder Hackathon",
    description:
      "Frontend for an AI platform validating startup ideas, integrating real-time AI-agent responses and WebSocket updates with a FastAPI backend.",
    points: [
      "Focused on responsive UI and clear presentation of AI-generated insights.",
      "Coordinated team task distribution and cross-functional integration with backend engineer.",
    ],
    stack: ["React", "Tailwind CSS", "FastAPI", "Pydantic", "GPT-4o-mini"],
  },
  {
    title: "NeuroFocus — BCI-Powered Interaction System",
    period: "Sep 2025",
    type: "The Internet of Agents Hackathon",
    description:
      "A brain-computer interface system combining EEG, PPG, and motion data to infer user mental states — focus, stress, and fatigue — through an empathetic, LLM-driven adaptive agent.",
    points: [
      "Integrated multiple autonomous agents via the Coral Protocol.",
      "Guided UI/UX design in Figma to support interface accessibility for varying cognitive states.",
    ],
    stack: ["EEG/PPG Signals", "Coral Protocol", "LLM Agents", "Figma"],
  },
  {
    title: "Farmer to Customer — Direct Agricultural Marketplace",
    period: "Aug – Oct 2025",
    type: "GNEC Hackathon 2025 Fall · Team Lead",
    description:
      "A transparent digital marketplace directly connecting farmers with consumers to eliminate middlemen and promote equitable pricing in Pakistan's agricultural economy.",
    points: [
      "Owned backend development and led the team through the full lifecycle: ideation, UI/UX, deployment.",
      "Designed for rural economic impact — fair compensation and sustainable market access for farmers.",
    ],
    stack: ["React", "Node.js", "Express", "MySQL"],
  },
  {
    title: "Podify — AI Podcast & Meeting Summarizer",
    period: "Jul – Sep 2025",
    type: "Code with Kiro",
    description:
      "A responsive frontend for an AI-powered summarization tool handling real-time transcription and concise meeting/podcast summaries.",
    points: [
      "Integrated frontend with backend APIs for smooth audio-to-text processing.",
      "Designed UX for real-time transcription readability under live-audio latency.",
    ],
    stack: ["React", "REST APIs", "Real-time Transcription"],
  },
];

export const teaching = [
  {
    role: "Section Leader (Trainer)",
    org: "Stanford University — Code in Place",
    period: "20 April — 30 May 2026",
    points: [
      "Selected from 2,000+ applicants worldwide to join Stanford's global teaching team.",
      "Taught CS106A Python to 100+ international students, fostering an inclusive learning environment.",
      "Led 10+ problem-solving sessions covering Python fundamentals, Karel, console programming, graphics, and computational thinking.",
    ],
  },
  {
    role: "Python Programming Trainer",
    org: "Icodeguru",
    period: "26 Jan — 21 Feb 2026",
    points: [
      "Taught Python from basic syntax through advanced concepts.",
      "Guided students through hands-on projects and real-world problem-solving exercises.",
      "Mentored learners individually to strengthen understanding and coding proficiency.",
    ],
  },
  {
    role: "Team Lead",
    org: "GNEC Hackathon 2025",
    period: "12 Aug — 12 Oct 2025",
    points: [
      "Led a team of Pakistani developers in building the Farmer to Customer platform.",
      "Oversaw the full development lifecycle from ideation and UI/UX design to deployment and final presentation.",
    ],
  },
  {
    role: "Member",
    org: "Prime Minister Green Youth Movement (PMGYM)",
    period: "2023 — 2024",
    points: [
      "Participated in tree-plantation drives, awareness campaigns, and sustainability initiatives.",
      "Promoted environmental responsibility among students and the wider community.",
    ],
  },
];

export const skills = {
  Languages: ["Java", "C++", "Python", "JavaScript", "PHP"],
  "Frameworks & Libraries": ["React.js", "Tailwind CSS", "Bootstrap"],
  "Backend Technologies": ["Express.js", "Node.js"],
  "Developer Tools": ["VS Code", "Eclipse", "AWS Cloud Services", "Git", "Android Studio"],
  "Web Technologies": ["HTML", "CSS"],
  "Databases & CMS": ["MySQL", "MongoDB", "WordPress"],
};

export const competitions = [
  "Meta Hacker Cup",
  "CALICO — UC Berkeley",
  "MIT Informatics Tournament",
];
