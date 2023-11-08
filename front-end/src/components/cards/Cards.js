import React from "react";
import { Link } from "react-router-dom";

// CSS
import "./Cards.scss"

const Cards = (props) => {
  return (
    <>
      <div className="cards">
        <Link className="cards__link" to={props.path}>
          <figure className="cards__pic" data-category={props.label}>
            <img className="cards__image" alt="photo" src={props.src} />
          </figure>
          <div className="cards__info">
            <h5 className="cards__text">{props.text}</h5>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Cards;
