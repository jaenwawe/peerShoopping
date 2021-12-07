//import { BrowserRouter, Route, Switch,useHistory } from "react-router-dom";
import { Route, Switch,useHistory } from "react-router-dom";

import React, {useState, useEffect} from 'react'
import '../style/App.css'
import "../style/index.css"


import NavBarContainer from './NavBarContainer';
import Home from "./Home";
import About from "./About";
import Login from './Login';
import Me from './Me'
import Register from './Register';

import Logout from './Logout';
import Sale from './Sale';
//import Order from '../Order';

import ProductContainer from "./ProductContainer";
import CartContainer from './CartContainer';
import CheckoutCart from './CheckoutCart';

function App() {
const [productArr, setProductArr]= useState([])
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [phone_number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZip] = useState("");
  const [admin, setAdmin] = useState(false);

  const [order, setOrder]= useState(null)
  const [total, setTotal] = useState(0)
  const [pay_method, setPayMethod] = useState('Visa')
  
  const [orderItemsArr, setOrderItemsArr]= useState([])
  const history = useHistory();

  const cartFromLocalStorage = JSON.parse(localStorage.getItem('cartArr') ||'[]') 
  
  const [cartArr, setCartArr] = useState(cartFromLocalStorage)
  useEffect(() => {
    localStorage.setItem('cartArr',JSON.stringify(cartArr));
      },[cartArr])
  
      const currentUserStateLocalStorage = JSON.parse(localStorage.getItem('currentUser'))
      const [currentUser, setCurrentUser] = useState(currentUserStateLocalStorage)
  
    useEffect(() => {
      localStorage.setItem('currentUser', JSON.stringify(currentUser))
    }, [currentUser])

    const [isLoggedIn, setIsLoggedIn] = useState(!! currentUser)


      useEffect(() => {
        fetch("/styles")
          .then((response) => response.json())
          .then((productArr) => setProductArr(productArr))
          },[])
      

      const homeBar = () => {
        history.push("/");
      };
   
      const handleLogin = (event) => {
        event.preventDefault()
        
        fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email, password})
        })
          .then(res => {
            if (res.ok) {
              res.json()
              .then(user => loginRegisterInfo(user))
              .then =(setIsLoggedIn(true))
               homeBar()
              } else {
              res.json().then(errors => {
                console.error(errors)
              })
            }
          })
      }


      
      function handleLogOut() {
          setIsLoggedIn(false)
          setCartArr([])
          //setProductArr([])
          setEmail('')
          setPassword('')
          setFirstName('')
          setLastName("")
          setUsername("")
          setNumber("")
          setAddress("")
          setState("")
          setCity("")
          setZip("")
          setAdmin(false)
          setOrder(null)
          setTotal(0)
          setPayMethod('Visa')
          setOrderItemsArr([])
          setCurrentUser(null)
          localStorage.clear();
          homeBar()

   

      }

        const handleRegister = (event) => 
        {
            event.preventDefault()
            fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              first_name,
              last_name,
              email, 
              password,
              username,
              phone_number,
              address,
              city,
              state,
              zipcode, 
              admin
             })
            })
            .then(res => {
              if (res.ok) {
                res.json().then(user => 
                  {
                  setCurrentUser(user)
                  loginRegisterInfo(user)
                  }
                  
                )} else {
                  res.json().then(errors => {
                    console.error(errors)   
                  })
                  }
              })
               
            }

               function loginRegisterInfo(user)
               {
                 let total=0;
                 let pay_method="Wallet"

                   setCurrentUser(user) 
                   console.log(user)
                   setIsLoggedIn(true)          
                   let user_id = user.id
                   
                   fetch('/shopping', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      total,
                      pay_method,
                      user_id 
                    })
                  })
                    .then(res => {
                      if (res.ok) {
                        res.json().then(order => {
                          console.log(order)
                          setOrder(order.id)
                        })
                      } else {
                        res.json().then(errors => 
                        console.error(errors)
                        )
                      }
                  })
                }

                  
        

                  function  unAvailableProduct(product)  {
                    let  available=false;
                    const notAvailableProduct =(e)=>{
                        fetch(`/products/${product.id}`, {
                            method: 'PATCH',
                            headers: {
                            'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ available })
                        })
                        .then(res => {
                        if (res.ok) {
                            res.json()            
                        } else {
                            res.json().then(errors => 
                            console.error(errors)
                            )}
                    })
                  }
                  removeProduct(product)  
                }



      //   function orderTotalCustomer(order) {
          
      //     fetch(`/orders/${order.id}`, {
      //         method: 'PATCH',
      //         headers: {
      //         'Content-Type': 'application/json'
      //         },
      //         body: JSON.stringify({
      //         pay_method, 
      //         total
      //         })
      //     })
      //     .then(res => {
      //     if (res.ok) {
      //         res.json().then(order => console.log(order))
      //     } else {
      //         res.json().then(errors => 
      //         console.error(errors)
      //     )}
      // })}

    function persistOrderItem(order, product){
          let order_id=order.id
          let customer_id=currentUser.id
          let product_id=product
      fetch('/sold', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            order_id,
            customer_id,
            product_id
        })
      })
        .then(res => {
       
          if (res.ok) {
            res.json ()
            .then(order_item => {console.log(order_item)
            })
          } else {
            res.json().then(errors => 
            console.error(errors)
            )}
      })
    }

         function removeProduct(product) {      
          setProductArr(productArr.filter(item => item !== product))
        }

        function removeFromCart(product){
          setCartArr (cartArr.filter(item => item !== product))
        }     
        function emptyCart(product){
          setCartArr ([])
        }     
  

        function addToCart(product){
          setCartArr([product,...cartArr])
        }
        function addToProducts(product) {
          setProductArr([product,...productArr])
        }
        
        function cartClick(product){
          console.log(product)
          addToProducts(product)
          removeFromCart(product)          
        }
        
        function nonCartProductClick(product){
          console.log(product)
          addToCart(product)
          removeProduct(product) 
         }

        const display = 
        <ProductContainer 
          productArr={productArr}
          nonCartProductClick={nonCartProductClick}
          currentUser={currentUser}
          removeProduct={removeProduct}
          unAvailableProduct={unAvailableProduct}
          />
  
         let unregisteredRoutes =
         <>
         <Route path="/login">
              <Login  
              cartArr={cartArr}
              handleLogin={handleLogin} 
              setIsLoggedIn={setIsLoggedIn}
              setEmail={setEmail}
              setPassword={setPassword} 
              loginRegisterInfo={loginRegisterInfo}/> 
              
        </Route> 

         <Route path="/register">
                       <Register 
                       handleRegister={handleRegister}
                       first_name={first_name}
                       setFirstName={setFirstName}
                       last_name={last_name}
                       setLastName={setLastName}
                       username={username}
                       setUsername={setUsername}
                       phone_number={phone_number}
                       setNumber={setNumber}
                       address={address}
                       setAddress={setAddress}
                       city={city}
                       setCity={setCity}
                       state={state}
                       setState={setState}
                       zipcode={zipcode}
                       setZip={setZip}
                       email={email}
                       setEmail={setEmail}
                       setPassword={setPassword}
                       password={password} 
                       /> 
                     </Route> 
                     {display}    
                      </>

     let registeredRoutes =
                 <>
                 <Route path="/me">
                         <Me  currentUser={currentUser}/> 
                      </Route>

                    <Route path="/sale">
                         <Sale  
                         currentUser={currentUser} 
                         setProductArr={setProductArr}
                         setIsLoggedIn={setIsLoggedIn}
                         productArr={productArr}
                         /> 
                      </Route>
                    
                      <Route path="/checkout">
                         <CheckoutCart
                         cartArr={cartArr}
                         order={order}
                        // setOrderItemsArr={setOrderItemsArr}
                        currentUser={currentUser} 
                        // orderItemsArr={orderItemsArr}
                        total={total}
                        setTotal={setTotal}
                        pay_method={pay_method}
                        setPayMethod={setPayMethod}
                        cartClick={cartClick}
                        emptyCart={emptyCart}
                        homeBar={homeBar}
                        handleLogOut={handleLogOut}
                      // orderTotalCustomer={orderTotalCustomer}
                         /> 
                      </Route>

                      <Route path="/logout">
                         <Logout  
                         setCurrentUser={setCurrentUser}
                         setCartArr={setCartArr}
                         setIsLoggedIn={setIsLoggedIn}
                         homeBar={homeBar}
                         handleLogOut={handleLogOut}
                         /> 
                      </Route> 
                  </>
      
  return(
    <div> 
          <NavBarContainer 
            isLoggedIn={isLoggedIn} 
            setIsLoggedIn={setIsLoggedIn}
            
            handleLogin={handleLogin}
            currentUser={currentUser} 
            setCurrentUser={setCurrentUser} 
            
            setEmail={setEmail} 
            email={email} 
            
            setPassword={setPassword} 
            password={password}
            />


        
                   <Switch>
                     <Route exact path="/"> {display}</Route> 
                      <Route path="/home"> <Home /> {display} </Route>
                      <Route path="/about"> <About /> {display} </Route>
                     
                      <Route path="/cart">
                        <CartContainer
                          order={order}
                          cartArr={cartArr}
                          orderItemsArr={orderItemsArr}
                          setOrderItemsArr={setOrderItemsArr}
                          cartClick={cartClick}
                          />
                      
                      </Route>   


                      CartContainer
            
            {isLoggedIn ? registeredRoutes : unregisteredRoutes} 
            
                  </Switch>

       

  </div>)
}
export default App;