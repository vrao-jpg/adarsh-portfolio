import { useEffect } from "react";
import "./App.css";
import AboutMe from "./sections/aboutMe/aboutMe";
import ContactMe from "./sections/contactMe/contactMe";
import ExperienceAndEducation from "./sections/experienceAndEducation/experienceAndEducation";
import MenuBar from "./sections/menuBar/menuBar";
import Skills from "./sections/skills/skills";

function App() {
  useEffect(() => {
    const handleContextmenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);
  return (
    <div className="App">
      <MenuBar />
      <AboutMe />
      <ExperienceAndEducation />
      <Skills />
      <ContactMe />
    </div>
  );
}

export default App;
