import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Movie = ({ movie }) => {
  return (
    <div className="card movie-card">
      <Link
        to={{
          pathname: `/movie/detail/${movie.id}`,
        }}
        className="movie-img"
      >
        <img src={movie.imagem} alt="movie-img" className="card-img-top" />
      </Link>
      <div className="card-body">
        <h5 className="card-title" key={movie.id}>
          {movie.titulo}, {movie.ano}
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Genero: {movie.genero}
        </h6>
      </div>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Movie;
