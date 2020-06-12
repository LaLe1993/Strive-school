import React from 'react';
import { Container , Row , Col , Jumbotron} from 'react-bootstrap';
import Gallery from './Gallery';

class Artist extends React.Component {

    state = {
        albums: [],
        isLoading: true,
        errMess: ""
      };

    componentWillMount = async () => {
        try {
            const res = await fetch("https://deezerdevs-deezer.p.rapidapi.com/artist/412/albums?limit=12", {

            "method": "GET",
            
            "headers": {
            
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            
                "x-rapidapi-key": "575de39080mshf1f9cab8127c63fp1bcad8jsn113d9f3f814b"
                }
            })
            const albums = await res.json()
            this.setState({
                albums,
                isLoading: false,
              })
          } catch (err) {
            this.setState({
              isLoading: false,
              errMess: err.message,
            });
          }
    }

    render(){
        console.log(this.state.albums.data)
        return(
            <Container fluid>
                <Row>
                    <Col className='col-xs-12 col-sm-12 col-md-9 col-lg-10 px-0 content-column offset-md-3 offset-lg-2'>
                        <Jumbotron className="jumbotron-fluid py-0 mb-0 d-flex align-items-end">
                            <Row className="d-flow justify-content-center w-100">
                                <Col className="col-sm-10 col-md-8 col-lg-5 col-xl-4" style={{zIndex: 10}}>
                                    <p>33,000,575 MONTHLY LISTENERS</p>
                                    <h1 className="artistName"></h1>
                                    <div className="d-flex justify-content-around align-items-center first-div-in-jumbotrone mb-5">
                                        <button type="button" className="btn btn-success">PLAY</button>
                                        <button type="button" className="btn btn-outline-secondary">FOLLOW</button>
                                        <i className="fas fa-ellipsis-h"></i>
                                    </div>
                                    <div className="d-flex justify-content-around align-items-start second-div-in-jumbotrone mb-3">
                                        <div><a>OVERVIEW</a></div><div><a>RELATED ARTISTS</a></div><div><a>ABOUT</a></div>
                                    </div>
                                </Col>
                            </Row>
                        </Jumbotron>
                        <Col className='col-12 col-lg-10 offset-lg-1 content-of-albums'>
                            <h2 className="my-4" style={{textAlign: "left"}}>Albums</h2>
                            <div className = "row row-cols-3 row-cols-md-4 row-cols-lg-6 pr-0 content-albums">
                                <Gallery albums={this.state.albums.data} />
                            </div>
                        </Col>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Artist;