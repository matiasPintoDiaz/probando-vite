import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=2&offset=0') // https://pokeapi.co/api/v2/pokemon?limit=20&offset=0
      .then(response => response.json())
      .then(pokemons => {
        console.log(pokemons.results)
        setPokemons(pokemons.results)
      })
  }, []);

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
          count is {count}
        </button>
        <br />
        <button onClick={() => getApi()}>
          Haz Click aquí!
        </button>
      </div>
    </div>
  );
}

export default App;
