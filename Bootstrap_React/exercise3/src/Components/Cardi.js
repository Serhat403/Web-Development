import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Container, Nav, Navbar, NavDropdown, Button, Image, Carousel, Row, Col } from 'react-bootstrap';

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

  export default Cardi;