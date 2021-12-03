

import { useState,useEffect } from 'react'




function AuthChecked(title = "AuthChecked", setTitle) {
    return (
  <>
    <h2>{title}</h2>
    <Bar currentUser={currentUser} setCurrentUser={setCurrentUser} />  
  </>    
    );
  }



  //index.js or index.html on in public folder  index.css
  
  export default AuthChecked;