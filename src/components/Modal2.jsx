import { projects } from "../assets/data";

function Modal({ activeId, setShowModal }) {
  const project = projects.find((project) => project.id === activeId);

  return (
    <div className="fixed left-0 top-0 z-10 h-full w-full bg-white bg-opacity-70 shadow-[3px_3px_-8px_3px_#073764] dark:bg-darkSectionColor dark:bg-opacity-40">
      <div className="absolute left-1/2 top-1/2 z-20 max-w-[600px] -translate-x-1/2 -translate-y-1/2 transform rounded-[8px] bg-white dark:bg-darkSectionColor">
        <div>
          <figure>
            <img
              src={project.img}
              alt=""
              className="m-4 w-[90%] rounded-[8px]"
            />
          </figure>
        </div>

        <div className="pl-4">
          <h2 className="my-3 text-2xl font-[700]">{project.title} </h2>
          <p className="text-[15px] leading-7">
            {project.description} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Soluta praesentium, ipsam quod aliquid asperiores
            a saepe eveniet voluptate pariatur perferendis eos ratione esse.
            Expedita sint impedit facilis, in doloribus dolorem.
          </p>

          <div className="flex-items-center mt-5 flex-wrap gap-3">
            <h4 className="text-[18px] text-[500]">Technologies:</h4>

            {project.technologies.map((item, index) => (
              <span
                key={index}
                className="leading-0 rounded-[5px] bg-gray-200 px-2 py-1 text-[14px] dark:text-black"
              >
                {item}{" "}
              </span>
            ))}
          </div>
          <a href={project.liveSite}>
            <button className="btn my-5 rounded-[8px] px-4 py-2 font-[500]">
              Live Site
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Modal;
