import React from "react";
import { MDBCol } from "mdbreact";
import "./style.css";

function BoJoCard(props) {
  console.log(props)
  return (
    <MDBCol size="4">
    <div className="card" onClick={() => {props.updateClicked(props.id)}}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
    </MDBCol>
  );
}

export default BoJoCard;
