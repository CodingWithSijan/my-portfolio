import React, { useState, useEffect, useCallback } from "react";
import {
	FaPalette,
	FaCode,
	FaBriefcase,
	FaVolumeUp,
	FaVolumeMute,
} from "react-icons/fa";
import soundManager from "./SoundManager";

const themes = {
	professional: {
		name: "Professional",
		icon: FaBriefcase,
		description: "Clean, professional look for recruiters",
		colors: {
			primary: "#3B82F6",
			secondary: "#1E40AF",
			accent: "#60A5FA",
			bg: "#FFFFFF",
			text: "#1F2937",
		},
	},
	creative: {
		name: "Creative",
		icon: FaCode,
		description: "Cyberpunk aesthetic with effects",
		colors: {
			primary: "#00FF88",
			secondary: "#00AA55",
			accent: "#88FFAA",
			bg: "#000000",
			text: "#00FF88",
		},
	},
};

const ThemeSwitcher = ({
	onThemeChange,
	onMatrixToggle,
	onParticlesToggle,
}) => {
	const [currentTheme, setCurrentTheme] = useState("professional");
	const [showPanel, setShowPanel] = useState(false);
	const [matrixEnabled, setMatrixEnabled] = useState(false);
	const [particlesEnabled, setParticlesEnabled] = useState(false);
	const [soundEnabled, setSoundEnabled] = useState(true);

	const changeTheme = useCallback(
		(theme) => {
			setCurrentTheme(theme);
			onThemeChange(theme);
			soundManager.play("success");

			// Update CSS variables
			const root = document.documentElement;
			const themeColors = themes[theme].colors;

			root.style.setProperty("--theme-primary", themeColors.primary);
			root.style.setProperty("--theme-secondary", themeColors.secondary);
			root.style.setProperty("--theme-accent", themeColors.accent);
			root.style.setProperty("--theme-bg", themeColors.bg);
			root.style.setProperty("--theme-text", themeColors.text);

			// Apply theme class to body
			document.body.className =
				theme === "creative" ? "creative-theme" : "professional-theme";
		},
		[onThemeChange]
	);

	useEffect(() => {
		// Listen for theme toggle events from terminal
		const handleThemeToggle = () => {
			const newTheme =
				currentTheme === "professional" ? "creative" : "professional";
			changeTheme(newTheme);
		};

		const handleMatrixToggle = () => {
			setMatrixEnabled((prev) => {
				const newValue = !prev;
				onMatrixToggle(newValue);
				soundManager.play("matrix");
				return newValue;
			});
		};

		window.addEventListener("toggleTheme", handleThemeToggle);
		window.addEventListener("toggleMatrix", handleMatrixToggle);

		return () => {
			window.removeEventListener("toggleTheme", handleThemeToggle);
			window.removeEventListener("toggleMatrix", handleMatrixToggle);
		};
	}, [currentTheme, onMatrixToggle, changeTheme]);

	const toggleMatrix = () => {
		setMatrixEnabled(!matrixEnabled);
		onMatrixToggle(!matrixEnabled);
		soundManager.play("matrix");
	};

	const toggleParticles = () => {
		setParticlesEnabled(!particlesEnabled);
		onParticlesToggle(!particlesEnabled);
		soundManager.play("click");
	};

	const toggleSound = () => {
		const muted = soundManager.toggleMute();
		setSoundEnabled(!muted);
		if (!muted) {
			soundManager.play("notification");
		}
	};

	return (
		<>
			{/* Theme Switcher Button */}
			<button
				onClick={() => setShowPanel(!showPanel)}
				className="fixed top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
				title="Theme Settings"
			>
				<FaPalette size={20} />
			</button>

			{/* Settings Panel */}
			{showPanel && (
				<div className="fixed top-16 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-6 z-50 w-80 border border-gray-200 dark:border-gray-700">
					<h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
						Theme Settings
					</h3>

					{/* Theme Selection */}
					<div className="mb-6">
						<h4 className="text-sm font-semibold mb-3 text-gray-600 dark:text-gray-300">
							Visual Theme
						</h4>
						<div className="grid grid-cols-1 gap-3">
							{Object.entries(themes).map(([key, theme]) => {
								const IconComponent = theme.icon;
								return (
									<button
										key={key}
										onClick={() => changeTheme(key)}
										className={`p-3 rounded-lg border-2 text-left transition-all duration-200 ${
											currentTheme === key
												? "border-blue-500 bg-blue-50 dark:bg-blue-900/30"
												: "border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"
										}`}
									>
										<div className="flex items-center gap-3">
											<IconComponent
												className={`${
													currentTheme === key
														? "text-blue-500"
														: "text-gray-400"
												}`}
											/>
											<div>
												<div
													className={`font-medium ${
														currentTheme === key
															? "text-blue-700 dark:text-blue-300"
															: "text-gray-700 dark:text-gray-300"
													}`}
												>
													{theme.name}
												</div>
												<div className="text-xs text-gray-500 dark:text-gray-400">
													{theme.description}
												</div>
											</div>
										</div>
									</button>
								);
							})}
						</div>
					</div>

					{/* Effects Controls */}
					<div className="mb-6">
						<h4 className="text-sm font-semibold mb-3 text-gray-600 dark:text-gray-300">
							Visual Effects
						</h4>
						<div className="space-y-3">
							<label className="flex items-center justify-between">
								<span className="text-sm text-gray-700 dark:text-gray-300">
									Matrix Rain Effect
								</span>
								<button
									onClick={toggleMatrix}
									className={`relative w-12 h-6 rounded-full transition-colors ${
										matrixEnabled
											? "bg-green-500"
											: "bg-gray-300 dark:bg-gray-600"
									}`}
								>
									<div
										className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
											matrixEnabled ? "translate-x-7" : "translate-x-1"
										}`}
									/>
								</button>
							</label>

							<label className="flex items-center justify-between">
								<span className="text-sm text-gray-700 dark:text-gray-300">
									Particle System
								</span>
								<button
									onClick={toggleParticles}
									className={`relative w-12 h-6 rounded-full transition-colors ${
										particlesEnabled
											? "bg-blue-500"
											: "bg-gray-300 dark:bg-gray-600"
									}`}
								>
									<div
										className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
											particlesEnabled ? "translate-x-7" : "translate-x-1"
										}`}
									/>
								</button>
							</label>
						</div>
					</div>

					{/* Audio Controls */}
					<div className="mb-4">
						<h4 className="text-sm font-semibold mb-3 text-gray-600 dark:text-gray-300">
							Audio Settings
						</h4>
						<button
							onClick={toggleSound}
							className={`flex items-center gap-3 w-full p-3 rounded-lg border transition-colors ${
								soundEnabled
									? "border-green-200 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300"
									: "border-red-200 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300"
							}`}
						>
							{soundEnabled ? <FaVolumeUp /> : <FaVolumeMute />}
							<span className="text-sm">
								Sound Effects {soundEnabled ? "On" : "Off"}
							</span>
						</button>
					</div>

					{/* Quick Actions */}
					<div className="border-t border-gray-200 dark:border-gray-600 pt-4">
						<div className="flex gap-2">
							<button
								onClick={() => {
									changeTheme("professional");
									setMatrixEnabled(false);
									setParticlesEnabled(false);
									onMatrixToggle(false);
									onParticlesToggle(false);
								}}
								className="flex-1 px-3 py-2 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
							>
								Reset to Professional
							</button>
							<button
								onClick={() => {
									changeTheme("creative");
									setMatrixEnabled(true);
									setParticlesEnabled(true);
									onMatrixToggle(true);
									onParticlesToggle(true);
								}}
								className="flex-1 px-3 py-2 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-md hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors"
							>
								Full Creative Mode
							</button>
						</div>
					</div>
				</div>
			)}

			{/* Click outside to close */}
			{showPanel && (
				<div
					className="fixed inset-0 z-40"
					onClick={() => setShowPanel(false)}
				/>
			)}
		</>
	);
};

export default ThemeSwitcher;
