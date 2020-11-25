import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState({});
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = e => {
  axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(response => {
      let jsonResponse = response.data.results;
      setPokemon({
        all_pokemon: jsonResponse
      });
      setDataFetched(true);
    })
    .catch(err => console.log(err));
  }
  return (
    <div className="App">
      <button onClick={ fetchData }> Get Pokémon</button>
      {
        dataFetched?
        pokemon.all_pokemon.map((item, i) =>
          <li key={ i }>{ item.name }</li>):
        ""
      } 
    </div>
  );
}

export default App;
