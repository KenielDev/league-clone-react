import React, { useEffect, useState } from "react";
// import { Container } from './styles';

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  function getPokemons() {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154")
      .then((response) => response.json())
      .then((result) => setPokemons(result.results));
    console.log(pokemons);
  }

  return (
    <>
      <div>
        <h1>Pokemons</h1>
        <div>
          {pokemons.map((pokemon) => {
            const numbers = Object.keys(new Array(1).fill(null)).map(Number);

            const selecaoPokemons = numbers.slice(1);

            console.log(selecaoPokemons);

            const urlPokemonsImg =
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
            const urlPokemons = `${urlPokemonsImg}${pokemon.name}/sprites`;

            // for (let i = 0; i <= 1154; i++) {
            //   const element = i;
            //   console.log(element);
            // }
            return (
              <div key={pokemon.name}>
                <div>{pokemon.name}</div>
                <div>
                  <img src={`${urlPokemonsImg}/4.png`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
