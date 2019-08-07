import React from "react";
import { MDBJumbotron, MDBCardTitle} from "mdbreact";
import "./style.css";

const JumbotronPage = () => {
  return (
          <MDBJumbotron className="myJumbotron w-100 h-50 text-center">
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold text headingText">The Many (rediculous) Faces of BoJo</MDBCardTitle>
                <p className="mx-3 mb-5 text mainText">Click on an image to earn points, but don't click on any more than once!</p>
          </MDBJumbotron>
  )
}

export default JumbotronPage;