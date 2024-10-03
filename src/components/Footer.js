import React from "react";
import "../style/Footer.css";
import { IoLogoLinkedin } from "react-icons/io";
import { GrGithub } from "react-icons/gr";

function Footer() {
  return (
    <>
      <div className="divIconsFooter">
        <IoLogoLinkedin className="iconFooter" />
        <GrGithub className="iconFooter" />
      </div>
      <div>
        <span className="textFooter">AMIT ASHER 2025</span>
      </div>
    </>
  );
}

export default Footer;
