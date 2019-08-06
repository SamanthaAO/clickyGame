import React from "react";
import {MDBContainer, MDBFooter } from "mdbreact";
import "./style.css";

const FooterPage = () => {
  return (
    <MDBContainer fluid className="p-0 mt-5">
    <MDBFooter color="red" className="font-small pt-4 mt-4 myFooter page-footer">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/SamanthaAO"> SamanthaAO </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </MDBContainer>
  );
}

export default FooterPage;