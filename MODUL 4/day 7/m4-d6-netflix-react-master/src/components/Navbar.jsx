import React, { Component } from "react";
import { Navbar, Nav, InputGroup, FormControl } from "react-bootstrap";
import {Link} from 'react-router-dom';

class NetflixNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
    };
  }

  searchStringHandler = (e) => {
    if (e.keyCode === 13) {
      // WHEN ENTER KEY IS PRESSED
      this.props.showSearchResult(this.state.searchString);
    } else {
      this.setState({ searchString: e.currentTarget.value });
    }
  };

  render() {
    return (
      <Navbar variant="dark" expand="lg" style={{ backgroundColor: "#221f1f" }}>
        <Link to="/">
          <Navbar.Brand>
            <img
              src="assets/logo.png"
              alt="logo"
              style={{ width: "100px", height: "55px" }}
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="font-weight-bold" href="/">
              Home
            </Nav.Link>
            <Nav.Link active className="font-weight-bold" href="/">
              TV Shows
            </Nav.Link>
            <Link to="/movieDetails" className="nav-link">             
                Movies
            </Link>
            <Nav.Link className="font-weight-bold" href="/">
              Recently Added
            </Nav.Link>
            <Nav.Link className="font-weight-bold" href="/">
              My List
            </Nav.Link>
          </Nav>
          <span className="d-none d-md-flex align-items-center">
            <InputGroup className="icons">
              <FormControl
                placeholder="Search and press enter"
                aria-label="search"
                aria-describedby="basic-addon1"
                onKeyDown={this.searchStringHandler}
                onChange={this.searchStringHandler}
                value={this.state.searchString}
              />
            </InputGroup>
            <div id="kids">KIDS</div>
            <i className="fa fa-bell icons"></i>
            <i className="fa fa-user icons"></i>
          </span>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NetflixNavbar;
