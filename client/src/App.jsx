import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login.jsx";
import Signin from "./components/Signin.jsx";
import Home from "./components/Home.jsx";

var App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul className="navbar">
            <li className="btn">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="btn">
              <Link className="nav-link" to="/login">
                Log in
              </Link>
            </li>
            <li className="btn">
              <Link className="nav-link" to="/signin">
                Sign up
              </Link>
            </li>
            <li>
              <img
                className="logo"
                src="https://www.flaticon.com/svg/static/icons/svg/455/455893.svg"
              />
            </li>
            <li className="logoS">MIDIPALA</li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
