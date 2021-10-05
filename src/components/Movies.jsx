//will display the filtered data from datausing the MovieCard componente.
import React from "react";
import MovieCard from "./MovieCard";

class Movies extends React.Component{
  constructor(){
    super();

    this.state = {
        loading: false,
        movies: [],
    }
  }

  render() {
    const { movies, loading } = this.state;
    return(
      <div>
        <h1>Movies</h1>
        {loading && <>Loading...</>}
        <div>
          {movies && movies.map((movie, index) => <MovieCard key={index} movie={ movie } />)}
        </div>
      </div>
    );
  }
}

export default Movies;