import React from "react";
import "./skills.css";
import ProgressBar from "../../components/progressBar/progressBar";
import { SKILLS_DATA } from "../../util/constants";

function Skills(props) {
  return (
    <section id="Skill" className="skillsContainer">
      <div className="skillsHeader">Skills & Proficiencies</div>
      <div className="skillsDescription">
        {SKILLS_DATA.map((data) => (
          <div className="progressContainer" key={data.id}>
            <div>{data.skillName}</div>
            <div className="skillProgress">
              <ProgressBar value={data.level} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Skills;
