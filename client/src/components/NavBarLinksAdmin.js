import React from "react";
import { Link} from "react-router-dom";


import { createBrowserHistory } from 'history';

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


function NavBarLinksAdmin (isLoggedIn, setIsLoggedIn,currentUser)
{

  return (
    <div>
       <Link
          to="/users"
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}>
          Home
      </Link>

    <Link
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          /* add styling to Navlink */
          style={linkStyles}
          /* add prop for activeStyle */
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
      


    <Link
        to="/about"
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}>
          About
      </Link>
      
      <Link
        to="/sale"
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}>
        Sale      
      </Link>


      <Link to="/logout" style={linkStyles} activeStyle={{ background: "darkblue"}}> Logout </Link>
      <Button variant="info">  <Link
                       to="/checkout"
                      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
                      /* add styling to Navlink */
                      style={linkStyles}
                      /* add prop for activeStyle */
                      activeStyle={{
                        background: "darkblue",
                      }}>
                      Checkout
                  </Link></Button>{' '}
                
      
 
   
   
    </div>
  );
}

export default NavBarLinksAdmin ;