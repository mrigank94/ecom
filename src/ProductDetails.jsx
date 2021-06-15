import { useParams } from "react-router";
import { findById } from "./data";
import "./css/product-details.css";
import { Button, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

const ProductDetails = () => {
  const params = useParams();
  const product = findById(params.id);

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
        <div className="name-rating">
          <Typography variant="h4">{product.name}</Typography>
          <Rating
            name="half-rating-read"
            defaultValue={product.rating}
            precision={0.1}
            readOnly
          />
        </div>
        <Typography variant="h5" style={{ fontStyle: "italic" }}>
          {product.category}
        </Typography>
        <Typography
          variant="h6"
          style={{ marginTop: "20px" }}
          color="textSecondary"
          component="p"
        >
          {product.description}
        </Typography>
        <Typography variant="h4" style={{ marginTop: "20px", color: "red" }}>
          ₹{product.price}
        </Typography>

        <Button style={{ marginTop: "40px"}} variant="contained" color="primary">
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
