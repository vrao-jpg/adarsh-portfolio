import React from "react";
import myPic from "../../assets/adarsh.jpg";
import Button from "../../components/Button/button";
import "./aboutMe.css";
import linkedinIconDark from "../../assets/linkedinIconDark.svg";
import instagramIconDark from "../../assets/instagramIconDark.svg";
import { mailTo, navigateToPage } from "../../util/util";
import {
  RESUME_URL,
  PORTFOLIO_URL,
  LINKEDIN_URL,
  INSTAGRAM_URL,
} from "../../util/constants";

function AboutMe() {
  return (
    <section id="AboutMe" className="aboutMeContainer">
      <div className="contactCard">
        <div className="cardDiv1">
          <img src={myPic} alt="Vasudev pic" className="imageStyle" />
          <div className="marginTop30 nameStyle">Kumar Adarsh</div>
          <div className="nameStyle">(He/His/Him)</div>
          <div className="designation">SAFETY PROFESSIONAL</div>
        </div>
        <div className="marginTop30">
          <Button onClick={mailTo}>Email Me</Button>
          <div className="socialLink">
            <img
              src={linkedinIconDark}
              alt="linkedin icon"
              onClick={navigateToPage(LINKEDIN_URL)}
            />
            <img
              src={instagramIconDark}
              alt="Instagram icon"
              onClick={navigateToPage(INSTAGRAM_URL)}
            />
          </div>
        </div>
      </div>
      <div className="aboutMeCard">
        <div className="cardDiv1">
          <div className="aboutMeHeader">About Me</div>
          <div className="aboutMeDescription">
            I am a safety professional who has worked in different fields of
            industrial vendors with different aspects of safety looking after
            all CSMS & IMS relevant documents.
            <br />I have keen interest in contributing and conducting SCM, MR &
            OH&S management, conducting audit, preparation of JHA and RCRM.
            Constant impreovement of my organisation has always been my top
            priority.
          </div>
        </div>
        <div className="buttonGroup">
          <div>
            <Button onClick={navigateToPage(RESUME_URL)}>Resume</Button>
          </div>
          <div>
            <Button onClick={navigateToPage(PORTFOLIO_URL, false)}>
              Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
