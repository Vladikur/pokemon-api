import * as React from 'react';
import Preloader from '../Preloader/Preloader';

function PokemonCard({ name, image, id, movies, height, attack, preloader }) {

  const [pokemonAttack, setPokemonAttack] = React.useState('');
  const [count, setCount] = React.useState(1)
  const [imagePokemon, setPokemon] = React.useState(image.front_default)

  React.useEffect(() => {
    attack.forEach((item, index) => {
      if (index === 2) {
      setPokemonAttack(item.base_stat);
      }
    });
  }, [attack])

  React.useEffect (() => {
    const interval = setInterval(() => {
      if(count < 4)  {
      setCount(count + 1)
      } else {
        setCount(1)
      }
    }, 1500)

    if(count === 1) {
      setPokemon(image.front_default)
    }
    if(count === 2) {
      setPokemon(image.back_default)
    }
    if(count === 3) {
      setPokemon(image.front_shiny)
    }
    if(count === 4) {
      setPokemon(image.back_shiny)
    }

    return () => clearInterval(interval);
  }, [count, image])

  return (
    <div className="pokemon-card">
        { preloader ? <Preloader/> : '' }
        <h1 className="pokemon-card__header">{name}</h1>
        <img className="pokemon-card__image" src={imagePokemon} alt="Покемон" />
        <p className="pokemon-card__description">Снялся в {movies.length} сериях</p>
        <p className="pokemon-card__description">Id: {id}</p>
        <p className="pokemon-card__description">height: {height}</p>
        <p className="pokemon-card__description">attack: {pokemonAttack}</p>
    </div>
  );
}

export default PokemonCard;