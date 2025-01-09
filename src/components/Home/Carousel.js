import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      touch={true}
      fade={true}
      controls={false}
      interval={3000} // Optional: Adjust auto-slide interval (in milliseconds)
      style={{ height: "100%" }} // Allow height to adjust automatically
    >
      <Carousel.Item style={{ height: "100%" }}>
        <img
          src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="sofa"
          className="d-block w-100"
          style={{
            height: "60vh", // Adjust the height for large screens
            objectFit: "cover",
          }}
        />
        <Carousel.Caption>
          <h3>Sectional Sofa</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "100%" }}>
        <img
          src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="sofa"
          className="d-block w-100"
          style={{
            height: "60vh", // Adjust the height for large screens
            objectFit: "cover",
          }}
        />
        <Carousel.Caption>
          <h3>Dining Table</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "100%" }}>
        <img
          src="https://images.pexels.com/photos/6492389/pexels-photo-6492389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="sofa"
          className="d-block w-100"
          style={{
            height: "60vh", // Adjust the height for large screens
            objectFit: "cover",
          }}
        />
        <Carousel.Caption>
          <h3>Bed & Mattresses</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
