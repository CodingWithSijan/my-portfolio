import React from "react";
import Project1Image from "../assests/projects/gfih.png";
import Project2Image from "../assests/projects/cloud.png";
import Project3Image from "../assests/projects/suraksha.png";
import Project4Image from "../assests/projects/pythonIDE.png";
import Project5Image from "../assests/projects/cryptoTrading.png";

const Projects = () => {
	const projectList = [
		{
			title: "Portfolio Website",
			description:
				"The official website for Go for It Hypnotherapy, a professional hypnotherapy clinic based in Moonee Ponds, Victoria.",
			link: "https://www.goforithypnotherapy.com.au/",
			image: Project1Image,
		},
		{
			title: "Saas Cloud Management Platform",
			description:
				"Cloud management web app created using HTML, CSS, TailwindCSS, ReactJS, and ES6",
			link: "https://codingwithsijan.github.io/cloudwebapp/",
			image: Project2Image,
		},
		{
			title: "Blog Application",
			description:
				"A portfolio of a Registered Nurse built using React TailwindCSS, and other npm helpers",
			link: "https://codingwithsijan.github.io/suraksha_portfolio/",
			image: Project3Image,
		},
		{
			title: "Python IDE",
			description:
				"A simple python IDE with inbuilt compiler, made for people starting to learn python. (Built with python)",
			link: "https://github.com/CodingWithSijan/python-IDE/blob/master/editor.py",
			image: Project4Image,
		},
		{
			title: "Crypto Trading Platform",
			description:
				"A Crypto trading platform where a user can buy or sell crypto, view candlesticks and charts",
			link: "https://github.com/CodingWithSijan/python-IDE/blob/master/cryptoTradingDummy.py",
			image: Project5Image,
		},
	];

	return (
		<div className="w-full h-full bg-[#0a192f] text-white" name="projects">
			<div className="max-w-[1000px] mx-auto px-8 py-16">
				<h1 className="text-4xl sm:text-7xl font-bold text-white mb-8 text-center">
					Projects
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{projectList.map((project, index) => (
						<div
							key={index}
							className="bg-[#112240] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
						>
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-40 object-cover rounded-lg mb-4"
							/>
							<h2 className="text-2xl font-bold mb-4 text-center">
								{project.title}
							</h2>
							<p className="text-gray-300 mb-4 text-center">
								{project.description}
							</p>
							<div className="mt-auto">
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="text-green-300 hover:text-green-500 font-medium"
								>
									View Project
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
