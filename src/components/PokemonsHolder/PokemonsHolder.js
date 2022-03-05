import * as React from 'react';
import axios from 'axios';
import PokemonCard from '../PokemonCard/PokemonCard';
import ButtonPokemon from '../ButtonPokemon/ButtonPokemon';

function PokemonsHolder() {

  const [pokemon, setPokemon] = React.useState({
    name: '',
    moves: [],
    stats: [],
    sprites: {
      front_default: '',
    },
  });
  const [allPokemons, setAllPokemons] = React.useState([]);
  const [isReceiving, setIsReceiving] = React.useState(false);

  function preloaderTimer() {
    setTimeout(() => {
      setIsReceiving(false)
    }, 2000)
  }

  React.useEffect(() => {
    setIsReceiving(true)
    axios.get(`https://pokeapi.co/api/v2/pokemon/`)
    .then(res => {
      const p = res.data.results;
      setAllPokemons(p);
    })
    .catch((err) => {
      console.log(err)
    })

    axios.get(`https://pokeapi.co/api/v2/pokemon/1/`)
    .then(res => {
      const p = res.data;
      setPokemon(p);
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      preloaderTimer()
    });

  }, [])

  function pokemonClick (url) {
    setIsReceiving(true)
    axios.get(`${url}`)
    .then(res => {
      const p = res.data;
      setPokemon(p);
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      preloaderTimer()
    });
  }

  return (
    <div className="pokemons-holder">
      <div className="pokemons-holder__button-container">
        {allPokemons.map((p, index) => (
          <ButtonPokemon
            key={index}
            name={p.name}
            url={p.url}
            click={pokemonClick}
          />
        ))}
      </div>
      <div className="pokemons-holder__card-container">
        <PokemonCard
          name={pokemon.name}
          image={pokemon.sprites}
          id={pokemon.id}
          movies={pokemon.moves}
          height={pokemon.height}
          attack={pokemon.stats}
          preloader={isReceiving}
        />
      </div>
    </div>
  );
}

export default PokemonsHolder;