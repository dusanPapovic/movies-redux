import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMovies } from "../store/movies/selectors";
import { getMovies } from "../store/movies/slice";
import MovieRow from '../components/MovieRow';

export default function AppMovies() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div style={{ marginLeft: 5 }}>
      <h2>Movies</h2>
      {movies.data.length ? (
      <ul>
        {movies.data.map((movie) => (
          <MovieRow
            key={movie.id}
            id={movie.id}
            title={movie.title}
            director={movie.director}
            image_url={movie.image_url}
            duration={movie.duration}
            release_date={movie.release_date}
            genre={movie.genre}
          />
        ))}
      </ul>
      ) : (
         <div>Nema filmova sa ovim naslovom</div>
          )}
    </div>
  );
}