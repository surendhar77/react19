import React from 'react';
import './HarryPotterCharacter.css'; // Make sure your styles are applied

const CharacterCards = ({ characterData }) => {
  return (
    <li className="character-card">
      <figure>
        <img
          src={characterData.image || "https://via.placeholder.com/150"}
          alt={characterData.name}
          className="character-img"
        />
      </figure>
      <h3 className="character-name">{characterData.name}</h3>
      <div className="info-grid">
        <p><span className="label">Actor:</span> {characterData.actor || "Unknown"}</p>
        <p><span className="label">Species:</span> {characterData.species || "N/A"}</p>
        <p><span className="label">House:</span> {characterData.house || "None"}</p>
        <p><span className="label">Wand:</span> {characterData.wand?.core || "None"}</p>
      </div>
    </li>
  );
};

export default CharacterCards;
