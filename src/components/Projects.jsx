import { useState } from "react";
import { projects } from "../assets/data";
import Modal from "./Modal";

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveId(id);
  };
  return (
    <section
      id="projects"
      className="bg-sectionColor py-20 dark:bg-darkSectionColor"
    >
      <div className="gap5 flex flex-col items-center text-center">
        <h2 className="subtitle">My Recent Projects</h2>
        <p className="mt-2 max-w-4xl">
          {" "}
          I have worked on a variety of projects that showcase my skills in web
          development, including responsive websites, web applications, and
          user-friendly interfaces. Each project reflects my commitment to
          quality and my passion for creating innovative solutions. Below, you
          can find a selection of my recent work, highlighting the technologies
          used and the challenges overcome during development.
        </p>
      </div>
      <div className="container mt-12 flex flex-wrap items-center gap-4">
        {projects.map((project, index) => (
          <div
            className="group relative max-w-full sm:w-[100%] md:w-[31.8%] lg:w-[32.2%]"
            key={index}
          >
            <figure>
              <img
                src={project.img}
                alt=""
                className="h-[200px] w-[100%] rounded-[8px]"
              />
            </figure>
            <div className="absolute left-0 top-0 z-[5] hidden h-full w-full bg-white bg-opacity-60 group-hover:block dark:bg-darkSectionColor dark:bg-opacity-60">
              <div className="flex h-full w-full items-center justify-center">
                <button
                  onClick={() => showModalHandler(project.id)}
                  className="relative flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-primaryColorLight to-primaryColor px-7 py-3 capitalize text-whiteColor"
                >
                  See details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showModal && <Modal setShowModal={setShowModal} activeId={activeId} />}
    </section>
  );
}

export default Projects;
