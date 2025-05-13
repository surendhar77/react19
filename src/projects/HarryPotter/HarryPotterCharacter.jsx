import React, { useEffect, useState } from "react";
import "./HarryPotterCharacter.css";
import CharacterCards from "./CharacterCards";

const HarryPotterCharacter = () => {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search,setSearch] = useState();

  const API = "https://hp-api.onrender.com/api/characters";

  const fetchCharacter = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      
  const detailCharacterData = data.map(
    async (data) => {
  //  const res = await fetch(curCharacter);
  //  const data = await res.json();
  //  console.log(data);

    return data;
  });
  // console.log(detailCharacterData);
  const detailedResponses = await Promise.all(detailCharacterData);
  console.log(detailedResponses);
  const limitedData = detailedResponses.slice(0, 30); // Limit to 30 characters
      setCharacter(limitedData); // Get all values
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchCharacter();
  }, []);

  //search functionality
  const searchData = character.filter((curCharacter) =>
    curCharacter.name.toLowerCase().includes((search || "").toLowerCase())
  );
  
  
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <>
   <section className="container">
      <header  className="character-header">
        <h1>Harry Potter Character</h1>
      </header>
      <div className="character-search">
        <input type="text" placeholder="Search Character" value ={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <ul className="card-demo">
        {
          // character.map((curCharacter) =>{
            searchData.map((curCharacter) =>{
            return (
            <CharacterCards key ={curCharacter.id}
            characterData ={curCharacter} /> )
            // <li  className="harrypottercharacter-card" key = {curCharacter.id}>{
            // curCharacter.name}</li>
          } )
        }
        </ul>
    </section>
    </>
);
   
};

export default HarryPotterCharacter;
