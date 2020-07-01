import React, { Component } from 'react'
import SingleBook from "./SingleBook"
import { Col, Container, Row } from 'react-bootstrap'

class HomePage extends Component {
   state = {
       books: []
   }

    render() {
        return (
            <Container>
                <Row className='mt-3'>
                {this.state.books.map(book => 
                <Col md={4} sm={6} lg={3} key={book.asin} className='mb-3'>
                    <SingleBook item={book} /> 
                </Col>
                )} 
                </Row>
            </Container>
        )
    }

    componentDidMount = async () => {
        const booksResp = await fetch("http://localhost:3001/books")
        const books = await booksResp.json()
        this.setState({
            books: books.data.slice(0, 50)
        })
    }
}

export default HomePage
