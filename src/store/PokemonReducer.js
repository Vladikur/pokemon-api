const defaultState = {
  pokemon: {
    name: '',
    moves: [],
    stats: [],
    sprites: {
      front_default: '',
    }
  }
}

const NEW_POKEMON = "NEW_POKEMON"

export const pokemonReducer = (state = defaultState, action) => {
  switch (action.type) {
    case NEW_POKEMON:
        return {...state, pokemon: action.payload}
    default:
      return state
  }
}

export const newPokemon = (payload) => ({type: NEW_POKEMON, payload})