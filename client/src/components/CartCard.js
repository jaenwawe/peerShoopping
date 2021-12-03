import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function CartCard({product,cartClick}) 
{
        function addChangeButton(e) 
        {      
        cartClick(product)  
     
        }


        
        return (
                <Card className="product" style={{ width: '18rem'}}>
                <Card.Img variant="top" src={product.photo} className="product-photo"/>
                <Card.Body>
                    <Card.Title>{product.category}</Card.Title>
                    <Card.Title>$ {product.price}</Card.Title>
                    <Button onClick={e => addChangeButton(e)} 
                            variant="primary">Remove from Cart
                    </Button>
                </Card.Body>
                </Card>
        )
}

export default CartCard;