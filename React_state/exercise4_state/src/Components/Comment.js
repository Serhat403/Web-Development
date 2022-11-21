import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import React from 'react';
import { Card, Container, Nav, Navbar, NavDropdown, Button, Image, Carousel, Row, Col, form, props, Form } from 'react-bootstrap';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.PostComment=this.PostComment.bind(this);
        this.state = {
            list: []
        };
    }
    PostComment(event){
        console.log(event);
        let element = {name: event.target.username.value, comment: event.target.commenttext.value};
        var newList = this.state.list.concat(element) 
        this.setState({ list: newList })
        event.preventDefault();  
    }
    render() {
        return(
            <Container mb-5 style={{ marginBottom: "70px" }}>
                
                    {this.state.list.map((element)=> {console.log(element); return (
                    <Card className="mb-3" style={{ width: '18rem' }}>
                      <Card.Body>
                          <Card.Title>{element.name}</Card.Title>
                          <Card.Text>
                          {element.comment}
                          </Card.Text>
                      </Card.Body>
                    </Card>)})}

                  <Form onSubmit={this.PostComment}>
                      <h1>Leave a Comment</h1>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Your Name</Form.Label>
                          <Form.Control name='username' type='text'/>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Your Message</Form.Label>
                          <Form.Control name='commenttext' as="textarea" rows={3} />
                      </Form.Group>
                      <Button  variant="primary" type="submit">
                          Post
                      </Button>
                  </Form>
            </Container>
        );
    }
}
export default Comment;