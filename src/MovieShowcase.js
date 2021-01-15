import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
	  return movieData.map((movieObj, index) => <MovieCard 
	  title={movieObj.title}
	  genres={movieObj.genres}
	  IMBDRating={movieObj.IMBDRating}
	  poster={movieObj.poster}
	  key={index}/>)
    // map over your movieData array and return an array of the correct JSX
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}