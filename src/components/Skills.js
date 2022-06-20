import React from "react";
import CSS from "../assests/css.png";
import HTML from "../assests/html.png";
import Javascript from "../assests/javascript.png";
import ReactImg from "../assests/react.png";
import TailwindCSS from "../assests/tailwind.png";
import JavaImg from "../assests/java.png";
import GitHub from "../assests/github.png";
import Bootstrap from "../assests/bootstrap.png";
import MySql from "../assests/mysql.jpg";

const Skills = () => {
  return (
    <>
      <div name="skills" className="bg-[#0a192f] text-gray-300 w-full h-screen">
        {/* container */}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-green-300 ">
              Skills
            </p>
            <p className="py-4">These are the technologies I've worked with</p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={HTML} alt="html icon" className="w-20 mx-auto " />
              <p>HTML</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={CSS} alt="css icon" className="w-20 mx-auto " />
              <p>CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img
                src={Javascript}
                alt="javascript icon"
                className="w-20 mx-auto "
              />
              <p>Javascript</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={ReactImg} alt="react icon" className="w-20 mx-auto " />
              <p>ReactJs</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img
                src={TailwindCSS}
                alt="html icon"
                className="w-20 mx-auto "
              />
              <p>TailwindCSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={JavaImg} alt="java icon" className="w-20 mx-auto " />
              <p>Java</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={GitHub} alt="github icon" className="w-20 mx-auto " />
              <p>Github</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img
                src={Bootstrap}
                alt="bootstrap icon"
                className="w-20 mx-auto "
              />
              <p>Bootstrap</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img src={MySql} alt="mysql icon" className="w-20 mx-auto " />
              <p>MySQL</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
