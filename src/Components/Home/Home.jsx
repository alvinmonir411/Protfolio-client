import React from "react";
import Hero from "../Hero";
import About from "../About";
import Skills from "../Skills";
import FeaturedProjects from "../FeaturedProjects";
import AcademicJourney from "../AcademicJourney";
import ContactSection from "../ContactSection ";
import Marque from "../Marque";

const Home = () => {
  return (
    <div className=" ">
      <div>
        <Hero />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <FeaturedProjects />
      </div>
      <div>
        <AcademicJourney />
      </div>
      <div>
        <ContactSection />
      </div>
      <div>
        <Marque />
      </div>
    </div>
  );
};

export default Home;
