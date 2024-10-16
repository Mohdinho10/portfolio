import { HiArrowRight } from "react-icons/hi";

function Card({ service }) {
  return (
    <div className="shadow-shadowOne from-bodyColor group flex h-80 w-full items-center rounded-lg bg-gradient-to-r px-12 py-10 transition-colors duration-100 hover:bg-gradient-to-b dark:to-[#2e72ca] dark:hover:from-black dark:hover:to-[#2e72ca]">
      <div className="h-72 overflow-y-hidden">
        <div className="flex h-full translate-y-16 flex-col gap-10 transition-transform duration-500 group-hover:translate-y-0">
          <div className="flex h-8 w-10 flex-col justify-between">
            <span className="text-designColor text-5xl">{service.icon}</span>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-titleFont text-xl font-bold md:text-2xl">
              {service.title}
            </h2>
            <p className="base">{service.desc}</p>
            <span className="text-2xl">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
