import React from 'react';
import './App.css';
import Filter from './components/Filter';
import Content from './components/Content';
import AddMovies from './components/AddMovies';

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <Filter />
      </div>
    );
  }
}

export default App;
