import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="wrapper p-0">{props.children}</div>;
}

export default Wrapper;
