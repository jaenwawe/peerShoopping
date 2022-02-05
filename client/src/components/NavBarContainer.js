import React, {useState, useEffect} from 'react'


import NavBarLinks from "./NavBarLinks";
import NavBarLinksUser from './NavBarLinksUser';


function NavBarContainer ({setEmail, email, setPassword, password,currentUser, isLoggedIn,setIsLoggedIn})

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
