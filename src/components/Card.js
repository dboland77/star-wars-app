import React, { Fragment } from "react";
import "../styles/Cards.css";

function Card(props) {
  return (
    <Fragment>
      <li className="cards_item">
        <div className="card">
          <div className="card_content">{props.children}</div>
        </div>
      </li>
    </Fragment>
  );
}

export default Card;
