import React from 'react';
import { useNavigate } from 'react-router-dom'; // for navigation
import Button from 'react-bootstrap/Button'; // Import Bootstrap Button
import Card from 'react-bootstrap/Card'; // Import Bootstrap Card

const SofaItems = ({ id, name, price,img }) => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate(`/sofa-detail/${id}`);
  };

  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
      <Card className="shadow-sm">
        <Card.Body>
        <Card.Img
                variant="top"
                src={img}
                style={{ height: '200px', objectFit: 'cover' }} // Set constant height and object-fit
              />
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <strong>Price:</strong> ${price}
          </Card.Text>
          <Button variant="success" onClick={handleBuyNow}>Buy Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SofaItems;
