import React, { useState, useEffect } from "react";

const loadingMessages = [
	"Initializing portfolio...",
	"Loading creative components...",
	"Configuring particle systems...",
	"Establishing matrix connection...",
	"Optimizing user experience...",
	"Finalizing professional setup...",
	"Ready to impress!",
];

const LoadingScreen = ({ onLoadComplete }) => {
	const [progress, setProgress] = useState(0);
	const [currentText, setCurrentText] = useState("");
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prev) => {
				const newProgress = prev + Math.random() * 15;

				// Update text based on progress
				const messageIndex = Math.min(
					Math.floor((newProgress / 100) * loadingMessages.length),
					loadingMessages.length - 1
				);
				setCurrentText(loadingMessages[messageIndex]);

				if (newProgress >= 100) {
					clearInterval(interval);
					setTimeout(() => {
						setIsVisible(false);
						setTimeout(() => onLoadComplete(), 500);
					}, 1000);
					return 100;
				}

				return newProgress;
			});
		}, 200);

		return () => clearInterval(interval);
	}, [onLoadComplete]);

	if (!isVisible) return null;

	return (
		<div
			className={`loading-screen ${
				!isVisible ? "opacity-0" : "opacity-100"
			} transition-opacity duration-500`}
		>
			<div className="text-center">
				{/* ASCII Art Logo */}
				<pre className="text-green-400 text-xs md:text-sm mb-8 font-mono">
					{`
   ____  _   _              ____                 _ _           
  / ___|(_) (_) __ _ _ __   |  _ \\ _ __ __ _  __| | |__   __ _ _ __  
  \\___ \\| | | |/ _\` | '_ \\  | |_) | '__/ _\` |/ _\` | '_ \\ / _\` | '_ \\ 
   ___) | | | | (_| | | | | |  __/| | | (_| | (_| | | | | (_| | | | |
  |____/|_|_/ |\\__,_|_| |_| |_|   |_|  \\__,_|\\__,_|_| |_|\\__,_|_| |_|
           |__/                                                      
                  F U L L S T A C K   D E V E L O P E R
`}
				</pre>

				{/* Loading Text */}
				<div className="text-green-400 text-lg md:text-xl mb-6 h-8">
					<span className="typewriter">{currentText}</span>
				</div>

				{/* Progress Bar */}
				<div className="loading-bar mx-auto mb-6">
					<div
						className="loading-progress bg-gradient-to-r from-green-400 to-blue-400"
						style={{ width: `${progress}%` }}
					/>
				</div>

				{/* Progress Percentage */}
				<div className="text-green-300 text-sm font-mono">
					{Math.round(progress)}% Complete
				</div>

				{/* Matrix Rain Effect */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					{Array.from({ length: 20 }, (_, i) => (
						<div
							key={i}
							className="absolute text-green-500 text-xs font-mono opacity-30"
							style={{
								left: `${Math.random() * 100}%`,
								animationDelay: `${Math.random() * 3}s`,
								animation: "matrix-rain 3s linear infinite",
							}}
						>
							{String.fromCharCode(33 + Math.random() * 93)}
						</div>
					))}
				</div>

				{/* Glowing Particles */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					{Array.from({ length: 10 }, (_, i) => (
						<div
							key={i}
							className="absolute w-1 h-1 bg-green-400 rounded-full opacity-60"
							style={{
								left: `${Math.random() * 100}%`,
								top: `${Math.random() * 100}%`,
								animation: `float ${
									2 + Math.random() * 3
								}s ease-in-out infinite`,
								animationDelay: `${Math.random() * 2}s`,
							}}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default LoadingScreen;
