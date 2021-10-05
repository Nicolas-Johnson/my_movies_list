//Will filer the data and create a new array of objects to put on Content state to be show on movies component.
import React from 'react';
import movies from '../data';

class Filter extends React.Component{
  render() {
    return(
      <div>
        <form>
          <label>
            Contem o texto:
            <input type="text" />
          </label>
          <label>
            Mostrar apenas favoritos
            <input type="checkbox" />
          </label>
          <label>
            Genero:
            <select>
              <option>Action</option>
              <option>Comedy</option>
              <option>Romance</option>
              <option>New Releases</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Filter;
