//Will create a new movie object to push on data.
import React from 'react';

class AddMovies extends React.Component{
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      favorite: false,
      genre: 'action',
    }
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
        [name]: value
    })
  }
  handleAddMovie = () => {
    const { title, subtitle, storyline, rating, imagePath, favorite, genre } = this.state;
    const { handleAddMovieToList } = this.props;
    const newMovie = {
        title,
        subtitle,
        storyline,
        rating,
        imagePath,
        favorite,
    }
    handleAddMovieToList(newMovie, genre);
    //const newMovies = movies;
    //console.log('NewMovie:', newMovie);
    //console.log('OldMovies:', movies[0][genre]);
    //movies[0][genre].push(newMovie);
    //movies[0]['all'].push(newMovie);
    //console.log('Movies With the new one:', movies[0]);
  }

  render() {
    const { title, subtitle, rating, imagePath, genre } = this.state;
    return(
      <div>
        <h1>Add a movie on your list.</h1>
        <form>
          <label htmlFor="genre">
            Genre of the movie:
            <select name="genre" value={ genre } onChange={ this.handleChange }>
              <option value="action" >Action</option>
              <option value="comedy" >Comedy</option>
              <option value="romance" >Romance</option>
              <option value="new_releases">New_Releases</option>
            </select>
          </label>
          <label htmlFor="title">
            Movie Title:
            <input name="title" type="text" value={ title } onChange={ this.handleChange } />
          </label>
          <label htmlFor="subtitle">
            Movie Sub Title:
            <input name="subtitle" type="text" value={ subtitle } onChange={ this.handleChange } />
          </label>
          <label htmlFor="storyline">
            Movie Sotory Line:
            <textarea name="storyline" onChange={ this.handleChange } defaultValue="Describe the movie here" />
          </label>
          <label htmlFor="rate">
            Rate your Movie:
            <input name="rating" type="number" value={ rating } onChange={ this.handleChange } />
          </label>
          <label htmlFor="imagePath">
            Movie Cover:
            <input name="imagePath" type="text" value={ imagePath } onChange={ this.handleChange } />
          </label>
          <label htmlFor="favorite">
            This is your favorite movie?
            <input name="favorite" type="checkBox" onChange={ this.handleChange } />
          </label>
        </form>
        <button type="button" onClick={ this.handleAddMovie }>Add on list</button>
      </div>
    );
  }
}

export default AddMovies;