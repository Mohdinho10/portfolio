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
    desc: "Crafting a unique identity for your business through thoughtful design and strategic branding. We help you communicate your values and vision effectively to your audience.",
    icon: <FaUserCircle />,
  },
  {
    title: "Hosting Websites",
    desc: "Reliable and secure web hosting solutions tailored to your needs. i ensure your website is always accessible, providing a solid foundation for your online presence.",
    icon: <FaGlobe />,
  },
  {
    title: "Web Development",
    desc: "Building responsive and user-friendly websites that engage visitors and drive results. My development process focuses on creating seamless experiences that reflect your needs.",
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
    description:
      "This is a Tourism Booking System that enables tourists to browse and book various tours without the need for online payment integration. The application provides detailed information about each tour, including itineraries, locations, and pricing, making it easy for users to plan their trips.",
    technologies: ["react,mongoDB,reactbootstrap,express"],
    liveSite: "https://travel-world-wo14.onrender.com",
    github: "https://github.com/Mohdinho10/Travel-World",
  },
  {
    title: "Medicare",
    id: 2,
    img: project2,
    description:
      "This is a Doctor Appointment Booking System that allows users to easily schedule appointments with healthcare professionals and securely process payments. The application features a user-friendly interface for both patients and doctors, enhancing the overall healthcare experience.",
    technologies: ["react,mongoDB,tailwind,express"],
    liveSite: "https://medicare-bjgc.onrender.com",
    github: "https://github.com/Mohdinho10/Medicare",
  },
  {
    title: "Dream Place",
    id: 3,
    img: project3,
    description:
      "This is a platform that allows users to buy and rent various properties, facilitating connections between property owners and potential buyers or renters. The application provides comprehensive listings with detailed descriptions, images, and contact information, enabling users to make informed decisions",
    technologies: ["react,express,,prisma,SASS"],
    liveSite: "https://dream-place-ukbx.onrender.com",
    github: "https://github.com/Mohdinho10/Dream-Place",
  },
  {
    title: "Dream Nest",
    id: 4,
    img: project4,
    description:
      "This is a Accommodation Booking System that allows users to browse and book various places for their stay. The application provides detailed information about each accommodation option, including amenities, availability, and pricing, enabling users to make informed decisions about their travel plans",
    technologies: ["react,mongo,materialUI,express,SASS"],
    liveSite: "https://dream-nest-zpmr.onrender.com",
    github: "https://github.com/Mohdinho10/Dream-Nest",
  },
];
