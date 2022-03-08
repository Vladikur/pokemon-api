import * as React from 'react';
import ball from '../../images/ball.png';

function Preloader({ preloader }) {

  // const preloaderClassName = (
  //   `preloader__image ${preloader ? 'rotation' : 'pulse'}`
  // );

  return (
    <div className="preloader">
      <img src={ball} alt="Иконка руки" className='preloader__image rotation' />
      <div className="preloader__shadow"></div>
    </div>
  );
}

export default Preloader;