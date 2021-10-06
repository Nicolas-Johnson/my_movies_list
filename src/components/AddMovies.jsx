//Will create a new movie object to push on data.
import React from 'react';

class AddMovies extends React.Component{
  render() {
    return(
      <div>
        <h1>Add a movie on your list.</h1>
        <form>
          <label>
            Genre of the movie:
            <select>
              <option select value="action" >Action</option>
              <option value="comedy" >Comedy</option>
              <option value="romance" >Romance</option>
              <option value="new_releases">New_Releases</option>
            </select>
          </label>
          <label>
            Movie Title:
            <input type="text" />
          </label>
          <label>
            Movie Sub Title:
            <input type="text" />
          </label>
          <label>
            Movie Sotory Line:
            <textarea value="Put the story line of you'r movie here" />
          </label>
          <label>
            Rate your Movie:
            <input type="number" />
          </label>
          <label>
            Movie Cover:
            <input type="text" />
          </label>
          <label>
            This is your favorite movie?
            <input type="radio" />
          </label>
        </form>
        <button type="button">Add on list</button>
      </div>
    );
  }
}

export default AddMovies;