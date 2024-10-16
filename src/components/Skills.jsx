import { skills } from "../assets/data";
import Skill from "./Skill";

function Skills() {
  return (
    <section id="skills" className="container">
      <div className="flex flex-col items-center gap-5 text-center">
        <h2 className="subtitle">My Skills</h2>
        <p className="max-w-4xl">
          {" "}
          I am proficient in web development with a strong focus on the MERN
          stack (MongoDB, Express, React, Node.js). I have experience in
          creating responsive and user-friendly applications using JavaScript,
          HTML, and CSS. Additionally, I am skilled in version control with Git
          and continuously strive to stay updated with the latest technologies
          and best practices.
        </p>
      </div>

      {/* Icons */}
      <div className="mt-10 flex flex-wrap justify-center gap-5 md:gap-10">
        {skills.map((skill, index) => (
          <Skill key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
