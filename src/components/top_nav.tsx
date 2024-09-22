import { Container, Nav, Navbar } from "react-bootstrap"

const TopNavbar=()=>{
    return(
        <div>
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src="https://ngratesc.sirv.com/ria/logo.webp" className="img-fluid" width="35"/>
          </Navbar.Brand>
          <Nav className=" justify-content-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#about">Gallery</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <a href="tel:+263772703234"><button className="btn btn-outline-dark">Call Us</button></a>
          </Nav>
        </Container>
      </Navbar>
        </div>
    )
}

export default TopNavbar