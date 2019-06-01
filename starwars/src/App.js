import React, { Component } from 'react';
import './App.css';

import StarWarsChars from './components/Characters';

// const initialState = {
//   starwarsChars: [{
//       birth_year: '',
//       created: '',
//       edited: '',
//       eye_color: '',
//       films: [],
//       gender: '',
//       hair_color: '',
//       height: '',
//       homeworld: {},
//       mass: '',
//       name: '',
//       skin_color: '',
//       species: [],
//       starships: [],
//       url: '',
//       vehicles: [],
//     }]
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starwarsChars: [],
      name:'',
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <StarWarsChars
        starwarsChars={this.state.starwarsChars}
        />
      </div>
    );
  }
}

export default App;
