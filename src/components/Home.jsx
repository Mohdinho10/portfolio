import { FaDownload, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub, IoLogoInstagram } from "react-icons/io";
import img from "/images/portfolio1.png";
import resume from "../assets/My-resume.pdf";

function Home() {
  return (
    <section id="hero" className="container relative py-5">
      {/* Blob */}
      <div className="absolute right-0 top-[-20%] h-80 w-80 rounded-full bg-primaryColorLight opacity-50 mix-blend-screen blur-[150px]"></div>

      <div className="container">
        {/* Bg Image */}
        <div className="absolute left-[30%] top-0 hidden animate-scaleAnimation md:block lg:left-[35%]">
          <p className="-z-10 text-[400px] uppercase text-primaryColorLight opacity-5 lg:text-[450px]">
            Hi!
          </p>
        </div>
        {/* Hero Content */}
        <div className="flex items-center gap-5">
          <div className="space-y-2 md:w-1/2">
            <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              I am Muhammad
            </h3>
            <h1 className="title">Web Developer</h1>
            <div className="relative flex justify-center md:hidden">
              {/* Blob */}
              <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-primaryColor opacity-50 mix-blend-screen blur-[150px]"></div>
              <img
                src={img}
                className="my-10 origin-center rounded-[38px] border-2 border-primaryColor duration-300 hover:border-primaryColorLight lg:max-w-[90%]"
                alt=""
              />
            </div>
            <p className="max-w-xl pb-5 text-xl">
              As a dedicated web developer, I specialize in creating dynamic and
              user-friendly websites that not only meet client needs but also
              enhance user experience. Explore my portfolio to see how I can
              bring your vision to life and contribute to your digital success.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <a href={resume} download>
                <button className="btn_outline flex items-center">
                  Download CV <FaDownload className="ml-3 h-5 w-5" />
                </button>
              </a>
              <div className="flex items-center gap-5">
                <div>
                  <a
                    href="https://www.linkedin.com/in/muhammad-abubakar2003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <FaLinkedin className="z-10 h-7 w-7" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/Mohdinho10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <IoLogoGithub className="z-10 h-7 w-7" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/mohdinho_10/profilecard/?igsh=cTlrdmhvdWRwd3Jo"
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoInstagram className="z-10 h-7 w-7" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden justify-center md:flex md:w-1/2">
            {/* Blob */}
            <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-primaryColor opacity-50 mix-blend-screen blur-[150px]"></div>
            <img
              src={img}
              className="my-10 origin-center rounded-[38px] border-2 border-primaryColor duration-300 hover:border-primaryColorLight md:w-full lg:max-w-[80%]"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
