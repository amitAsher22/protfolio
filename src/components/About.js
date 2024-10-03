import React from "react";
import "../style/About.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="containerAbout">
      <div className="rightAbout">
        <div className="routerAbout">
          <Link to="/">
            <span>Home </span>
          </Link>
          <MdKeyboardArrowRight />
          <span className="routerAboutText">About</span>
        </div>
        <div className="pageAbout">
          <span className="mainPageTitle">ABOUT</span>
        </div>
        <div className="AboutMe">
          <span className="niceTomeetYou">Nice to meet you.</span>
          <p>
            My journey began at March 2021 after 10 years in the music
            production industry. Creation is a passion to me, and development of
            beautiful web pages is one of them.
          </p>
          <p>
            I'm a self taught developer and fast independent learner with great
            soft skills. naturally i am curious and creative, I love research
            and learn new topics, investing time on solving problems, express my
            creativity and I enjoy bringing ideas to life in the browser.
          </p>
          <span>Technical Skills & Knowledge</span>
          <div>Technical Icon</div>
        </div>
      </div>
      <div className="leftAbout">Left</div>
    </div>
  );
}

export default About;
