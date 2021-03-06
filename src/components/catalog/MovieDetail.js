import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useHistory, useParams } from "react-router-dom";
import { getMovie, setLoading, favMovie } from "../../redux/actions/catalog";
import ReactPlayer from "react-player/youtube";

const MovieDetail = ({
  catalog: { movie, userList },
  getMovie,
  setLoading,
  favMovie,
}) => {
  const movieId = useParams();
  useEffect(() => {
    setLoading();
    getMovie(movieId.id);
  }, [setLoading, getMovie, movieId]);

  const history = useHistory();

  const pushMovieToUserList = () => {
    let conflict = [];
    if (userList !== null) {
      // eslint-disable-next-line array-callback-return
      userList.map((mv) => {
        if (mv.titulo === movie.titulo) {
          console.log("Movie already in your list");
          conflict.push(mv);
        }
      });
    }
    if (conflict.length === 0) {
      favMovie({
        id: movie.id,
        titulo: movie.titulo,
        ano: movie.ano,
        genero: movie.genero,
      });
      history.push("/lista");
    } else {
      history.push("/catalog");
    }
  };

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
          <h4>
            Watch the trailer on YouTube <i className="fab fa-youtube"></i>:{" "}
          </h4>
          <ReactPlayer
            url={"https://www.youtube.com/watch?v=" + movie.trailerIdYoutube}
            width="500px"
            height="300px"
          />
          <hr />
          <button onClick={pushMovieToUserList} className="btn btn-dark">
            <i class="fas fa-plus"></i> Add to my list
          </button>
        </div>
      </div>
    </div>
  );
};

MovieDetail.propTypes = {
  catalog: PropTypes.object.isRequired,
  getMovie: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  favMovie: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  catalog: state.catalog,
});

export default connect(mapStateToProps, { getMovie, setLoading, favMovie })(
  MovieDetail
);
