import { Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

const ProductDescription = ({product}) => {
  return (
    <>
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
    </>
  );
};

export default ProductDescription;
