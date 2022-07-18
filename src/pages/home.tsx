import React from "react";
import PokeForm from "../components/pokeForm";
import PokeHome from "../components/pokeHome";
import PokeNavbar from "../components/pokeNavbar";
import "./home.css";

export default function Home() {
  return (
    <body>
      <div>
        <PokeNavbar />
        <PokeHome />
        {/* <PokeForm /> */}
      </div>
    </body>
  );
}
