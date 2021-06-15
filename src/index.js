import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import App from "./App";
import "./index.css"

// npm install redux
// npm install react-redux
// create your reducer function
// create your store using createStore(reducer fn)
// pass the store to all the components using Provider component in react-redux
//mapStateToProps in components which need any value in store
//mapDispatchToProps in components which need to dispatch an action

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
