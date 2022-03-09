import * as React from 'react';
import { useSelector } from 'react-redux'
import PokemonCard from '../PokemonCard/PokemonCard';
import ButtonPokemon from '../ButtonPokemon/ButtonPokemon';

function PokemonsHolder({pokemonClick, isReceiving}) {

  const pokemons = useSelector(state => state.pokemonsListReducer.pokemons);
  const [foundPokemons, setFoundPokemons] = React.useState([]);
  const [visiblePokemons, setVisiblePokemons] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');
  const [pageNumbers, setpageNumbers] = React.useState({
    current: 0,
    all: 0
  });
  const [slice, setSlice] = React.useState({
    first: 0,
    last: 15
  });

  React.useEffect(() => {
    setFoundPokemons(pokemons)
  }, [pokemons])

  React.useEffect(() => {
    setVisiblePokemons(foundPokemons.slice(slice.first, slice.last))
    setpageNumbers({
      current: 1,
      all: Math.ceil(foundPokemons.length / 15)
    })
    setSlice({
      first: 0,
      last: 15
    })
  }, [foundPokemons])

  function clickBack() {
    const newPage = {
      first: slice.first - 15,
      last: slice.last - 15
    }
    setVisiblePokemons(foundPokemons.slice(newPage.first, newPage.last))
    setSlice({...newPage})
    setpageNumbers({
      ...pageNumbers,
      current: pageNumbers.current - 1,
    })
  }

  function clickforward() {
    const newPage = {
      first: slice.first + 15,
      last: slice.last + 15
    }
    setVisiblePokemons(foundPokemons.slice(newPage.first, newPage.last))
    setSlice({...newPage})
    setpageNumbers({
      ...pageNumbers,
      current: pageNumbers.current + 1,
    })
  }

  function handleChange(e) {
    const { value } = e.target
    setInputValue(value)
    const p = pokemons.filter(p => p.name.toLowerCase().match(value.toLowerCase()))
    setFoundPokemons(p)
  }

  return (
    <div className="pokemons-holder">
      <div className="pokemons-holder__container">
        <input placeholder='Поиск покемонов' value={inputValue || ''} onChange={handleChange} className="pokemons-holder__input" type="text" name="name" />
        <div className="pokemons-holder__nav-container">
          { pageNumbers.current !== 1 ? < button onClick={clickBack} className="pokemons-holder__button" type='button'>Пред.</button> : '' }
          <p className="pokemons-holder__text">Стр. {pageNumbers.current} из {pageNumbers.all}</p>
          { pageNumbers.current !== pageNumbers.all ? <button onClick={clickforward} className="pokemons-holder__button" type='button'>След.</button> : ''}
        </div>
        { foundPokemons.length === 0 ? <p className="pokemons-holder__text">Покемонов с таким иминем не нашлось...</p> : '' }
        <div className="pokemons-holder__button-container">
          {visiblePokemons.map((p, index) => (
            <ButtonPokemon
              key={index}
              name={p.name}
              url={p.url}
              click={pokemonClick}
            />
          ))}
        </div>

      </div>
      <div className="pokemons-holder__card-container">
        <PokemonCard
          preloader={isReceiving}
        />
      </div>
    </div>
  );
}

export default PokemonsHolder;