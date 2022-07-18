import React from "react";

export default function PokeForm() {
  return (
    <div className="flex mt-8 gap-y-4 flex-col items-center">
      <h3 className="text-xl font-bold text-white">PokeTítulo</h3>
      <input
        className="w-[800px] px-4  py-4 border rounded-lg"
        type="text"
        placeholder="Digite o nome do pokemon"
      />
      <input
        className="w-[800px] px-4 py-4 border rounded-lg"
        type="text"
        placeholder="Digite o peso do pokemon"
      />
      <input
        className="w-[800px] px-4 py-4 border rounded-lg"
        type="text"
        placeholder="Digite a classe do pokemon"
      />
      <button className="w-[800px] text-center text-white hover:bg-blue-600 duration-500 ease-in-out font-semibold rounded-lg py-4 bg-blue-500">
        PokeBotão
      </button>
    </div>
  );
}
