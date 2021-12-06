import ProductCard from './ProductCard';

function ProductContainer({unAvailableProduct,productArr, nonCartProductClick,currentUser,removeProduct}) {

    let item = productArr.map(product => 
        <ProductCard
            nonCartProductClick={nonCartProductClick}
            product={product}
            currentUser={currentUser}
            unAvailableProduct={unAvailableProduct}
        />)
    
    return (
        <div id="product-collection">
        {item}
        </div>
             
            );
        }

export default ProductContainer;



