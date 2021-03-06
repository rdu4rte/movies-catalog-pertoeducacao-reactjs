import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MovieUserList from "./MovieUserList";

const UserList = ({ catalog: { userList } }) => {
  return (
    <div className="user-list">
      <h1>User List:</h1>
      <ul className="list-group">
        {userList === null || userList.length === 0 ? (
          <h4>No movies in user list today...</h4>
        ) : (
          userList.map((movie) => (
            <MovieUserList movie={movie} key={movie.id} />
          ))
        )}
      </ul>
    </div>
  );
};

UserList.propTypes = {
  catalog: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  catalog: state.catalog,
});

export default connect(mapStateToProps)(UserList);
