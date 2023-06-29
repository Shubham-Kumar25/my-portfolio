import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid px-4 sm:grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Shubham, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I'm a fresher Front-End Developer with a passion for creating
              visually stunning and user-friendly websites. By leveraging my
              skills in HTML, CSS, Tailwind CSS, JavaScript, and React, I strive
              to deliver innovative solutions that leave a lasting impact. With
              a commitment to continuous learning and seamless collaboration
              using Git and GitHub, I'm ready to embark on a journey to create
              exceptional web experiences. Let's connect and make a difference
              together in the digital world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
