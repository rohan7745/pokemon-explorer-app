import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './DetailsPage.css'; 

const PokemonDetailsPage = () => {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemonData(response.data);
        setError(null);
      } catch (error) {
        console.error(`Error fetching Pokémon details for ID ${id}:`, error);
        setError('Failed to fetch Pokémon details. Please try again later.');
      }
    };

    fetchPokemonDetails();
  }, [id]);

  return (
    <div className="pokemon-details-container">
      <h1 className="pokemon-details-title">Pokémon Details</h1>
      {error ? (
        <p>{error}</p>
      ) : pokemonData ? (
        <div className="pokemon-details">
          <div>
            <h2>Name: {pokemonData.name}</h2>
            <p>Base Experience: {pokemonData.base_experience}</p>
            <p>Height: {pokemonData.height}</p>
            <p>Weight: {pokemonData.weight}</p>
          </div>
          <div>
            <h2>Abilities</h2>
            <ul>
              {pokemonData.abilities.map((ability, index) => (
                <li key={index}>{ability.ability.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Stats</h2>
            <ul>
              {pokemonData.stats.map((stat, index) => (
                <li key={index}>
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Types</h2>
            <ul>
              {pokemonData.types.map((type, index) => (
                <li key={index}>{type.type.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Moves</h2>
            <ul>
              {pokemonData.moves.map((move, index) => (
                <li key={index}>{move.move.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Sprites</h2>
            <ul className="pokemon-sprites">
              {Object.entries(pokemonData.sprites).map(([key, value]) => (
                value && <li key={key}><img src={value} alt={key} /></li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PokemonDetailsPage;
