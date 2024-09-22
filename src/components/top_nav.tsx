import { Container, Nav, Navbar } from "react-bootstrap"

const TopNavbar=()=>{
    return(
    <Navbar bg="light" sticky="top" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src="https://ngratesc.sirv.com/ria/logo.webp" className="img-fluid" width="35"/>
          </Navbar.Brand>
          <Nav className=" justify-content-end">
            <Nav.Link className="classic_font" href="#home">Home</Nav.Link>
            <Nav.Link className="classic_font" href="#about">About</Nav.Link>
            <Nav.Link className="classic_font" href="#about">Gallery</Nav.Link>
            <Nav.Link className="classic_font" href="#blog">Blog</Nav.Link>
            <Nav.Link className="classic_font" href="#contact">Contact</Nav.Link>
            <a href="tel:+263772703234"><button className="btn btn-outline-dark classic_font">Call Us</button></a>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default TopNavbar