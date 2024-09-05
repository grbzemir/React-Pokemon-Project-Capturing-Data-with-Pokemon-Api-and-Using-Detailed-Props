import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PokeCard.css';


const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'

class PokeCard extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        exp: PropTypes.number.isRequired,
    }
    render() {
        let imgSrc = `${POKE_API}${this.props.id}.png`
        return (
            <div className='Pokecard'>
                <h1 className='Pokecard-title'>Pokemon</h1>
                <div className='Pokecard-image'>
                    <img src={imgSrc} alt={this.props.name} />
                </div>
                <div className='Pokecard-data'>Type: {this.props.type}</div>
                <div className='Pokecard-data'>Exp: {this.props.exp}</div>
            </div>
        )
    }
}





export default PokeCard;