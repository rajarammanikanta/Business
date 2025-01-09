import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const shopBySofa = [
  {
    category: "3 Seaters",
    image: "https://m.media-amazon.com/images/I/81p6WEpVumL.jpg",
    description: "Comfortable 3-seater sofas for your living space."
  },
  {
    category: "2 Seaters",
    image: "https://adornindia.co.in/cdn/shop/products/1001_ca9eb1e9-ae8a-458a-afcc-cfe777008d13.jpg?v=1665734267",
    description: "Explore stylish 2-seater sofas for cozy spaces."
  },
  {
    category: "1 Seaters",
    image: "https://myseventhheaven.in/cdn/shop/collections/1_seater_light_blue_moodshot_copy_540x.jpg?v=1666079855",
    description: "Perfect 1-seater sofas for single seating comfort."
  },
  {
    category: "Sofa Cum Beds",
    image: "https://airawathandicraft.com/wp-content/uploads/2021/08/sofa3.jpg",
    description: "Sofa Cum Beds for both sitting and sleeping comfort."
  },
  {
    category: "Sectional Sofas",
    image: "https://lexmod.com/cdn/shop/files/EEI-6369-BLK_5_1400x.jpg?v=1733876861",
    description: "Spacious sectional sofas for your large living space."
  },
  {
    category: "Leather Sofa",
    image: "https://bantia.in/cdn/shop/files/4_d816a685-c1fa-44dc-8b94-f68b1be929a6_1000x.png?v=1704353770",
    description: "Luxurious leather sofas for a premium experience."
  }
];

function ShopBySofa() {
  const navigate = useNavigate(); // Correctly use useNavigate hook

  const clickToGet = (category) => {
    if (category === "3 Seaters") {
      navigate("/sofas/3-seaters");
    }
    if (category === "2 Seaters") {
      navigate("/sofas/2-seaters");
    }
    if (category === "1 Seaters") {
      navigate("/sofas/1-seaters");
    }
    if (category === "Sofa Cum Beds") {
      navigate("/sofas/sofa-cum-beds");
    }
    if (category === "Sectional Sofas") {
      navigate("/sofas/sectional-sofas");
    }
    if (category === "Leather Sofa") {
      navigate("/sofas/leather-sofa");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        {shopBySofa.map((item, index) => (
          <div key={index} className="col-12 col-md-4 col-lg-3 mb-4">
            <Card style={{ width: '100%' }}>
              <Card.Img
                variant="top"
                src={item.image}
                style={{ height: '200px', objectFit: 'cover' }} // Set constant height and object-fit
              />
              <Card.Body>
                <Card.Title>{item.category}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                {/* Center the Shop Now button */}
                <div className="d-flex justify-content-center">
                  <Button variant="primary" onClick={() => clickToGet(item.category)}>Shop Now</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopBySofa;
