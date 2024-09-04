import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpeg";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `"Opportunities don't happen. You create them." – Chris Grosser

I embrace this mindset, leveraging my passion for Computer Science to drive continuous learning and innovation. I aspire to join a forward-thinking team where I can contribute to the company's success while enhancing my development as a Software Engineer. With a strong foundation in Efficient Development and Problem Solving, I bring valuable skills in Effective Communication and Team Leadership to the table. My collaborative and driven nature sets me apart, and I am eager to make a meaningful impact.`;

export const ABOUT_TEXT = 'I’m currently a 2nd year BE student at AMC Engineering College, diving into Data Science and exploring web development. With a strong foundation in Python and C programming, I’ve completed virtual internships and certificate courses that have enhanced my skills in Data Science Fundamentals and Azure Data Fundamentals. I thrive in both independent and team settings, balancing my technical pursuits with a passion for drawing and dance. My goal is to continuously develop my abilities as a Software Engineer and make meaningful contributions to the field.';

export const CERTIFICATIONS = [
  {
    year: "2023",
    role: "Basics of Python",
    company: "Infosys Springboard",
    description: `Completed a certification course in Python, covering fundamental concepts and programming skills.`,
    technologies: ["Python"],
    link: "/certificate/infosyspython.jpg", 
  },
  {
    year: "2024",
    role: "Published Journal Paper",
    company: "JETIR (Journal of Emerging Technology and Innovative Research)",
    description: `Authored a research paper detailing an IoT-based gas leakage detector system designed to detect and alert users about gas leaks in real-time.`,
    technologies: ["IoT", "Sensors", "Arduino"],
    link: "/certificate/jetircer.jpg",
  },
  {
    year: "2023",
    role: "App Development Intern",
    company: "Bharat Intern",
    description: `Completed a virtual internship focused on app development, gaining hands-on experience in designing and developing mobile applications.`,
    technologies: ["Android Studio"],
    link: "/certificate/bharatintern.jpg", 
  },
  {
    year: "2023",
    role: "Data Science with Python",
    company: "Coincent",
    description: `Accomplished a rigorous training course in Data Science utilizing Python, demonstrating proficiency in the field.`,
    technologies: ["Python"],
    link: "/certificate/coincentds.jpg",
  },
  {
    year: "2024",
    role: "Azure Data Fundamentals (DP-900)",
    company: "Microsoft",
    description: `Successfully completed the certification examination, demonstrating competence in fundamental data concepts and Microsoft Azure data services.`,
    technologies: ["Azure", "SQL", "Data Storage", "Data Analysis"],
    link: "/certificate/Azure Data Fundamentals.jpg", 
  },
];

export const PROJECTS = [
  {
    title: "IoT Based Gas Leakage Detector",
    image: project1,
    link: "/researchpaperiot.pdf",
  
    description:
      "A system designed to detect gas leaks using IoT technology, providing real-time alerts and safety measures.",
    technologies: ["Python", "IoT", "Embedded Systems"],
  },
  {
    title: "Portfolio Website",
    image: project2, 
    description:
      "A personal portfolio website to showcase projects, skills, and contact information, currently in progress.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Temperature Converter",
    image: project3,
    link: "https://github.com/abhini1516/Temperature-Converter.git", 
    description:
      "An Android app that converts temperatures between Celsius, Fahrenheit, and Kelvin. ",
    technologies: ["Android Studio", "Java"],
  },
  {
    title: "Unscramble Tech Words",
    image: project4,
    link: "https://github.com/abhini1516/Unscramble-the-word.git", 
    description:
      "A C program that unscrambles scrambled tech-related words to help with learning and practice. ",
    technologies: ["C Programming"],
  },
];


export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/abhini-s-220345281/",
  github: "https://github.com/abhini1516",
  email: "abhini.s.amcec@gmail.com",
  instagram: "https://www.instagram.com/abhini.s_v153827/",
  resume:"/MyResume.pdf"
};


