// Will wrap all the components and the state needed in this project.
import React from 'react';
import Filter from './Filter';
import AddMovies from './AddMovies';
import Movies from './Movies';
import movies from '../data';

class Content extends React.Component{
  constructor() {
    super();
    this.state = {
      movies: [],
      filteredMovies: [],
    }
  }
  handleFilterMovies = (movies) => {
    this.setState({filteredMovies: movies})
  }

  handleAddMovieToList = (movie, genre) => {
    const newMovies = this.state.movies;
    const genreMovies = newMovies[0][genre];
    const allGenre = newMovies[0]['all'];
    genreMovies.push(movie);
    allGenre.push(movie);
  }

  componentDidMount() {
    this.setState({movies: movies})
  }

  render() {
    const { movies, filteredMovies } = this.state;
    return(
      <div>
        <Filter movies={ movies } handleFilterMovies={ this.handleFilterMovies } />
        <Movies movies={ filteredMovies } />
        <AddMovies handleAddMovieToList={ this.handleAddMovieToList } />
      </div>
    );
  }
}

export default Content;
