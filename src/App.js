import './App.css';
import axios from 'axios';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import PokemonCard from './PokemonCard';
import ButtonPokemon from './ButtonPokemon';


function App() {

  const [pokemon, setPokemon] = React.useState({
    name: '',
    moves: [],
    stats: [],
    sprites: {
      front_default: '',
    },
  });
  const [allPokemons, setAllPokemons] = React.useState([]);

  React.useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`)
    .then(res => {
      const p = res.data.results.slice(0, 10);
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

  }, [])

  function pokemonKlick (url) {
    axios.get(`${url}`)
    .then(res => {
      const p = res.data;
      setPokemon(p);
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="App">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        {allPokemons.map((p, index) => (
          <ButtonPokemon
            key={index}
            name={p.name}
            url={p.url}
            click={pokemonKlick}
          />
        ))}
      </Grid>
        <PokemonCard
          name={pokemon.name}
          image={pokemon.sprites}
          id={pokemon.id}
          movies={pokemon.moves}
          height={pokemon.height}
          attack={pokemon.stats}
        />
    </div>
  );
}

export default App;
