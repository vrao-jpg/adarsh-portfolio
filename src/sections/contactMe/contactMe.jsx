import React from "react";
import myPic from "../../assets/adarsh-dark.jpg";
import "./contactMe.css";
import linkedinIcon from "../../assets/linkedinIcon.svg";
import instagramIcon from "../../assets/instagramIcon.svg";
import { navigateToPage } from "../../util/util";
import {
  INSTAGRAM_URL,
  LINKEDIN_URL,
  PORTFOLIO_URL,
} from "../../util/constants";

function ContactMe(props) {
  return (
    <section id="ContactMe" className="contactMeSection">
      <div className="contactMeContainer">
        <div className="imgContainer">
          <img src={myPic} alt="Vasudev pic" className="contactImageStyle" />
        </div>
        <div className="contactDescription">
          <div>Reach Out</div>
          <div>Kumar Adarsh</div>
          <div>kadarsh103.ak@gmail.com</div>
          <div>I bring safety to Life !</div>
          <div>CONNECT WITH ME</div>
          <div>
            <img
              className="iconDimension"
              src={linkedinIcon}
              alt="linkedin icon"
              onClick={navigateToPage(LINKEDIN_URL)}
            />
            <img
              className="iconDimension"
              src={instagramIcon}
              alt="Instagram icon"
              onClick={navigateToPage(INSTAGRAM_URL)}
            />
          </div>
        </div>
      </div>
      <div className="copyright">
        Handcrafted by&nbsp;
        <a rel="nonreferrer noreferrer" href={PORTFOLIO_URL}>
          Vasudev Rao
        </a>
        &nbsp;&copy; {new Date().getFullYear()}
      </div>
    </section>
  );
}

export default ContactMe;
