import "./style/App.css";
import React, { useState } from "react";
// components
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

//icons
import { IoSunnyOutline } from "react-icons/io5";
import { BsMoonStarsFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";

// // router
import { Route, Routes, Link } from "react-router-dom";

export const Context = React.createContext();

function App() {
  const [show, setshow] = useState(true);
  const [color, setColor] = useState(false);

  return (
    <Context.Provider value={{ color, setColor, show, setshow }}>
      <div
        className={!show ? "darkApp" : "AppLight"}
        id={!color ? "fullScreenShow" : "fullScreenHide"}
      >
        <div className="header">
          <Header />
        </div>
        <div className="body">
          <div
            id={!color ? "fullScreenHide" : "fullScreenShow"}
            className={show ? "AppLight" : "darkApp"}
          >
            <div className="amit">
              <div>
                {color ? (
                  <IoCloseOutline
                    className="menuToggle"
                    onClick={() => setColor(!color)}
                  />
                ) : (
                  <AiOutlineMenu
                    className="menuToggle"
                    onClick={() => setColor(!color)}
                  />
                )}
              </div>
              <div className="centerFulmenu">
                <Link to="/" onClick={() => setColor(!color)}>
                  Home{" "}
                </Link>
                <Link to="about" onClick={() => setColor(!color)}>
                  About{" "}
                </Link>
                <Link to="Projects" onClick={() => setColor(!color)}>
                  Projects{" "}
                </Link>
                <Link to="Contact" onClick={() => setColor(!color)}>
                  Contact{" "}
                </Link>
              </div>
            </div>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
        <div className={!show ? "footerDark" : "footer"}>
          <Footer />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;

// <div
// className={!show ? "darkApp" : "AppLight"}
// id={!color ? "fullScreenShow" : "fullScreenHide"}
// >
// <div className="header">
//   <Header />
// </div>
// <div className="body">
//   <div
//     id={!color ? "fullScreenHide" : "fullScreenShow"}
//     className={show ? "AppLight" : "darkApp"}
//   >
//     <div className="amit">
//       <div>
//         {color ? (
//           <IoCloseOutline
//             className="menuToggle"
//             onClick={() => setColor(!color)}
//           />
//         ) : (
//           <AiOutlineMenu
//             className="menuToggle"
//             onClick={() => setColor(!color)}
//           />
//         )}
//       </div>
//       <div className="centerFulmenu">
//         <a>link1</a>
//         <a>link1</a>
//         <a>link1</a>
//         <a>link1</a>
//         <a>link1</a>
//       </div>
//     </div>
//   </div>

//   <Home />
// </div>
// <div className={!show ? "footerDark" : "footer"}>
//   <Footer />
// </div>
// </div>
