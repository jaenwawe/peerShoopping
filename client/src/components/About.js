import React from "react"
import {made_image} from "../data/Mock"


function About() {
    return (

  <div>
     <h1 className="text-center">First class clothes!  
                    Resold at great prices!</h1>
      <img class="center" src={made_image} alt="girl looking up" />
<br/>
      <div class="container">
        <div class="square">
           <div class="content">
            
              <p>Shop online!  There is no need to leave your house to find vintage clothing or shoes!</p>
              <p>The sellers can relate to seller online and not having to get to a vintage store since most do not have contactless delivery. If you see any, tell everyone</p>

              <p>View the products that are listed on each page other than the signup and sale page. </p>
              <p> On the product that you like click the add to cart button to create a list of what you intend to buy once you have logged in or registered. </p>
              <p>Login by clicking the Login button on the top of the page or sign up to be a member by clicking the Sign up button on the navigation bar at the top of the page</p>
              <p>Once you have logged in or Registered, you can post products to the list of products by Clicking the Sale button on the navigation bar at the top of the page </p>
              <p>The items that you have added are in the Checkout button on the navigation bar at the top of the page</p>
              <p>To Checkout select the method of payment and click submit.  You will see the total cost of the cart and the items below</p>

              </div>
          </div>
        </div>    
      </div>
    
    );
  }


  
  export default About;