import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './HomePage.css'; 

const HomePage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
        setPokemonList(response.data.results);
      } catch (error) {
        console.error('Error fetching Pokémon list:', error);
      }
    };

    fetchPokemonList();
  }, []);

  const filteredPokemonList = pokemonList.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="home-page">
      <h1 className="home-page-title">Pokémon Explorer</h1>
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <div className="pokemon-list">
        {filteredPokemonList.map((pokemon, index) => (
          <Link to={`/pokemon/${index + 1}`} key={index} className="pokemon-card">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={pokemon.name} />
            <p className="pokemon-name">{pokemon.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
