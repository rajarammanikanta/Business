import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NavbarContainer from "../Home/NavbarContainer";
import Home from "../Home";
import products from "../Utills/products";

import { FaPhone } from "react-icons/fa";

// Modal component for Get Enquiry
const EnquiryModal = ({ show, handleClose }) => {
  return (
    show && (
      <div
        className="modal show d-block"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Get in Touch</h5>
              <button type="button" className="close" onClick={handleClose}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>For more details or inquiries, call us now at:</p>
              <div className="d-flex justify-content-center align-items-center">
                <FaPhone size={30} color="green" />
                <span className="ml-2" style={{ fontSize: "1.5rem" }}>
                  1234567
                </span>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

const ProductDetail = () => {
  const { id } = useParams();



  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);
  };

  const product = products.find((item) => item.id === parseInt(id));

  const [mainImage, setMainImage] = useState(product?.images?.[0] || "");
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleShowModal = () => setShowModal(true); // Show modal function
  const handleCloseModal = () => setShowModal(false); // Close modal function

  return (
    <div className="container mt-4 pt-5">
      <NavbarContainer />
      <div className="row">
        {/* Image section */}
        <div className="col-12 col-md-6">
          <div className="card shadow-sm">
            <img
              src={mainImage}
              alt={product.name}
              className="img-fluid mb-3 rounded-top"
              style={{
                height: "500px",
                objectFit: "cover",
              }}
            />
            <div className="d-flex justify-content-center flex-wrap">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} - ${index + 1}`}
                  className="img-thumbnail mx-1 mb-2"
                  style={{
                    width: "80px",
                    height: "80px",
                    cursor: "pointer",
                    border:
                      mainImage === img ? "2px solid blue" : "1px solid #ccc",
                    objectFit: "cover",
                  }}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Product details section */}
        <div className="col-12 col-md-6">
          <div className="card shadow-sm p-3 mb-4 product-card">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h4 className="text-primary">
              Price: {formatPrice(product.price)}
            </h4>
            <p>
              <strong>Dimensions:</strong> {product.dimensions}
            </p>
            <p>
              <strong>Upholstery Material:</strong> {product.upholsteryMaterial}
            </p>
            <p>
              <strong>Foam Type:</strong> {product.foamType}
            </p>
            <p>
              <strong>Cushion:</strong> {product.cushion}
            </p>
            <p>
              <strong>Legs Material:</strong> {product.legsMaterial}
            </p>
            <h5>Salient Features:</h5>
            <ul>
              {product.salientFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            {/* Trigger button for the modal */}
            <button className="btn btn-primary mt-3" onClick={handleShowModal}>
              Get Enquiry
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        tabIndex="-1"
        style={{ display: showModal ? "block" : "none" }}
        aria-labelledby="enquiryModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="enquiryModal">
                Product Enquiry
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleCloseModal}
              ></button>
            </div>
            <div className="modal-body">
              <p>
                For more information or to place an order, please contact us:
              </p>
             
              <p className="d-flex align-items-center">
  <i className="bi bi-telephone-fill text-primary me-2" style={{ fontSize: '1.5rem' }}></i>
  <a href="tel:+919493012243" className="h5 text-decoration-none text-dark">
    <FaPhone/><strong>9493012243</strong> 
  </a>
</p>


              <p>We will be happy to assist you!</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
