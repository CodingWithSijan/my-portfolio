import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ProfilePicture from "../assests/profile_picture.jpg";
import { Link } from "react-scroll";

// HomePage
const Homepage = () => {
	return (
		<div
			name="home"
			className="relative w-full min-h-screen bg-[#0a192f] overflow-hidden"
		>
			{/* Content Container */}
			<div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10  text-white">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
					{/* Left: Text */}
					<div>
						<p className="text-green-300 text-base sm:text-lg mb-2">
							Hi, my name is
						</p>
						<h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
							<span className="text-white">Sijan </span>
							<span className="gradient-text">Pradhan</span>
						</h1>
						<h2 className="text-2xl sm:text-3xl text-gray-300 mb-4">
							Software Developer crafting fast, accessible web apps.
						</h2>
						<p className="text-gray-300 leading-relaxed mb-6 max-w-2xl">
							I build delightful experiences with React and Node.js, turning
							ideas into clean, scalable products. Focused on performance, UX,
							and measurable impact.
						</p>

						{/* Tech badges */}
						<div className="flex flex-wrap items-center gap-2 mb-8">
							{[
								"React",
								"TypeScript",
								"Node.js",
								"Express",
								"MongoDB",
								"Tailwind",
							].map((tech) => (
								<span
									key={tech}
									className="px-3 py-1 rounded-full text-sm bg-[#0f1b33] text-gray-300 border border-white/10"
								>
									{tech}
								</span>
							))}
						</div>

						{/* CTAs */}
						<div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
							<Link
								to="projects"
								smooth={true}
								duration={500}
								className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
							>
								View Projects <HiArrowNarrowRight />
							</Link>
							<a
								href="/sijan_pradhan_Resume.pdf"
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border border-white/10 text-gray-200 hover:border-green-400/50 hover:text-white transition-all duration-300"
							>
								Download Resume
							</a>
						</div>

						{/* Social Row */}
						<div className="flex items-center gap-5 text-gray-400">
							<a
								href="https://github.com/CodingWithSijan"
								target="_blank"
								rel="noreferrer"
								className="hover:text-white transition-colors"
							>
								<FaGithub size={24} />
							</a>
							<a
								href="https://linkedin.com/in/sijan-pradhan"
								target="_blank"
								rel="noreferrer"
								className="hover:text-blue-400 transition-colors"
							>
								<FaLinkedin size={24} />
							</a>
							<a
								href="mailto:sijan.pradhan2020@gmail.com"
								className="hover:text-green-400 transition-colors"
							>
								<FaEnvelope size={24} />
							</a>
						</div>
					</div>

					{/* Right: Avatar */}
					<div className="flex justify-center lg:justify-end">
						<div className="relative w-[240px] h-[240px] sm:w-[360px] sm:h-[360px]">
							<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-400/30 to-blue-500/30 blur-2xl"></div>
							<img
								src={ProfilePicture}
								alt="Sijan Pradhan"
								className="relative w-full h-full object-cover rounded-full shadow-xl shadow-slate-900/50 border border-white/10"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
