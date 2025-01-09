import React from 'react';
import Nav from 'react-bootstrap/Nav';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './index.css'; // Import custom CSS

function Example() {
  const navItems = [
    {
      tooltip: 'Deal Zone',
      nav: "Deal",
      label: 'Deal Zone',
      description: ['Sofas & Recliners', 'Living', 'Bedroom & Mattresses', 'Dining', 'Storage Furniture', 'Study', 'Lighting & Decor', 'Interiors', 'Stores'],
    },
    {
      tooltip: 'Sofas & Recliners',
      nav: "Sofas",
      label: 'Sofas & Recliners',
      description: ['Recliners', 'Sofas', 'Sectionals'],
    },
    {
      tooltip: 'Living',
      nav: "Living",
      label: 'Living Room',
      description: ['Sofa', 'Recliner', 'Lounger', 'Tea Tables'],
    },
    {
      tooltip: 'Bedroom & Mattresses',
      nav: "Bedroom",
      label: 'Bedroom & Mattresses',
      description: ['Beds', 'Wardrobes', 'Nightstands', 'Dressers', 'Mattresses'],
    },
    {
      tooltip: 'Dining',
      nav: "Dining",
      label: 'Dining Room',
      description: ['Dining Table', 'Chairs', 'Sideboards', 'Cabinets'],
    },
    {
      tooltip: 'Storage Furniture',
      nav: "Storage",
      label: 'Storage Furniture',
      description: ['Storage Cabinets', 'Shelving Units', 'Closets'],
    },
    {
      tooltip: 'Study',
      nav: "Study",
      label: 'Study Room',
      description: ['Desks', 'Chairs', 'Bookshelves', 'Lamps'],
    },
    {
      tooltip: 'Lighting & Decor',
      nav: "Lighting",
      label: 'Lighting & Decor',
      description: ['Lamps', 'Lights', 'Decorative Pieces'],
    },
    {
      tooltip: 'Interiors',
      nav: "Interiors",
      label: 'Interiors',
      description: ['Curtains', 'Carpets', 'Wall Art', 'Cushions'],
    },
  ];

  return (
    <div className='pt-4'>
      <Nav
        variant="tabs"
        defaultActiveKey="/home"
        className="justify-content-center mb-4 d-none d-sm-flex" // Ensure flex layout on larger screens
      >
        {navItems.map((item, index) => (
          <Nav.Item key={index}>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 600 }}
              trigger={['hover', 'focus']}
              overlay={
                <Tooltip id={`tooltip-${index}`} className="custom-tooltip">
                  <strong>{item.tooltip}</strong>
                  <ul className="list-unstyled mt-2">
                    {item.description.map((desc, idx) => (
                      <li key={idx}>
                        <a
                          href={`/${item.nav}`}
                          target="_self"
                          rel="noopener noreferrer"
                          className="tooltip-link"
                        >
                          {desc}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Tooltip>
              }
            >
              <Nav.Link eventKey={`/nav-item-${index}`} className="text-center">
                {item.label}
              </Nav.Link>
            </OverlayTrigger>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
}

export default Example;
