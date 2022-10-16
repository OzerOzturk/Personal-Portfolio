import React from "react";
import "./mobile.css";
function Mobile({ isOpen, setIsOpen }) {
  return (
    <nav className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i class="fi fi-rr-cross"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#projects">
            <i class="fi fi-rr-browser option-icon">Projects</i>
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skills">
            <i class="fi fi-rr-laptop option-icon">Skills</i>
          </a>
        </div>
        <div className="mobile-option">
          <a href="#blog">
            <i class="fi fi-rr-edit option-icon">Blog</i>
          </a>
        </div>
        <div className="mobile-option">
          <a href="#contact">
            <i class="fi fi-rr-portrait option-icon">Contact</i>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Mobile;
