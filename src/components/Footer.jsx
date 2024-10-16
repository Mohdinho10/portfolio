import { FaArrowCircleUp } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer
        id="footer"
        className="bg-sectionColor py-10 dark:bg-darkSectionColor"
      >
        <div className="container flex flex-col items-center gap-5">
          <div className="py-5 text-6xl" id="logo">
            M
          </div>
          <div>
            <ul className="flex flex-wrap items-center justify-center space-x-3">
              <li>
                <a href="#services" className="nav-link">
                  Services
                </a>
              </li>
              <li>
                <a href="#skills" className="nav-link">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="nav-link">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* Scroll Up */}
      <a
        href="#"
        className="text-primary dark:text-darkPrimary hover:text-primaryHover dark:hover:text-darkPrimaryHover fixed bottom-4 right-4 text-4xl transition-colors duration-300"
      >
        <FaArrowCircleUp />
      </a>
    </>
  );
}

export default Footer;
