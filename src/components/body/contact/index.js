import React from "react";
import "./contact.css";
import Separator from "../../common/separator/index";
import SocialContact from "../../common/social-contact/index";
function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-text">
          <p>
            Let's get in touch and share our thoughts. I look forward to hearing
            different worldviews 🌍
          </p>
          <SocialContact />
        </div>
      </div>
    </div>
  );
}

export default Contact;
