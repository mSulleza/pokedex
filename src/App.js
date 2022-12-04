import { useState, useEffect } from 'react';
import './App.css';
import PokemonTable from './PokemonTable.js'

function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=30`)
      .then(response => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((e) => {
        console.error(`An error occured: ${e}`)
      });
  }, []);

  return (
    <div className="App">
      <h1>Pokédex</h1>
      {loading && <p>Loading...</p>}
      {!loading && <PokemonTable data={data.results} />}
    </div>
  );
}

export default App;
