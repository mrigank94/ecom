import { Badge, IconButton } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { connect } from "react-redux";

const Cart = (props) => {
  return (
    <IconButton
      onClick={props.toggleDialog}
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      color="inherit"
    >
      <Badge badgeContent={props.items.length} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

function mapStateToProps(store) {
    return {
        items: store.inCartItems
    }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleDialog: function () {
      dispatch({ type: "TOGGLE_DIALOG_VISIBILITY" });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
