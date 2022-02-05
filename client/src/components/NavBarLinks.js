import React from "react";
import { Link} from "react-router-dom";
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


function NavBarLinks (isLoggedIn, setIsLoggedIn)
{
  return (
  <div>
    <Button variant="info"> <img src={logo} className="App-logo" alt="logo" /></Button>{' '}
                  
    <Link
      to="/"
      style={linkStyles}
      activeStyle={{
        background: "darkblue",
      }}>
      Home
    </Link>

        
    <Link
        to="/about"
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}>
          About
    </Link>
      
    <Link to="/login" style={linkStyles} activeStyle={{ background: "darkblue"}}> Login </Link>

    <Link
      to="/cart"
      style={linkStyles}
      activeStyle={{
        background: "darkblue",
      }}>
      Cart     
    </Link>

    <Link
      to="/register"
      style={linkStyles}
      activeStyle={{
        background: "darkblue",
      }}>
      Sign Up
    </Link>
  </div>
  );
}

export default NavBarLinks;