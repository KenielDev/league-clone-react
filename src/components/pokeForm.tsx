import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import DescriptionAlerts from "./pokeNavbar";

export default function PokeForm() {
  const top100Films = [
    { label: "Pikachu", id: 1 },
    { label: "Bulbassauro", id: 2 },
  ];

  const Pokemons = () => {
    return (
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        className="w-[800px] "
        options={top100Films}
        renderInput={(params) => (
          <TextField {...params} label="Digite o nome do pokemon" />
        )}
      />
    );
  };

  return (
    <form action="">
      <div className="flex mt-8 gap-y-4 flex-col items-center">
        <h3 className="text-xl font-bold text-white">PokeTítulo</h3>
        <Pokemons />
        <input
          className="w-[800px] px-4 py-4 border-[1px] border-black border-opacity-20 hover:border-opacity-100 rounded placeholder:text-black placeholder:text-opacity-60"
          type="text"
          placeholder="Digite o peso do pokemon"
        />
        <input
          className="w-[800px] px-4 py-4 border rounded-lg"
          type="text"
          placeholder="Digite a classe do pokemon"
        />
        <button
          onClick={DescriptionAlerts}
          className="w-[800px] text-center text-white hover:bg-blue-600 duration-500 ease-in-out font-semibold rounded-lg py-4 bg-blue-500"
        >
          PokeBotão
        </button>
      </div>
    </form>
  );
}
