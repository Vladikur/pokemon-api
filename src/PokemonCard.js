import * as React from 'react';

function PokemonCard({ name, image, id, movies, height, attack }) {

  const [pokemonAttack, setPokemonAttack] = React.useState('');

  React.useEffect(() => {
    attack.forEach((item, index) => {
      if (index === 2) {
      setPokemonAttack(item.base_stat);
      }
    });
  }, [attack])

  return (
    <div className="container">
      <h1>{name}</h1>
      <p>Снялся в {movies.length} сериях</p>
      <p>Id: {id}</p>
      <p>height: {height}</p>
      <p>attack: {pokemonAttack}</p>
      <img className="image" src={image.front_default} alt="Покемон" />
    </div>
  );
}

export default PokemonCard;