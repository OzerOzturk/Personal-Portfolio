import React, { useState } from "react";
import "./header.css";
import Mobile from "./mobile";
import Web from "./web";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="menu">
      <div className="web-menu">
        <Web />
      </div>
      <div className="mobile-menu">
        <div onClick={() => setIsOpen(!isOpen)}>
          <i class="fi fi-rr-menu-burger menu-icon"></i>
        </div>
        {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
    </nav>
  );
}

export default Header;
