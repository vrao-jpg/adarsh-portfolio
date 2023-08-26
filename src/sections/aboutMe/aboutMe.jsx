import React from "react";
import myPic from "../../assets/IMG-1822.png";
import Button from "../../components/Button/button";
import "./aboutMe.css";
import linkedinIconDark from "../../assets/linkedinIconDark.svg";
import githubIconDark from "../../assets/githubIconDark.svg";
import instagramIconDark from "../../assets/instagramIconDark.svg";

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
          <Button>Email Me</Button>
          <div className="socialLink">
            <a href="http://localhost:3000">
              <img src={linkedinIconDark} alt="linkedin icon" />
            </a>
            <img src={githubIconDark} alt="Github icon" />
            <img src={instagramIconDark} alt="Github icon" />
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
            <Button>Resume</Button>
          </div>
          <div>
            <Button>Portfolio</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
