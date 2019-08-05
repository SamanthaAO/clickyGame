import React from "react";
import { MDBCol } from "mdbreact";
import "./style.css";

function FriendCard(props) {
  return (
    <MDBCol size="4">
    <div className="card" key={props.key} onClick={() => {props.updateClicked(props.id); props.shuffleBoJo()}}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
    </MDBCol>
  );
}

export default FriendCard;
