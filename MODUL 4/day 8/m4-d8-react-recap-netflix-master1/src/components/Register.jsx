import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';



class Register extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          Surname: "",
          Email: "",
          Password: "",
          Year: "",
          Address: "",
          City: "",
          State: "",
          Zip: "",
        };
      }
    
    
    
    render(){
    return(
        <Container>
            <Row className='d-flex justify-content-center'>
                <Form className='w-100' name='myForm'>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" required />
                        </Form.Group>
        
                        <Form.Group as={Col} controlId="formGridSurname">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control type="text" placeholder="Enter surname" required />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                        </Form.Group>
        
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" className='password' placeholder="Password" name='password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Year of Birth</Form.Label>
                            <Form.Control type="number" placeholder="Enter year greater than 1910 and less than 2020" min="1910" max='2020' required />
                        </Form.Group>
        
                        <Form.Group as={Col} controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" required />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control placeholder="Enter City" required />
                        </Form.Group>
        
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>State</Form.Label>
                        <Form.Control placeholder="Enter State" required />
                        </Form.Group>
        
                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control type='number' placeholder="Enter Zip Code" minLength='5' maxLength='5' required />
                        </Form.Group>
                    </Form.Row>
        
                    <Button variant="primary" type="submit" className='mt-3 w-100'>
                        Submit
                    </Button>
                </Form>
            </Row>
        </Container>
    )
}
}

export default Register;