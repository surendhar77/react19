import React, { useEffect, useState } from "react";
import "./Pokemon.css";
const HowNotToFetchApi = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";
    //  const API ="https://hp-api.onrender.com/api/characters";
  //   const fetchPokemon = () => {
  //     fetch(API)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPokemon(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //         console.log(error);
  //         setError(error);
  //         setLoading(false);
  //     });
  //   };

  const fetchPokemon = async () => {
    try {
       const res = await fetch(API);
       const data = await res.json();
       setPokemon(data);
       setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPokemon();
  }, []);
  console.log(pokemon);
  // so many request pass
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //         // setPokemon(data)
  //     })
  //     .catch((error) => console.log(error));

  if (loading) {
    return (
      <div>
        <h1>Loading ... </h1>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h1>Error: {error.message} </h1>
      </div>
    );
  }
  //   if(pokemon)
  //   {
  return (
    // <div className="container effect-container">
    //   <ul>
    //     data :
    //     {/* {pokemon.map((curData) => {
    //       return <li key={curData.id}>{curData.title}</li>;
    //     })}
    //     ; */}

    <section className="container">
      <header>
        <h1>Lets Catch Pokemon</h1>
      </header>
      <ul className="card-demo">
        <li className="pokemon-card">
          <figure>
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon}
              className="pokemon-image"
            />
          </figure>
          <h1>{pokemon.name}</h1>
          <div className="grid-three-cols">
            <p className="pokemon-info">
              Height:<span>{pokemon.height}</span>
            </p>
            <p className="pokemon-info">
              Weight:<span>{pokemon.weight}</span>
            </p>
            <p className="pokemon-info">
              Speed:<span>{pokemon.stats[5].base_stat}</span>
            </p>
          </div>
        </li>
      </ul>
    </section>
    //   </ul>
    // </div>
  );
};
// };

export default HowNotToFetchApi;
