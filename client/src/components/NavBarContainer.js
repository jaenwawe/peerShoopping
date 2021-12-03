import React, {useState, useEffect} from 'react'

// import {
//     BrowserRouter as Router
//  } from "react-router-dom";



import NavBarLinks from "./NavBarLinks";
import NavBarLinksUser from './NavBarLinksUser';
// import Login from "./Login";
// import Register from "./Register";

// import {Route} from 'react-router'
function NavBarContainer ({setEmail, email, setPassword, password,currentUser, isLoggedIn,setIsLoggedIn})
// function NavBarContainer ({setEmail, email, setPassword, password,currentUser,setCurrentUser,handleLogin,  addToCart,cartArr,setCartArr, isLoggedIn,setIsLoggedIn,productIDCart,ArrproductArr})
{

      
    return(
      <div>
          {isLoggedIn
          ? <NavBarLinksUser setIsLoggedIn={setIsLoggedIn} currentUser={currentUser} />
          : <NavBarLinks setIsLoggedIn={setIsLoggedIn} /> }


        </div>
        
        )
};
export default NavBarContainer;
