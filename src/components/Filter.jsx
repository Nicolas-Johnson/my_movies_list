import React from 'react';

class Filter extends React.Component{
  constructor() {
    super();

    this.state = {
      searchByText: '',
      favoritesOnly: false,
      searchByGenre: 'all',
      filteredMovies: [],
      movies: [],
    }
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
        [name]: value
    })
  }

  handleFilter = () => {
    const { searchByText, favoritesOnly, searchByGenre } = this.state;
    const { movies, handleFilterMovies } = this.props;
    const genre = movies[0][searchByGenre];
    const filter = genre.filter((movie) => movie.title.includes(searchByText) || movie.subtitle.includes(searchByText) || movie.storyline.includes(searchByText));
    if(favoritesOnly){
      const onlyFavs = filter.filter((movie) => movie.favorite === true);
      return handleFilterMovies(onlyFavs);
    }
    handleFilterMovies(filter);

  }

  render() {
    const { searchByGenre } = this.state;
    return(
      <div>
        <form>
          <label htmlFor="searchByText">
            Contem o texto:
            <input name="searchByText" type="text" onChange={ this.handleChange } />
          </label>
          <label htmlFor="favoritesOnly">
            Mostrar apenas favoritos
            <input name="favoritesOnly" type="checkbox" onChange={ this.handleChange } />
          </label>
          <label htmlFor="searchByGenre">
            Genre:
            <select name="searchByGenre" value={ searchByGenre } onChange={ this.handleChange }>
              <option value="all">All</option>
              <option value="action" >Action</option>
              <option value="comedy" >Comedy</option>
              <option value="romance" >Romance</option>
              <option value="new_releases">New Releases</option>
            </select>
          </label>
        </form>
        <button type="button" onClick={ this.handleFilter }>Search</button>
      </div>
    );
  }
}

export default Filter;
