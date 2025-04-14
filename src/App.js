// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Homepage from "./components/Homepage";
// import AboutPage from "./components/AboutPage";
// import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
	return (
		<>
			<Navbar />
			<Homepage />
			<AboutPage />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
