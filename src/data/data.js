import cusatImage from "../assets/experience-cusat-expanded.jpeg";
import iptifImage from "../assets/experience-iptif.png";
import portfolioImage from "../assets/project-portfolio-1.jpg";
import mslLogo from "../assets/msl-logo-expanded.jpeg";
import mslLogoTransparent from "../assets/msl-logo-transparent.png";
import mslProfilePhoto from "../assets/msl-profile.jpg";
import resumePdf from "../assets/resume.pdf";

// Personal Information
export const personalInfo = {
    name: "Mishal K R",
    title: "Full Stack Developer",
    description: "Passionate developer creating innovative digital experiences",
    email: "mishalrajeev@gmail.com",
    phone: "+91 9633616388",
    location: "Kerala, India",
    resume: resumePdf,
    photo: mslProfilePhoto,
    logoNormal: mslLogo,
    logoTransparent: mslLogoTransparent,
    socialLinks: {
        github: "https://github.com/MsL-Mishal",
        linkedin: "https://linkedin.com/in/mishal-k-r",
        twitter: "https://x.com/MishalMsLz",
        leetcode: "https://leetcode.com/u/MISHALKR/",
        geeksforgeeks: "https://www.geeksforgeeks.org/user/mishalkr_mslz/",
    },
};

// Education
export const education = [
    {
        id: 1,
        degree: "M.Tech in Computer and Information Science",
        university: "Cochin University of Science and Technology",
        startDate: "2020",
        endDate: "2022",
        description: [
            "Specialized in Computer and Information Science",
            "University Union Councellor of the Batch",
            "University 3rd Rank Holder",
        ],
        image: cusatImage,
    },
    {
        id: 2,
        degree: "B.Tech in Computer Science and Engineering",
        university: "Cochin University of Science and Technology",
        startDate: "2014",
        endDate: "2019",
        description: [
            "Specialized in Computer Science and Engineering",
            "Graduated with First Class",
            "GATE 2019 Qualified in First Attempt",
        ],
        image: cusatImage,
    },
];

// Work Experience
export const workExperience = [
    {
        id: 1,
        title: "Freelance Software Developer",
        company: "Freelance",
        startDate: "January 2025",
        endDate: "Present",
        description: [
            "Worked on full-stack apps using MERN stack, focusing on API development, user auth (JWT), and MongoDB schema design.",
            "Designed responsive UIs with React, Tailwind CSS.",
            "Used Postman for API testing and followed MVC architecture.",
            "Note: Freelance projects were taken for learning and upskilling purposes, not tied to public clients or deliverables.",
        ],
        image: mslLogo,
    },
    {
        id: 2,
        title: "Assistant Professor",
        company: "Department of Computer Applications, CUSAT",
        startDate: "September 2023",
        endDate: "September 2024",
        description: [
            "Taught: OOP with Java, Web Technologies and Programming, Python, MongoDB, MySQL.",
            "Guided final-year projects and coordinated class activities.",
            "Conducted labs and hands-on coding sessions for data management and programming courses.",
        ],
        image: cusatImage,
    },
    {
        id: 3,
        title: "Software Engineer",
        company: "IIT Palakkad Technology Ihub Foundation (IPTIF)",
        startDate: "November 2022",
        endDate: "February 2023",
        description: [
            "Worked on an AI-based Smart Agriculture Project.",
            "Conducted case studies and handled data collection and preprocessing.",
            "Mentored IIT OELP students and contributed to research proposals.",
        ],
        image: iptifImage,
    },
];

// Projects
export const projects = [
    {
        id: 1,
        title: "Portfolio Website",
        description:
            "A modern, responsive portfolio website built with React and Framer Motion, featuring smooth animations and dark mode.",
        image: portfolioImage,
        technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
        githubLink: "https://github.com/MsL-Mishal/MsL-Mishal.github.io",
        liveLink: "https://msl-mishal.github.io/",
    },
];

// Skills
export const skills = {
    frontend: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Next.js", level: 80 }
    ],
    backend: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Java", level: 75 },
        { name: "Python", level: 70 },
        { name: "C++", level: 65 },
        { name: "PostgreSQL", level: 70 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 75 },
    ],
    tools: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 70 },
        { name: "AWS", level: 65 },
        { name: "VS Code", level: 75 },
        { name: "Postman", level: 80 },
        { name: "Prisma", level: 80 },
        { name: "Turborepo", level: 70 },
        { name: "Websockets", level: 75 },
    ],
};

export const additionalSkills = [
    "Problem Solving",
    "Agile/Scrum",
    "Version Control",
    "REST APIs",
    "API Design",
    "Database Design",
    "Responsive Design",
    "Monorepo",
    "MVC",
    "CI/CD",
    "Vite",
    "npm",
    "Bcrypt",
    "JWT",
    "Zod",
    "Mongoose",
    "Framer Motion",
    "Recoil",
    "Context API",
    "NextAuth.js",
];
