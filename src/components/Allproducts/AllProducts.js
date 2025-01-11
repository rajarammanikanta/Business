import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const AllProducts = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Luxury Recliner",
      description: "Perfect for relaxing in style and comfort",
      price: 499,
      image:
        "https://m.media-amazon.com/images/I/6167riKZSNL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 2,
      name: "Classic Sofa",
      description: "Classic sofa perfect for any luxury home",
      price: 299,
      image:
        "https://www.huntersfurniture.co.uk/cdn/shop/products/3106b.jpg?v=1645175943",
    },
    {
      id: 3,
      name: "Modern Dining Table",
      description: "A modern dining table for your sophisticated dining room",
      price: 599,
      image:
        "https://images-cdn.ubuy.co.in/65c65676cc6b4b5be11492e5-montary-7-piece-dining-room-set-modern.jpg",
    },
    {
      id: 4,
      name: "Queen Bed",
      description: "A queen bed designed for ultimate comfort and style",
      price: 799,
      image:
        "https://www.godrejinterio.com/imagestore/B2C/56101515SD00670/56101515SD00670_A2_803x602.jpg",
    },
    {
      id: 5,
      name: "Coffee Table",
      description: "Stylish coffee table to complement your living room",
      price: 199,
      image:
        "https://media-uk.landmarkshops.in/cdn-cgi/image/h=750,w=750,q=85,fit=cover/homecentre/1000010054605-1000010054604_01-2100.jpg",
    },
    {
      id: 6,
      name: "Bedside Table",
      description: "A bedside table that adds elegance and function",
      price: 99,
      image:
        "https://www.idfdesign.com/images/bedside-table/moderna-comodino-nightstands-3.jpg",
    },
    {
      id: 7,
      name: "Study Desk",
      description: "A sleek study desk for your productive workspace",
      price: 249,
      image: "https://m.media-amazon.com/images/I/71EYrMjWDlL.jpg",
    },
    // Additional products
    {
      id: 8,
      name: "Sectional Sofa",
      description: "Spacious sectional sofa for the whole family to enjoy",
      price: 1099,
      image:
        "https://bondars.com/wp-content/uploads/2019/05/modular-couch.jpg",
    },
    {
      id: 9,
      name: "Single Sofa",
      description: "Comfortable single sofa perfect for any room",
      price: 199,
      image:
        "https://i.pinimg.com/236x/71/08/71/710871638bd682d680fab32b0294bbe0.jpg",
    },
    {
      id: 10,
      name: "2-Seater Sofa",
      description: "Perfect 2-seater sofa for cozy spaces",
      price: 499,
      image:
        "https://images-cdn.ubuy.co.in/668ec06b0b1c197cc812a3ff-50-small-loveseat-sofa-mid-century.jpg",
    },
    {
      id: 11,
      name: "3-Seater Sofa",
      description: "Stylish 3-seater sofa that adds comfort to your home",
      price: 699,
      image:
        "https://mysleepyhead.com/media/catalog/product/s/l/sleepyhead_product_ls10202.jpg",
    },
    {
      id: 12,
      name: "Leather Sofa Set",
      description: "Luxurious leather sofa set for your living room",
      price: 899,
      image:
        "https://media.homecentre.com/i/homecentre/163643357-163643357-HC31082021_02-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-m-sqr-pdp-2x$",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [loading, setLoading] = useState(false);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleSearchKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission
      setLoading(true);
      // Simulate a delay for loading products
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  const handleShopNow = (id) => {
    navigate(`/product-detail/${id}`);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery) ||
      product.description.toLowerCase().includes(searchQuery)
  );

  // Show more products when "View More" is clicked
  const handleViewMore = () => {
    setVisibleProducts((prev) => prev + 6);
  };

  useEffect(() => {
    if (searchQuery === "") {
      setVisibleProducts(6);
    }
  }, [searchQuery]);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Our Products</h2>

      {/* Search Bar */}
      <Form className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search for products (e.g., Sofa, Recliner)"
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyDown={handleSearchKeyPress}
        />
      </Form>

      {/* Loader */}
      {loading && (
        <div className="text-center mb-4">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      <Row>
        {filteredProducts.slice(0, visibleProducts).map((product) => (
          <Col sm={12} md={6} lg={4} className="mb-4" key={product.id}>
            <Card className="shadow-sm h-100 product-card">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                style={{
                  objectFit: "cover", // Ensure the image fills the space
                  height: "200px", // Set a fixed height for the image
                }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>
                  <strong>Price:</strong> {formatPrice(product.price)}
                </Card.Text>
                <Button
                  variant="primary"
                  className="mt-auto"
                  onClick={() => handleShopNow(product.id)}
                >
                  Shop Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* View More Button */}
      {visibleProducts < filteredProducts.length && (
        <div className="text-center my-4">
          <Button
            variant="success"
            onClick={handleViewMore}
            className="view-more-btn"
          >
            View More
          </Button>
        </div>
      )}

      {/* No products found message */}
      {filteredProducts.length === 0 && !loading && (
        <p className="text-center">No products found matching your search.</p>
      )}
    </Container>
  );
};

export default AllProducts;
