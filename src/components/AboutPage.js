import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const AboutPage = () => {
	return (
		<div name="about" className="w-full h-full bg-[#0a192f] text-gray-300">
			<div className="flex flex-col justify-center items-center w-full h-full py-16 px-4">
				{/* Section Title */}
				<div className="max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
					<div className="sm:text-right pb-8">
						<p className="text-4xl font-bold inline border-b-4 border-green-500">
							About Me😎
						</p>
					</div>
					<div></div>
				</div>

				{/* Introduction */}
				<div className="max-w-[1000px] w-full flex items-center justify-center">
					<div className="sm:text-right text-3xl sm:text-4xl font-bold">
						<p className="hover:text-green-400 transition duration-300">
							Hi, I am Sijan Pradhan. Please take a look around.
						</p>
					</div>
				</div>

				{/* Skills and Expertise */}
				<div className="max-w-[1000px] w-full mt-16">
					<h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4 ">
						My Skills and Expertise
					</h2>
					<ul className="list-none mt-4 text-gray-300 space-y-4 px-4 sm:px-0">
						{[
							"Building responsive and user-friendly web applications",
							"Developing RESTful APIs and integrating third-party services",
							"Database management with MongoDB and SQL",
							"Version control using Git and GitHub",
							"Building full-stack applications using the MERN stack (MongoDB, Express.js, React, Node.js)",
							"Developing backend systems and APIs with Node.js and Express.js",
							"Creating dynamic and interactive front-end applications with React",

							"Implementing CI/CD pipelines for automated testing and deployment",
							"Deploying applications on platforms like Vercel, Netlify, and Heroku",
							"Optimizing websites for search engines (SEO) to improve visibility",
							"Ensuring cross-browser compatibility and responsive design",
						].map((skill, index) => (
							<li
								key={index}
								className="flex items-center  gap-2 hover:text-green-400 transition duration-300"
							>
								<FaCheckCircle className="text-green-400" />
								{skill}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
