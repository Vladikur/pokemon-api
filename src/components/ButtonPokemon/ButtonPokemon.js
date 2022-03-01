import * as React from 'react';

function ButtonPokemon({ name, url, click }) {

  function handlePokemon () {
    click(url)
  }

  return (
    <button className="button-pokemon" onClick={handlePokemon} type="button">{name}</button>
  );
}

export default ButtonPokemon;