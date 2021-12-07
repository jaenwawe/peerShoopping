import CartCard from "./CartCard"

function CheckoutCart({cartClick, cartArr, order, currentUser,total=0,setTotal,pay_method="Visa",setPayMethod, emptyCart,homeBar}) {
    let order_id
    if (order!= null) order_id = order.id
    const customer_id = currentUser.id
    const available=false;
    let display
    setTotal(cartArr.reduce((a, {price}) => a + price, 0))
    

    function notAvailable(product_id)
    { 

            fetch(`/products/${product_id}`, {
                    method: 'PATCH',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ available })
                })
                .then(res => {
                if (res.ok) {
                    res.json()
                    .then(product => console.log(product))
                    
                } else {
                    res.json().then(errors => 
                    console.error(errors)
                    )}
            })
    }   


    function persistOrderItem(product_id){    
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


    function orderItemsUnavailable(){        
        cartArr.map(product => {
        let product_id = product.id   
            persistOrderItem(product_id)
            notAvailable(product_id)
    })}


    function orderTotalCustomer(total,pay_method) {
        fetch(`/orders/${order_id}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            pay_method, 
            total
            })
        })
        .then(res => {
        if (res.ok) {
            res.json().then(order => console.log(order))
        } else {
            res.json().then(errors => 
            console.error(errors)
        )}
    })
    }

    
    function persistOrder() {
        orderTotalCustomer(total,pay_method) 
        orderItemsUnavailable()
        emptyCart()
        homeBar()

    }

        return (
            <div className="ifExist">
        
        { (cartArr.length < 1) 
              ?<>There are no items in your</>
              :<div className="container" className="form">
        
                <form  onSubmit={persistOrder}>      <div className="mb-3" >
         
                        <label className="form-label">Pay Method &nbsp;  
                            <input 
                            type="payMethod" 
                            name="payMethod" 
                            value={pay_method}
                             onChange={(e) => setPayMethod(e.target.value)}
                            ></input>
                        </label>
               
                    </div>
                    <div className="mb-3">
                        <label  className="form-label"> Total for this order is $ {total} &nbsp;  
                        </label>
                    </div>
                
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <br/><br/>
                </form>
               
                         
                <h5>Checkout select your payment methood and hit submit on the button</h5> 
                    <div id="collection">
                        {cartArr.map (product => 
                        <>
                            <CartCard product={product} cartClick={cartClick}/>
                        </>
                    )} 
                    </div>
            </div>}
            </div>
            );
        }
        
        export default CheckoutCart;
