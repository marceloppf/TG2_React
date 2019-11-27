//rcc - comando auxiliar para código base

import React, { Component, Navbar } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <header className="header_area" >
                    <div className="top_menu">
                        <div className="container">
                            <div className="top_inner">
                                <div className="float-left">
                                    <a href="#">Visit Us</a>
                                    <a href="#">Online Support</a>
                                </div>
                                <div className="float-right">
                                    <ul className="list header_socila">
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                        <li><a href="#"><i className="fa fa-behance"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main_menu" id="mainNav">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                    <ul className="nav navbar-nav menu_nav ml-auto">
                                        <li className="nav-item active">
                                            <Link to="/" className="nav-link">HOME</Link>
                                        </li>
                                        <li className="nav-item active">
                                            <Link to="/" className="nav-link">HORARIOS</Link>
                                        </li>  
                                        <li className="nav-item active">
                                            <Link to="/Contact" className="nav-link">CONTACT</Link>
                                        </li>
                                        <li className="nav-item active">
                                            <Link to="/Login" className="nav-link">ADMINISTRATIVE AREA</Link>
                                        </li>                                        
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
        );
    }
}
/*
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="https://react-bootstrap.github.io/getting-started/introduction/" 
                    target="_brank">
                    React-Bootstrap
        </Navbar.Brand>
    </Navbar> 
*/