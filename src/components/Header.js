import React, { useContext } from "react";
import { Context } from "../App";

function Header() {
  const data = useContext(Context);
  return <div>Header {data}</div>;
}

export default Header;
