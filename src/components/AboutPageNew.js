import React, { useState, useEffect } from "react";
import {
	FaCheckCircle,
	FaGraduationCap,
	FaBriefcase,
	FaCode,
	FaLightbulb,
} from "react-icons/fa";
import { motion } from "framer-motion";

const AboutPage = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [activeTab, setActiveTab] = useState("journey");

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const tabs = {
		journey: {
			title: "My Journey",
			icon: <FaGraduationCap />,
			content: (
				<div className="space-y-6">
					<div className="bg-[#112240] rounded-xl p-6 border-l-4 border-green-400">
						<h4 className="text-xl font-bold text-green-400 mb-2">Education</h4>
						<p className="text-gray-300 mb-1">
							Bachelor's degree in Information Technology
						</p>
						<p className="text-gray-400 text-sm">
							Central Queensland University
						</p>
					</div>
					<div className="bg-[#112240] rounded-xl p-6 border-l-4 border-blue-400">
						<h4 className="text-xl font-bold text-blue-400 mb-2">
							Professional Experience
						</h4>
						<p className="text-gray-300 mb-1">Software Developer</p>
						<p className="text-gray-400 text-sm mb-3">Irak Solutions Pty Ltd</p>
						<p className="text-gray-400 leading-relaxed">
							Deeply involved in the design, development, and deployment of
							several internal and client-facing systems. Focused on building
							user-centric features, maintaining scalable codebases, and
							optimizing performance.
						</p>
					</div>
				</div>
			),
		},
		skills: {
			title: "Expertise",
			icon: <FaCode />,
			content: (
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="space-y-4">
						<h4 className="text-xl font-bold text-green-400 mb-4">
							Technical Skills
						</h4>
						{[
							"Building responsive and user-friendly web applications",
							"Developing RESTful APIs and integrating third-party services",
							"Working with modern JavaScript frameworks like React",
							"Database management with MongoDB and SQL",
							"Version control using Git and GitHub",
							"Building full-stack applications using the MERN stack",
							"Python programming for automation and data processing",
						].map((skill, index) => (
							<div
								key={index}
								className="flex items-start gap-3 p-3 bg-[#112240] rounded-lg hover:bg-[#1a365d] transition-colors duration-300"
							>
								<FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
								<span className="text-gray-300">{skill}</span>
							</div>
						))}
					</div>
					<div className="space-y-4">
						<h4 className="text-xl font-bold text-blue-400 mb-4">
							Professional Skills
						</h4>
						{[
							"Implementing CI/CD pipelines for automated deployment",
							"Deploying applications on platforms like Vercel and Netlify",
							"Optimizing websites for search engines (SEO)",
							"Ensuring cross-browser compatibility and responsive design",
							"Collaborating with cross-functional teams",
							"Problem-solving and analytical thinking",
							"Continuous learning and adaptation to new technologies",
						].map((skill, index) => (
							<div
								key={index}
								className="flex items-start gap-3 p-3 bg-[#112240] rounded-lg hover:bg-[#1a365d] transition-colors duration-300"
							>
								<FaCheckCircle className="text-blue-400 mt-1 flex-shrink-0" />
								<span className="text-gray-300">{skill}</span>
							</div>
						))}
					</div>
				</div>
			),
		},
		values: {
			title: "What Drives Me",
			icon: <FaLightbulb />,
			content: (
				<div className="space-y-6">
					<div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-6 border border-green-400/30">
						<h4 className="text-xl font-bold text-green-400 mb-4">
							Innovation & Impact
						</h4>
						<p className="text-gray-300 leading-relaxed">
							I am driven by a desire to create meaningful and impactful
							technological solutions. Whether it's improving user experiences,
							optimizing performance, or exploring the latest advancements in
							AI, I'm always excited to take on new challenges.
						</p>
					</div>
					<div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-400/30">
						<h4 className="text-xl font-bold text-blue-400 mb-4">
							Continuous Learning
						</h4>
						<p className="text-gray-300 leading-relaxed">
							Technology evolves rapidly, and I believe in staying ahead of the
							curve. I'm constantly learning new frameworks, exploring emerging
							technologies, and improving my skills to deliver better solutions.
						</p>
					</div>
					<div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-400/30">
						<h4 className="text-xl font-bold text-purple-400 mb-4">
							Collaboration & Quality
						</h4>
						<p className="text-gray-300 leading-relaxed">
							I value collaboration and believe that the best solutions come
							from working together. I'm committed to writing clean,
							maintainable code and delivering high-quality software that makes
							a difference.
						</p>
					</div>
				</div>
			),
		},
	};

	return (
		<div
			name="about"
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
						About <span className="gradient-text">Me</span>
					</h2>
					<p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
						Get to know more about my journey, skills, and what drives me as a
						developer
					</p>
				</div>

				{/* Main Content Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Introduction Card */}
					<div
						className={`lg:col-span-3 bg-[#112240] rounded-2xl p-8 shadow-2xl transform transition-all duration-1000 ${
							isVisible
								? "translate-y-0 opacity-100"
								: "translate-y-10 opacity-0"
						}`}
					>
						<div className="text-center mb-8">
							<h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
								Hi, I'm <span className="text-green-400">Sijan Pradhan</span>
							</h3>
							<p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-4xl mx-auto">
								A passionate and results-driven{" "}
								<span className="text-green-400 font-semibold">
									MERN Stack Developer
								</span>{" "}
								with hands-on experience building modern, scalable web
								applications. I transform ideas into digital reality with clean
								code and innovative solutions.
							</p>
						</div>
					</div>

					{/* Tab Navigation */}
					<div className="lg:col-span-3">
						<div className="flex flex-wrap justify-center gap-4 mb-8">
							{Object.entries(tabs).map(([key, tab]) => (
								<button
									key={key}
									onClick={() => setActiveTab(key)}
									className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
										activeTab === key
											? "bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg transform scale-105"
											: "bg-[#112240] text-gray-400 hover:text-white hover:bg-[#1a365d]"
									}`}
								>
									{tab.icon}
									{tab.title}
								</button>
							))}
						</div>

						{/* Tab Content */}
						<div
							className={`bg-[#112240] rounded-2xl p-8 shadow-2xl transform transition-all duration-500 ${
								isVisible
									? "translate-y-0 opacity-100"
									: "translate-y-10 opacity-0"
							}`}
						>
							{tabs[activeTab].content}
						</div>
					</div>
				</div>

				{/* Stats Section */}
				<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
					{[
						{
							number: "3+",
							label: "Years Experience",
							color: "text-green-400",
						},
						{
							number: "20+",
							label: "Projects Completed",
							color: "text-blue-400",
						},
						{
							number: "10+",
							label: "Technologies Mastered",
							color: "text-purple-400",
						},
					].map((stat, index) => (
						<div
							key={index}
							className={`bg-[#112240] rounded-xl p-6 text-center transform transition-all duration-1000 hover:scale-105 ${
								isVisible
									? "translate-y-0 opacity-100"
									: "translate-y-10 opacity-0"
							}`}
							style={{ transitionDelay: `${index * 200}ms` }}
						>
							<div className={`text-4xl font-bold ${stat.color} mb-2`}>
								{stat.number}
							</div>
							<div className="text-gray-400 font-medium">{stat.label}</div>
						</div>
					))}
				</div>

				{/* Call to Action */}
				<div className="text-center mt-16">
					<p className="text-xl text-gray-400 mb-6">Ready to work together?</p>
					<a
						href="#contact"
						className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
					>
						<FaBriefcase />
						Let's Connect
					</a>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
