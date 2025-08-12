import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
	FaBars,
	FaTimes,
	FaGithub,
	FaLinkedin,
	FaFileDownload,
	FaTerminal,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Logo from "../assests/logo.png";

const Navbar = ({ onTerminalClick }) => {
	const [nav, setNav] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const handleClick = () => {
		console.log("Hamburger clicked, nav state:", !nav);
		setNav(!nav);
	};

	// Handle scroll effect
	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 50;
			setScrolled(isScrolled);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ id: 1, link: "home", text: "Home" },
		{ id: 2, link: "about", text: "About" },
		{ id: 3, link: "skills", text: "Skills" },
		{ id: 4, link: "projects", text: "Projects" },
		{ id: 5, link: "contact", text: "Contact" },
	];

	const socialLinks = [
		{
			id: 1,
			child: (
				<>
					LinkedIn <FaLinkedin size={25} />
				</>
			),
			href: "https://linkedin.com/in/sijan-pradhan",
			style: "rounded-tr-md bg-blue-600 hover:bg-blue-700",
		},
		{
			id: 2,
			child: (
				<>
					GitHub <FaGithub size={25} />
				</>
			),
			href: "https://github.com/CodingWithSijan",
			style: "bg-gray-700 hover:bg-gray-800",
		},
		{
			id: 3,
			child: (
				<>
					Mail <HiMail size={25} />
				</>
			),
			href: "mailto:sijan.pradhan@example.com",
			style: "bg-green-600 hover:bg-green-700",
		},
		{
			id: 4,
			child: (
				<>
					Resume <FaFileDownload size={25} />
				</>
			),
			href: "/sijan_pradhan_Resume.pdf",
			style: "rounded-br-md bg-purple-600 hover:bg-purple-700",
			download: true,
		},
	];

	return (
		<>
			{/* Main Navbar */}
			<nav
				className={`fixed w-full h-20 flex justify-between items-center px-4 z-50 transition-all duration-300 ${
					scrolled
						? "bg-[#0a192f]/95 backdrop-blur-md shadow-lg border-b border-green-400/20"
						: "bg-transparent"
				}`}
			>
				{/* Logo */}
				<Link to="home" smooth={true} duration={500} className="cursor-pointer">
					<img
						src={Logo}
						alt="Sijan Pradhan"
						className="w-12 h-12 rounded-full hover:scale-110 transition-transform duration-300"
					/>
				</Link>

				{/* Desktop Menu */}
				<div className="hidden md:flex items-center space-x-6">
					<ul className="flex space-x-8">
						{navItems.map(({ id, link, text }) => (
							<li key={id}>
								<Link
									to={link}
									smooth={true}
									duration={500}
									className="text-gray-300 hover:text-green-400 px-4 py-2 rounded-full cursor-pointer capitalize font-medium text-lg transition-all duration-300 hover:bg-green-400/10 relative group"
								>
									{text}
									<span className="absolute bottom-0 left-4 right-4 h-0.5 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
								</Link>
							</li>
						))}
					</ul>

					{/* Terminal Button */}
					<div className="ml-6 pl-6 border-l border-gray-600">
						<button
							onClick={onTerminalClick}
							className="p-2 text-gray-300 hover:text-green-400 hover:bg-green-400/10 rounded-full transition-all duration-300 group"
							title="Open Terminal"
						>
							<FaTerminal size={18} className="group-hover:animate-pulse" />
						</button>
					</div>
				</div>

				{/* Hamburger Menu */}
				<button
					onClick={handleClick}
					className="md:hidden z-[60] relative text-gray-300 hover:text-green-400 cursor-pointer transition-colors duration-300"
					aria-label="Toggle menu"
				>
					{!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
				</button>
			</nav>

			{/* Mobile Menu Overlay (outside nav to avoid clipping/stacking issues) */}
			{nav && (
				<div
					className="fixed inset-0 md:hidden z-[9999] bg-[#0a192f]/95 backdrop-blur-sm flex flex-col items-center justify-center pointer-events-auto"
					style={{ zIndex: 2147483647 }}
				>
					{navItems.map(({ id, link, text }) => (
						<div key={id} className="py-4">
							<Link
								onClick={handleClick}
								to={link}
								smooth={true}
								duration={500}
								className="text-gray-100 text-2xl font-medium capitalize hover:text-green-400 transition-colors"
							>
								{text}
							</Link>
						</div>
					))}
					<div className="pt-6">
						<button
							onClick={() => {
								onTerminalClick && onTerminalClick();
								handleClick();
							}}
							className="p-3 rounded-full text-gray-100 hover:text-green-400 hover:bg-green-400/10 transition-colors"
							title="Open Terminal"
						>
							<FaTerminal size={28} />
						</button>
					</div>
				</div>
			)}

			{/* Social Links Sidebar */}
			<div className="hidden lg:flex fixed flex-col top-[35%] left-0 z-40">
				<ul>
					{socialLinks.map(({ id, child, href, style, download }) => (
						<li
							key={id}
							className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${style} shadow-lg`}
						>
							<a
								href={href}
								className="flex justify-between items-center w-full text-white font-semibold"
								download={download}
								target={download ? "_self" : "_blank"}
								rel={download ? undefined : "noreferrer"}
							>
								{child}
							</a>
						</li>
					))}
				</ul>
			</div>

			{/* Scroll to Top Button */}
			{scrolled && (
				<button
					onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
					className="fixed bottom-8 right-8 bg-gradient-to-r from-green-500 to-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M5 10l7-7m0 0l7 7m-7-7v18"
						/>
					</svg>
				</button>
			)}
		</>
	);
};

export default Navbar;
