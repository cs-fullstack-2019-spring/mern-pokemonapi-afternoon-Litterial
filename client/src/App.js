import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PokeSprite from "./Component/PokeSprite";
import PokemonName from "./Component/PokemonName";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1>Pokédex</h1>
            {/* Pokemon holds the data for pokemon*/}
            <PokemonName/>
        </header>
      </div>
    );
  }
}

export default App;
