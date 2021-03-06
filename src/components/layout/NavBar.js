import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import logo from "../../assets/images/logo.png";
import { logoutUser } from "../../redux/actions/auth";

const NavBar = ({ auth: { isAuth, user }, logoutUser }) => {
  const logout = () => {
    logoutUser();
  };

  // guest links
  const leftGuestLink = (
    <Fragment>
      <li className="nav-item active">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
    </Fragment>
  );

  const rightGuestLink = (
    <Fragment>
      <Link to="/login" className="nav-link">
        Login
      </Link>
    </Fragment>
  );

  // auth links
  const leftAuthLink = (
    <Fragment>
      <li className="nav-item active">
        <Link to="/lista" className="nav-link">
          Hello, {user}!
        </Link>
      </li>
    </Fragment>
  );

  const rightAuthLink = (
    <Fragment>
      <Link onClick={logout} to="/" className="nav-link">
        Logout
      </Link>
    </Fragment>
  );

  const leftNavLinks = () => {
    if (isAuth) {
      return leftAuthLink;
    } else {
      return leftGuestLink;
    }
  };

  const rightNavLinks = () => {
    if (isAuth) {
      return rightAuthLink;
    } else {
      return rightGuestLink;
    }
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul className="navbar-nav mr-auto">{leftNavLinks()}</ul>
      </div>
      <div className="mx-auto order-0">
        <img src={logo} alt="movies-catalog-logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target=".dual-collapse2"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">{rightNavLinks()}</li>
        </ul>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(NavBar);
