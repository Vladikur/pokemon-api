import * as React from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Popup from '../Popup/Popup';
import PokemonsHolder from '../PokemonsHolder/PokemonsHolder';
import { useDispatch } from 'react-redux'
import { addPokemons } from '../../store/PokemonsListReducer';
import { newPokemon } from '../../store/PokemonReducer';
import { randomPokemon } from '../../utils/RandomPokemon';

function App() {

  const dispatch = useDispatch();
  const [isReceiving, setIsReceiving] = React.useState(true);
  const [popupOpen, setPopupOpen] = React.useState(false);

  function openPopup() {
    setPopupOpen(true)
  } 

  function closePopup() {
    setPopupOpen(false)
  } 

  function preloaderTimer() {
    setTimeout(() => {
      setIsReceiving(false)
    }, 1000)
  }

  React.useEffect(() => {
    setIsReceiving(true)
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=126&limit=1000`)
    .then(res => {
      const pokemons = res.data.results;
      dispatch(addPokemons(pokemons))


      axios.get(`${randomPokemon(pokemons)}`)
      .then(res => {
        const pokemon = res.data;
        dispatch(newPokemon(pokemon))
      })
      .catch((err) => {
        console.log(err)
        openPopup()
      })
    })
    .catch((err) => {
      console.log(err)
      openPopup()
    })
    .finally(() => {
      preloaderTimer()
    });

  }, [])

  function pokemonClick (url) {
    setIsReceiving(true)
    axios.get(`${url}`)
    .then(res => {
      const pokemon = res.data;
      dispatch(newPokemon(pokemon))
    })
    .catch((err) => {
      console.log(err)
      openPopup()
    })
    .finally(() => {
      preloaderTimer()
    });
  }

  return (
    <div className="app">

      <Header/>

      <PokemonsHolder
        pokemonClick={pokemonClick}
        isReceiving={isReceiving}
      />

      <Popup
      closePopup={closePopup}
      isOpen={popupOpen}
      />
      
    </div>
  );
}

export default App;
