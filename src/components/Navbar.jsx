import { useEffect, useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { IoMoonOutline, IoSunny } from "react-icons/io5";
import darkModeLogo from "../assets/darkMode-logo.png";
import lightModeLogo from "../assets/lightMode-logo.png";

function Navbar({ isDarkMode, setIsDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isDarkMode);

  // Check localStorage for the user's theme preference on initial load
  useEffect(() => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [setIsDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("mode", newMode ? "dark" : "light");
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  const headerRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTo > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Add your logic here to check if the menu should be closed on scroll
      setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency

  useEffect(() => {
    handleStickyHeader();
    return () => {
      window.removeEventListener("scroll", handleStickyHeader);
    };
  }, []);

  // const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      id="navbar"
      className="sticky__header sticky top-0 z-50 duration-300"
      ref={headerRef}
    >
      <nav className="container relative flex items-center justify-between sm:pt-4 md:pt-0">
        <div className="sm:w-[50px] md:w-[60px]" id="logo">
          <img src={isDarkMode ? darkModeLogo : lightModeLogo} alt="logo" />
        </div>

        <div
          id="nav-menu"
          className={`absolute left-0 top-0 w-full bg-primaryColor py-24 sm:z-20 lg:static lg:ml-auto lg:block lg:w-auto lg:border-none lg:bg-transparent lg:py-0 ${isMenuOpen ? "" : "hidden"} `}
        >
          <ul className="flex flex-col items-center gap-8 text-center sm:text-textColor lg:m-4 lg:flex-row lg:text-primaryColor dark:lg:text-textColor">
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
            <li>
              <button className="btn">
                <span className="z-10">Hire Me</span>
              </button>
            </li>
          </ul>

          <div
            id="nav-close"
            className="absolute right-3 top-6 cursor-pointer text-3xl text-whiteColor"
          >
            <IoMdClose
              className="h-6 w-6 cursor-pointer lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
        </div>
        {/* Dark Mode feature */}
        <div className="flex cursor-pointer items-center gap-5">
          <span onClick={toggleTheme}>
            {isDarkMode ? (
              <IoSunny className="h-7 w-7" />
            ) : (
              <IoMoonOutline className="h-7 w-7" />
            )}
          </span>
          <BiMenu
            className="h-7 w-7 cursor-pointer lg:hidden"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
