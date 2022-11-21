import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Container, Nav, Navbar, NavDropdown, Button, Image, Carousel, Row, Col } from 'react-bootstrap';

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

export default Final1;