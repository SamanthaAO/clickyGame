import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card" key={props.key} onClick={() => {props.updateClicked(props.id); props.shuffleBoJo()}}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default FriendCard;
