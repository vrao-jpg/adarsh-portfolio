import React from "react";
import myPic from "../../assets/IMG-1822.png";
import Button from "../../components/Button/button";
import "./aboutMe.css";
import linkedinIconDark from "../../assets/linkedinIconDark.svg";
import githubIconDark from "../../assets/githubIconDark.svg";
import instagramIconDark from "../../assets/instagramIconDark.svg";
import { mailTo, navigateToPage } from "../../util/util";
import {
  RESUME_URL,
  PORTFOLIO_URL,
  LINKEDIN_URL,
  GITHUB_URL,
  INSTAGRAM_URL,
} from "../../util/constants";

function AboutMe() {
  return (
    <section id="AboutMe" className="aboutMeContainer">
      <div className="contactCard">
        <div className="cardDiv1">
          <img src={myPic} alt="Vasudev pic" className="imageStyle" />
          <div className="marginTop30 nameStyle">Vasudev Rao</div>
          <div className="nameStyle">(He/His/Him)</div>
          <div className="designation">Frontend Developer</div>
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
              src={githubIconDark}
              alt="Github icon"
              onClick={navigateToPage(GITHUB_URL)}
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
            I'm a Frontend focused Web Developer who code beautifully simple
            things and who loves to create solid and scalable frontend products
            with great user experiences. <br />
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
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
