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


function NavBarLinksUser (isLoggedIn, setIsLoggedIn,currentUser)
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
      to="/me"
      style={linkStyles}
      activeStyle={{
      background: "darkblue",
      }}>
      Me
    </Link>
      
    <Link to="/about"
      style={linkStyles}
      activeStyle={{
      background: "darkblue",
      }}>
        About
    </Link>
      
    <Link to="/sale"
      style={linkStyles}
      activeStyle={{
      background: "darkblue",
      }}>
      Sale      
    </Link>

    <Link to="/logout" 
      style={linkStyles} 
      activeStyle={{ background: "darkblue"}}> Logout 
    </Link>

    <Button variant="info">  
      <Link to="/checkout"
      style={linkStyles}
      activeStyle={{
      background: "darkblue",
      }}>
      Checkout
      </Link>
    </Button>{' '}
  </div>
  );
}

export default NavBarLinksUser;