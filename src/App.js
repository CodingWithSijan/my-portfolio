// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Homepage from "./components/Homepage";
// import AboutPage from "./components/AboutPage";
// import ContactPage from "./components/ContactPage";
import React, { useState } from "react";
import AboutPageNew from "./components/AboutPageNew";
import ContactNew from "./components/ContactNew";
import FooterNew from "./components/FooterNew";
import Homepage from "./components/Homepage";
import NavbarNew from "./components/NavbarNew";
import ProjectsNew from "./components/ProjectsNew";
import SkillsNew from "./components/SkillsNew";
import ParticleSystem from "./components/ParticleSystem";
import InteractiveTerminal from "./components/InteractiveTerminal";
import LoadingScreen from "./components/LoadingScreen";

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [showTerminalModal, setShowTerminalModal] = useState(false);

	const handleLoadComplete = () => {
		setIsLoading(false);
	};

	const handleTerminalClick = () => {
		setShowTerminalModal(true);
	};

	const handleTerminalClose = () => {
		setShowTerminalModal(false);
	};

	if (isLoading) {
		return <LoadingScreen onLoadComplete={handleLoadComplete} />;
	}

	return (
		<div className="App professional">
			{/* Global particle background */}
			<ParticleSystem />

			{/* Main Content */}
			<NavbarNew onTerminalClick={handleTerminalClick} />
			<div className="pt-20">
				<Homepage />
				<AboutPageNew />
				<SkillsNew />
				<ProjectsNew />
				<ContactNew />
				<FooterNew />
			</div>

			{/* Interactive Terminal Modal */}
			<InteractiveTerminal
				isOpen={showTerminalModal}
				onClose={handleTerminalClose}
			/>
		</div>
	);
}

export default App;
