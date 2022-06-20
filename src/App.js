// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Homepage from "./components/Homepage";
// import AboutPage from "./components/AboutPage";
// import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <AboutPage />
      <Skills />
      <Work />
    </>
  );
}

export default App;
