import React, { useState } from "react";
import hamburgerIcon from "../../assets/hamburger.svg";
import closeIcon from "../../assets/closeIcon.svg";
import logo from "../../assets/logo.png";
import "./menuBar.css";
import { scrollIntoViewWithOffset } from "../../util/util";

function MenuBar(props) {
  const [showHamburger, setShowHamburger] = useState(false);
  const navigateTo = (id, closeBurger) => () => {
    if (closeBurger) {
      setShowHamburger(false);
    }
    scrollIntoViewWithOffset(`#${id}`, 40);
  };

  return (
    <>
      <section className="menuBarContainer">
        <div className="nameHolder">
          <div>
            <img src={logo} alt="my logo" />
          </div>
          <div>VASUDEV RAO</div>
        </div>
        <div className="menuList">
          <div onClick={navigateTo("AboutMe")}>ABOUT ME</div>
          <div onClick={navigateTo("ExperienceAndEducation")}>EXPERIENCE</div>
          <div onClick={navigateTo("Skill")}>SKILLS</div>
          <div onClick={navigateTo("ContactMe")}>CONTACT</div>
        </div>
        <div
          onClick={() => setShowHamburger(!showHamburger)}
          className="hamburgerDimension"
        >
          <img
            src={showHamburger ? closeIcon : hamburgerIcon}
            alt="click to see icon"
          />
        </div>
      </section>
      {showHamburger && (
        <section className="dropDownContainer">
          <div className="dropDownList">
            <div onClick={navigateTo("AboutMe", true)}>ABOUT ME</div>
            <div onClick={navigateTo("ExperienceAndEducation", true)}>
              EXPERIENCE
            </div>
            <div onClick={navigateTo("Skill", true)}>SKILLS</div>
            <div onClick={navigateTo("ContactMe", true)}>CONTACT</div>
          </div>
        </section>
      )}
    </>
  );
}

export default MenuBar;
