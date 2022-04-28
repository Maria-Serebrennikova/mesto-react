import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";



function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }


  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  const [isImagePopupOpen, setIsImagePopupOpen] =  React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
      <body className="page">
      <div className="page__container">
        <Header/>
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
        <Footer/>
      </div>

      <PopupWithForm isOpen={isEditProfilePopupOpen} name={'rename-user'} title={'Редактировать профиль'} buttonName={'Сохранить'} onClose={closeAllPopups}>
      <input type="text" id="username" placeholder="Имя" className="popup__info popup__info_type_name"
        name="name" minLength="2" maxLength="40" required />
      <span className="popup__error popup__error_visible username-error"></span>
      <input type="text" id="status" placeholder="Профессиональная деятельность"
        className="popup__info popup__info_type_status" name="about" minLength="2" maxLength="200" required />
      <span className="popup__error popup__error_visible status-error"></span>
        </PopupWithForm> 

        <PopupWithForm isOpen={isAddPlacePopupOpen} name={'append-card'} title={'Новое место'} buttonName={'Создать'} onClose={closeAllPopups}>
        <input type="text" id="place" className="popup__info popup__info_type_place"
          name="name" placeholder="Название" minLength="2" maxLength="30" required />
        <span className="popup__error popup__error_visible place-error"></span>
        <input id="email" type="url" className="popup__info popup__info_type_link"
          name="link" placeholder="Ссылка на картинку" required />
        <span className="popup__error popup__error_visible email-error"></span>
        </PopupWithForm>

        <PopupWithForm isOpen={isEditAvatarPopupOpen} name={'avatar-change'} title={'Обновить аватар'} buttonName={'Сохранить'} onClose={closeAllPopups}>
        <input id="avatar-link" type="url" className="popup__info popup__info_type_avatar-change"
          name="avatar" placeholder="https://somewebsite.com/someimage.jpg" required />
        <span className="popup__error popup__error_visible avatar-link-error"></span>
        </PopupWithForm>

        <ImagePopup isOpen ={isImagePopupOpen} onClose={closeAllPopups} card={selectedCard}/>

      </body>
      );
}

export default App;