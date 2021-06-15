import React, { Component } from "react";
import { connect } from "react-redux";

class Button extends Component {
  render() {
    return (
      <div
        className={`button ${this.props.value === "=" ? "equal" : ""}`}
        onClick={() => this.props.buttonClick(this.props.value)}
      >
        {this.props.value}
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  //this.props.buttonClick is now available inside the button component
  return {
    buttonClick: function (value) {
      if (value === "=") {
        dispatch({ type: "EQUAL_BUTTON_CLICKED" });
      } else if(value === "C") {
        dispatch({ type: "CLEAR_BUTTON_CLICKED" });
      } else if (value === '/' || value === '+' || value === '-' || value === '*') {
        dispatch({ type: "OPERATOR_BUTTON_CLICKED", payload: value });
      } else {
        dispatch({ type: "BUTTON_CLICKED", payload: value });
      }
    },
  };
}
export default connect(null, mapDispatchToProps)(Button);
