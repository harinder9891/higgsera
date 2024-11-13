import React, {Fragment, useState} from 'react';
import { Link } from 'react-router-dom';

function Header(){
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Initial state is closed
    const [IsNavBarOpen, setIsNavBarOpen] = useState(false); // Initial state is closed

    const toggleDropdown = (e) => {
      e.preventDefault(); // Prevent page scroll or refresh on clicking the anchor tag
      setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
    };

    const toggleNavBar = (e) => {
      e.preventDefault(); // Prevent page scroll or refresh on clicking the anchor tag
      setIsNavBarOpen(!IsNavBarOpen); // Toggle dropdown visibility
    };
  
    return(
        <Fragment>
 <header className="header">
        <div className="main-header">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="/"><figure className="mb-0 banner-logo">
                        <img src="assets/images/logo-1.png" alt="" className="img-fluid"/></figure></a>
                    <button className={`navbar-toggler ${IsNavBarOpen ? '' : 'collapsed'}`} type="button" data-toggle="collapse" onClick={toggleNavBar} data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={IsNavBarOpen ? "false" : "true"} 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${IsNavBarOpen ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link " to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about-us">About</Link>
                            </li>
	<li className={`nav-space nav-item dropdown ${isDropdownOpen ? 'show' : ''}`}>
    <a className="nav-link dropdown-toggle dropdown-color navbar-text-color" href="javascript:void(0);" onClick={toggleDropdown} id="navbarDropdownMenu" role="button" data-toggle="dropdown" aria-haspopup="true" 
        aria-expanded={isDropdownOpen ? "true" : "false"}>
        Services
    </a>
    <div className={`dropdown-menu drop-down-content service-menu ${isDropdownOpen ? 'show' : ''}`}>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <ul className="list-unstyled drop-down-pages">
                        <li className="dropdown-header"><i className="fas fa-laptop-code"></i> Web Development</li>
                        <li className="nav-item"><Link className="dropdown-item nav-link" to="/web-development">Custom Website Development</Link></li>
                        <li className="nav-item"><Link className="dropdown-item nav-link" to="/web-development">E-commerce Development</Link></li>
                        <li className="nav-item"><Link className="dropdown-item nav-link" to="/web-development">Content Management System</Link></li>
                        <li className="nav-item"><Link className="dropdown-item nav-link" to="/web-development">Web Application Development</Link></li>
                        <li className="nav-item"><Link className="dropdown-item nav-link" to="/web-development">Landing Page Design</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul className="list-unstyled drop-down-pages">
                        <li className="dropdown-header"><i className="fas fa-cogs"></i> Software Development</li>
                        <li className="nav-item"><Link className="dropdown-item nav-link" to="/software-development">Custom Software Solutions</Link></li>
                        <li className="nav-item"><Link className="dropdown-item nav-link" to="/software-development">SaaS Development</Link></li>
                        <li className="nav-item"><Link className="dropdown-item nav-link" to="/software-development">Enterprise Applications</Link></li>
                        <li className="nav-item"><Link className="dropdown-item nav-link" to="/software-development">API Development and Integration</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul className="list-unstyled drop-down-pages">
                        <li className="dropdown-header"><i className="fas fa-bullhorn"></i> Digital Marketing</li>
                        <li className="nav-item"><Link className="dropdown-item nav-link" to="/digital-marketing">SEO</Link></li>
                        <li className="nav-item"><Link className="dropdown-item nav-link" to="/digital-marketing">Social Media Marketing</Link></li>
                        <li className="nav-item"><Link className="dropdown-item nav-link" to="/digital-marketing">PPC Advertising</Link></li>
                        <li className="nav-item"><Link className="dropdown-item nav-link" to="/digital-marketing">Content Marketing</Link></li>
                        <li className="nav-item"><Link className="dropdown-item nav-link" to="/digital-marketing">Email Marketing</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul className="list-unstyled drop-down-pages">
                        <li className="dropdown-header"><i className="fas fa-briefcase"></i> IT Consulting</li>
                        <li className="nav-item"><Link className="dropdown-item nav-link" to="/it-consulting">Business Process Automation</Link></li>
                        <li className="nav-item"><Link className="dropdown-item nav-link" to="/it-consulting">IT Strategy and Planning</Link></li>
                        <li className="nav-item"><Link className="dropdown-item nav-link" to="/it-consulting">System Integration</Link></li>
                        <li className="nav-item"><Link className="dropdown-item nav-link" to="/it-consulting">Digital Transformation Consulting</Link></li>
                    </ul>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-3">
                    <ul className="list-unstyled drop-down-pages">
                        <li className="dropdown-header"><i className="fas fa-mobile-alt"></i> Mobile App Development</li>
                        <li className="nav-item"><Link className="dropdown-item nav-link" to="/app-development">Web and Mobile App Design</Link></li>
                        <li className="nav-item"><Link className="dropdown-item nav-link" to="/app-development">Native App Development</Link></li>
                        <li className="nav-item"><Link className="dropdown-item nav-link" to="/app-development">Cross-Platform App Development</Link></li>
                        <li className="nav-item"><Link className="dropdown-item nav-link" to="/app-development">App Maintenance and Support</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                <ul className="list-unstyled drop-down-pages">
                    <li className="dropdown-header"><i className="fas fa-paint-brush"></i> UI/UX Designing</li>
                    <li className="nav-item"><Link className="dropdown-item nav-link" to="/ui-ux-design">UI Design</Link></li>
                    <li className="nav-item"><Link className="dropdown-item nav-link" to="/ui-ux-design">UX Research</Link></li>
                    <li className="nav-item"><Link className="dropdown-item nav-link" to="/ui-ux-design">Prototyping</Link></li>
                    <li className="nav-item"><Link className="dropdown-item nav-link" to="/ui-ux-design">User Testing</Link></li>
                </ul>
                </div>
                <div className="col-md-3">
                    <ul className="list-unstyled drop-down-pages">
                        <li className="dropdown-header"><i className="fas fa-shopping-cart"></i> E-commerce Solutions</li>
                        <li className="nav-item"><Link className="dropdown-item nav-link" to="/e-commerce-development">E-commerce Platform </Link></li>
                        <li className="nav-item"><Link className="dropdown-item nav-link" to="/e-commerce-development">Payment Gateway Integration</Link></li>
                        <li className="nav-item"><Link className="dropdown-item nav-link" to="/e-commerce-development">Inventory Management Systems</Link></li>
                        <li className="nav-item"><Link className="dropdown-item nav-link" to="/e-commerce-development">Marketplace Development</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul className="list-unstyled drop-down-pages">
                        <li className="dropdown-header"><i className="fas fa-tools"></i> Maintenance and Support</li>
                        <li className="nav-item"><Link className="dropdown-item nav-link" to="/maintenance-and-support">Website Maintenance</Link></li>
                        <li className="nav-item"><Link className="dropdown-item nav-link" to="/maintenance-and-support">App Support and Upgrades</Link></li>
                        <li className="nav-item"><Link className="dropdown-item nav-link" to="/maintenance-and-support">Performance Optimization</Link></li>
                        <li className="nav-item"><Link className="dropdown-item nav-link" to="/maintenance-and-support">Security Updates and Patches</Link></li>
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