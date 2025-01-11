import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import NavbarContainer from "./NavbarContainer";
import ShopByCategoryCards from "./ShopByCategoryCards";
import ControlledCarousel from "./Carousel";
import Banner from "../Banner/Banner";
import AllProducts from "../Allproducts/AllProducts";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaWhatsapp } from "react-icons/fa";
import TrustBanner from "../Banner/TrustBanner";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [customerCount, setCustomerCount] = useState(1000);

  const fetchCustomerCount = () => {
    const savedCount = localStorage.getItem("customerCount");
    return savedCount ? parseInt(savedCount, 10) : 1000;
  };

  const incrementCustomerCount = () => {
    const currentCount = fetchCustomerCount();
    const newCount = currentCount + 1;
    localStorage.setItem("customerCount", newCount);
    setCustomerCount(newCount);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    // Check if modal has been shown before
    const modalShown = localStorage.getItem("modalShown");

    // If it's the user's first visit, show the modal and set the flag
    if (!modalShown) {
      setShowModal(true);
      localStorage.setItem("modalShown", "true"); // Set the flag in localStorage
    }

    window.scrollTo(0, 0);
    incrementCustomerCount();
  }, []);

  return (
    <div className="container-fluid vh-100 bg-dark text-light d-flex flex-column">
      {/* Pop-up Modal */}
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
          <Button variant="success" className="px-4 py-2" onClick={handleClose}>
            Shop Now
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Welcome Section */}
      <div className="text-center py-4 rounded my-3 pt-5">
        <p className="fs-5 text-light mb-0 pt-2">
          Your one-stop destination for premium, comfortable sofas. Browse our
          collections and enjoy amazing deals!
        </p>
      </div>

      {/* Navbar */}
      <NavbarContainer />

      {/* Carousel */}
      <div className="flex-grow-1">
        <ControlledCarousel />
      </div>

      {/* Content */}
      <div className="row mb-4 justify-content-center align-items-center">
        <div className="col-12">
          <AllProducts />
          <Banner />
          <h2 className="text-center text-dark mb-4 fw-bold pt-2">Shop by Category</h2>
          <div className="shop-category-container">
            <ShopByCategoryCards />
          </div>
        </div>
      </div>

      {/* Trust Banner */}
       <TrustBanner customerCount={customerCount}/>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/9493012243?text=Hi%20Welcome%20to%20our%20store!%20How%20can%20we%20assist%20you%20today?"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-success rounded-circle position-fixed bottom-0 end-0 m-4 p-3"
        style={{
          zIndex: 9999,
          right: "20px",
          bottom: "20px",
        }}
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
};

export default Home;
