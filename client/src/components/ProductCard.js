import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ProductCard({product,nonCartProductClick,currentUser,unAvailableProduct}) 
{   

    function addChangeButton(e) 
    {nonCartProductClick(product)} 
        
   
    function removeMethod(e) 
    {unAvailableProduct(product)}

   
    
        const deleteButton =   <> <Button onClick={removeMethod} 
        variant="primary">Remove Item </Button><br/> <br/></>


    return (
        <div >
                <Card className="product" style={{ width: '18rem'}}>
             
                <Card.Img variant="top" src={product.photo} className="product-photo"/>
                <Card.Body>
                    <Card.Title>{product.category}</Card.Title>
                    <Card.Title>$ {product.price}</Card.Title>
                    {currentUser.admin || currentUser.id === product.user_id 
                    ? deleteButton 
                    : <Button onClick={e => addChangeButton(e)} 
                    variant="primary">Add to Cart
                    </Button>}
                    {removeMethod}
                    
                
                </Card.Body>
                </Card>
            </div>
    )
}
export default ProductCard;