import React, {Fragment} from 'react';

function Footer(){
    return(
        <Fragment>
            <section className="footer-section">
    <div className="container">
        <figure className="footer-leftimage mb-0">
            <img src="assets/images/service-consultationleftimage.png" alt="" className="img-fluid"/>
        </figure>
        <figure className="mb-0 about-leftcircle">
            <img src="assets/images/about-rightcircle.png" alt="" className="img-fluid"/>
        </figure>
        <div className="middle-portion">
            <div className="row">
                <div className="col-lg-4 col-md-5 col-sm-6 col-12">
                    <div className="first-column">
                        <a href="index.html">
                            <figure className="footer-logo">
                                <img src="assets/images/logo-1.png" className="img-fluid" alt=""/>
                            </figure>
                        </a>
                        <p className="text-size-18 footer-text">Grursus mal suada faci lisis lorem ipsum dolaror
                            more ameion consectetur elit vesti at bulum ne odio aea the dumm ipsum dolocons.</p>
                        <div className="lower">
                            <div className="lower-content">
                                <figure className="icon">
                                    <img src="assets/images/nav-phoneimage.png" alt="" className="img-fluid"/>
                                </figure>
                                <div className="content">
                                    <span className="text-white">Call us:</span>
                                    <a className="text-size-18 mb-0 text text-decoration-none" href="tel:+919056503603">+91 9056-503-603</a>
                                </div>
                            </div>
                            <div className="lower-content">
                                <figure className="icon">
                                    <img src="assets/images/footer-emailicon.png" alt="" className="img-fluid"/>
                                </figure>
                                <div className="content">
                                    <span className="text-white">Email us:</span>
                                    <a href="mailto:business@higgsera.com" className="text-size-18 mb-0 text-decoration-none">business@higgsera.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-12 col-12 d-md-block d-none">
                    <div className="links list-pd">
                        <h4 className="heading text-white">Quick Links</h4>
                        <ul className="list-unstyled mb-0">
                            <li><a href="index.html" className="text-size-18 text text-decoration-none">Home</a></li>
                            <li><a href="about.html" className="text-size-18 text text-decoration-none">About</a></li>
                            <li><a href="service.html" className="text-size-18 text text-decoration-none">Services</a></li>
                            <li><a href="contact.html" className="text-size-18 text text-decoration-none">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 col-12 d-lg-block d-none">
                    <div className="links"  style={{'text-align': 'left'}}>
                        <h4 className="heading text-white">Our Services</h4>
                        <ul className="list-unstyled mb-0">
                            <li><a href="service.html" className="text-size-18 text text-decoration-none">Cloud Service</a></li>
                            <li><a href="index.html" className="text-size-18 text text-decoration-none">IT Consulting</a></li>
                            <li><a href="project.html" className="text-size-18 text text-decoration-none">Cloud Services</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 d-sm-block d-none">
                    <div className="icons">
                        <h4 className="heading mb-0 text-white">Subscribe to</h4>
                        <h4 className="heading text-white">Our Newsletter Today!</h4>
                        <p className="text-size-18 footer-text text-white">Exerci tation ullamcorper suscipit lobor nisl aliuie naro commodo.</p>
                        <form id="contactpage1" method="POST" action="https://html.designingmedia.com/technofy/contact-form.php">
                            <div className="form-group mb-0">
                                <input type="text" className="form_style" placeholder="Enter Email Address:" name="email"/> 
                            </div>
                            <button type="submit" className="subscribe_now text-white text-decoration-none">Subscribe Now
                                <i className="circle fa-thin fa-arrow-right"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright">
            <div className="container">
                <div className="row copyright-border">
                    <div className="col-lg-6 col-md-6 col-sm-12 co-12 column">
                        <p className="text-size-16">Copyright ©2023 higgsera.com All Rights Reserved</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 co-12 d-md-block d-none">
                        <div className="social-icons position-relative">
                            <ul className="list-unstyled position-absolute">
                                <li><a href="https://www.facebook.com/higgsera" className="text-decoration-none"><i className="fa-brands fa-facebook-f social-networks"></i></a></li>
                                <li><a href="#" className="text-decoration-none"><i className="fa-brands fa-twitter social-networks"></i></a></li>
                                <li><a href="#" className="text-decoration-none"><i className="fa-brands fa-google-plus-g social-networks"></i></a></li>
                                <li><a href="https://www.instagram.com/higgsera/" className="text-decoration-none"><i className="fa-brands fa-instagram social-networks"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <figure className="footer-dotimage mb-0">
            <img src="assets/images/footer-dotimage.png" alt="" className="img-fluid"/>
        </figure>
        <figure className="footer-leftlayer mb-0">
            <img src="assets/images/footer-leftlayer.png" alt="" className="img-fluid"/>
        </figure>
    </div>
</section>
<script src="assets/js/jquery-3.6.0.min.js"> </script>
<script src="assets/js/bootstrap.min.js"> </script>
<script src="assets/js/video_link.js"></script>
<script src="assets/js/video.js"></script>
<script src="assets/js/counter.js"></script>
<script src="assets/js/owl.carousel.js"></script>
<script src="assets/js/custom-carousel.js"></script>
<script src="assets/js/custom.js"></script>
<script src="assets/js/animation_links.js"></script>
<script src="assets/js/animation.js"></script>
        </Fragment>
    )
}

export default Footer;