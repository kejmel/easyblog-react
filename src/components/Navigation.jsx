import { UserContext } from "../App.jsx";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

function Navigation() {

    const { userLoggedIn, setUserLogin } = useContext(UserContext);
    const value = { userLoggedIn, setUserLogin };
    
    if (!value.userLoggedIn) {
      return (
        <div className="nav-container">
          <nav className="main-nav">
            <ul>
              <li>
                <NavLink to="/registration">Registration form</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login form</NavLink>
              </li>
              <li>
                <NavLink to="/public-content">Public content</NavLink>
              </li>
              <li>
                <NavLink to="/user-content">User content</NavLink>
              </li>
              <li>
                <NavLink to="/moderator-content">Moderator content</NavLink>
              </li>
              <li>
                <NavLink to="/admin-content">Admin content</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Logged user </h1>
          <div className="nav-container">
            <nav className="main-nav">
              <ul>
                <li>
                  <NavLink to="/public-content">Public content</NavLink>
                </li>
                <li>
                  <NavLink to="/user-content">User content</NavLink>
                </li>
                <li>
                  <NavLink to="/moderator-content">Moderator content</NavLink>
                </li>
                <li>
                  <NavLink to="/admin-content">Admin content</NavLink>
                </li>
                <li>
                  <NavLink to="/logout">Logout</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      );
    }
  };

  export default Navigation;