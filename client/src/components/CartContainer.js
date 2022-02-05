
 import CartCard from "./CartCard";
 import OrderItem from "./OrderItem"

function CartContainer({cartArr, setOrderItemsArr, orderItemsArr, cartClick, order,total,setTotal})
{    
let items = cartArr.map(product => 
        <>        
        <CartCard
            product={product}
            cartClick={cartClick}
        />

        { (order) 
            ? <OrderItem setOrderItemsArr={setOrderItemsArr} order={order}  user_id={order.user_id} orderItemsArr={orderItemsArr}/>
            : <></>}
            </>)
        
    return (
        <div className="ifExist">

        { (cartArr.length < 1) ? <>There are no items in your</> : <div className="entire">
        {items} 
        </div>} 
        </div>
    )
}

export default CartContainer;