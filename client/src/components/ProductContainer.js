import ProductCard from './ProductCard';

function ProductContainer({productArr, nonCartProductClick}) {

    let item = productArr.map(product => 
        <ProductCard
            nonCartProductClick={nonCartProductClick}
            product={product}
        />)
    
    return (
        
        <div id="product-collection">
        {item}

        </div>
             
            );
        }

export default ProductContainer;