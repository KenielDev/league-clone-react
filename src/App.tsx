import React, { useEffect, useState } from "react";
// import { Container } from './styles';

const App: React.FC = () => {
  useEffect(() => {
    getPokemons();
  }, []);

  function getPokemons() {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154")
      .then((response) => response.json())
      .then((result) =>
        console.log(
          result.results.forEach((element: any) => {
            console.log(element.name);
          })
        )
      )
      .catch((error) => console.log("error", error));
  }
  return (
    <>
      <div></div>
    </>
  );
};

export default App;
