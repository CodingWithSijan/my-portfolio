import React, { useState } from "react";
import {
	FaEnvelope,
	FaPhone,
	FaMapMarkerAlt,
	FaLinkedin,
	FaGithub,
	FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		// Add your form submission logic here
		setTimeout(() => {
			setIsSubmitting(false);
			setFormData({ name: "", email: "", subject: "", message: "" });
		}, 2000);
	};

	const contactInfo = [
		{
			icon: <FaEnvelope />,
			title: "Email",
			details: "sijan.pradhan2020@gmail.com",
			link: "mailto:sijan.pradhan2020@gmail.com",
			color: "text-green-400",
		},
		{
			icon: <FaLinkedin />,
			title: "LinkedIn",
			details: "Connect with me",
			link: "https://linkedin.com/in/sijan-pradhan",
			color: "text-blue-400",
		},
		{
			icon: <FaGithub />,
			title: "GitHub",
			details: "Check out my code",
			link: "https://github.com/CodingWithSijan",
			color: "text-purple-400",
		},
		{
			icon: <FaMapMarkerAlt />,
			title: "Location",
			details: "Available for remote work",
			link: "#",
			color: "text-red-400",
		},
	];

	return (
		<div
			name="contact"
			className="w-full min-h-screen bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] py-20"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
						Get In <span className="gradient-text">Touch</span>
					</h2>
					<p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
						Have a project in mind or want to collaborate? I'd love to hear from
						you!
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Contact Information */}
					<div className="space-y-8">
						<div>
							<h3 className="text-3xl font-bold text-white mb-6">Let's Talk</h3>
							<p className="text-lg text-gray-400 leading-relaxed mb-8">
								I'm always open to discussing new opportunities, creative ideas,
								or potential collaborations. Whether you have a project in mind
								or just want to connect, feel free to reach out!
							</p>
						</div>

						{/* Contact Methods */}
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							{contactInfo.map((item, index) => (
								<a
									key={index}
									href={item.link}
									target={item.link.startsWith("http") ? "_blank" : "_self"}
									rel={
										item.link.startsWith("http") ? "noopener noreferrer" : ""
									}
									className="group bg-[#112240] p-6 rounded-xl hover:bg-[#1a365d] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
								>
									<div
										className={`${item.color} text-2xl mb-3 group-hover:scale-110 transition-transform duration-300`}
									>
										{item.icon}
									</div>
									<h4 className="text-white font-semibold mb-1">
										{item.title}
									</h4>
									<p className="text-gray-400 text-sm">{item.details}</p>
								</a>
							))}
						</div>

						{/* Additional Info */}
						<div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-6 border border-green-400/30">
							<h4 className="text-xl font-bold text-green-400 mb-3">
								Quick Response
							</h4>
							<p className="text-gray-300">
								I typically respond to messages within 24 hours. For urgent
								inquiries, feel free to reach out via LinkedIn or email
								directly.
							</p>
						</div>
					</div>

					{/* Contact Form */}
					<div className="bg-[#112240] rounded-2xl p-8 shadow-2xl">
						<h3 className="text-3xl font-bold text-white mb-6">
							Send a Message
						</h3>

						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								<div>
									<label
										htmlFor="name"
										className="block text-gray-300 font-medium mb-2"
									>
										Your Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
										className="w-full bg-[#0a192f] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-colors duration-300"
										placeholder="John Doe"
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-gray-300 font-medium mb-2"
									>
										Your Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
										className="w-full bg-[#0a192f] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-colors duration-300"
										placeholder="john@example.com"
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="subject"
									className="block text-gray-300 font-medium mb-2"
								>
									Subject
								</label>
								<input
									type="text"
									id="subject"
									name="subject"
									value={formData.subject}
									onChange={handleChange}
									required
									className="w-full bg-[#0a192f] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-colors duration-300"
									placeholder="Let's work together!"
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-gray-300 font-medium mb-2"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									required
									rows={6}
									className="w-full bg-[#0a192f] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-colors duration-300 resize-none"
									placeholder="Tell me about your project or how we can collaborate..."
								></textarea>
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
							>
								{isSubmitting ? (
									<>
										<div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
										Sending...
									</>
								) : (
									<>
										<FaPaperPlane />
										Send Message
									</>
								)}
							</button>
						</form>
					</div>
				</div>

				{/* Call to Action */}
				<div className="text-center mt-16">
					<div className="bg-[#112240] rounded-2xl p-8 max-w-4xl mx-auto">
						<h3 className="text-3xl font-bold text-white mb-4">
							Ready to Start Your Project?
						</h3>
						<p className="text-lg text-gray-400 mb-6">
							Let's discuss how we can bring your ideas to life with modern web
							technologies.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="mailto:sijan.pradhan2020@gmail.com"
								className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
							>
								Email Me Directly
							</a>
							<a
								href="/sijan_pradhan_Resume.pdf"
								download
								className="border-2 border-green-400 text-green-400 px-8 py-3 rounded-full font-semibold hover:bg-green-400 hover:text-[#0a192f] transition-all duration-300 transform hover:scale-105"
							>
								Download Resume
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
