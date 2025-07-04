import { HiOutlineDesktopComputer } from "react-icons/hi";
import { SiCodeforces, SiLeetcode, SiPython, SiReact, SiNodedotjs, SiMongodb, SiAmazonaws, SiTensorflow, SiDocker, SiPytorch, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiNextdotjs, SiGit } from "react-icons/si";

export const workExp = [
  {
    place: "BlackRock",
    tenure: "Jan 2025 – Present",
    role: "Application Engineer Intern",
    detail1:
    "• Built modular Python ETL pipelines to process 10M+ Sybase records into Snowflake, using multi-threaded ingestion and SQLAlchemy ORM for performance and reusability.",
    detail2:
    "• Ensured 99% unit test coverage using unittest and pytest, strengthening code reliability in the compliance pipeline.",
    detail3:
    "• Created Power BI dashboards on top of Snowflake for real-time compliance insights, enhancing visibility for internal teams.",
    detail4:
    ""
  },
  {
    place: "Bosscoder Academy",
    tenure: "SEP 2023 – OCT 2023",
    role: "Software Engineer Intern",
    detail1:
    "• Built a React.js interface using Material UI, enhancing UI performance and accessibility for Bosscoder Academy's blog page.",
    detail2:
    "• Integrated Amazon SES for automated, personalized emails, driving a 30% increase in user engagement.",
    detail3:
    "• Enhanced UI/UX workflows by leveraging Figma's AI tools to accelerate design iteration and streamline front-end development.",
    detail4:
    ""
  },
  {
    place: "Alumni Cell , NIT Delhi",
    tenure: "Oct 2022 - AUG 2023",
    role: "Web Developer",
    detail1:
    "• Designed and developed dynamic and responsive cell websites using HTML, CSS, Bootstrap, JavaScript, and PHP.",
    detail2:
    "• Utilized Figma for design and conceptualization."
  },
  {
    place: "Startup Cell For Innovation & Entrepreneurship , NIT Delhi ",
    tenure: "Oct 2022 - Jun 2023",
    role: "Technical Lead",
    detail1:
    "• Led the design and development of a responsive cell website using Next.js and Tailwind CSS to deliver an exceptional user experience",
    detail2:
    "• Developed the BEATS event website with HTML, CSS, Bootstrap, and JavaScript."
  },
];

export const comments = [
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const techSkills = [
  { name: 'Python', icon: SiPython, color: '#3776ab', position: [-3, 2, 0], delay: 0 },
  { name: 'PyTorch', icon: SiPytorch, color: '#ee4c2c', position: [0, 3, -1], delay: 1 },
  { name: 'React', icon: SiReact, color: '#61dafb', position: [3, 2, 0], delay: 2 },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', position: [-2, 0, 1], delay: 3 },
  { name: 'MongoDB', icon: SiMongodb, color: '#47a248', position: [2, 0, 1], delay: 4 },
  { name: 'AWS', icon: SiAmazonaws, color: '#ff9900', position: [0, -2, 0], delay: 5 },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#ff6f00', position: [-1, 1, 2], delay: 6 },
  { name: 'Docker', icon: SiDocker, color: '#2496ed', position: [1, 1, 2], delay: 7 },
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e', position: [-3, -1, 1], delay: 8 },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6', position: [3, -1, 1], delay: 9 },
  { name: 'HTML5', icon: SiHtml5, color: '#e34f26', position: [-2, -2, 0], delay: 10 },
  { name: 'CSS3', icon: SiCss3, color: '#1572b6', position: [2, -2, 0], delay: 11 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38b2ac', position: [0, 1, -2], delay: 12 },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000', position: [0, -1, -2], delay: 13 },
  { name: 'Git', icon: SiGit, color: '#f05032', position: [0, 0, 3], delay: 14 },
];

export const techCategories = [
  { name: 'Languages', skills: ['Python', 'JavaScript', 'TypeScript'] },
  { name: 'Frontend', skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js'] },
  { name: 'Backend', skills: ['Node.js', 'MongoDB'] },
  { name: 'AI/ML', skills: ['PyTorch', 'TensorFlow'] },
  { name: 'DevOps', skills: ['Docker', 'AWS', 'Git'] },
];
