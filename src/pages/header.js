import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <Fragment>
 <header className="header">
        <div className="main-header">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="/"><figure className="mb-0 banner-logo">
                        <img src="assets/images/logo-1.png" alt="" className="img-fluid"/></figure></a>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about-us">About</Link>
                            </li>
	<li className="nav-space nav-item dropdown">
    <a className="nav-link dropdown-toggle dropdown-color navbar-text-color" href="#" id="navbarDropdownMenu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Services
    </a>
    <div className="dropdown-menu drop-down-content service-menu">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <ul className="list-unstyled drop-down-pages">
                        <li className="dropdown-header"><i className="fas fa-laptop-code"></i> Web Development</li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">Custom Website Development</a></li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">E-commerce Development</a></li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">CMS (WordPress, Joomla)</a></li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">Web Application Development</a></li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">Landing Page Design</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul className="list-unstyled drop-down-pages">
                        <li className="dropdown-header"><i className="fas fa-cogs"></i> Software Development</li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">Custom Software Solutions</a></li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">SaaS Development</a></li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">Enterprise Applications</a></li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">API Development and Integration</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul className="list-unstyled drop-down-pages">
                        <li className="dropdown-header"><i className="fas fa-bullhorn"></i> Digital Marketing</li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">SEO</a></li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">Social Media Marketing</a></li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">PPC Advertising</a></li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">Content Marketing</a></li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">Email Marketing</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul className="list-unstyled drop-down-pages">
                        <li className="dropdown-header"><i className="fas fa-briefcase"></i> IT Consulting</li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">Business Process Automation</a></li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">IT Strategy and Planning</a></li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">System Integration</a></li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">Digital Transformation Consulting</a></li>
                    </ul>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-3">
                    <ul className="list-unstyled drop-down-pages">
                        <li className="dropdown-header"><i className="fas fa-mobile-alt"></i> Mobile App Development</li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">Web and Mobile App Design</a></li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">Native App Development</a></li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">Cross-Platform App Development</a></li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">App Maintenance and Support</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul className="list-unstyled drop-down-pages">
                        <li className="dropdown-header"><i className="fas fa-cloud"></i> Cloud Services</li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">Cloud Infrastructure Setup</a></li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">Cloud Migration</a></li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">DevOps Services</a></li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">Cloud Security Solutions</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul className="list-unstyled drop-down-pages">
                        <li className="dropdown-header"><i className="fas fa-shopping-cart"></i> E-commerce Solutions</li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">E-commerce Platform </a></li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">Payment Gateway Integration</a></li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">Inventory Management Systems</a></li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">Marketplace Development</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul className="list-unstyled drop-down-pages">
                        <li className="dropdown-header"><i className="fas fa-tools"></i> Maintenance and Support</li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">Website Maintenance</a></li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">App Support and Upgrades</a></li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">Performance Optimization</a></li>
                        <li className="nav-item"><a className="dropdown-item nav-link" href="#">Security Updates and Patches</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</li>

                            <li className="nav-item">
                                <a className="nav-link" href="infinite-scroll.html">Blogs</a>
                            </li>
                    

                            <li className="nav-item">
                                <Link className="nav-link " to="/portfolio" > Portfolio </Link>
                             
                            </li>
                            <li className="nav-space nav-item">
                                <Link className="nav-link" to="/contact-us">Contact</Link>
                            </li>
                        </ul>
                        <div className="last_list">
                            <figure className="nav-phoneimage mb-0"><img className="img-fluid" src="assets/images/nav-phoneimage.png" alt=""/></figure>
                            <div className="content">
                                <p className="text-size-18 text-white">Call Anytime:</p>
                                <a className="text-decoration-none last_list_atag" href="tel:+919056503603">+91 9056-503-603</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
        </Fragment>
       
    )
}

export default Header;