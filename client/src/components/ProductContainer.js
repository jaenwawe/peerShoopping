import ProductCard from './ProductCard';

function ProductContainer({productArr, nonCartProductClick,currentUser}) {

    let item = productArr.map(product => 
        <ProductCard
            nonCartProductClick={nonCartProductClick}
            product={product}
            currentUser={currentUser}
        />)
    
    return (
        <div id="product-collection">
        {item}
        </div>
             
            );
        }

export default ProductContainer;



