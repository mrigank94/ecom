import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { connect } from "react-redux";
import ProductDescription from "./ProductDescription";
import { Divider } from "@material-ui/core";
import "./css/cart-items.css";
import { toast } from "react-toastify";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

function CartItems(props) {
  function handleCheckout() {
    toast.success("Order placed successfully!");
  }
  return (
    <div>
      <Dialog
        maxWidth="lg"
        fullWidth={true}
        onClose={props.toggleDialog}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <DialogTitle id="customized-dialog-title" onClose={props.toggleDialog}>
          Items in Cart - {props.items.length}
        </DialogTitle>
        <DialogContent dividers>
          {props.items.length === 0
            ? "No Items in cart."
            : props.items.map((item) => (
                <>
                  <div key={item.id} className="cart-item">
                    <div className="product-details">
                      <ProductDescription product={item} />
                    </div>
                    <div>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => props.removeFromCart(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                  <Divider />
                </>
              ))}
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={props.toggleDialog}
            color="primary"
            disabled={props.items.length === 0}
            onClick={handleCheckout}
          >
            Checkout
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function mapStateToProps(store) {
  //props.open inside this component is store.open
  return {
    open: store.open,
    items: store.inCartItems,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleDialog: function () {
      dispatch({ type: "TOGGLE_DIALOG_VISIBILITY" });
    },
    removeFromCart: function (id) {
      dispatch({ type: "ITEM_REMOVED_FROM_CART", payload: id });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
