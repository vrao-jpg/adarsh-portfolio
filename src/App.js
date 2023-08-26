import "./App.css";
import AboutMe from "./sections/aboutMe/aboutMe";
import ContactMe from "./sections/contactMe/contactMe";
import ExperienceAndEducation from "./sections/experienceAndEducation/experienceAndEducation";
import MenuBar from "./sections/menuBar/menuBar";
import Skills from "./sections/skills/skills";

function App() {
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
