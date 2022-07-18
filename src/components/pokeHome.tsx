import React from "react";

export default function PokeHome() {
  return (
    <div
      style={{ backgroundImage: "./src/assets/img/background-alternate.jpg" }}
    >
      <div className="grid grid-cols-2">
        <div></div>
        <div className="mt-[150px]">
          <img
            className="rounded-l-full relative"
            src="./src/assets/img/background.webp"
            alt="background"
          />
        </div>
      </div>
    </div>

    // <img classNameName="w-[300px]" src="./src/assets/img/mewtwo.png" alt="Mewtwo" />
  );
}
