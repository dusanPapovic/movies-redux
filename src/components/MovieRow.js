import React from 'react';

function MovieRow({
  id,
  title,
  director,
  image_url,
  duration,
  release_date,
  genre,
}) {
  return (
    <li
      style={{
        border: '1px solid black',
        marginBottom: '5px',
        padding: 5,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <span>Title: {title}</span>
      <span>Director: {director}</span>
      <div style={{ padding: "10px" }}>
        <img src={image_url} width="100" />
      </div>
      <span>Duration: {duration}</span>
      <span>Release date: {release_date}</span>
      <span>Genre: {genre}</span>
    </li>
  );
}

export default MovieRow;