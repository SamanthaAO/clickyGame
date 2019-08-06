// import React from "react";
// import "./style.css";

// function Title(props) {
//   return <h1 className="title">{props.children}</h1>;
// }

// export default Title;


import React from "react";
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";
import "./style.css";

function Nav(props) {
  return (
    <MDBNavbar  fixed="top" className="w-100 p-5 justify-content-between myNavBar">

      <MDBNavbarBrand>
        <strong className="white-text myNav">The Many Faces of BoJo</strong>
      </MDBNavbarBrand>
      <MDBNavbarBrand>
        <strong className="white-text myNav">{props.response}</strong>
      </MDBNavbarBrand>
      <MDBNavbarBrand>
        <strong className="white-text myNav">Score: {props.count} | High Score: {props.highScore}</strong>
      </MDBNavbarBrand>

    </MDBNavbar>


  )
};

export default Nav;
