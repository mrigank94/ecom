import { Redirect, Route, Switch } from "react-router";
import MenuAppBar from "./AppBar";
import Home from "./Home";
import ProductDetails from "./ProductDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <MenuAppBar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/product-details/:id" component={ProductDetails} />
        <Redirect to="/home" />
      </Switch>
    </>
  );
}

export default App;
