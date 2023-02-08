import { useState, useEffect } from "react";
import "./App.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { getRandomPokemon } from './hooks/dataPokemon';

function App() {
  const [pokemon, setPokemon] = useState("");

  useEffect(() => {
    getRandomPokemon().then(setPokemon)
  }, []);

  const handleClick = async() => {
    const pokemon = await getRandomPokemon();
    setPokemon(pokemon);
  }

  return (
    <div className="App">
      <h1>Poke API</h1>
      <div className="card">
        <p>
          App simple para probar{" "}
          <a href="https://vitejs.dev/" target="_blank">
            Vite
          </a>{" "}
          Poke API
        </p>
        <button onClick={handleClick}>
          Click para mostrar un Pokemon al azar!
        </button>
        <br />
        <br />
        <div>
          {pokemon && (
            <CardActionArea>
              <Card sx={{ maxWidth: 345 }} className="card">
                <CardMedia
                  component="img"
                  height="280"
                  image={pokemon.sprites.front_default}
                  alt="imagen pokemon"
                  className="pokemon-card"
                />
                <CardContent className="pokemon-card">
                  <Typography gutterBottom variant="h5" component="div">
                    {pokemon.name}
                  </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
