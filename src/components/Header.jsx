import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary  w-100 " style={{zIndex:"10pz"}}>
        <Container>
          <Navbar.Brand>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwV7KG8E4WZI-IFa0WNmMidZxPti0fGx-wbg&s"
              alt=""
              className="img-fluid w-25"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#home">All Products</Nav.Link>
              <Nav.Link href="#link">PEAK Brand</Nav.Link>
              <Nav.Link href="#link">Basketball</Nav.Link>
              <Nav.Link href="#link">Running</Nav.Link>
              <Nav.Link href="#link">Casual</Nav.Link>
            </Nav>
            {/* Align icons to the right */}
            <div className="d-flex align-items-center ms-auto">
              <i className="fa-solid fa-magnifying-glass mx-2"></i>
              <i className="fa-solid fa-user mx-2"></i>
              <i className="fa-solid fa-bag-shopping mx-2"></i>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
