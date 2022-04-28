import React from "react";

function Card(props) {

function handleClick() {
props.onCardClick(props.card);
} 

return(
<div className="card" key={props.card.id}>
        <div className="card__image"onClick={handleClick}><img src={props.card.link} className="card__img" alt="Место" /></div>
        <button type="button" aria-label="basket" className="card__trash"></button>
        <div className="card__bottom">
          <h3 className="card__name">{props.card.name}</h3>
          <div className="card__likes-zone">
            <button className="card__like" type="button"></button>
            <span className="card__like-count">{props.card.likes.length}</span>
          </div>
        </div>
      </div>
)
}

export default Card;