import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container home-page">
      <h3>Perto Educação - Job Challange</h3>
      <h4>
        <i>Raul Duarte</i>
      </h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className="contact-me">
        <Link to="/contact" className="btn btn-info">
          Contact me
        </Link>
      </div>
    </div>
  );
};

export default Home;
