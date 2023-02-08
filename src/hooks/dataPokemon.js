const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
const num_min = 1;
const num_max = 1279;

export const getDataPokemon = async () => {
  const number = Math.floor(Math.random() * (num_max - num_min + 1) + num_min);
  const response = await fetch(`${BASE_URL}${number}`);
  const pokemon = await response.json();
  return pokemon;
};

/* const getDataPokemon = () => {
  return fetch(`${BASE_URL}${count}`)
    .then((response) => response.json())
    .then((pokemons) => {
      return pokemons;
      // console.log(pokemons);
    });
}; */
