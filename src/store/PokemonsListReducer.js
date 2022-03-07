const defaultState = {
  pokemons: [],
}

const ADD_POKEMONS = "ADD_POKEMONS"

export const pokemonsListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_POKEMONS:
        return {...state, pokemons: [...action.payload]}
    default:
      return state
  }
}

export const addPokemons = (payload) => ({type: ADD_POKEMONS, payload})