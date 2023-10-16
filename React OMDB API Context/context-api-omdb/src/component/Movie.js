import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./Context";

const imgUrl = "https://via.placeholder.com/200/200";

const Movie = () => {
  const { movie } = useGlobalContext();
  return (
    
      <section className="movie-page">
        <div className="container grid grid-4-col">
          {movie
            ? movie.map((curMovie) => {
                const { imdbID, Title, Poster } = curMovie;
                const movieName = Title.substring(0, 15);

                return (
                  <NavLink to={`movie/${imdbID}`} key={imdbID}>
                    <div className="card">
                      <div className="card-info">
                        <h2>
                          {movieName.length > 15
                            ? `${movieName}...`
                            : movieName}
                        </h2>
                        <img src={Poster === "N/A" ? imgUrl : Poster} alt="#" />
                      </div>
                    </div>
                  </NavLink>
                );
              })
            : ""}
        </div>
      </section>
   
  );
};

export default Movie;