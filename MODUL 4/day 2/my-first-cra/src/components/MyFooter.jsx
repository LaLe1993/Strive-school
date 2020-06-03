import React, {Component} from 'react';
import {Navbar , Nav} from 'react-bootstrap';

class Footer extends Component {
    render(){
        return(
            <Navbar bg="light" fixed="bottom">
                <Navbar.Brand href="#">My First React App</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-center">
                        <Navbar.Text>
                        Adress: <a href="#">Filipa Filipovica, Novi Sad, Serbia</a>
                        <br/>
                        Phone number: <a href="#">+381 69/ 34 ** ***</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                    
            </Navbar>
        )
    }
}
export default Footer;