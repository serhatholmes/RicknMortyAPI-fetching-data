import axios from "axios";
import { useState, useEffect } from "react";

import CharacterGrid from "./components/CharacterGrid";
import Header from "./components/Header";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => setCharacters(response.data.results));
  }, []);

  return (
    <>
      <Header />
      <CharacterGrid allCharacters={characters} />
    </>
  );
};

export default App;
