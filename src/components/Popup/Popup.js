import React from 'react';
import pokemon from '../../images/pokemon1.png';


function Popup({ closePopup, isOpen }) {

  function pageReload() {
    document.location.reload()
  }

  const popupClassName = (
    `popup ${isOpen ? 'popup_is-opened' : ''}`
  );

  return (
    <section className={popupClassName}>
      <div className="popup__container">
        <button onClick={closePopup} type="button" className="popup__button-remove"/>
        <h2 className="popup__header">Опаньки...</h2>
        <p className="popup__text">При загрузке данных произошла ошибка, попробуйте перезагрузить страницу.</p>
        <img src={pokemon} alt="Покемон" className='popup__image'></img>
        <button onClick={pageReload} className="popup__button-reload" type="button">Перезагрузка!</button>
      </div>
    </section>
  );
}

export default Popup;
