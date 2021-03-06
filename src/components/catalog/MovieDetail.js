import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { getMovie, setLoading } from "../../redux/actions/catalog";
import ReactPlayer from "react-player/youtube";

const MovieDetail = ({ catalog: { movie, loading }, getMovie, setLoading }) => {
  const movieId = useParams();
  useEffect(() => {
    setLoading();
    getMovie(movieId.id);
  }, [setLoading, getMovie, movieId]);

  return (
    <div className="row video-detail">
      <div className="col-md">
        <h1>
          {movie.titulo}, {movie.ano}
        </h1>
        <h4>Genero: {movie.genero}</h4>
        <p>Sinopse: {movie.sinopse}</p>
      </div>
      <div className="col-sm">
        <div className="video-card">
          <ReactPlayer
            url={"https://www.youtube.com/watch?v=" + movie.trailerIdYoutube}
            width="500px"
            height="300px"
          />
          <hr />
          <button className="btn btn-dark">Add to my list</button>
        </div>
      </div>
    </div>
  );
};

MovieDetail.propTypes = {
  catalog: PropTypes.object.isRequired,
  getMovie: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  catalog: state.catalog,
});

export default connect(mapStateToProps, { getMovie, setLoading })(MovieDetail);
