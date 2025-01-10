import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import NavbarContainer from "./NavbarContainer";
import ShopByCategoryCards from "./ShopByCategoryCards";
import ControlledCarousel from "./Carousel";
import Banner from "../Banner/Banner";
import AllProducts from "../Allproducts/AllProducts";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const Home = () => {
  // State to control the modal
  const [showModal, setShowModal] = useState(false);

  // Function to close the modal
  const handleClose = () => {
    setShowModal(false);
    localStorage.setItem("modalClosed", "true"); // Set in localStorage to avoid showing on subsequent loads
  };

  useEffect(() => {
    // Scroll to the top of the page on initial load
    window.scrollTo(0, 0);

    // Check if modal was previously closed using localStorage
    if (!localStorage.getItem("modalClosed")) {
      setShowModal(true); // Show the modal if it hasn't been closed
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="container mt-4">
      {/* Pop-up Modal for Sankranthi Sale */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header className="bg-primary text-white" closeButton>
          <Modal.Title className="text-uppercase fw-bold">
            Sankranthi Sale 🎉
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p className="fw-semibold">
            🎉 Enjoy <span className="fw-bold">20% off</span> on all products
            this Sankranthi! Don't miss out on this amazing offer. Shop now and
            celebrate with style! 🛍️
          </p>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button
            variant="success"
            className="px-4 py-2"
            onClick={handleClose}
          >
            Shop Now
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Welcome Message with Marquee */}
      <div className="welcome-message text-center my-3 py-3 rounded shadow-sm pt-5">
        <marquee className="fw-bold text-primary fs-4 fs-sm-3 fs-md-2">
          Welcome to <span className="text-warning">NK Sofa World</span>! Your
          one-stop destination for premium, comfortable sofas. Browse our
          collections and enjoy amazing deals!
        </marquee>
      </div>
      
      {/* Navbar */}
      <NavbarContainer />
      
      <div className="row">
        <div className="col-12">
          <ControlledCarousel />
        </div>
      </div>

      <div className="row mb-4 justify-content-center align-items-center">
        <div className="col-12">
          <AllProducts />
          <Banner />
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
