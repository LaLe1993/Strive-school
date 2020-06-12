import React from "react";
import { Col } from "react-bootstrap";
import ArtistAlbums from "./ArtistAlbums";

const Gallery = (props) => {
    console.log(props.albums)
        return (
            <Col className="column-for-covers mb-4">
              <ArtistAlbums albums={props.albums}/>
            </Col>  
        );
}

export default Gallery;