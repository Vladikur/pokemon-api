export const randomPokemon = (arr) => {
  const rand = Math.floor(Math.random() * arr.length)
  const pokemon = arr[rand]
  return pokemon.url
}