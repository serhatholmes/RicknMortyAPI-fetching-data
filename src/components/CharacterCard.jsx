import React from "react";

const CharacterCard = ({ character }) => {
  return (
    <div className="bg-green-600 text-white flex  rounded-lg">
      <div className="w-32 h-32  overflow-hidden rounded-l-lg">
        <img src={character.image} alt="Character image" />
      </div>
      <div className="flex flex-col gap-4 pl-4">
        <p className="text-xl font-bold hover:text-orange-500 cursor-pointer">
          {character.name}
        </p>
        <p className="hover:text-orange-500 cursor-pointer">
          Character Species: {character.species}
        </p>
        <p className="hover:text-orange-500 cursor-pointer">
          Status : {character.status}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
