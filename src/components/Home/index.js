import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Example from "./Tabs";
import NavbarContainer from "./NavbarContainer";
import ShopByCategoryCards from "./ShopByCategoryCards";
import ControlledCarousel from "./Carousel";

const Home = () => {
  return (
    <div className="container mt-5">
      <NavbarContainer />
      <Example />
      
      <div className="row">
        <div className="col-12">
          <ControlledCarousel />
        </div>
      </div>

      <div className="row mb-4 justify-content-center align-items-center">
        <div className="col-12">
          <h2 className="text-center mb-4 fw-bold pt-2">Shop by Category</h2>
          <div className="shop-category-container">
            <ShopByCategoryCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
