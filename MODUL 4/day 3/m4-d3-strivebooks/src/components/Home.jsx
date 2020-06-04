import React from 'react'
import {Jumbotron , Button, Container, Row, Col, Card} from 'react-bootstrap'
import books from '../data/fantasy.json';

class Home extends React.Component {
    render(){
        return (
        <div>
            <Jumbotron>
            <h1>{this.props.jumboTitle}</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
            <Container>
                <Row>
                    {books.map((book)=>{
                        return(
                            <Col xs={6}>
                                <Card className='mb-3' key={book.asin}>
                                    <Card.Img variant="top" src={book.img} />
                                    <Card.Body>
                                        <Card.Title>{book.title}</Card.Title>
                                        <Card.Text>
                                        Price: {book.price} $
                                        </Card.Text>
                                        <Button variant="primary">Buy now</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
        )
    }
}

export default Home