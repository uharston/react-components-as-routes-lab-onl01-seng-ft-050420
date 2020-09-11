import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const movieRender = movies.map( m => (
    <div>
      {m.title}
      {m.time}
      <ul>
        {m.genres.map( g => <li>{g}</li>)}
      </ul>
    </div>
  ))

  return (
    <div>
      <h1>Movies Page</h1>
      {movieRender}
    </div>
  );
};

export default Movies;
