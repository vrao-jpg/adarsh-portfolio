import React from "react";
import myPic from "../../assets/IMG-1825.png";
import "./contactMe.css";
import linkedinIcon from "../../assets/linkedinIcon.svg";
import githubIcon from "../../assets/githubIcon.svg";
import instagramIcon from "../../assets/instagramIcon.svg";

function ContactMe(props) {
  return (
    <section id="ContactMe" className="contactMeSection">
      <div className="contactMeContainer">
        <div className="imgContainer">
          <img src={myPic} alt="Vasudev pic" className="contactImageStyle" />
        </div>
        <div className="contactDescription">
          <div>Reach Out</div>
          <div>Vasudev Rao</div>
          <div>vasudevrao822@gmail.com</div>
          <div>I bring code to Life !</div>
          <div>CONNECT WITH ME</div>
          <div>
            <img
              className="iconDimension"
              src={linkedinIcon}
              alt="linkedin icon"
            />
            <img className="iconDimension" src={githubIcon} alt="Github icon" />
            <img
              className="iconDimension"
              src={instagramIcon}
              alt="Github icon"
            />
          </div>
        </div>
      </div>
      <div className="copyright">
        Handcrafted by&nbsp;
        <a
          rel="nonreferrer noreferrer"
          target="_blank"
          href="http://localhost:3000"
        >
          Vasudev Rao
        </a>
        &nbsp;&copy; {new Date().getFullYear()}
      </div>
    </section>
  );
}

export default ContactMe;
