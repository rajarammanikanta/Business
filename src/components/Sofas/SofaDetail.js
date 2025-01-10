import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap'; // Import Bootstrap Grid and Cardimp

import NavbarContainer from '../Home/NavbarContainer';

const SofaDetail = () => {
  const { id } = useParams(); // Get the sofa id from the URL

  // Sofa details object with data for each sofa
  const sofaDetails = {
    1: { name: 'Luxury Recliner', description: 'A comfortable recliner for your living room.', price: 499,img: 'https://images-cdn.ubuy.co.in/65c8a723591eb52e4b0dc188-tekamon-recliner-chair-leather-single.jpg' },
    2: { name: 'Classic Sofa', description: 'A classic sofa with vintage appeal.', price: 299,img: 'https://images-cdn.ubuy.co.in/65c8a723591eb52e4b0dc188-tekamon-recliner-chair-leather-single.jpg' },
    3: { name: 'Modern Sectional', description: 'A modern sectional sofa with ample seating.', price: 799 ,img: 'https://images-cdn.ubuy.co.in/65c8a723591eb52e4b0dc188-tekamon-recliner-chair-leather-single.jpg'},
    // Add more details here
  };

  const sofa = sofaDetails[id];

  return (
    <Container className='pt-5'>
        <NavbarContainer/> 
      <Row>
        <Col md={12}>
          <Card className="shadow-sm">
            <Card.Body>
            <Card.Img
                variant="top"
                src={sofa.img}
                style={{ height: '200px', objectFit: 'cover' }} // Set constant height and object-fit
              />
              <Card.Title>{sofa.name}</Card.Title>
              <Card.Text>{sofa.description}</Card.Text>
              <Card.Text><strong>Price:</strong> ${sofa.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SofaDetail;
