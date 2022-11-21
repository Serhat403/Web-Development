import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Container, Nav, Navbar, NavDropdown, Button, Image, Carousel, Row, Col } from 'react-bootstrap';

function Carou(){

    return (

<Container>

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

</Container>

      )  
    }

    export default Carou;