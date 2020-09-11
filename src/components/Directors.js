import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const directorsRender = directors.map(d => (
    <div>
      {d.name}
      <ul>
        {d.movies.map( movie => <li>{movie}</li>)}
      </ul>
    </div>
  ))
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsRender}
    </div>
  );
}

export default Directors
