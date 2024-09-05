import { useState } from 'react'
import './App.css'
import "./PokeCard.css"
// import Pokedex from './Pokedex'
// import PokeCard from './PokeCard'
import Pokegame from './Pokegame'



function App() {
  return (
    <div className='App'>
      <h1>Pokemon Go Card Game</h1>
      {/* <Pokedex /> */}
      {/* <PokeCard /> */}
      <Pokegame />
    </div>
  )
}

export default App
