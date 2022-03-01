import * as React from 'react';
import logo from '../../images/logo.svg';
import finger from '../../images/finger.svg';

function Header() {

  return (
    <header className="header">
      <img src={logo} alt="Логотип" className="header__logo" />
      <div className="header__container">
        <img src={finger} alt="Иконка руки" className="header__finger" />
        <span className="header__text">Нажмите на нужного Покемона</span>
      </div>
    </header>
  );
}

export default Header;