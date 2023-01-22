import axios from "../../axios";
import React, { useEffect, useState } from "react";
import "./Row.css";

function Row(props) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://www.themoviedb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    if (props.fetchUrl) fetchData();
  }, [props.fetchUrl]);

  console.log(movies);
  return (
    <div className="row">
      <h2 className="title_row">{props.title}</h2>
      <div className="row_posters">
        {movies.map(
          (movie) =>
            movie.backdrop_path && (
              <img
                key={movie.id}
                className="row_poster"
                src={`${base_url}${movie.backdrop_path}`}
              ></img>
            )
        )}
      </div>
    </div>
  );
}

export default Row;
