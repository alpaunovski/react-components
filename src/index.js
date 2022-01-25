import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <p><img src={props.img} /></p>
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <Card name="Jenny" img="https://placekitten.com/300/200" tel="555-555-5555" email="j@enny.com" />,
  document.getElementById("root")
);
