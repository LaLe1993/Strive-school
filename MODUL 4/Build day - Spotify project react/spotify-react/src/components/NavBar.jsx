import React from 'react';
import { Navbar , Nav, Image } from 'react-bootstrap';

class NavBar extends React.Component {
    render(){

        function windowSize() {
            let windowSize = window.innerWidth;
            let numberOfChildren = document.querySelectorAll(".first-div-in-player > div");
            if(windowSize < 1074){
                numberOfChildren[0].setAttribute("style","display:none;")
                numberOfChildren[1].setAttribute("style","margin-left:12px;")
            }else{
                numberOfChildren[0].setAttribute("style","display:block;")
                numberOfChildren[1].setAttribute("style","margin-left:0px;")
            }
            if(windowSize < 768){
                document.querySelector(".navbar").classList.remove("vertical-navbar")
                document.querySelector(".navbar").classList.remove("flex-column")
                document.querySelector(".navbar").classList.remove("fixed-top")
            }else{
                document.querySelector(".navbar").classList.add("vertical-navbar")
                document.querySelector(".navbar").classList.add("flex-column")
                document.querySelector(".navbar").classList.add("fixed-top")
            }
        }
    
    
        window.onload = windowSize
    
        //Script
        window.addEventListener("resize",windowSize)

        return(
            <Navbar expand='md' className="navbar navbar-dark fixed-top vertical-navbar flex-column">
                <Navbar.Brand href="#home" className='my-3'>
                    <Image src="/assets/logo.png" alt="Spotify logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="navbarNavAltMarkup" className='w-100 h-100 align-items-start'>
                    <div className="navbar-nav d-flex flex-column h-100 w-100 justify-content-between">
                        <div>
                            <Nav.Link className="nav-item nav-link align-items-center" href="#"><i className="fas fa-home"></i>Home <span className="sr-only">(current)</span></Nav.Link>
                            <Nav.Link className="nav-item nav-link align-items-center" href="#"><i className="fas fa-search"></i>Features</Nav.Link>
                            <Nav.Link className="nav-item nav-link align-items-center" href="#"><i className="fas fa-book-open"></i>Pricing</Nav.Link>
                        </div>
                        <div>
                            <Nav.Link className="nav-item nav-link align-items-center" href="https://play.google.com/store/apps/details?id=com.spotify.music"><i className="far fa-arrow-alt-circle-down"></i>Install App</Nav.Link>
                            <hr className="d-flex flex-wrap" />
                            <Nav.Link className="nav-item nav-link align-items-center" href="#"><i className="fas fa-user"></i>User Name</Nav.Link>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;