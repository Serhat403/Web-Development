import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Container, Nav, Navbar, NavDropdown, Button, Image, Carousel, Row, Col } from 'react-bootstrap';

function Final2(){
    return(
      
      <Navbar fixed="bottom" expand="lg" bg="dark" variant="dark">
      <Container fluid className="justify-content-end align-center">
      <Navbar.Brand className='align-center' href="#home">&copy;2022</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
      </Container>
    </Navbar>
        
    )
  }
  export default Final2;