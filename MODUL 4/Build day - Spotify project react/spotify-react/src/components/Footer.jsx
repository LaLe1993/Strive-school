import React from 'react';
import { Row , Col } from 'react-bootstrap';

const Footer = () => {
    return(
            <Row className="fixed-bottom player d-flex align-items-center">
                <Col className="col-6 col-md-3 d-flex align-items-center">
                    <div className="d-flex first-div-in-player">
                        <div className="song-image mx-3">
                            <img src="" alt="" />
                        </div>     
                        <div className="song-details d-flex flex-column justify-content-center">
                            <p id="current-song-name">Song Name</p>
                            <p id="current-song-artist">Artist</p>
                        </div>
                    </div>
                    <div className="">
                        <i className="far fa-heart ml-3"></i>
                        <i className="far fa-window-maximize ml-3"></i>
                    </div>
                </Col>
                <Col className="col-12 col-md-6 my-2">
                    <div className="w-100 d-flex justify-content-center player-controls align-items-center">
                        <i className="fas fa-random"></i>
                        <i className="fas fa-step-backward"></i>
                        <i className="far fa-play-circle fa-2x"></i>
                        <i className="fas fa-step-forward"></i>
                        <i className="fas fa-sync-alt"></i>
                    </div>
                    <a href=""></a>
                    <div className="d-flex player-song-duration justify-content-center align-items-center mt-3">
                        <span>0:00</span>
                        <div className="progress song-duration ml-2 mr-2">
                            <div className="progress-bar w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <span>7:00</span>
                    </div>
                </Col>
                <Col className="col col-6 col-md-3">
                    <div className="pr-3 w-100 d-flex justify-content-end">
                        <div>
                            <i className="fas fa-bars"></i>
                            <i className="fas fa-headphones ml-2"></i>
                            <i className="fas fa-volume-up ml-2"></i>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="progress progress-bar ml-2">
                                <div className="progress-bar w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
    )
}

export default Footer;