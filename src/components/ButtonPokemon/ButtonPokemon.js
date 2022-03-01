import * as React from 'react';

function ButtonPokemon({ name, url, click }) {

  function handlePokemon () {
    click(url)
  }

  return (
    <button onClick={handlePokemon}>{name}</button>
  );
}

export default ButtonPokemon;