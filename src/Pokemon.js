import { useState, useEffect } from 'react';

function Pokemon({ pokemon }) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(pokemon.url)
          .then(response => response.json())
          .then((data) => {
            setData(data);
            setLoading(false);
          })
          .catch((e) => {
            console.error(`An error occured: ${e}`)
          });
      }, [pokemon.url]);
      
    return (
        <>
            <td role="cell">{pokemon.name}</td>
            {!loading && <td>{data.types[0].type.name}</td>}
            {!loading && <td><img alt={pokemon.name} src={data.sprites.front_default}></img></td>}
        </>
    )
}

export default Pokemon;