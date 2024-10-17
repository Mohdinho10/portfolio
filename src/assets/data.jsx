import { FaGlobe, FaPhone, FaUserCircle } from "react-icons/fa";
import { MdEmail, MdOutlineDeveloperMode } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import tailwind from "/images/tailwind.svg";
import node from "/images/node.png";
import mongo from "/images/mongodb.svg";
import react from "/images/react.svg";
import js from "/images/js.svg";
import nextJs from "/images/nextjs.svg";
import firebase from "/images/firebase.svg";
const project1 = new URL("./projects/project1.PNG", import.meta.url).href;
const project2 = new URL("./projects/project2.PNG", import.meta.url).href;
const project3 = new URL("./projects/project3.PNG", import.meta.url).href;
const project4 = new URL("./projects/project4.PNG", import.meta.url).href;

export const services = [
  {
    title: "Branding",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad.",
    icon: <FaUserCircle />,
  },
  {
    title: "Hosting Websites",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad.",
    icon: <FaGlobe />,
  },
  {
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad.",
    icon: <MdOutlineDeveloperMode />,
  },
];

export const skills = [
  {
    img: react,
    percentage: 92,
    name: "React",
  },
  {
    img: node,
    percentage: 92,
    name: "Node",
  },
  {
    img: tailwind,
    percentage: 92,
    name: "Tailwind",
  },
  {
    img: mongo,
    percentage: 92,
    name: "MongoDB",
  },

  {
    img: js,
    percentage: 92,
    name: "Javascript",
  },
  {
    img: firebase,
    percentage: 92,
    name: "FireBase",
  },
  {
    img: nextJs,
    percentage: 92,
    name: "NextJs",
  },
];

export const contactDetails = [
  {
    name: "Phone",
    icon: <FaPhone />,
    detail: "+255 693 275 058",
  },
  {
    name: "Email",
    icon: <MdEmail />,
    detail: "muhammadqulatain123@gmail",
  },
  {
    name: "Address",
    icon: <FaLocationDot />,
    detail: "Kariakoo Rufiji St, Dar es Salaam",
  },
];

export const projects = [
  {
    title: "Travel World",
    id: 1,
    img: project1,
    description: "A Tourist project",
    technologies: ["react,mongoDB,reactbootstrap,express"],
    liveSite: "https://travel-world-wo14.onrender.com",
    github: "https://github.com/Mohdinho10/Travel-World",
  },
  {
    title: "Medicare",
    id: 2,
    img: project2,
    description: "A Doctor's appointment project",
    technologies: ["react,mongoDB,tailwind,express"],
    liveSite: "https://medicare-bjgc.onrender.com",
    github: "https://github.com/Mohdinho10/Medicare",
  },
  {
    title: "Dream Place",
    id: 3,
    img: project3,
    description: "A house market place project",
    technologies: ["react,express,,prisma,SASS"],
    liveSite: "https://dream-place-ukbx.onrender.com",
    github: "https://github.com/Mohdinho10/Dream-Place",
  },
  {
    title: "Dream Nest",
    id: 4,
    img: project4,
    description: "A online booking project",
    technologies: ["react,mongo,materialUI,express,SASS"],
    liveSite: "https://dream-nest-zpmr.onrender.com",
    github: "https://github.com/Mohdinho10/Dream-Nest",
  },
];

// export const projects = [
//   {
//     title: "Project One",
//     description: "This is a brief description of Project One.",
//     img: project1,
//     github: "https://github.com/yourusername/project-one",
//     liveSite: "https://yourusername.github.io/project-one/",
//   },
//   {
//     title: "Project Two",
//     description: "This is a brief description of Project Two.",
//     img: project2,
//     github: "https://github.com/yourusername/project-two",
//     liveSite: "https://yourusername.github.io/project-two/",
//   },
//   {
//     title: "Project Two",
//     description: "This is a brief description of Project Two.",
//     img: project3,
//     github: "https://github.com/yourusername/project-two",
//     liveSite: "https://yourusername.github.io/project-two/",
//   },
//   {
//     title: "Project Two",
//     description: "This is a brief description of Project Two.",
//     img: project4,
//     github: "https://github.com/yourusername/project-two",
//     liveSite: "https://yourusername.github.io/project-two/",
//   },
//   // Add more projects as needed
// ];
