import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { unfavMovie } from "../../redux/actions/catalog";

const MovieUserList = ({ movie, unfavMovie }) => {
  const unfavMovieFromList = () => {
    unfavMovie(movie.id);
  };

  return (
    <li className="list-group-item" key={movie.id}>
      {movie.titulo}, {movie.ano} - {movie.genero}
      <button
        onClick={unfavMovieFromList}
        className="btn btn-danger btn-sm float-right"
      >
        <i className="fas fa-times"></i>
      </button>
    </li>
  );
};

MovieUserList.propTypes = {
  movie: PropTypes.object.isRequired,
  unfavMovie: PropTypes.func.isRequired,
};

export default connect(null, { unfavMovie })(MovieUserList);
