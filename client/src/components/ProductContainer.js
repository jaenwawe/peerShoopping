import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import ProductCard from './ProductCard';

function ProductContainer({unAvailableProduct,productArr, nonCartProductClick,currentUser,removeProduct}) {
    
    let item = productArr.map(product => 
            <Col>
                <ProductCard
                nonCartProductClick={nonCartProductClick}
                product={product}
                currentUser={currentUser}
                unAvailableProduct={unAvailableProduct}
                />
            </Col>
    )
    
    return (
        <div id="product-collection">
        <Row>{item}</Row>
        </div>
             
            );
        }

export default ProductContainer;



