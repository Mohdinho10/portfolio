import { useEffect } from "react";
import { projects } from "../assets/data";
import { IoCloseSharp } from "react-icons/io5";

function Modal({ activeId, setShowModal }) {
  const project = projects.find((project) => project.id === activeId);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowModal(false);
    };
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setShowModal]); // Empty dependency array ensures this runs once on mount and cleanup on unmount

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed left-0 top-6 z-10 h-full w-full bg-white bg-opacity-70 dark:bg-darkSectionColor dark:bg-opacity-40"
    >
      <div className="absolute left-1/2 top-[10%] z-20 max-w-[600px] -translate-x-1/2 transform rounded-lg bg-white shadow-lg transition-transform duration-300 dark:bg-darkSectionColor md:shadow-xl">
        <figure>
          <img
            src={project.img}
            alt={project.title}
            className="m-4 w-[90%] rounded-lg"
          />
        </figure>

        <div className="p-4">
          <h2 className="my-3 text-2xl font-bold">{project.title}</h2>
          <p className="text-sm leading-4">
            {project.description} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Soluta praesentium, ipsam quod aliquid asperiores
            a saepe eveniet voluptate pariatur perferendis eos ratione esse.
            Expedita sint impedit facilis, in doloribus dolorem.
          </p>
          {/* 
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <h4 className="text-lg font-medium">Technologies:</h4>

            {project.technologies.map((item, index) => (
              <span
                key={index}
                className="rounded-md bg-gray-200 px-2 py-1 text-xs dark:text-black"
              >
                {item}
              </span>
            ))}
          </div> */}
          <a href={project.liveSite} target="_blank" rel="noopener noreferrer">
            <button className="my-4 rounded-lg bg-primaryColor px-4 py-2 font-medium text-white transition duration-300">
              Live Site
            </button>
          </a>
        </div>
        <button
          onClick={() => setShowModal(false)}
          className="absolute right-0 top-0 z-30 flex h-10 w-10 items-center justify-center p-2 text-gray-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 dark:text-white"
        >
          <IoCloseSharp className="h-8 w-10" />
        </button>
      </div>
    </div>
  );
}

export default Modal;
