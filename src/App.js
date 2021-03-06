import "./assets/scss/styles.scss";
import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Home from "./components/Home";
import store from "./redux/store";
import Login from "./components/auth/Login";
import Catalog from "./components/catalog/Catalog";
import PrivateRoute from "./components/routing/PrivateRoute";
import MovieDetail from "./components/catalog/MovieDetail";
import UserList from "./components/catalog/UserList";
import Contact from "./components/layout/Contact";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/contact" component={Contact} />
              <PrivateRoute exact path="/catalog" component={Catalog} />
              <PrivateRoute
                exact
                path="/movie/detail/:id"
                component={MovieDetail}
              />
              <PrivateRoute exact path="/lista" component={UserList} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
