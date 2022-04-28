import React from "react";
import {api} from '../utils/Api';
import Card from "./Card";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

const [userName, setUserName] = React.useState('');
const [userDescription, setUserDescription] = React.useState('');
const [userAvatar, setUserAvatar] = React.useState('');
const [cards, setCards] = React.useState([]);

React.useEffect(() => {
  api.getProfile()
  .then((res) => {
    setUserName(res.name);
    setUserDescription(res.about);
    setUserAvatar(res.avatar);
  })
  .catch((err) => console.log(err))
}, []);

React.useEffect(() => {
  api.getInitialCards()
  .then((res) => {
    const cardInfo = res.map((data) => {
      return {
        name: data.name,
        link: data.link,
        likes: data.likes,
        id: data._id
        }
      })
    setCards(cardInfo);
  })
  .catch((err) => console.log(err))
}, []);


return(
        <main className="main">
        <section className="profile">
          <div className="profile__avatar" onClick = {onEditAvatar}>          
            <img 
              className="profile__avatar-img"
              src={userAvatar}
              alt="Аватар" />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__rename"
              onClick = {onEditProfile}
              aria-label="change"
              type="button"
            ></button>
            <p className="profile__status">{userDescription}</p>
          </div>
          <button className="profile__button" onClick = {onAddPlace} type="button"></button>
        </section>
        <section className="cards">
        {cards.map((card) => (
          <Card card={card} key={card.id} onCardClick = {onCardClick}/>
        )      
        )}
        </section>
      </main>
    )
  };

export default Main;