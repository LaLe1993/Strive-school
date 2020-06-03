import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';

class Welcome extends Component {
    render(){
        return(
            <Jumbotron>
                <h1>My Book Store!</h1>
                <p>
                    This is the best book store in Novi Sad, Serbia! Come and visit us!
                </p>
            </Jumbotron>
        )
    }
}
export default Welcome;