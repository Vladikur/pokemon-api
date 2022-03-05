import * as React from 'react';
import ball from '../../images/ball.png';

function Preloader({ preloader }) {

  const preloaderClassName = (
    `preloader__image ${preloader ? 'rotation' : ''}`
  );

  return (
    <div className="preloader">
      <img src={ball} alt="Иконка руки" className={preloaderClassName} />
      <div className="preloader__shadow"></div>
    </div>
  );
}

export default Preloader;