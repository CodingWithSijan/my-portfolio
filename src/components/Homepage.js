import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import ProfilePicture from "../assests/profile_picture.jpg";
import { Link } from "react-scroll";

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
							alt="Profile"
							className="shadow-lg shadow-slate-800 rounded-full"
						/>
					</div>
					<p className="text-green-300 text-2xl sm:text-3xl">Hi, my name is</p>
					<h1 className="text-4xl sm:text-7xl  font-bold text-white">
						Sijan Pradhan
					</h1>
					<h2 className="text-4xl sm:text-5xl py-3 text-gray-400">
						I am a <span className="text-green-400">Software Developer</span>
					</h2>
					<h2 className="py-4 text-gray-300">
						<span className="hover:text-green-400 transition duration-300">
							Hi, I'm{" "}
							<span className="text-green-300 font-bold">Sijan Pradhan</span>, a
							passionate and results-driven Developer Programmer
						</span>{" "}
						with hands-on experience building{" "}
						<span className="hover:text-green-400 transition duration-300">
							modern, scalable web applications
						</span>
						. I hold a{" "}
						<span className="text-green-300 font-bold hover:text-green-400 transition duration-300">
							Bachelor's degree in Information Technology
						</span>{" "}
						from Central Queensland University and have developed a strong
						foundation in{" "}
						<span className="hover:text-green-400 transition duration-300">
							front-end and back-end development
						</span>
						, particularly using the{" "}
						<span className="text-green-300 font-bold hover:text-green-400 transition duration-300">
							MERN stack (MongoDB, Express.js, React, Node.js)
						</span>
						. One of the most defining chapters in my professional journey was
						my time at{" "}
						<span className="text-green-300 font-bold hover:text-green-400 transition duration-300">
							Irak Solutions Pty Ltd
						</span>
						. At Irak, I was deeply involved in the{" "}
						<span className="hover:text-green-400 transition duration-300">
							design, development, and deployment
						</span>{" "}
						of several internal and client-facing systems. My role focused on{" "}
						<span className="hover:text-green-400 transition duration-300">
							building user-centric features, maintaining scalable codebases,
							and optimizing performance
						</span>
						. I collaborated closely with cross-functional teams to deliver{" "}
						<span className="hover:text-green-400 transition duration-300">
							high-quality software solutions
						</span>
						, contributing significantly to the company's technological growth.
						In addition to my technical experience, I bring a{" "}
						<span className="hover:text-green-400 transition duration-300">
							strong sense of responsibility, problem-solving skills, and a
							constant desire to learn and grow
						</span>
						. Whether it's{" "}
						<span className="hover:text-green-400 transition duration-300">
							improving UI/UX, writing clean backend APIs, or exploring the
							latest in AI
						</span>
						, I'm always excited to take on new challenges and push the
						boundaries of what technology can do.{" "}
						<span className="text-green-300 font-bold hover:text-green-400 transition duration-300">
							Let’s build something impactful together.
						</span>
					</h2>
					<div className="flex flex-col sm:flex-row justify-start md:gap-4 items-center">
						<Link
							activeClass="active"
							to="skills"
							smooth={true}
							duration={500}
							className="text-white w-[164px] text-xs md:text-lg group border-2 px-6 py-3 my-2 flex items-center font-bold hover:bg-pink-600 hover:border-pink-600 cursor-pointer"
						>
							<span>Skills</span>
							<HiArrowNarrowRight className="ml-2 group-hover:rotate-90 duration-200" />
						</Link>
						<Link
							activeClass="active"
							to="about"
							smooth={true}
							duration={500}
							className="text-white w-[164px] text-xs md:text-lg group border-2 px-6 py-3 my-2 flex items-center font-bold hover:bg-pink-600 hover:border-pink-600 cursor-pointer"
						>
							<span>About Me</span>
							<HiArrowNarrowRight className="ml-2 group-hover:rotate-90 duration-200" />
						</Link>
						<Link
							activeClass="active"
							to="contact"
							smooth={true}
							duration={500}
							className="text-white w-[164px] text-xs md:text-lg group border-2 px-6 py-3 my-2 flex items-center font-bold hover:bg-pink-600 hover:border-pink-600 cursor-pointer"
						>
							<span>Contact</span>
							<HiArrowNarrowRight className="ml-2 group-hover:rotate-90 duration-200" />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Homepage;
