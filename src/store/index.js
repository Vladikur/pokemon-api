import { createStore, combineReducers } from "redux";
import { pokemonReducer } from "./PokemonReducer";
import { pokemonsListReducer } from "./PokemonsListReducer";

const rootReducer = combineReducers({pokemonReducer, pokemonsListReducer})

export const store = createStore(rootReducer);