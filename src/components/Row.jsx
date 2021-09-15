import React, { useState, useEffect } from "react";
import axios from "../axios";
const baseURL = "https://image.tmdb.org/t/p/original/";
const Row = ({ title, fetchURL, isLarge }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
    }
    getData();
  }, []);
  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className={`row__poster ${isLarge ? "large__poster" : ""}`}
            key={movie.id}
            src={`${baseURL}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
