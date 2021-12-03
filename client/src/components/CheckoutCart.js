import React, {useState} from "react";

 import CartCard from "./CartCard"


function CheckoutCart({ removeFromCart,addOrderItems, cartClick, cartArr, setOrderItemsArr, order, product, currentUser,orderItemsArr,total=0, setTotal,pay_method,setPayMethod}) {
        setTotal(cartArr.reduce((a, {price}) => a + price, 0))

    let display
    let customer_id  = currentUser.id

    const checkout =()=>{
        persistOrderItems(cartArr, order, customer_id)
       // persistTotalPayMethod(customer_id, pay_method, order, total) 
    }

    function persistOrderItems (cartArr) {
     console.log('persistOrderItems')
        cartArr.map(product => {
           let product_id = product.id
           postOneOrderItem (product_id)
        })
        persistTotalPayMethod() 
    }

    function postOneOrderItem (product_id){
       let order_id = order.id
       let customer_id=currentUser.id
        fetch("/sold", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify({
                order_id,
                product_id,
                customer_id
            })
        })
        .then(res => {
            if (!res.ok) 
            res.json().then(errors => {console.error(errors)})
            }
        )
    }

function persistTotalPayMethod() 
{
    let order_id = order.id

    console.log('eg PersistTotalPayMethod gets a number for pay_method')
    console.log(pay_method)
    console.log(total)
    console.log(order_id)

    
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
            res.json().then(order =>   endCheckout (total, pay_method, order))
        } else {
            res.json().then(errors => 
            console.error(errors)
        )
        }
    })
}

    function endCheckout (pay_method){
        <p>For order{display} the pay_method{pay_method}  will be charged {total}</p>
    }



  return (
    <div className="ifExist">

{ (cartArr.length < 1) 
      ?<>There are no items in your</>
      :<div className="container" className="form">

        {/* <h5><br/> Total ${total}<br/><br/></h5>  */}
        <form  onSubmit={checkout}>      <div className="mb-3" >
 
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
                    {/* <input 
                    type="total" 
                    name="total" 
                    value={total}></input> */}
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