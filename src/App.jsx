import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [pokemons, setPokemons] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${count}/`) // https://pokeapi.co/api/v2/pokemon?limit=20&offset=0
      .then(response => response.json())
      .then(pokemons => {
        console.log(pokemons)
        setPokemons(pokemons)
      })
  }, [count]);

  /* useEffect(() => {
    fetch('')
      .then(response => response.json())
      .then(pokemons => console.log(pokemons.results))
  }, [pokemons]); */

  return (
    <div className="App">
      <h1>Poke API</h1>
      <div className="card">
        <p>App simple para probar Vite (Poke API)</p>
        <button onClick={() => setCount((count) => count + 1)}>
          Pokemon número: {count}
        </button>
        <br />
        <div>
          {count && <p>Messages: {count}</p>}
          {pokemons && <p>{pokemons.name}</p>}
          {pokemons && <img src={pokemons.sprites.front_default} className="" alt="imagen-pokemon" />}
        </div>
      </div>
    </div>
  );
}

export default App;
