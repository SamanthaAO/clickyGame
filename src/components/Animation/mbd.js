import React from "react";
import { MDBAnimation } from "mdbreact";

const AnimationPage = (props) => {
    return (
        <MDBAnimation type="shake" count={props.shake}>
            {props.children}
        </MDBAnimation>
    );
};

export default AnimationPage;