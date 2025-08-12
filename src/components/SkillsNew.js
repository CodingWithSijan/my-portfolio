import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CSS from "../assests/css.png";
import HTML from "../assests/html.png";
import Javascript from "../assests/javascript.png";
import ReactImg from "../assests/react.png";
import TailwindCSS from "../assests/tailwind.png";
import JavaImg from "../assests/java.png";
import GitHub from "../assests/github.png";
import Bootstrap from "../assests/bootstrap.png";
import MySql from "../assests/mysql.jpg";
import NodeJs from "../assests/skills/nodejs.png";
import ExpressJs from "../assests/skills/express.png";
import MaterialUI from "../assests/skills/materialui.png";
import CICD from "../assests/skills/cicd.png";
import Firebase from "../assests/skills/firebase.png";
import Vercel from "../assests/skills/vercel.png";
import SEO from "../assests/skills/seo.jpeg";

const Skills = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [activeCategory, setActiveCategory] = useState("Frontend");

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const skillCategories = {
		Frontend: [
			{
				name: "HTML5",
				image: HTML,
				level: 95,
				color: "from-orange-500 to-red-500",
			},
			{
				name: "CSS3",
				image: CSS,
				level: 90,
				color: "from-blue-500 to-cyan-500",
			},
			{
				name: "JavaScript",
				image: Javascript,
				level: 88,
				color: "from-yellow-500 to-orange-500",
			},
			{
				name: "React",
				image: ReactImg,
				level: 92,
				color: "from-blue-400 to-blue-600",
			},
			{
				name: "TailwindCSS",
				image: TailwindCSS,
				level: 85,
				color: "from-teal-500 to-blue-500",
			},
			{
				name: "Bootstrap",
				image: Bootstrap,
				level: 80,
				color: "from-purple-500 to-pink-500",
			},
			{
				name: "Material UI",
				image: MaterialUI,
				level: 75,
				color: "from-indigo-500 to-purple-500",
			},
		],
		Backend: [
			{
				name: "Node.js",
				image: NodeJs,
				level: 85,
				color: "from-green-500 to-teal-500",
			},
			{
				name: "Express.js",
				image: ExpressJs,
				level: 80,
				color: "from-gray-600 to-gray-800",
			},
			{
				name: "Java",
				image: JavaImg,
				level: 78,
				color: "from-red-500 to-orange-500",
			},
			{
				name: "MySQL",
				image: MySql,
				level: 82,
				color: "from-blue-600 to-indigo-600",
			},
		],
		Tools: [
			{
				name: "GitHub",
				image: GitHub,
				level: 90,
				color: "from-gray-700 to-gray-900",
			},
			{
				name: "CI/CD",
				image: CICD,
				level: 75,
				color: "from-green-600 to-blue-600",
			},
			{
				name: "Firebase",
				image: Firebase,
				level: 70,
				color: "from-yellow-500 to-orange-500",
			},
			{
				name: "Vercel",
				image: Vercel,
				level: 85,
				color: "from-black to-gray-800",
			},
			{
				name: "SEO",
				image: SEO,
				level: 80,
				color: "from-purple-500 to-pink-500",
			},
		],
	};

	const categories = Object.keys(skillCategories);

	return (
		<div
			name="skills"
			className="w-full min-h-screen bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] py-20"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div
					className={`text-center mb-16 transform transition-all duration-1000 ${
						isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
					}`}
				>
					<h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
						My <span className="gradient-text">Skills</span>
					</h2>
					<p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
						These are the technologies and tools I work with to bring ideas to
						life
					</p>
				</div>

				{/* Category Tabs */}
				<div className="flex justify-center mb-12">
					<div className="bg-[#112240] rounded-full p-2 flex gap-2">
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setActiveCategory(category)}
								className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
									activeCategory === category
										? "bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg"
										: "text-gray-400 hover:text-white hover:bg-[#0a192f]"
								}`}
							>
								{category}
							</button>
						))}
					</div>
				</div>

				{/* Skills Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{skillCategories[activeCategory].map((skill, index) => (
						<div
							key={skill.name}
							className={`group bg-[#112240] rounded-2xl p-6 shadow-2xl hover:shadow-green-500/20 transition-all duration-500 transform hover:-translate-y-2 ${
								isVisible
									? "translate-y-0 opacity-100"
									: "translate-y-10 opacity-0"
							}`}
							style={{ transitionDelay: `${index * 100}ms` }}
						>
							{/* Skill Icon */}
							<div className="flex justify-center mb-4">
								<div className="relative w-20 h-20 group-hover:scale-110 transition-transform duration-300">
									<img
										src={skill.image}
										alt={`${skill.name} icon`}
										className="w-full h-full object-contain rounded-lg"
									/>
									<div className="absolute inset-0 bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								</div>
							</div>

							{/* Skill Name */}
							<h3 className="text-xl font-bold text-white text-center mb-4 group-hover:text-green-400 transition-colors duration-300">
								{skill.name}
							</h3>

							{/* Progress Bar */}
							<div className="w-full bg-[#0a192f] rounded-full h-3 mb-2 overflow-hidden">
								<div
									className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
									style={{
										width: isVisible ? `${skill.level}%` : "0%",
										transitionDelay: `${index * 100 + 500}ms`,
									}}
								></div>
							</div>

							{/* Skill Level */}
							<div className="flex justify-between items-center">
								<span className="text-gray-400 text-sm">Proficiency</span>
								<span className="text-green-400 font-semibold">
									{skill.level}%
								</span>
							</div>
						</div>
					))}
				</div>

				{/* Additional Info */}
				<div className="mt-16 text-center">
					<div className="bg-[#112240] rounded-2xl p-8 max-w-4xl mx-auto">
						<h3 className="text-3xl font-bold text-white mb-6">
							Continuously <span className="text-green-400">Learning</span>
						</h3>
						<p className="text-lg text-gray-400 leading-relaxed">
							I'm always exploring new technologies and improving my skills.
							Currently learning
							<span className="text-green-400 font-semibold">
								{" "}
								Machine Learning
							</span>
							,<span className="text-blue-400 font-semibold"> TypeScript</span>,
							and
							<span className="text-purple-400 font-semibold">
								{" "}
								Cloud Architecture
							</span>
							.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
