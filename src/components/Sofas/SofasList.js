import React from 'react';
import { Container, Row } from 'react-bootstrap'; // Import Bootstrap's Grid System
import SofaItems from './SofaItems';

const SofasList = () => {
  const sofas = [
    { id: 1, name: 'Luxury Recliner', price: 499 ,img:'https://images-cdn.ubuy.co.in/65c8a723591eb52e4b0dc188-tekamon-recliner-chair-leather-single.jpg'},
    { id: 2, name: 'Classic Sofa', price: 299,img:'https://images-cdn.ubuy.co.in/65c8a723591eb52e4b0dc188-tekamon-recliner-chair-leather-single.jpg' },
    { id: 3, name: 'Modern Sectional', price: 799,img:'https://images-cdn.ubuy.co.in/65c8a723591eb52e4b0dc188-tekamon-recliner-chair-leather-single.jpg' },
    // Add more sofas here
  ];

  return (
    <Container>
      <Row>
        {sofas.map((sofa) => (
          <SofaItems key={sofa.id} {...sofa} />
        ))}
      </Row>
    </Container>
  );
};

export default SofasList;
