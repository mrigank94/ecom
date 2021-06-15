import MenuAppBar from "./AppBar";
import Filters from "./Filters";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <div style={{display: 'flex'}}>
        <div style={{width: '20%'}}><Filters/></div>
        <div style={{width: '80%'}}><Products/></div>
      </div>
    </>
  );
};

export default Home;
