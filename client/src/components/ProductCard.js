import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ProductCard({product,nonCartProductClick,currentUser}) 
{   
  
    function addChangeButton(e) 
    {nonCartProductClick(product)} 
        
    
        const deleteProduct =(e)=>{
            fetch(`/products/${product.id}`, {
                method: 'DELETE'})}
    
        const deleteButton =   <> <Button onClick={e =>  deleteProduct(e)} 
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
                    : <> </>}
                    <Button onClick={e => addChangeButton(e)} 
                            variant="primary">Add to Cart
                    </Button>
                
                </Card.Body>
                </Card>
            </div>
    )
}
export default ProductCard;