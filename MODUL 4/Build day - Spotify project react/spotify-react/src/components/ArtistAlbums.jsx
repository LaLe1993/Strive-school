import React from 'react';
import {} from 'react-bootstrap';

const ArtistAlbums = (props) => {
    console.log("Artist ", props.albums)
    return(
            <>
                <img src={props.albums} alt="Bohemian rhapsody" />
                <div className="my-2">
                </div>
            </>

    )
}

export default ArtistAlbums;