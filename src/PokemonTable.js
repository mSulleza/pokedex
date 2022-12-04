import './PokemonTable.css'
import Pokemon from './Pokemon.js'

function PokemonTable({ data }) {
    return (
        <table className="pokemon-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Sprite</th>
                </tr>
            </thead>
            <tbody>
                {data.map((pokemon, key) => (
                    <tr role="row" key={key}>
                        <Pokemon pokemon={pokemon} />
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default PokemonTable;