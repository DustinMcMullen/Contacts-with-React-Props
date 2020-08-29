import React from "react";
import Avatar from "./Avatar";
import Info from "./Info";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar image={props.image} />
        </div>
        <div className="bottom">
          <Info phone={props.phone} email={props.email} />
        </div>
      </div>
    </div>
  );
}

export default Card;
