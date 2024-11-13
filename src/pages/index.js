import React, {Fragment, useEffect, useState} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './header';
import Footer from './footer';
import Testimonial from './testimonial';
import Popup from './popup';
function Index(){
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    useEffect(() => {
        AOS.init();
    }, []);
    const togglePopup = (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        setIsPopupOpen(!isPopupOpen); // Toggle the popup open/close state
      };
      
    return(
        <Fragment>
<div className="banner_outer">
   <Header/>
    <figure className="banner-layerright mb-0">
        <img src="assets/images/banner-layerright.png" className="img-fluid" alt=""/>
    </figure>
    <section className="banner-section">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-5 col-md-12 col-sm-12 col-12" data-aos="fade-right">
                    <div className="social-icons position-relative" data-aos="fade-up">
                        <ul className="list-unstyled position-absolute">
                            <li><a href="https://www.facebook.com/higgsera" className="text-decoration-none"><i className="fa-brands fa-facebook-f social-networks"></i></a></li>
                            <li><a href="#" className="text-decoration-none"><i className="fa-brands fa-twitter social-networks"></i></a></li>
                            <li><a href="#" className="text-decoration-none"><i className="fa-brands fa-google-plus-g social-networks"></i></a></li>
                                <li><a href="https://www.instagram.com/higgsera/" className="text-decoration-none"><i className="fa-brands fa-instagram social-networks"></i></a></li>
                        </ul>
                    </div>
                    <div className="banner_content">
                        <figure className="banner-line mb-0"><img src="assets/images/banner-line.png" alt="" className="img-fluid"/></figure>
                        <h6 className="text-white">TRANSFORMING YOUR APPROACH </h6>
                        <h1 className="text-white">Innovation at the core</h1>
                        <p>Empowering businesses to lead through technologies, transforming ideas into ground breaking solutions that shape tomorrow.</p>
                        <a className="get_started button1 text-white text-decoration-none" href="contact.html">Get Started
                            <figure className="mb-0"><img src="assets/images/button-arrow.png" alt="" className="img-fluid"/></figure>
                        </a>
                        <a className="get_started button2 text-white text-decoration-none" href="/contact-us">Contact Us
                            <figure className="mb-0"><img src="assets/images/button-arrow.png" alt="" className="img-fluid"/></figure>
                        </a>
                        <figure className="banner-circleleft mb-0">
                            <img src="assets/images/banner-circleleft.png" className="img-fluid" alt=""/>
                        </figure>
                        <figure className="banner-dotleft mb-0">
                            <img src="assets/images/banner-dotleft.png" className="img-fluid" alt=""/>
                        </figure>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                    <div className="banner_wrapper">
                        <figure className="mb-0 banner-image">
                            <img src="assets/images/banner-image.png" alt="" className="img-fluid"/>
                        </figure>
                        <div className="position-relative">
                            <a className="popup-vimeo" href="https://video-previews.elements.envatousercontent.com/h264-video-previews/d1c81f1e-849f-4d45-ae57-b61c2f5db34a/25628048.mp4">
                                <figure className="mb-0 banner-vedioimage">
                                    <img 
                                    className="thumb img-fluid"
                                     style={{cursor: 'pointer'}}
                                      src="assets/images/banner-vedioimage.png"
                                       alt=""
                                       />
                                </figure>
                            </a>
                        </div>
                        <figure className="banner-circleright mb-0">
                            <img src="assets/images/banner-circleright.png" className="img-fluid" alt=""/>
                        </figure>
                        <figure className="banner-dotright mb-0">
                            <img src="assets/images/banner-dotright.png" className="img-fluid" alt=""/>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>   
   
</div>
<section className="service-section">
    <figure className="service-leftlayer mb-0">
        <img src="assets/images/service-leftlayer.png" alt="" className="img-fluid"/>
    </figure>
    <figure className="service-dotimage mb-0">
        <img src="assets/images/service-dotimage.png" alt="" className="img-fluid"/>
    </figure>
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="service_contentbox">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="service-box box-mb">
                                <figure className="service-marketicon">
                                    <img src="assets/images/service-marketicon.png" alt="" className="img-fluid"/>
                                </figure> 
                                <h4>Digital Marketing</h4>
                                <p className="text-size-18">Grow your brand presence online with targeted strategies that connect with your audience.</p>
                                <a className="arrow text-decoration-none" href="service.html"><i className="circle fa-thin fa-arrow-right"></i></a>
                            </div>   
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="box-top">
                                <div className="service-box box-mb">
                                    <figure className="service-producticon">
                                        <img src="assets/images/service-producticon.png" alt="" className="img-fluid"/>
                                    </figure>
                                    <h4>App Development</h4>
                                    <p className="text-size-18">Custom app solutions that bring your ideas to life and streamline your business operations.</p>
                                    <a className="arrow text-decoration-none" href="service.html"><i className="circle fa-thin fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="service-box">
                                <figure className="service-designicon">
                                    <img src="assets/images/service-designicon.png" alt="" className="img-fluid"/>
                                </figure>
                                <h4>Ui/Ux Designing</h4>
                                <p className="text-size-18">Stunning visuals and creative designs that leave a lasting impression.</p>
                                <a className="arrow text-decoration-none" href="service.html"><i className="circle fa-thin fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="box-top">
                                <div className="service-box">
                                    <figure className="service-dataicon">
                                        <img src="assets/images/service-dataicon.png" alt="" className="img-fluid"/>
                                    </figure>
                                    <h4>Web Development</h4>
                                    <p className="text-size-18">From concept to creation, we build websites that are both functional and aesthetically pleasing.</p>
                                    <a className="arrow text-decoration-none" href="service.html"><i className="circle fa-thin fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="service_content position-relative" data-aos="fade-right">
                    <figure className="service-rightcircle mb-0">
                        <img src="assets/images/service-rightcircle.png" alt="" className="img-fluid"/>
                    </figure>
                    <h6>Our Services</h6>
                    <h2>BEST IT SOLUTION FOR YOUR BUSINESS</h2>
                    <p>At HIGGSERA, we offer a full range of services designed to elevate your business in the digital space. From marketing to development,
                         we provide solutions that help you connect, grow, and succeed.</p>
                    <ul className="list-unstyled mb-0">
                        <li className="text"><i className="circle fa-duotone fa-check"></i>Strategies that drive engagement and fuel business growth.</li>
                        <li className="text"><i className="circle fa-duotone fa-check"></i>Dynamic, user-friendly websites that reflect your brand identity.</li>
                        <li className="text"><i className="circle fa-duotone fa-check"></i>Innovative mobile solutions that enhance user experiences.</li>
                        <li className="text text1"><i className="circle fa-duotone fa-check"></i>Stunning visuals that capture your brand's essence.</li>
                    </ul>
                    <a className="get_started text-white text-decoration-none" href="/services">Get Started
                        <figure className="mb-0"><img src="assets/images/button-arrow.png" alt="" className="img-fluid"/></figure>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <figure className="service-rightlayer mb-0">
        <img src="assets/images/service-rightlayer.png" alt="" className="img-fluid"/>
    </figure>
</section>
<section className="offer-section">
    <figure className="offer-toplayer mb-0">
        <img src="assets/images/offer-toplayer.png" alt="" className="img-fluid"/>
    </figure>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="offer_content" data-aos="fade-up">
                    <h6>what We Offer</h6>
                    <h2>Why You Should Choose Us</h2>
                    <p>Our commitment to innovation ensures that we stay ahead of industry trends, providing cutting-edge solutions tailored to your unique needs.</p>
                </div>
            </div>
        </div>
        <div className="row position-relative">
            <figure className="offer-circleimage mb-0">
                <img src="assets/images/offer-circleimage.png" alt="" className="img-fluid"/>
            </figure>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 article_padding">
                <div className="offer_boxcontent">
                    <div className="upper_portion">
                        <figure className="mb-0"><img src="assets/images/offer-image1.png" className="article_img" alt=""/></figure>
                        <div className="image_content">
                            <figure className="offer-icon">
                                <img src="assets/images/offer-icon1.png" alt="" className="img-fluid"/>
                            </figure>
                        </div>
                    </div>
                    <div className="lower_portion_wrapper">
                        <div className="lower_portion">
                            <h4 className="mb-0">Perfect solutions that business demands</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 article_padding">
                <div className="offer_boxcontent">
                    <div className="upper_portion">
                        <figure className="mb-0"><img src="assets/images/offer-image2.jpg" className="article_img" alt=""/></figure>
                        <div className="image_content">
                            <figure className="offer-icon offer-icon2">
                                <img src="assets/images/offer-icon2.png" alt="" className="img-fluid"/>
                            </figure>
                        </div>
                    </div>
                    <div className="lower_portion_wrapper">
                        <div className="lower_portion">
                            <h4 className="mb-0">We Provide Powerfull Product Strategy</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 article_padding">
                <div className="offer_boxcontent mb-0">
                    <div className="upper_portion">
                        <figure className="mb-0"><img src="assets/images/offer-image3.png" className="article_img" alt=""/></figure>
                        <div className="image_content">
                            <figure className="offer-icon">
                                <img src="assets/images/offer-icon3.png" alt="" className="img-fluid"/>
                            </figure>
                        </div>
                    </div>
                    <div className="lower_portion_wrapper">
                        <div className="lower_portion">
                            <h4 className="mb-0">Help your business grow worldwide</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <figure className="offer-bottomlayer mb-0">
        <img src="assets/images/offer-bottomlayer.png" alt="" className="img-fluid"/>
    </figure>
</section>
<section className="about-section">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1 order-2">
                <div className="about_wrapper">
                    <figure className="mb-0 about-image1">
                        <img src="assets/images/about-image1.jpg" alt="" className=""/>
                    </figure>
                    <figure className="mb-0 about-image2">
                        <img src="assets/images/about-image2.jpg" alt="" className="img-fluid"/>
                    </figure>
                    <div className="image-circle">
                        <div className="years">
                            <span className="text-white value counter">30</span>
                            <sup className="text-white mb-0 plus">+</sup>
                            <span className="text-white text">Years of Experience</span>
                        </div>
                        <figure className="mb-0 about-imagecircle">
                            <img src="assets/images/about-imagecircle.png" alt="" className=""/>
                        </figure>
                    </div>
                    <figure className="mb-0 about-dot">
                        <img src="assets/images/about-dot.png" alt="" className="img-fluid"/>
                    </figure>
                    <figure className="mb-0 about-leftcircle">
                        <img src="assets/images/about-leftcircle.png" alt="" className="img-fluid"/>
                    </figure>
                    <figure className="mb-0 about-layer">
                        <img src="assets/images/about-layer.png" alt="" className="img-fluid"/>
                    </figure>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-1">
                <div className="about_content" data-aos="fade-right">
                    <h6>About us</h6>
                    <h2 className="text-white">We help clients invent their future.</h2>
                    <p className="text1">We help clients shape their future with innovative solutions. Our expertise in digital marketing, web and app development, and graphic design enables businesses to embrace new technologies. </p>
                    <p className="text2">By partnering closely with our clients, we create tailored strategies that boost their online presence and unlock new opportunities for success.</p>
                    <a className="read_more text-white text-decoration-none" href="/about-us">Read More
                        <figure className="mb-0"><img src="assets/images/button-arrow.png" alt="" className="img-fluid"/></figure>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <figure className="mb-0 about-rightimage">
        <img src="assets/images/about-rightimage.png" alt="" className="img-fluid"/>
    </figure>
    <figure className="mb-0 about-rightcircle">
        <img src="assets/images/about-rightcircle.png" alt="" className="img-fluid"/>
    </figure>
</section>
<section className="achievement-section">
    <figure className="service-rightlayer mb-0">
        <img src="assets/images/service-leftlayer.png" alt="" className="img-fluid"/>
    </figure>
    <div className="container">
        <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                <div className="achievement_content" data-aos="fade-right">
                    <figure className="offer-circleimage mb-0">
                        <img src="assets/images/offer-circleimage.png" alt="" className="img-fluid"/>
                    </figure>
                    <h6>Achievements</h6>
                    <h2>Some Number of Our Achievements</h2>
                    <p>We’ve propelled brands to new heights through innovative digital solutions, 
                        What Our Customers Have To Sayconsistently delivering impactful results that drive growth and engagement.</p>
                    <a className="get_started text-white text-decoration-none" href="/about-us">Get Started
                        <figure className="mb-0"><img src="assets/images/button-arrow.png" alt="" className="img-fluid"/></figure>
                    </a>
                </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                <div className="achievement_wrapper">
                    <div className="achievement-box box1">
                        <figure className="icon achievement-icon">
                            <img src="assets/images/achievement-clienticon.png" alt="" className="img-fluid"/>
                        </figure> 
                        <div className="wrapper">
                            <h3>3,860</h3>
                            <p className="text-size-18 mb-0">Satisfied Clients</p>
                        </div>
                    </div> 
                    <div className="achievement-box box2">
                        <figure className="icon1 achievement-icon">
                            <img src="assets/images/achievement-projecticon.png" alt="" className="img-fluid"/>
                        </figure>
                        <div className="wrapper">
                            <h3>8,550</h3>
                            <p className="text-size-18 mb-0">Portfolio Completed</p>
                        </div>
                    </div>
                    <div className="achievement-box box3">
                        <figure className="icon achievement-icon">
                            <img src="assets/images/achievement-teamicon.png" alt="" className="img-fluid"/>
                        </figure> 
                        <div className="wrapper">
                            <div className="number number1">
                                <h3 className="value counter">90</h3>
                                <span className="plus">+</span>
                            </div>
                            <p className="text text-size-18 mb-0">Team Members</p>
                        </div>
                    </div> 
                    <div className="achievement-box box4">
                        <figure className="icon1 achievement-icon">
                            <img src="assets/images/achievement-awardicon.png" alt="" className="img-fluid"/>
                        </figure>
                        <div className="wrapper">
                            <div className="number">
                                <h3 className="value counter">180</h3>
                                <span className="plus">+</span>
                            </div>
                            <p className="text text-size-18 mb-0">Awards Win</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <figure className="service-leftlayer mb-0">
        <img src="assets/images/service-rightlayer.png" alt="" className="img-fluid"/>
    </figure>
</section>
<section className="consultation-section">
<figure className="consultation-leftimage mb-0">
        <img src="assets/images/service-consultationleftimage.png" alt="" className="img-fluid"/>
    </figure>
    <div className="container">
    {isPopupOpen && (
          <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        )}
        <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                <div className="consultation_content aos-init aos-animate" data-aos="fade-right">
                    <h6>WE ARE HERE TO guide you</h6>
                    <h2 className="text-white">NEED A CONSULTATION?</h2>
                    <p className="mb-0">Have questions or ready to elevate your brand? We're here to help! Reach out to Higgsera for expert solutions in social media marketing, web design, and development.</p>
                </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                <div className="consultation_wrapper">
                    <figure className="service-rightcircle mb-0">
                        <img src="assets/images/about-rightcircle.png" alt="" className="img-fluid"/>
                    </figure>
                    <a className="get_started button1 text-white text-decoration-none" onClick={togglePopup} href="#">Get a Quote
                        <figure className="mb-0"><img src="assets/images/button-arrow.png" alt="" className="img-fluid"/></figure>
                    </a>
                    
                    <a className="get_started button2 text-white text-decoration-none" href="/contact-us">Contact Us
                        <figure className="mb-0"><img src="assets/images/button-arrow.png" alt="" className="img-fluid"/></figure>
                    </a>
                </div>
            </div>
        </div>
    </div>
   

</section>
<Testimonial/>
<section className="blog-section">
    <figure className="offer-toplayer mb-0">
        <img src="assets/images/offer-toplayer.png" alt="" className="img-fluid"/>
    </figure>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="blog_content" data-aos="fade-right">
                    <h6>News and articles</h6>
                    <h2>our latest blog posts</h2>
                    <p>Check out our latest blog posts at Higgsera! Stay updated with trends in social media marketing, design, web and app development. </p>
                    <figure className="offer-circleimage mb-0">
                        <img src="assets/images/offer-circleimage.png" alt="" className="img-fluid"/>
                    </figure>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="owl-carousel owl-theme">
                <div className="item">
                    <div className="blog_boxcontent">
                        <div className="upper_portion">
                            <figure className="mb-0"><img src="assets/images/blog-image1.jpg" className="article_img" alt=""/></figure>
                            <div className="image_content">
                                <div className="content">
                                    <h3 className="text-white counter">18</h3>
                                    <span className="text-white">March</span>
                                </div>
                            </div>
                        </div>
                        <div className="lower_portion_wrapper">
                            <div className="lower_portion">
                                <h4>Useful Tips From Experts In Service.</h4>
                                <p className="text-size-18">Nostrum exercitationem aeullam 
                                    corporis suscipit labo riosam aliruiea
                                    molestiae non recusandae...</p>
                                <a className="read_more text-decoration-none" href="single-post.html">Read More
                                    <figure className="arrow mb-0"><img src="assets/images/blog-arrow.png" alt="" className="img-fluid"/></figure>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="blog_boxcontent">
                        <div className="upper_portion">
                            <figure className="mb-0"><img src="assets/images/blog-image2.jpg" className="article_img" alt=""/></figure>
                            <div className="image_content">
                                <div className="content">
                                    <h3 className="text-white counter">26</h3>
                                    <span className="text-white">April</span>
                                </div>
                            </div>
                        </div>
                        <div className="lower_portion_wrapper">
                            <div className="lower_portion">
                                <h4>How Will Service Be In The Future.</h4>
                                <p className="text-size-18">Nostrum exercitationem aeullam 
                                    corporis suscipit labo riosam aliruiea
                                    molestiae non recusandae...</p>
                                <a className="read_more text-decoration-none" href="single-post.html">Read More
                                    <figure className="arrow mb-0"><img src="assets/images/blog-arrow.png" alt="" className="img-fluid"/></figure>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="blog_boxcontent mb-0">
                        <div className="upper_portion">
                            <figure className="mb-0"><img src="assets/images/blog-image3.jpg" className="article_img" alt=""/></figure>
                            <div className="image_content">
                                <div className="content">
                                    <h3 className="text-white counter">09</h3>
                                    <span className="text-white">June</span>
                                </div>
                            </div>
                        </div>
                        <div className="lower_portion_wrapper">
                            <div className="lower_portion">
                                <h4>How Service Can Ease Your Pain.</h4>
                                <p className="text-size-18">Nostrum exercitationem aeullam 
                                    corporis suscipit labo riosam aliruiea
                                    molestiae non recusandae...</p>
                                <a className="read_more text-decoration-none" href="single-post.html">Read More
                                    <figure className="arrow mb-0"><img src="assets/images/blog-arrow.png" alt="" className="img-fluid"/></figure>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="blog_boxcontent">
                        <div className="upper_portion">
                            <figure className="mb-0"><img src="assets/images/blog-image1.jpg" className="article_img" alt=""/></figure>
                            <div className="image_content">
                                <div className="content">
                                    <h3 className="text-white counter">18</h3>
                                    <span className="text-white">March</span>
                                </div>
                            </div>
                        </div>
                        <div className="lower_portion_wrapper">
                            <div className="lower_portion">
                                <h4>Useful Tips From Experts In Service.</h4>
                                <p className="text-size-18">Nostrum exercitationem aeullam 
                                    corporis suscipit labo riosam aliruiea
                                    molestiae non recusandae...</p>
                                <a className="read_more text-decoration-none" href="single-post.html">Read More
                                    <figure className="arrow mb-0"><img src="assets/images/blog-arrow.png" alt="" className="img-fluid"/></figure>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="blog_boxcontent">
                        <div className="upper_portion">
                            <figure className="mb-0"><img src="assets/images/blog-image2.jpg" className="article_img" alt=""/></figure>
                            <div className="image_content">
                                <div className="content">
                                    <h3 className="text-white counter">26</h3>
                                    <span className="text-white">April</span>
                                </div>
                            </div>
                        </div>
                        <div className="lower_portion_wrapper">
                            <div className="lower_portion">
                                <h4>How Will Service Be In The Future.</h4>
                                <p className="text-size-18">Nostrum exercitationem aeullam 
                                    corporis suscipit labo riosam aliruiea
                                    molestiae non recusandae...</p>
                                <a className="read_more text-decoration-none" href="single-post.html">Read More
                                    <figure className="arrow mb-0"><img src="assets/images/blog-arrow.png" alt="" className="img-fluid"/></figure>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="blog_boxcontent mb-0">
                        <div className="upper_portion">
                            <figure className="mb-0"><img src="assets/images/blog-image3.jpg" className="article_img" alt=""/></figure>
                            <div className="image_content">
                                <div className="content">
                                    <h3 className="text-white counter">09</h3>
                                    <span className="text-white">June</span>
                                </div>
                            </div>
                        </div>
                        <div className="lower_portion_wrapper">
                            <div className="lower_portion">
                                <h4>How Service Can Ease Your Pain.</h4>
                                <p className="text-size-18">Nostrum exercitationem aeullam 
                                    corporis suscipit labo riosam aliruiea
                                    molestiae non recusandae...</p>
                                <a className="read_more text-decoration-none" href="single-post.html">Read More
                                    <figure className="arrow mb-0"><img src="assets/images/blog-arrow.png" alt="" className="img-fluid"/></figure>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="blog_boxcontent">
                        <div className="upper_portion">
                            <figure className="mb-0"><img src="assets/images/blog-image1.jpg" className="article_img" alt=""/></figure>
                            <div className="image_content">
                                <div className="content">
                                    <h3 className="text-white counter">18</h3>
                                    <span className="text-white">March</span>
                                </div>
                            </div>
                        </div>
                        <div className="lower_portion_wrapper">
                            <div className="lower_portion">
                                <h4>Useful Tips From Experts In Service.</h4>
                                <p className="text-size-18">Nostrum exercitationem aeullam 
                                    corporis suscipit labo riosam aliruiea
                                    molestiae non recusandae...</p>
                                <a className="read_more text-decoration-none" href="single-post.html">Read More
                                    <figure className="arrow mb-0"><img src="assets/images/blog-arrow.png" alt="" className="img-fluid"/></figure>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="blog_boxcontent">
                        <div className="upper_portion">
                            <figure className="mb-0"><img src="assets/images/blog-image2.jpg" className="article_img" alt=""/></figure>
                            <div className="image_content">
                                <div className="content">
                                    <h3 className="text-white counter">26</h3>
                                    <span className="text-white">April</span>
                                </div>
                            </div>
                        </div>
                        <div className="lower_portion_wrapper">
                            <div className="lower_portion">
                                <h4>How Will Service Be In The Future.</h4>
                                <p className="text-size-18">Nostrum exercitationem aeullam 
                                    corporis suscipit labo riosam aliruiea
                                    molestiae non recusandae...</p>
                                <a className="read_more text-decoration-none" href="single-post.html">Read More
                                    <figure className="arrow mb-0"><img src="assets/images/blog-arrow.png" alt="" className="img-fluid"/></figure>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="blog_boxcontent mb-0">
                        <div className="upper_portion">
                            <figure className="mb-0"><img src="assets/images/blog-image3.jpg" className="article_img" alt=""/></figure>
                            <div className="image_content">
                                <div className="content">
                                    <h3 className="text-white counter">09</h3>
                                    <span className="text-white">June</span>
                                </div>
                            </div>
                        </div>
                        <div className="lower_portion_wrapper">
                            <div className="lower_portion">
                                <h4>How Service Can Ease Your Pain.</h4>
                                <p className="text-size-18">Nostrum exercitationem aeullam 
                                    corporis suscipit labo riosam aliruiea
                                    molestiae non recusandae...</p>
                                <a className="read_more text-decoration-none" href="single-post.html">Read More
                                    <figure className="arrow mb-0"><img src="assets/images/blog-arrow.png" alt="" className="img-fluid"/></figure>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <figure className="offer-bottomlayer mb-0">
        <img src="assets/images/offer-bottomlayer.png" alt="" className="img-fluid"/>
    </figure>
</section>

<Footer/>
        </Fragment>
    )
}

export default Index; 