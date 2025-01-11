import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-container shadow-lg rounded overflow-hidden">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        touch={true}
        fade={true}
        controls={false}
        interval={3000} // Adjust auto-slide interval (in milliseconds)
        className="royal-carousel"
      >
        <Carousel.Item>
          <img
            src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Sectional Sofa"
            className="d-block w-100"
            style={{
              height: "60vh",
              objectFit: "cover",
              filter: "brightness(85%)", // Adds a subtle dim effect
            }}
          />
          <Carousel.Caption className="text-light bg-dark bg-opacity-50 rounded p-3">
            <h3 className="fw-bold">Sectional Sofa</h3>
            <p>Experience comfort and elegance with our premium sofas.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Dining Table"
            className="d-block w-100"
            style={{
              height: "60vh",
              objectFit: "cover",
              filter: "brightness(85%)", // Adds a subtle dim effect
            }}
          />
          <Carousel.Caption className="text-light bg-dark bg-opacity-50 rounded p-3">
            <h3 className="fw-bold">Dining Table</h3>
            <p>Gather around our stylish dining tables for memorable meals.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="https://images.pexels.com/photos/6492389/pexels-photo-6492389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Bed & Mattresses"
            className="d-block w-100"
            style={{
              height: "60vh",
              objectFit: "cover",
              filter: "brightness(85%)", // Adds a subtle dim effect
            }}
          />
          <Carousel.Caption className="text-light bg-dark bg-opacity-50 rounded p-3">
            <h3 className="fw-bold">Bed & Mattresses</h3>
            <p>Relax in luxury with our premium beds and mattresses.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
