import { Badge, IconButton } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Cart = () => {
  return (
    <IconButton
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      color="inherit"
    >
      <Badge badgeContent={4} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default Cart;
