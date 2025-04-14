import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ResumeImage from "../assests/projects/resume.png";

const Resume = () => {
	return (
		<div className="w-full h-full bg-[#0a192f] text-gray-300">
			<Navbar />
			<div className="flex justify-center items-center py-16">
				<img
					src={ResumeImage}
					alt="Resume"
					className="max-w-[90%] max-h-[80vh] shadow-lg rounded-lg"
				/>
			</div>
			<Footer />
		</div>
	);
};

export default Resume;
