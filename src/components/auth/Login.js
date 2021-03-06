import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { clearErrors, loginUser, setLoading } from "../../redux/actions/auth";
import { Redirect } from "react-router-dom";
import Spinner from "../layout/Spinner";

const Login = ({
  auth: { isAuth, loading, errors },
  loginUser,
  clearErrors,
  setLoading,
}) => {
  useEffect(() => {
    setTimeout(() => {
      clearErrors();
    }, 500);
  }, [clearErrors]);

  const [credentials, setCredentials] = useState({
    email: "",
    senha: "",
  });

  const { email, senha } = credentials;

  const changeCredentials = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const submitCredentials = (e) => {
    e.preventDefault();
    setLoading();
    loginUser(credentials);

    setCredentials({
      email: "",
      senha: "",
    });
  };

  if (isAuth) {
    return <Redirect to="/catalog" />;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="card">
      <form>
        <div className="auth-title">
          <h2>
            <i className="fas fa-sign-in-alt"></i> Login
          </h2>
        </div>

        {errors && (
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            <strong>Error:</strong> {errors}
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}

        <div className="form-group">
          <label>
            <i className="fas fa-user"></i> Email:
          </label>
          <input
            onChange={changeCredentials}
            type="text"
            className="form-control"
            name="email"
            value={email}
            required
          />
        </div>

        <div className="form-group">
          <label>
            <i className="fas fa-key"></i> Password:
          </label>
          <input
            onChange={changeCredentials}
            type="password"
            className="form-control"
            name="senha"
            value={senha}
            required
          />
        </div>

        <div className="text-center">
          <button
            onClick={submitCredentials}
            type="submit"
            className="btn btn-success btn-block"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  auth: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loginUser, clearErrors, setLoading })(
  Login
);
