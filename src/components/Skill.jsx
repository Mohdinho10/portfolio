function Skill({ skill }) {
  return (
    <div className="skills__card w-full max-w-44">
      <div className="grid place-items-center space-y-5 rounded-3xl border border-transparent bg-sectionColor px-4 py-7 grayscale-[85%] duration-300 hover:border-primaryColorLight hover:bg-primaryColor hover:grayscale-0 dark:bg-darkSectionColor">
        <img src={skill.img} alt="" className="h-[3rem] max-w-16" />
        {/* <p className="text-2xl font-bold text-primaryColorLight">
          {skill.percentage}%
        </p> */}
      </div>
      <p className="mt-3 text-center capitalize text-primaryColorLight">
        {skill.name}
      </p>
    </div>
  );
}

export default Skill;
