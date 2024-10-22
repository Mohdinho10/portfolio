/* eslint-disable react/no-unescaped-entities */
import { useForm } from "@formspree/react";
import { contactDetails } from "../assets/data";
import { toast } from "react-toastify";
import { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Contact() {
  const [state, handleSubmit] = useForm("mvgogpga");

  // Use useEffect to handle toast notifications
  useEffect(() => {
    if (state?.succeeded) {
      toast.success("Thank you for your submission!");
    }

    if (state?.errors?.length > 0) {
      toast.error("Something went wrong!");
    }
  }, [state?.succeeded, state?.errors]); // Only run when these values change

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
              <div className="space-y-4">
                <p className="text-sm">{contactDetail.email}</p>
                <p className="cursor-pointer font-bold duration-300 hover:text-primaryColorLight">
                  {contactDetail.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 space-y-3 rounded-3xl border border-primaryColor bg-sectionColor px-5 py-10 dark:bg-darkSectionColor md:px-10 md:py-14 lg:px-14 lg:py-20"
        >
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
                required
                className="w-full md:w-1/2"
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                autoComplete="off"
                required
                className="w-full md:w-1/2"
              />
            </div>

            <div className="flex flex-col items-center gap-3 md:flex-row">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                autoComplete="off"
                required
                className="w-full md:w-1/2"
              />
              <input
                type="tel" // Changed to "tel" for phone number input
                placeholder="Phone Number"
                name="phone"
                autoComplete="off"
                required
                className="w-full md:w-1/2"
              />
            </div>
          </div>

          <div>
            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              required // Added required attribute for validation
              className="w-full resize-none" // Added width for textarea
            />
            <button
              type="submit"
              disabled={state?.submitting} // Disable button while submitting
              className="btn" // Optional success styling
            >
              <span className="z-10">
                {state?.submitting ? (
                  <ClipLoader color="white" size={20} />
                ) : (
                  "Submit"
                )}
              </span>
            </button>
          </div>

          {/* {state?.errors?.length > 0 && (
              <p className="text-red-500">Something went wrong!</p> // Error message display
            )}
            {state.succeeded && (
              <p className="text-green-500">Thank you for your submission!</p> // Success message display
            )} */}
        </form>
      </div>
    </section>
  );
}

export default Contact;
