//Will create a card for each movie to be shown on Movies Componente.
import React from "react";

class MovieCard extends React.Component{
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath, favorite } } = this.props;
    return(
      <div>
        <h1>{ title }</h1>
        <img src={ imagePath } alt={ title } />
        <h2>{ subtitle }</h2>
        <p>{ storyline }</p>
        <div>
          {favorite && <span role="star-icon" aria-label="Star Favorit">&#9733;</span>}
          <h3>{ rating }</h3>
        </div>
      </div>
    );
  }
}

export default MovieCard;
