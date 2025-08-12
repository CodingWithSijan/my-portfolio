import React, { useState, useEffect } from "react";
import {
	FaGithub,
	FaExternalLinkAlt,
	FaCode,
	FaReact,
	FaPython,
} from "react-icons/fa";
import {
	SiJavascript,
	SiTailwindcss,
	SiMongodb,
	SiExpress,
	SiNodedotjs,
} from "react-icons/si";
import Project1Image from "../assests/projects/gfih.png";
import Project2Image from "../assests/projects/cloud.png";
import Project3Image from "../assests/projects/suraksha.png";
import Project4Image from "../assests/projects/pythonIDE.png";
import Project5Image from "../assests/projects/cryptoTrading.png";

const Projects = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const projectList = [
		{
			title: "Go For It Hypnotherapy",
			description:
				"Professional hypnotherapy clinic website with appointment booking system and responsive design.",
			longDescription:
				"The official website for Go for It Hypnotherapy, a professional hypnotherapy clinic based in Moonee Ponds, Victoria. Features modern design, appointment booking, and mobile responsiveness.",
			link: "https://www.goforithypnotherapy.com.au/",
			github: "#",
			image: Project1Image,
			technologies: ["React", "TailwindCSS", "JavaScript"],
			techIcons: [
				<FaReact key="react" />,
				<SiTailwindcss key="tailwind" />,
				<SiJavascript key="js" />,
			],
			category: "Frontend",
			featured: true,
		},
		{
			title: "SaaS Cloud Management Platform",
			description:
				"Modern cloud management platform with dashboard analytics and real-time monitoring.",
			longDescription:
				"Cloud management web app created using HTML, CSS, TailwindCSS, ReactJS, and ES6. Features include dashboard analytics, resource monitoring, and user management.",
			link: "https://codingwithsijan.github.io/cloudwebapp/",
			github: "https://github.com/CodingWithSijan/cloudwebapp",
			image: Project2Image,
			technologies: ["React", "TailwindCSS", "ES6"],
			techIcons: [
				<FaReact key="react" />,
				<SiTailwindcss key="tailwind" />,
				<SiJavascript key="js" />,
			],
			category: "Full Stack",
			featured: true,
		},
		{
			title: "Professional Portfolio",
			description:
				"Elegant portfolio website for a registered nurse with modern animations and responsive design.",
			longDescription:
				"A portfolio of a Registered Nurse built using React TailwindCSS, and other npm helpers. Features smooth animations, responsive design, and professional presentation.",
			link: "https://codingwithsijan.github.io/suraksha_portfolio/",
			github: "https://github.com/CodingWithSijan/suraksha_portfolio",
			image: Project3Image,
			technologies: ["React", "TailwindCSS", "JavaScript"],
			techIcons: [
				<FaReact key="react" />,
				<SiTailwindcss key="tailwind" />,
				<SiJavascript key="js" />,
			],
			category: "Frontend",
			featured: false,
		},
		{
			title: "Python IDE",
			description:
				"Custom Python IDE with built-in compiler designed for beginners learning Python programming.",
			longDescription:
				"A simple python IDE with inbuilt compiler, made for people starting to learn python. Features syntax highlighting, error detection, and an intuitive interface.",
			link: "https://github.com/CodingWithSijan/python-IDE/blob/master/editor.py",
			github: "https://github.com/CodingWithSijan/python-IDE",
			image: Project4Image,
			technologies: ["Python", "Tkinter", "PyQt"],
			techIcons: [<FaPython key="python" />, <FaCode key="code" />],
			category: "Desktop App",
			featured: false,
		},
		{
			title: "Crypto Trading Platform",
			description:
				"Cryptocurrency trading simulator with real-time charts, portfolio management, and market analysis.",
			longDescription:
				"A Crypto trading platform where a user can buy or sell crypto, view candlesticks and charts. Features include portfolio tracking, market analysis, and trading simulation.",
			link: "https://github.com/CodingWithSijan/python-IDE/blob/master/cryptoTradingDummy.py",
			github: "https://github.com/CodingWithSijan/crypto-trading",
			image: Project5Image,
			technologies: ["Python", "Data Analysis", "API Integration"],
			techIcons: [<FaPython key="python" />, <FaCode key="code" />],
			category: "Data Science",
			featured: true,
		},
	];

	const featuredProjects = projectList.filter((project) => project.featured);
	const otherProjects = projectList.filter((project) => !project.featured);

	return (
		<div
			name="projects"
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
						My <span className="gradient-text">Projects</span>
					</h2>
					<p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
						Here are some of the projects I've worked on. Each project
						represents a unique challenge and showcases different aspects of my
						development skills.
					</p>
				</div>

				{/* Featured Projects */}
				<div className="mb-20">
					<h3 className="text-3xl font-bold text-green-400 mb-8 text-center">
						Featured Projects
					</h3>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{featuredProjects.map((project, index) => (
							<div
								key={index}
								className={`group relative bg-[#112240] rounded-2xl overflow-hidden shadow-2xl hover:shadow-green-500/20 transition-all duration-500 transform hover:-translate-y-2 ${
									isVisible
										? "translate-y-0 opacity-100"
										: "translate-y-10 opacity-0"
								}`}
								style={{ transitionDelay: `${index * 200}ms` }}
							>
								{/* Project Image */}
								<div className="relative h-64 overflow-hidden">
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-[#112240] via-transparent to-transparent"></div>

									{/* Category Badge */}
									<div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
										{project.category}
									</div>
								</div>

								{/* Project Content */}
								<div className="p-6">
									<h4 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
										{project.title}
									</h4>
									<p className="text-gray-400 mb-4 leading-relaxed">
										{project.description}
									</p>

									{/* Technologies */}
									<div className="flex flex-wrap gap-2 mb-6">
										{project.technologies.map((tech, techIndex) => (
											<span
												key={techIndex}
												className="bg-[#0a192f] text-green-400 px-3 py-1 rounded-full text-sm font-medium border border-green-400/30"
											>
												{tech}
											</span>
										))}
									</div>

									{/* Action Buttons */}
									<div className="flex gap-4">
										<a
											href={project.link}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
										>
											<FaExternalLinkAlt size={16} />
											Live Demo
										</a>
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 border-2 border-gray-400 text-gray-400 px-6 py-2 rounded-full font-semibold hover:border-white hover:text-white transition-all duration-300 transform hover:scale-105"
										>
											<FaGithub size={16} />
											Code
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Other Projects */}
				<div>
					<h3 className="text-3xl font-bold text-blue-400 mb-8 text-center">
						Other Projects
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{otherProjects.map((project, index) => (
							<div
								key={index}
								className={`group bg-[#112240] rounded-xl overflow-hidden shadow-xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-1 ${
									isVisible
										? "translate-y-0 opacity-100"
										: "translate-y-10 opacity-0"
								}`}
								style={{
									transitionDelay: `${
										(index + featuredProjects.length) * 100
									}ms`,
								}}
							>
								{/* Project Image */}
								<div className="relative h-48 overflow-hidden">
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-[#112240] via-transparent to-transparent"></div>
								</div>

								{/* Project Content */}
								<div className="p-4">
									<h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
										{project.title}
									</h4>
									<p className="text-gray-400 mb-4 text-sm leading-relaxed">
										{project.description}
									</p>

									{/* Technologies Icons */}
									<div className="flex gap-2 mb-4">
										{project.techIcons.map((icon, iconIndex) => (
											<span key={iconIndex} className="text-green-400 text-lg">
												{icon}
											</span>
										))}
									</div>

									{/* Action Buttons */}
									<div className="flex gap-2">
										<a
											href={project.link}
											target="_blank"
											rel="noopener noreferrer"
											className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium text-center hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
										>
											<FaExternalLinkAlt className="inline mr-2" size={14} />
											View
										</a>
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="border border-gray-400 text-gray-400 py-2 px-4 rounded-lg font-medium hover:border-white hover:text-white transition-all duration-300 transform hover:scale-105"
										>
											<FaGithub size={16} />
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Call to Action */}
				<div className="text-center mt-16">
					<p className="text-xl text-gray-400 mb-6">
						Interested in working together?
					</p>
					<a
						href="#contact"
						className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
					>
						Let's Talk
						<FaExternalLinkAlt size={16} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Projects;
