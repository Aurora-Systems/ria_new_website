import { Container, Nav, Navbar } from "react-bootstrap";

const TopNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">
          <img src="https://ngratesc.sirv.com/ria/logo.webp" className="img-fluid" width="35" alt="Logo" />
        </Navbar.Brand>
        {/* Add the Navbar.Toggle and Navbar.Collapse */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="classic_font" href="#home">Home</Nav.Link>
            <Nav.Link className="classic_font" href="#about">About</Nav.Link>
            <Nav.Link className="classic_font" href="#gallery">Gallery</Nav.Link>
            <Nav.Link className="classic_font" href="#blog">Blog</Nav.Link>
            <Nav.Link className="classic_font" href="#contact">Contact</Nav.Link>
            <a href="tel:+263772703234">
              <button className="btn btn-outline-dark classic_font">Call Us</button>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
