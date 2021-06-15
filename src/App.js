import { Redirect, Route, Switch } from "react-router";
import MenuAppBar from "./AppBar";
import Home from "./Home";
import ProductDetails from "./ProductDetails";


function App() {
  return (
    <>
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
