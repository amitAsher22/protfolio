import React, { useContext } from "react";
import { Context } from "../App";
import "../style/Header.css";
import imgMe from "../images/amit.png";
import { IoSunnyOutline } from "react-icons/io5";
import { BsMoonStarsFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";

function Header() {
  const data = useContext(Context);

  return (
    <div className="headerDiv">
      <div className="imgProfileHeader">
        <img src={imgMe} alt="profile" />
      </div>
      <div className="toggleHeader">
        <div className="sunLight">
          {data.show ? (
            <BsMoonStarsFill
              className="menuLight"
              onClick={() => data.setshow(!data.show)}
            />
          ) : (
            <IoSunnyOutline
              className="menuLight"
              onClick={() => data.setshow(!data.show)}
            />
          )}
        </div>
        <div>
          {data.color ? (
            <IoCloseOutline className="menuToggle" onClick={data.setColor} />
          ) : (
            <AiOutlineMenu className="menuToggle" onClick={data.setColor} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
