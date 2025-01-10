import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarContainer = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        {/* Logo aligned to the left */}
        <Navbar.Brand href="/" className="fw-bold">
          NK Sofa World
        </Navbar.Brand>

        {/* Marquee Text for Discount Offer, visible only on larger screens */}
        <Nav className="mx-auto d-none d-lg-block">
          <div className="text-center text-light fw-bold">
            <marquee>
              Shop Now! Get 20% Discount – Sankranti Offer. Hurry, Offer Ends
              Soon!
            </marquee>
          </div>
        </Nav>

        {/* Right-aligned Navigation Links (Cart and Profile) visible at all screen sizes */}
        <Nav className="ms-auto d-flex align-items-center">
          <Nav.Link href="#cart" className="text-light mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
            </svg>
          </Nav.Link>
          <Nav.Link href="#profile" className="text-light mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarContainer;
