import React, { useState, useEffect, useRef } from "react";
import { FaTerminal, FaTimes, FaMinusSquare } from "react-icons/fa";

const InteractiveTerminal = ({ isOpen, onClose }) => {
	const [input, setInput] = useState("");
	const [history, setHistory] = useState([
		{ type: "output", content: "Welcome to Sijan's Interactive Terminal!" },
		{ type: "output", content: 'Type "help" to see available commands.' },
		{ type: "prompt", content: "visitor@sijan-portfolio:~$ " },
	]);
	const [commandHistory, setCommandHistory] = useState([]);
	const [historyIndex, setHistoryIndex] = useState(-1);
	const terminalRef = useRef(null);
	const inputRef = useRef(null);

	const commands = {
		help: {
			description: "Show available commands",
			execute: () => [
				"Available commands:",
				"  help       - Show this help message",
				"  about      - About Sijan Pradhan",
				"  skills     - List technical skills",
				"  projects   - Show recent projects",
				"  contact    - Contact information",
				"  resume     - Download resume",
				"  matrix     - Toggle matrix effect",
				"  clear      - Clear terminal",
				"  theme      - Change theme",
				"  joke       - Tell a programming joke",
				"  quote      - Random motivational quote",
			],
		},
		about: {
			description: "About Sijan Pradhan",
			execute: () => [
				"Sijan Pradhan - Full Stack Developer",
				"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
				"🎓 Education: Bachelor in Information Technology",
				"🏢 Experience: Software Developer at Irak Solutions",
				"💻 Specialization: MERN Stack Development",
				"🌟 Passion: Building innovative web solutions",
				"📍 Location: Available for remote work",
				"",
				'Type "skills" to see technical expertise.',
			],
		},
		skills: {
			description: "List technical skills",
			execute: () => [
				"Technical Skills:",
				"━━━━━━━━━━━━━━━━",
				"Frontend:  React, JavaScript, HTML5, CSS3, TailwindCSS",
				"Backend:   Node.js, Express.js, Python, Java",
				"Database:  MongoDB, MySQL",
				"Tools:     Git, GitHub, CI/CD, Firebase, Vercel",
				"Other:     SEO, Responsive Design, API Integration",
				"",
				"Proficiency: MERN Stack ████████████████ 95%",
			],
		},
		projects: {
			description: "Show recent projects",
			execute: () => [
				"Recent Projects:",
				"━━━━━━━━━━━━━━━━",
				"1. Go For It Hypnotherapy - Professional clinic website",
				"2. Cloud Management Platform - SaaS dashboard application",
				"3. Portfolio Website - Registered nurse portfolio",
				"4. Python IDE - Custom development environment",
				"5. Crypto Trading Platform - Trading simulation app",
				"",
				"Visit the projects section to see more details!",
			],
		},
		contact: {
			description: "Contact information",
			execute: () => [
				"Contact Information:",
				"━━━━━━━━━━━━━━━━━━━",
				"📧 Email: sijan.pradhan2020@gmail.com",
				"💼 LinkedIn: linkedin.com/in/sijan-pradhan",
				"🐙 GitHub: github.com/CodingWithSijan",
				"📱 Status: Available for opportunities",
				"",
				"Feel free to reach out for collaborations!",
			],
		},
		resume: {
			description: "Download resume",
			execute: () => {
				// Trigger resume download
				const link = document.createElement("a");
				link.href = "/sijan_pradhan_Resume.pdf";
				link.download = "Sijan_Pradhan_Resume.pdf";
				link.click();
				return ["Resume download started! 📄"];
			},
		},
		clear: {
			description: "Clear terminal",
			execute: () => {
				setHistory([
					{ type: "prompt", content: "visitor@sijan-portfolio:~$ " },
				]);
				return [];
			},
		},
		joke: {
			description: "Tell a programming joke",
			execute: () => {
				const jokes = [
					"Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
					"How many programmers does it take to change a light bulb? None, it's a hardware problem! 💡",
					"Why do Java developers wear glasses? Because they can't C# ! 👓",
					'A SQL query goes into a bar, walks up to two tables and asks: "Can I join you?" 🍺',
					"There are only 10 types of people: those who understand binary and those who don't! 🤖",
				];
				return [jokes[Math.floor(Math.random() * jokes.length)]];
			},
		},
		quote: {
			description: "Random motivational quote",
			execute: () => {
				const quotes = [
					'"Code is like humor. When you have to explain it, it\'s bad." - Cory House',
					'"The best error message is the one that never shows up." - Thomas Fuchs',
					"\"Programming isn't about what you know; it's about what you can figure out.\" - Chris Pine",
					'"First, solve the problem. Then, write the code." - John Johnson',
					'"The only way to learn a new programming language is by writing programs in it." - Dennis Ritchie',
				];
				return [quotes[Math.floor(Math.random() * quotes.length)]];
			},
		},
		matrix: {
			description: "Toggle matrix effect",
			execute: () => {
				// This would toggle matrix effect in parent component
				window.dispatchEvent(new CustomEvent("toggleMatrix"));
				return ["Matrix effect toggled! 🕶️"];
			},
		},
		theme: {
			description: "Change theme",
			execute: () => {
				window.dispatchEvent(new CustomEvent("toggleTheme"));
				return ["Theme changed! 🎨"];
			},
		},
	};

	const executeCommand = (cmd) => {
		const trimmedCmd = cmd.trim().toLowerCase();
		const newHistory = [...history];

		// Add command to history
		newHistory.push({
			type: "input",
			content: `visitor@sijan-portfolio:~$ ${cmd}`,
		});

		if (trimmedCmd === "") {
			newHistory.push({
				type: "prompt",
				content: "visitor@sijan-portfolio:~$ ",
			});
		} else if (commands[trimmedCmd]) {
			const output = commands[trimmedCmd].execute();
			if (output.length > 0) {
				output.forEach((line) => {
					newHistory.push({ type: "output", content: line });
				});
			}
			newHistory.push({
				type: "prompt",
				content: "visitor@sijan-portfolio:~$ ",
			});
		} else {
			newHistory.push({
				type: "error",
				content: `Command not found: ${trimmedCmd}. Type "help" for available commands.`,
			});
			newHistory.push({
				type: "prompt",
				content: "visitor@sijan-portfolio:~$ ",
			});
		}

		setHistory(newHistory);
		setCommandHistory((prev) => [...prev, cmd]);
		setHistoryIndex(-1);
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			executeCommand(input);
			setInput("");
		} else if (e.key === "ArrowUp") {
			e.preventDefault();
			if (commandHistory.length > 0) {
				const newIndex =
					historyIndex === -1
						? commandHistory.length - 1
						: Math.max(0, historyIndex - 1);
				setHistoryIndex(newIndex);
				setInput(commandHistory[newIndex] || "");
			}
		} else if (e.key === "ArrowDown") {
			e.preventDefault();
			if (historyIndex >= 0) {
				const newIndex = historyIndex + 1;
				if (newIndex >= commandHistory.length) {
					setHistoryIndex(-1);
					setInput("");
				} else {
					setHistoryIndex(newIndex);
					setInput(commandHistory[newIndex]);
				}
			}
		}
	};

	useEffect(() => {
		if (terminalRef.current) {
			terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
		}
	}, [history]);

	useEffect(() => {
		if (isOpen && inputRef.current) {
			inputRef.current.focus();
		}
	}, [isOpen]);

	return (
		<>
			{/* Terminal Window */}
			{isOpen && (
				<div className="fixed inset-4 bg-black/95 backdrop-blur-sm rounded-lg shadow-2xl z-50 flex flex-col border border-green-400">
					{/* Terminal Header */}
					<div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-t-lg">
						<div className="flex items-center gap-3">
							<FaTerminal className="text-green-400" />
							<span className="text-white font-mono text-sm">
								sijan-portfolio-terminal
							</span>
						</div>
						<div className="flex items-center gap-2">
							<button
								onClick={onClose}
								className="text-yellow-400 hover:text-yellow-300 transition-colors"
							>
								<FaMinusSquare size={16} />
							</button>
							<button
								onClick={onClose}
								className="text-red-400 hover:text-red-300 transition-colors"
							>
								<FaTimes size={16} />
							</button>
						</div>
					</div>

					{/* Terminal Content */}
					<div
						ref={terminalRef}
						className="flex-1 p-4 overflow-y-auto font-mono text-sm text-green-400 bg-black"
					>
						{history.map((entry, index) => (
							<div key={index} className="mb-1">
								{entry.type === "output" && (
									<div className="text-gray-300">{entry.content}</div>
								)}
								{entry.type === "input" && (
									<div className="text-green-400">{entry.content}</div>
								)}
								{entry.type === "error" && (
									<div className="text-red-400">{entry.content}</div>
								)}
								{entry.type === "prompt" && (
									<div className="flex items-center">
										<span className="text-green-400">{entry.content}</span>
										{index === history.length - 1 && (
											<input
												ref={inputRef}
												type="text"
												value={input}
												onChange={(e) => setInput(e.target.value)}
												onKeyDown={handleKeyDown}
												className="bg-transparent text-green-400 outline-none flex-1 font-mono"
												autoFocus
											/>
										)}
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			)}
		</>
	);
};

export default InteractiveTerminal;
