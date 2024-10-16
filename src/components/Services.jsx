import { services } from "../assets/data";
import Card from "./Card";

function Services() {
  return (
    <section
      id="services"
      className="w-full bg-sectionColor py-20 dark:bg-darkSectionColor"
    >
      <div className="gap5 flex flex-col items-center text-center">
        <h2 className="subtitle">My Quality Services</h2>
        <p className="mt-2 max-w-2xl">
          I transform your ideas and desires into a distinctive web project that
          inspires both you and your customers
        </p>
      </div>
      <div className="container grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {services.map((service, index) => (
          <Card key={index} service={service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
