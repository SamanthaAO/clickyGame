import React from "react";
import { MDBAnimation } from "mdbreact";

const AnimationPage = () => {
    return (
        <MDBAnimation type="shake" infinite>
            <img className="img-fluid" alt="" src="https://mdbootstrap.com/img/logo/mdb-transparent-250px.png" />
        </MDBAnimation>
    );
};

export default AnimationPage;