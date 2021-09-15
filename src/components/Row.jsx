import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import axios from "../axios";
const baseURL = "https://image.tmdb.org/t/p/original/";
const Row = ({ title, fetchURL, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClickImage = (movie) => {
    if (trailerURL) setTrailerURL("");
    else
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get("v"));
          console.log({ v: urlParams.get("v"), urlParams });
        })
        .catch((error) => {
          console.error(error);
        });
  };
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
            onClick={() => handleClickImage(movie)}
            className={`row__poster ${isLarge ? "large__poster" : ""}`}
            key={movie.id}
            src={`${baseURL}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  );
};

export default Row;
