import logo from './logo.svg';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Container, Nav, Navbar, NavDropdown, Button, Image, Carousel, Row, Col } from 'react-bootstrap';

function App() {
  return (

    <Container>
    <>
    <div>
    <TopNav></TopNav>
    <Cardi></Cardi>
    <Utext></Utext>
    <Carou></Carou>
    <Final1></Final1>
    <Final2></Final2>
    </div>
    </>
    </Container>

  ); 
}
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

function Cardi(){
  return (

  <Container mt-5 pt-5>
  <Card id='ich' style={{ width: 'max-width: 36rem' }}>
     <h1>Welcome to Serhat's Web Development Page</h1>
    <Card.Img variant="top" className='img-fluid rounded-start' src="https://image.geo.de/30140630/t/6y/v4/w1440/r0/-/franzoesisch-polynesien-l-eric-martin-jpg--80030-.jpg"/>
   
          <Card.Body>
              <Card.Title>I am Serhat </Card.Title>
              <Card.Text>
              Student of the Web Development Course
              </Card.Text>
              <Card.Text>
              This is my Page with some images and links to my articles
              </Card.Text>
          </Card.Body>
    </Card>
    </Container>


  )
}

function Utext(){
  return (
    <h1>Some nice Pictures</h1>
  )
}


function Carou(){

return (
<Carousel id='carou'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://bilder.t-online.de/b/84/93/82/46/id_84938246/920/tid_da/eichhoernchen-geert-weggen-zeigt-die-welt-der-kleinen-nager-.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.geo.de/31725470/t/fe/v3/w960/r1.5/-/sony-world-photography-awards-professional-01.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.filmfutter.com/wp-content/uploads/2017/08/EsBilder-696x383.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>   
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )  
}

function Final1(){

  return(
    <><><><><Container>
      <h1>My Articles</h1>
      <Row>
        <Col id="pos" className='col-md-4'>Why I like Bootstrap</Col>
        <Col className='col-md-4 offset-md-4'><a className='btn btn-primary' href="https://www.uplers.com/blog/what-are-the-pros-cons-of-foundation-and-bootstrap/" role="button">Read</a></Col>
      </Row>
    </Container><Container>
        <p className='card-text'>Bootstrap is a really easy to use</p>
      </Container></><Container className='mt-2 pt-2'>
        <Row>
          <Col id="neg" className='col-md-4'>Why I hate sometimes Bootstrap</Col>
          <Col className='col-md-4 offset-md-4'><a className='btn btn-primary' href="https://www.uplers.com/blog/what-are-the-pros-cons-of-foundation-and-bootstrap/" role="button">Read</a></Col>
        </Row>
      </Container></><Container>
        <p className='card-text'>Sometimes Bootstrap doesn't behave as I want it...</p>
      </Container></><Container className='mt-5 pt-5'>

      </Container></>

  )
}

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


export default App;
