import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterGrid = ({ allCharacters }) => {
  return (
    <div className="max-w-screen-xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 bg-purple-500 xl:bg-gray-600 rounded-xl">
      {allCharacters.map((character, index) => (
        <CharacterCard key={index} character={character} />
      ))}
    </div>
  );
};

export default CharacterGrid;
