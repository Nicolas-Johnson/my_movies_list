//will display the filtered data from datausing the MovieCard componente.
import React from "react";
import MovieCard from "./MovieCard";

class Movies extends React.Component{
  constructor(){
    super();

    this.state = {
        loading: false,
    }
  }

  render() {
    const { loading } = this.state;
    const { movies } = this.props;
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
