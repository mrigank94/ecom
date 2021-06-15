import products from "./data";
import ProductCard from "./ProductCard";

const Products = () => {

    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: '10px',
        flexWrap: 'wrap'
    }

    return <div style={containerStyle}>{products.map(product => <ProductCard key={product.id} product={product}/>)}</div>;
}
 
export default Products;