import { useEffect } from "react";
import { projects } from "../assets/data";
// import { IoCloseSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon

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
  }, [setShowModal]);

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed left-0 top-6 z-10 h-full w-full bg-white bg-opacity-70 dark:bg-darkSectionColor dark:bg-opacity-40"
    >
      <div className="absolute left-1/2 top-[10%] z-20 max-w-[100%] -translate-x-1/2 transform rounded-lg bg-white shadow-lg transition-transform duration-300 dark:bg-darkSectionColor md:top-[15%] md:max-w-[600px] md:shadow-xl">
        {/* <button
          onClick={() => setShowModal(false)}
          className="absolute right-2 top-2 z-30 flex h-10 w-10 items-center justify-center p-2 text-gray-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 dark:text-white"
        >
          <IoCloseSharp className="h-8 w-8" />
        </button> */}

        <figure className="overflow-hidden rounded-lg">
          <img
            src={project.img}
            alt={project.title}
            className="h-auto max-h-[250px] w-full object-cover" // Adjusted max height for smaller screens
          />
        </figure>

        <div className="container p-4">
          <h2 className="my-3 text-xl font-bold">{project.title}</h2>
          <p className="text-sm leading-5">{project.desc}</p>

          <div className="mt-4 flex">
            <a
              href={project.liveSite}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 md:mb-0"
            >
              <button className="rounded-lg bg-primaryColor px-4 py-2 font-medium text-white transition duration-300">
                Live Site
              </button>
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <button className="ml-2 flex items-center justify-center rounded-lg bg-black px-4 py-2 text-white transition duration-300 hover:bg-gray-800">
                <FaGithub className="mr-2" /> GitHub
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
