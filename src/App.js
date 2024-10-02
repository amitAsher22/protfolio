import "./style/App.css";
import React, { useState } from "react";
// components
import Header from "./components/Header";

export const Context = React.createContext();

function App() {
  const [show, setshow] = useState(false);
  const [color, setColor] = useState(false);

  return (
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
          full screen
        </div>

        <div className="bodyhs">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div className="bodyhs">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div className="bodyhs">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div className="bodyhs">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div className="bodyhs">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div className="bodyhs">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>

        <div className="bodyhs">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div className="bodyhs">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div className="bodyhs">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div className="bodyhs">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
      <div className="footer">footer</div>
    </div>
  );
}

export default App;
