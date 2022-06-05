import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hi 👋, I'm <span className="info-name"> Özer</span>
          <br />
          Self-Taught Frontend Developer
          <br />I'm keen on learning new things and I try to contribute to communities.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/coding.png").default}
            alt="coding"
            className="picture"
          />
        </div>
      </div>
      <div className="about-bottom"></div>
      <SocialContact />
    </div>
  );
}

export default About;
