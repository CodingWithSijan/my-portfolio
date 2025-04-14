import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import ProfilePicture from "../assests/profile_picture.jpg";
import ProfilePicture2 from "../assests/profile_picture2.jpg";
import { Link } from "react-scroll";
import { BsFillBriefcaseFill } from "react-icons/bs";

// HomePage
const Homepage = () => {
  return (
    <>
      <div name="home" className="w-full h-full bg-[#0a192f]">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white">
          <div className="p-5 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] flex flex-row mb-8">
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
          <h2 className="text-4xl sm:text-5xl py-3 text-gray-400">
            I am a <span className="text-gray-200">Web Developer</span>
          </h2>
          <h2 className="py-4 text-gray-300">
           Hi, I'm Sijan Pradhan, a passionate and results-driven Developer Programmer with hands-on experience building modern, scalable web applications. I hold a Bachelor's degree in Information Technology from Central Queensland University and have developed a strong foundation in front-end and back-end development, particularly using the MERN stack (MongoDB, Express.js, React, Node.js).

One of the most defining chapters in my professional journey was my time at Irak Solutions Pty Ltd. At Irak, I was deeply involved in the design, development, and deployment of several internal and client-facing systems. My role focused on building user-centric features, maintaining scalable codebases, and optimizing performance. I collaborated closely with cross-functional teams to deliver high-quality software solutions, contributing significantly to the company's technological growth.

In addition to my technical experience, I bring a strong sense of responsibility, problem-solving skills, and a constant desire to learn and grow. Whether it's improving UI/UX, writing clean backend APIs, or exploring the latest in AI, I'm always excited to take on new challenges and push the boundaries of what technology can do.

Let’s build something impactful together.


          </h2>
          <div className="flex flex-col sm:flex-row justify-start md:gap-4 items-center">
            <button className="text-white group w-[164px] border-2 px-6 py-3 my-2 flex items-center font-bold hover:bg-green-600 hover:border-green-600">
              <Link
                activeClass="active"
                to="skills"
                smooth={true}
                duration={500}
              >
                View Skills
              </Link>
              <HiArrowNarrowRight className="ml-2 group-hover:rotate-90 duration-200" />
            </button>
            <button className="text-white w-[164px] text-xs md:text-lg group border-2 px-6 py-3 my-2 flex items-center font-bold hover:bg-pink-600 hover:border-pink-600">
              <Link
                activeClass="active"
                to="about"
                smooth={true}
                duration={500}
              >
                About Me
              </Link>
              <HiArrowNarrowRight className="ml-2 group-hover:rotate-90 duration-200" />
            </button>
            <button className="text-white group w-[164px] border-2 px-6 py-3 my-2 flex items-center font-bold hover:bg-orange-600 hover:border-orange-600">
              <Link
                activeClass="active"
                to="contact"
                smooth={true}
                duration={500}
              >
                Contact Me
              </Link>
              <HiArrowNarrowRight className="ml-2 group-hover:rotate-90 duration-200" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
