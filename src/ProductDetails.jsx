import { useParams } from "react-router";
import { findById } from "./data";
import "./css/product-details.css";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import ProductDescription from "./ProductDescription";

const ProductDetails = (props) => {
  const params = useParams();
  const product = findById(params.id);

  function handleCartAdd() {
    props.addToCart(product);
  }

  return (
    <div className="container">
      <div className="image-container">
        <img
          src={product.imageURL}
          alt={product.name}
          height={400}
          width={300}
        />
      </div>
      <div className="product-details">
        <ProductDescription product={product} />
        <Button
          style={{ marginTop: "40px" }}
          variant="contained"
          color="primary"
          onClick={handleCartAdd}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    addToCart: function (item) {
      dispatch({ type: "ITEM_ADDED_TO_CART", payload: item });
    },
  };
}
export default connect(null, mapDispatchToProps)(ProductDetails);
