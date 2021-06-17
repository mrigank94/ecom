import { connect } from "react-redux";
import products from "./data";
import ProductCard from "./ProductCard";

const Products = (props) => {

    function getFilteredProducts() {
        return products.filter(product => product.name.toLowerCase().includes(props.searchText.toLowerCase()));
    }

    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: '10px',
        flexWrap: 'wrap'
    }

    return <div style={containerStyle}>{getFilteredProducts().map(product => <ProductCard key={product.id} product={product}/>)}</div>;
}

function mapStateToProps(store) {
    return {
        searchText: store.searchText
    }
}

export default connect(mapStateToProps)(Products);