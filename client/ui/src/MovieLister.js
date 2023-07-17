import React, { useState, useEffect } from 'react'

// const movies = [
//   {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
// ];

export default function MovieLister() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/movies')
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error fetching movies:', error));
  }, []);

  const movieMapper = () => {
    return movies.map((e) => {
    return (
      <li key={e.id}>{e.title}</li>
    )
    });
  };

  return <ul>{movieMapper()}</ul>
}