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
    <div className="pokemon-card">
      <h1 className="pokemon-card__header">{name}</h1>
      <p className="pokemon-card__description">Снялся в {movies.length} сериях</p>
      <p className="pokemon-card__description">Id: {id}</p>
      <p className="pokemon-card__description">height: {height}</p>
      <p className="pokemon-card__description">attack: {pokemonAttack}</p>
      <img className="pokemon-card__image" src={image.front_default} alt="Покемон" />
    </div>
  );
}

export default PokemonCard;