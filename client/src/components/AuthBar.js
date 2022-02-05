import React from "react";
import { NavLink} from "react-router-dom";

import Button from 'react-bootstrap/Button'
import logo from '../data/logo.png';

const linkStyles = {
    display: "inline-block",
    width: "120px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
};

function AuthBar(setCurrentUser, currentUser,handleLogOut) {
   
  return (
    <div>
      <Button variant="info"> <img src={logo} className="App-logo" alt="logo" /></Button>{' '}
                  
        <NavLink
          to="/me"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}>
          Home
        </NavLink>

        <NavLink
          to="/about"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}>
          About
        </NavLink>
      
          <NavLink
            to="/products/add"
            style={linkStyles}
            activeStyle={{
              background: "darkblue",
            }}>
            Sale2
          </NavLink>

          <NavLink
            to="/logout"
            style={linkStyles}
            onClick= {handleLogOut}
            activeStyle={{
              background: "darkblue",
            }}>
            Logout
          </NavLink>

      </div>

  );
}

export default AuthBar;