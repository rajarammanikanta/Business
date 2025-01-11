import React from 'react';
import { Button } from 'react-bootstrap';

const Banner = () => {
  // Function to handle the scroll to top
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // smooth scroll
    });
  };

  return (
    <div className="container-fluid bg-dark text-light py-5">
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="p-4 rounded-3 bg-opacity-50">
            <h1 className="display-4 fw-bold text-warning">Direct Supply from Factory</h1>
            <p className="lead mb-4">Explore over 10,000+ Furniture Options. Customize and order the perfect piece for your home!</p>
            <Button
              variant="warning"
              size="lg"
              className="px-4 py-3 fw-bold"
              onClick={handleScrollToTop} // Trigger scroll to top
            >
              Shop Now
            </Button>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default Banner;
