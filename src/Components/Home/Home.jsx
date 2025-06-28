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
      <div id="Home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="fetureProject">
        <FeaturedProjects />
      </div>
      <div>
        <AcademicJourney />
      </div>
      <div id="Contact">
        <ContactSection />
      </div>
      <div>
        <Marque />
      </div>
    </div>
  );
};

export default Home;
