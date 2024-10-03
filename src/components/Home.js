import React from "react";
import "../style/Home.css";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <div>
      <h1 className="titleHome">Amit</h1>
      <span className="typingword">
        <Typewriter
          words={["Frontend, Backend Developer"]}
          loop={2}
          typeSpeed={70}
          fontSize={30}
        />
      </span>
    </div>
  );
}

export default Home;
