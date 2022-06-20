import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import ProfilePicture from "../assests/profile_picture.jpg";
import ProfilePicture2 from "../assests/profile_picture2.jpg";

// HomePage
const Homepage = () => {
  return (
    <>
      <div name="home" className="w-full h-screen bg-[#0a192f]">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white">
          <div className="md:h-[20%] w-full flex flex-row mb-8">
            <img
              src={ProfilePicture}
              alt="Profile Picture"
              className="shadow-lg shadow-slate-800 rounded-full"
            />
          </div>
          <p className="text-green-300 text-2xl sm:text-3xl">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl  font-bold text-white">
            Sijan Pradhan
          </h1>
          <h2 className="text-2xl py-3 text-green-500">I am Web Developer</h2>
          <h2 className="py-4 text-gray-400">
            I am a Information technology student capable of managing technology
            projects from concept to completion with remarkable deadline
            sensitivity. I have Strong analytical skills combined with
            experience in object oriented programming techniques. I am a
            Compatible team player through complete project cycles, testing, and
            final implementation. I have a Good communication skill, fast and
            effective learner. Fluent in English. Good knowledge of HTML5, CSS,
            Javascript, Bootstrap 3/4, TailwindCSS, React, JQuery, Data
            Modelling, MySQL, PHP. Have a fair knowledge of MVC framework such
            as codeigniter.
          </h2>
          <div>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center font-bold hover:bg-green-600 hover:border-green-600">
              View Work
              <HiArrowNarrowRight className="ml-2 group-hover:rotate-90 duration-200" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
