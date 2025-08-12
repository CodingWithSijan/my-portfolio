import React from "react";
import {
	FaGithub,
	FaLinkedin,
	FaEnvelope,
	FaHeart,
	FaArrowUp,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{
			icon: <FaGithub size={24} />,
			href: "https://github.com/CodingWithSijan",
			label: "GitHub",
			color: "hover:text-gray-300",
		},
		{
			icon: <FaLinkedin size={24} />,
			href: "https://linkedin.com/in/sijan-pradhan",
			label: "LinkedIn",
			color: "hover:text-blue-400",
		},
		{
			icon: <FaEnvelope size={24} />,
			href: "mailto:sijan.pradhan2020@gmail.com",
			label: "Email",
			color: "hover:text-green-400",
		},
	];

	const quickLinks = [
		{ name: "Home", link: "home" },
		{ name: "About", link: "about" },
		{ name: "Skills", link: "skills" },
		{ name: "Projects", link: "projects" },
		{ name: "Contact", link: "contact" },
	];

	return (
		<footer className="bg-[#0a192f] border-t border-gray-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				{/* Main Footer Content */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
					{/* Brand Section */}
					<div className="space-y-4">
						<h3 className="text-2xl font-bold text-white">
							Sijan <span className="text-green-400">Pradhan</span>
						</h3>
						<p className="text-gray-400 leading-relaxed">
							Full Stack Developer passionate about creating innovative web
							solutions and bringing ideas to life through clean, efficient
							code.
						</p>
						<div className="flex space-x-4">
							{socialLinks.map((social, index) => (
								<a
									key={index}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									className={`text-gray-400 ${social.color} transition-colors duration-300 transform hover:scale-110`}
									aria-label={social.label}
								>
									{social.icon}
								</a>
							))}
						</div>
					</div>

					{/* Quick Links */}
					<div className="space-y-4">
						<h4 className="text-lg font-semibold text-white">Quick Links</h4>
						<ul className="space-y-2">
							{quickLinks.map((item, index) => (
								<li key={index}>
									<Link
										to={item.link}
										smooth={true}
										duration={500}
										className="text-gray-400 hover:text-green-400 cursor-pointer transition-colors duration-300"
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div className="space-y-4">
						<h4 className="text-lg font-semibold text-white">Get In Touch</h4>
						<div className="space-y-2">
							<p className="text-gray-400">
								<span className="text-green-400">Email:</span>{" "}
								sijan.pradhan2020@gmail.com
							</p>
							<p className="text-gray-400">
								<span className="text-green-400">Location:</span> Available for
								remote work
							</p>
							<p className="text-gray-400">
								<span className="text-green-400">Status:</span> Open to
								opportunities
							</p>
						</div>
						<a
							href="/sijan_pradhan_Resume.pdf"
							download
							className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
						>
							Download Resume
						</a>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="border-t border-gray-800 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						{/* Copyright */}
						<div className="text-center md:text-left">
							<p className="text-gray-400">
								© {currentYear} Sijan Pradhan. All rights reserved.
							</p>
							<p className="text-gray-500 text-sm mt-1">
								Made with{" "}
								<FaHeart className="inline text-red-500 mx-1" size={14} /> and
								lots of coffee ☕
							</p>
						</div>

						{/* Back to Top */}
						<Link
							to="home"
							smooth={true}
							duration={500}
							className="group flex items-center gap-2 text-gray-400 hover:text-green-400 cursor-pointer transition-colors duration-300"
						>
							<span>Back to top</span>
							<FaArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" />
						</Link>
					</div>
				</div>

				{/* Thank You Message */}
				<div className="text-center mt-8 py-4">
					<p className="text-lg text-gray-400">
						Thanks for visiting! 👋 Let's build something amazing together.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
