
// function OrderItem (order, product, currentUser,orderItemsArr,setOrderItemsArr)
function OrderItem (order, product,orderItemsArr,setOrderItemsArr)
{

// let customer_id = order.user_id
// let product_id = product.id
// let order_id=order.id

// const createOrderItem = (e) => {
//     e.preventDefault()
//     fetch("/order_items", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify({
//         customer_id,
//         product_id,
//         order_id,
//       })
//     })
//     .then(res => res.json())
//     // .then(newOrderItem => renderNewOrderItem(newOrderItem))
//     .then(order_item => setOrderItemsArr(orderItemsArr.splice(0,0, order_item)))
// }

return(
    <>
        {/* {(orderItemsArr.slice(-1)[0]===true) 
        ? <div>{orderItemsArr.slice(-1)[0]}</div>
         : <> </>
        } */}

        {(Math.random() < 0.5) 
        ? <div>True</div>
         : <> False </>
        }
    </>
)}
  export default OrderItem;