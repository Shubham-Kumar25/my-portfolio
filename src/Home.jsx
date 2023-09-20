import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Photo from "./assets/photo.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="flex max-w-[1000px] mx-auto h-full justify-center items-center">
        <div className="flex flex-col justify-center px-8 ">
          <p className="text-pink-600">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Shubham Kumar
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
            I'm a Front-End Developer.
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px]">
            I'm a Front-End Developer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I'm focused
            on building responsive web applications.
          </p>
          <div>
            <Link to="work" smooth={true} duration={500}>
              <button className="flex items-center px-6 py-3 my-2 text-white border-2 group hover:bg-pink-600 hover:border-pink-600">
                View Work
                <span className="duration-300 group-hover:rotate-90">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <img className="hidden w-64 h-64 md:block" src={Photo} alt="My Photo" />
      </div>
    </div>
  );
};

export default Home;
