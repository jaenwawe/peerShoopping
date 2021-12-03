import React from "react"
import {made_image} from "../data/Mock"


function Me ({currentUser}) {


    return (
<div>
  <h1> Profile</h1> 
  <h5>{ currentUser.first_name}  {currentUser.last_name}</h5>
  <h5>{ currentUser.username} </h5>
  <h5>{ currentUser.email} </h5> 
  <h5>{currentUser.phone_number}</h5>
  <h5>{ currentUser.address} </h5>
  <h5>{ currentUser.city}</h5> 
  <h5>{currentUser.state}</h5>
  <h5>{ currentUser.zipcode} </h5>

  </div>    
    );
  }



  //index.js or index.html on in public folder  index.css
  
  export default Me;