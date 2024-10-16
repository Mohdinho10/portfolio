/* eslint-disable react/no-unescaped-entities */
import { contactDetails } from "../assets/data";

function Contact() {
  return (
    <section className="container" id="contact">
      <div className="flex flex-col gap-16 md:flex-row-reverse md:items-center md:gap-10 lg:gap-20">
        {/* Content */}
        <div className="flex-1 space-y-7 md:space-y-10 lg:pl-20 xl:pl-40">
          {contactDetails.map((contactDetail, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-b from-primaryColor to-primaryColorLight text-whiteColor lg:h-14 lg:w-14">
                {contactDetail.icon}
              </div>
              <div className="space-y-1">
                <p className="text-sm">{contactDetail.email}</p>
                <p className="cursor-pointer font-bold duration-300 hover:text-primaryColorLight">
                  {contactDetail.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <form className="flex-1 space-y-3 rounded-3xl border border-primaryColor bg-sectionColor px-5 py-10 dark:bg-darkSectionColor md:px-10 md:py-14 lg:px-14 lg:py-20">
          {/* Subtitle & description */}
          <div className="flex flex-col">
            <h2 className="subtitle">Let's work together!</h2>
            <p className="max-w-2xl py-3 md:py-5">
              I'm excited to hear from you! Whether you have a project in mind,
              need assistance with web development, or just want to chat about
              ideas, I'm here to help. Please fill out the form below, and I'll
              get back to you as soon as possible. Let's create something
              amazing together!
            </p>
          </div>

          <div className="mt-7 space-y-3 md:mt-10">
            <div className="flex flex-col items-center gap-3 md:flex-row">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                autoComplete="off"
                className="w-full md:w-1/2"
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                autoComplete="off"
                className="w-full md:w-1/2"
              />
            </div>

            <div className="flex flex-col items-center gap-3 md:flex-row">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                autoComplete="off"
                className="w-full md:w-1/2"
              />
              <input
                type="phone"
                placeholder="Phone Number"
                name="phone"
                autoComplete="off"
                className="w-full md:w-1/2"
              />
            </div>
          </div>
          <div>
            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              className="resize-none"
            />
            <button className="btn">
              <span className="z-10">Send Message</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
