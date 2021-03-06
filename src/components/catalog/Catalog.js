import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchMovies, setLoading } from "../../redux/actions/catalog";
import Movie from "./Movie";
import Spinner from "../layout/Spinner";

const Catalog = ({
  catalog: { movieList, loadingC },
  fetchMovies,
  setLoading,
}) => {
  useEffect(() => {
    setLoading();
    fetchMovies();
  }, [fetchMovies, setLoading]);

  if (movieList === undefined || !movieList) {
    return <Spinner />;
  }

  return (
    <div className="container movies-container">
      <h1>Catalog:</h1>
      <div className="row">
        {movieList[0] === undefined || movieList[0].length === 0 ? (
          <h1>No movies today...</h1>
        ) : (
          movieList[0].map((movie) => <Movie movie={movie} key={movie.id} />)
        )}
      </div>
    </div>
  );
};

Catalog.propTypes = {
  catalog: PropTypes.object.isRequired,
  fetchMovies: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  catalog: state.catalog,
});

export default connect(mapStateToProps, { fetchMovies, setLoading })(Catalog);
