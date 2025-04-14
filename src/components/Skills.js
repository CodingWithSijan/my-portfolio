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
import NodeJs from "../assests/skills/nodejs.png";
import ExpressJs from "../assests/skills/express.png";
import MaterialUI from "../assests/skills/materialui.png";
import CICD from "../assests/skills/cicd.png";
import Firebase from "../assests/skills/firebase.png";
import Vercel from "../assests/skills/vercel.png";
import SEO from "../assests/skills/seo.jpeg";

const Skills = () => {
	return (
		<>
			<div
				name="skills"
				className="bg-[#0a192f] text-gray-300 w-full h-screen pt-[4rem]"
			>
				{/* container */}
				<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
					<div>
						<p className="text-4xl font-bold inline border-b-4 border-green-300 ">
							Skills
						</p>
						<p className="py-4">These are the technologies I've worked with</p>
					</div>

					<div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center py-8">
						{[
							{ src: HTML, name: "HTML" },
							{ src: CSS, name: "CSS" },
							{ src: Javascript, name: "Javascript" },
							{ src: ReactImg, name: "ReactJs" },
							{ src: TailwindCSS, name: "TailwindCSS" },
							{ src: JavaImg, name: "Java" },
							{ src: GitHub, name: "GitHub" },
							{ src: Bootstrap, name: "Bootstrap" },
							{ src: MySql, name: "MySQL" },
							{ src: NodeJs, name: "Node.js" },
							{ src: ExpressJs, name: "Express.js" },
							{ src: MaterialUI, name: "Material UI" },
							{ src: CICD, name: "CI/CD" },
							{ src: Firebase, name: "Firebase" },
							{ src: Vercel, name: "Vercel" },
							{ src: SEO, name: "SEO" },
						].map((skill, index) => (
							<div
								key={index}
								className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-lg p-4"
							>
								<img
									src={skill.src}
									alt={`${skill.name} icon`}
									className="w-20 h-20 mx-auto mb-2"
								/>
								<p className="text-lg font-medium">{skill.name}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Skills;
