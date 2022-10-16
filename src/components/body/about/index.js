import React from "react";
import "./about.css";
function About() {
  return (
    <section className="about">
      <div className="about-info">
        Hi 👋, I'm <span className="about-info-name"> Özer Öztürk</span>
        <br />
        I'm a curious
        <span className="about-info-role"> Frontend Developer</span> with an
        engineering background.
        <br /> I enjoy building smooth responsive user interfaces and also
        developed myself using many open source projects. Now I'm trying to
        contribute to the community in various ways.
      </div>
      <div className="about-photo">
        <img
          src={require("../../../assets/coding.png").default}
          alt="coding"
          className="picture"
        />
      </div>
    </section>
  );
}

export default About;
