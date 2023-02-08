const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
const num_min = 1;
const num_max = 1008;

export const getRandomPokemon = async () => {
  const number = Math.floor(Math.random() * (num_max - num_min + 1) + num_min);
  const response = await fetch(`${BASE_URL}${number}`);
  const pokemon = await response.json();
  return pokemon;
};

/* const getRandomPokemon = () => {
  return fetch(`${BASE_URL}${number}`)
    .then((response) => response.json())
    .then((pokemon) => {
      return pokemon;
      // console.log(pokemon);
    });
}; */
