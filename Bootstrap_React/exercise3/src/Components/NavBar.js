import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Container, Nav, Navbar, NavDropdown, Button, Image, Carousel, Row, Col } from 'react-bootstrap';

function TopNav(){  
    return (
      <>
      <Container className='mt-5 pt-5' >
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid className="justify-content-end">
      <Navbar.Brand href="#home">Web-Dev Course</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
      <Nav className="justify-content-end">
        <Nav.Link href="#ich">Who is Serhat</Nav.Link>
        <Nav.Link href="#carou">Some Pictures</Nav.Link>
        <NavDropdown title="Articles" id="collasible-nav-dropdown" align="end">
          <NavDropdown.Item href="#pos">Why I like Bootstrap</NavDropdown.Item>
          <NavDropdown.Item href="#neg">Why I hate Bootstrap</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
  </Container>
  </>
  )
  }

  export default TopNav;