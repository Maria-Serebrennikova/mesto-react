import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const [inputValue, setInputValue] = React.useState('');

  function handleChangeAvatar(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: inputValue,
    });
    setInputValue('');
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      name={"avatar-change"}
      title={"Обновить аватар"}
      buttonName={"Сохранить"}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        onChange={handleChangeAvatar}
        value={inputValue}
        id="avatar-link"
        type="url"
        className="popup__info popup__info_type_avatar-change"
        name="avatar"
        placeholder="https://somewebsite.com/someimage.jpg"
        required
      />
      <span className="popup__error popup__error_visible avatar-link-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
