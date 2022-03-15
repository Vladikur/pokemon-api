import * as React from 'react';
import { useSelector } from 'react-redux'
import Preloader from '../Preloader/Preloader';
import slowpoke from '../../images/slowpoke.png';

function PokemonCard({ preloader }) {

  const pokemon = useSelector(state => state.pokemonReducer.pokemon);
  const animations = ['pulse', 'jump', 'down', 'joke', 'goAway']

  const [pokemonAttack, setPokemonAttack] = React.useState('');
  const [count, setCount] = React.useState(1)
  const [imagePokemon, setPokemon] = React.useState(pokemon.sprites.front_default)
  const [liveImageAnimation, setliveImageAnimation] = React.useState('move');

  React.useEffect(() => {
    pokemon.stats.forEach((item, index) => {
      if (index === 2) {
      setPokemonAttack(item.base_stat);
      }
    });
  }, [pokemon])

  React.useEffect (() => {
    const interval = setInterval(() => {
      if(count < 4)  {
      setCount(count + 1)
      } else {
        setCount(1)
      }
    }, 1500)

    if(count === 1 && pokemon.sprites.front_default) {
      setPokemon(pokemon.sprites.front_default)
    }
    if(count === 2 && pokemon.sprites.back_default) {
      setPokemon(pokemon.sprites.back_default)
    }
    if(count === 3 && pokemon.sprites.front_shiny) {
      setPokemon(pokemon.sprites.front_shiny)
    }
    if(count === 4 && pokemon.sprites.back_shiny) {
      setPokemon(pokemon.sprites.back_shiny)
    }

    return () => clearInterval(interval);
  }, [count, pokemon])

  function randomanimation() {
    const rand = Math.floor(Math.random() * animations.length)
    const animation = animations[rand]
    console.log(animation)
    setliveImageAnimation(animation)
  }
  

  return (
    <div className="pokemon-card">
      <div className="pokemon-card__container">
          { preloader ? <Preloader preloader={preloader} /> : '' }
          <h1 className="pokemon-card__header">{pokemon.name}</h1>
          <img className="pokemon-card__image" src={imagePokemon} alt="Покемон" />
          <p className="pokemon-card__description">Снялся в {pokemon.moves.length} сериях</p>
          <p className="pokemon-card__description">Id: {pokemon.id}</p>
          <p className="pokemon-card__description">height: {pokemon.height}</p>
          <p className="pokemon-card__description">attack: {pokemonAttack}</p>
      </div>
      <img onClick={randomanimation} className={`pokemon-card__live-image ${liveImageAnimation}`} src={slowpoke} alt="Покемон" />
    </div>
  );
}

export default PokemonCard;