import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NavbarContainer from "../Home/NavbarContainer";
import TrustBanner from "../Banner/TrustBanner";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { RiSofaFill } from "react-icons/ri";
import { GiRolledCloth } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";
import products from "../Utills/products";

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
  const [loading, setLoading] = useState(false); // State to handle image loading
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleImageChange = (img) => {
    if (mainImage !== img) {
      setLoading(true);
      const imgObj = new Image();
      imgObj.src = img;
      imgObj.onload = () => {
        setMainImage(img);
        setLoading(false);
      };
    }
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="container-fluid mt-4 pt-5 p-4">
      <NavbarContainer />
      <div className="pt-1 pb-2 text-center">
        <span className="fw-bold">
          <RiSofaFill size={25} /> Transform your living space with a sofa
          that’s uniquely yours. <br />
          <GiRolledCloth size={25} />
          Choose from a variety of designs, fabrics, and sizes to create the
          perfect piece that matches your style and comfort. <br />
          <MdDesignServices size={25} />
          Start customizing today and experience luxury made just for you
        </span>
      </div>

      <div className="row">
        {/* Image section */}
        <div className="col-12 col-md-6">
          <div className="card">
            {loading ? (
              <div className="text-center py-5">Loading image...</div>
            ) : (
              <img
              src={mainImage}
              alt={product.name}
              className="img-fluid mb-3 rounded-top"
              style={{
                height: "500px", // Constant height
                width: "100%",
                objectFit: "contain",
                transition: "opacity 0.3s ease-in-out",
                opacity: loading ? 0 : 1,
              }}
            />
            
            )}
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
                  onClick={() => handleImageChange(img)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Product details section */}
        <div className="col-12 col-md-6">
          <div className="card shadow-md p-3 mb-4 product-card">
            <h2 className="text-dark fw-bold">{product.name}</h2>
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
                <FaPhone size={30} className="me-2 text-primary" />
                <a
                  href="tel:+919493012243"
                  className="h5 text-decoration-none text-dark me-3"
                >
                  <strong> 9493012243</strong>
                </a>
                <a
                  href="https://wa.me/9493012243?text=Hi%20Welcome%20to%20our%20store!%20How%20can%20we%20assist%20you%20today?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center text-decoration-none text-dark"
                >
                  <FaWhatsapp size={30} className="me-2 text-success" />
                  <strong>WhatsApp</strong>
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
      <TrustBanner />
    </div>
  );
};

export default ProductDetail;
