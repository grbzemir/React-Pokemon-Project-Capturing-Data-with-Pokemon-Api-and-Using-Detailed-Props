import PropTypes from 'prop-types';
import PokeCard from "./PokeCard";
import React, { Component } from 'react';
import "./Pokedex.css";

class Pokedex extends Component {
    static propTypes = {
        pokemon: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                type: PropTypes.string.isRequired,
                base_experience: PropTypes.number.isRequired,
                exp: PropTypes.number.isRequired,
            })
        ).isRequired,
        exp: PropTypes.number.isRequired,
        isWinner: PropTypes.bool.isRequired,
    };

    static defaultProps = {
        pokemon: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 },

        ],
    };

    render() {
        let title;
        if (this.props.isWinner) {
            title = <h1 className='Pokedex-winner'>Winning Hand</h1>
        }
        else {
            title = <h1 className='Pokedex-loser'>Losing Hand</h1>
        }
        return (
            <div className='Pokedex'>
                {title}
                <h4>Total Experience: {this.props.exp}</h4>
                <div className='Pokedex-cards'>
                    {this.props.pokemon.map((p) => (
                        <PokeCard
                            key={p.id}
                            id={p.id}
                            name={p.name}
                            type={p.type}
                            exp={p.base_experience}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Pokedex;
