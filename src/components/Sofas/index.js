import NavbarContainer from "../Home/NavbarContainer";
import Example from "../Home/Tabs";
import SofasList from "./SofasList";
import ShopBySofa from "./sofatypes";

const Sofas = () => {
  return (
    <div className="container mt-5">
      <NavbarContainer />
      <Example />

      <div className="row mb-4 justify-content-center align-items-center">
        <div className="col-12">
        <SofasList />
          <h2 className="text-center mb-4 fw-bold pt-2">Shop by Category</h2>
          <div className="shop-category-container">
            
            <ShopBySofa />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sofas;
