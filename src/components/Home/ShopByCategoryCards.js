import React from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import './index.css'

const shopByCategory = [
  {
    category: "Sofas",
    image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Comfortable and stylish sofas for your living space."
  },
  {
    category: "Beds",
    image: "https://images.pexels.com/photos/1571450/pexels-photo-1571450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Explore a variety of beds for a peaceful night’s sleep."
  },
  {
    category: "Dining",
    image: "https://images.pexels.com/photos/1457841/pexels-photo-1457841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Elegant dining sets for your dining room."
  },
  {
    category: "Recliners",
    image: "https://damroimages.blob.core.windows.net/damroimages/6022-1.jpg",
    description: "Relax in style with our collection of recliners."
  },
  {
    category: "Bedside Table",
    image: "https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Practical and stylish bedside tables for your bedroom."
  },
  {
    category: "Study Tables",
    image: "https://images.pexels.com/photos/6626395/pexels-photo-6626395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Functional study tables to enhance your workspace."
  },
  {
    category: "Coffee Tables",
    image: "https://images-cdn.ubuy.co.in/667d2c3936d2cc0685700b74-churanty-gold-round-nesting-coffee-table.jpg",
    description: "Add charm to your living room with our coffee tables."
  }
];

function ShopByCategoryCards() {
  const navigate = useNavigate();

  const clickToGet = (category) => {
    if (category === "Sofas") {
      navigate("/sofas");
    }
    if (category === "Beds") {
      navigate("/beds");
    }
    if (category === "Dining") {
      navigate("/dining");
    }
    // Add more conditions for other categories as needed
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        {shopByCategory.map((item, index) => (
          <div
            key={index}
            className="col-12 col-md-4 col-lg-3 mb-4"
            onClick={() => clickToGet(item.category)}
            style={{ cursor: "pointer" }}
          >
            <Card style={{ width: '100%', overflow: 'hidden' }} className="shadow-sm card-hover">
              <Card.Img
                variant="top"
                src={item.image}
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <Card.Body className="text-center">
                <Card.Title>{item.category}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopByCategoryCards;
