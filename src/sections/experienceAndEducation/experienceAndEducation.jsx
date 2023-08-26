import React from "react";
import { EXPERIENCE_AND_EDUCATION_DATA } from "../../util/constants";
import "./experienceAndEducation.css";

function ExperienceAndEducation(props) {
  return (
    <section
      id="ExperienceAndEducation"
      className="experienceEducationContainer"
    >
      <div className="header">Experience & Education</div>
      <div className="description">
        {EXPERIENCE_AND_EDUCATION_DATA.map((data) => (
          <div key={data.id} className="descriptionList">
            <div>{data.year}</div>
            <div>
              <div className="designation1">{data.heading}</div>
              <div className="subHeading">{data.subHeading}</div>
              <div className="workDescription">{data.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceAndEducation;
