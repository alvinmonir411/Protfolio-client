import React from "react";
import Marquee from "react-fast-marquee";

const Marque = () => {
  return (
    <div className="bg-black overflow-hidden p-3">
      <Marquee speed={50} loop={0} pauseOnHover={true}>
        {[
          "Full Stack Developer 💻",
          "Web Developer ⚛️",
          "React Specialist 📱",
          "Responsive Design Expert",
        ].map((text, index) => (
          <span
            key={index}
            className="mx-8 text-xl font-bold bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-transparent whitespace-nowrap"
          >
            {text}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default Marque;
