import Card from 'react-bootstrap/Card'


function ProductCard({product,nonCartProductClick,currentUser,unAvailableProduct}) 
{   
    const rights =(currentUser, product)=>{
        if (currentUser===null) return addButton
        else if (currentUser.id !== product.user_id) 
            return addButton
        else  
            return deleteButton
    }

function addChangeButton(e) { nonCartProductClick(product) } 
    
function removeMethod(e) { unAvailableProduct(product) }

const deleteButton = <button onClick={removeMethod} 
    variant="primary">Remove Item </button>
    
    const addButton =<button onClick={e => addChangeButton(e)} 
    variant="primary">Add to Cart
    </button>

    return (
        <div >
            <Card className="product" style={{ width: '18rem'}}>             
                <Card.Img variant="top" src={product.photo} className="product-photo"/>
                <Card.Body>
                <Card.Title>{product.category}</Card.Title>
                <Card.Title>$ {product.price}</Card.Title>
                {rights(currentUser, product)}
                {removeMethod}
                </Card.Body>
            </Card>
        </div>
    )
}
export default ProductCard;