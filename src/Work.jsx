import React from "react";
import WorkImg from "./assets/workImg.jpeg";
import realEstate from "./assets/realestate.jpg";
import buyanything from "./assets/buyanything.png";
import weatherapp from "./assets/weatherapp.png";
import hungryjunction from "./assets/hungryjunction.png";
const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${buyanything})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="px-4 text-2xl font-bold tracking-wider text-white">
                BuyAnything
              </span>
              <div className="pt-8 text-center">
                <a target="_blank" href="https://buyanythingstore.netlify.app/">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Shubham-Kumar25/buyanything.git"
                >
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${weatherapp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider text-white">
                Weather App
              </span>
              <div className="pt-8 text-center">
                <a target="_blank" href="https://weatherbuddyapp.netlify.app/">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Shubham-Kumar25/weatherapp.git"
                >
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${hungryjunction})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold tracking-wider text-white">
                Hungry Junction
              </span>
              <div className="pt-8 text-center">
                <a target="_blank" href="https://hungry-junction.netlify.app/">
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Shubham-Kumar25/hungry-junction.git"
                >
                  <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
