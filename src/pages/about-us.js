import React, {Fragment, useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import Testimonial from './testimonial';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About(){
    useEffect(() => {
        AOS.init();
      }, []);
    return(
        <Fragment>
<div className="sub-banner sub-banner1">
    <figure className="sub-bannerleftlayer mb-0">
        <img src="assets/images/sub-bannerleftlayer.png" alt="" className="img-fluid"/>
    </figure>
    <Header/>
    <section className="banner-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="banner_content" data-aos="fade-up">
                        <figure className="about-rightcircle service-rightcircle mb-0">
                            <img src="assets/images/service-rightcircle.png" alt="" className="img-fluid"/>
                        </figure>
                        <h1 className="text-white">About Us</h1>
                        <p>At HIGGSERA, we empower businesses to innovate boldly and lead with confidence.</p>
                        <div className="box">
                            <span className="mb-0">Home</span>
                            <figure className="mb-0 arrow"><img src="assets/images/button-arrow.png" alt="" className="img-fluid"/></figure>
                            <span className="mb-0 box_span">About</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </section>
    <figure className="banner-circleright mb-0">
        <img src="assets/images/banner-circleright.png" className="img-fluid" alt=""/>
    </figure>
    <figure className="sub-bannerrightlayer mb-0">
        <img src="assets/images/sub-bannerrightlayer.png" alt="" className="img-fluid"/>
    </figure>
</div>
<section className="aboutus-section">
    <figure className="offer-toplayer mb-0">
        <img src="assets/images/offer-toplayer.png" alt="" className="img-fluid"/>
    </figure>
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1 order-2">
                <div className="about_wrapper">
                    <figure className="mb-0 aboutus-image1">
                        <img src="assets/images/aboutus-image1.jpg" alt="" className=""/>
                    </figure>
                    <figure className="mb-0 aboutus-image2">
                        <img src="assets/images/aboutus-image2.jpg" alt="" className="img-fluid"/>
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
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-1">
                <div className="service_content position-relative" data-aos="fade-right">
                    <figure className="service-rightcircle mb-0">
                        <img src="assets/images/service-rightcircle.png" alt="" className="img-fluid"/>
                    </figure>
                    <h6>About Us</h6>
                    <h2>Innovate Solution For Success</h2>
                    <p>We believe that innovation is the key to success. Our tailored solutions leverage the latest technologies and creative strategies to help businesses thrive in the digital landscape. </p>
                    <ul className="list-unstyled mb-0">
                        <li className="text"><i className="circle fa-duotone fa-check"></i>We focus on your brand’s unique needs.</li>
                        <li className="text"><i className="circle fa-duotone fa-check"></i>Our results set you apart from competitors.</li>
                        <li className="text"><i className="circle fa-duotone fa-check"></i>With Higgsera, success is a continuous journey.</li>
                        <li className="text text1"><i className="circle fa-duotone fa-check"></i>Innovation drives all our business solutions.</li>
                    </ul>
                    <a className="get_started text-white text-decoration-none" href="/about-us">Get Started
                        <figure className="mb-0"><img src="assets/images/button-arrow.png" alt="" className="img-fluid"/></figure>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <figure className="offer-bottomlayer mb-0">
        <img src="assets/images/offer-bottomlayer.png" alt="" className="img-fluid"/>
    </figure>
</section>
<section className="aboutoffer-section">
    <figure className="service-rightlayer mb-0">
        <img src="assets/images/service-leftlayer.png" alt="" className="img-fluid"/>
    </figure>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="offer_content">
                    <h6>what We Offer</h6>
                    <h2>some of Our Achievements</h2>
                    <p>We’ve propelled brands to new heights through innovative digital solutions, 
                    What Our Customers Have To Sayconsistently delivering impactful results that drive growth and engagement.</p>
                </div>
            </div>
        </div>
        <div className="achievement_wrapper">
            <div className="row">
                <figure className="offer-circleimage mb-0">
                    <img src="assets/images/offer-circleimage.png" alt="" className="img-fluid"/>
                </figure>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <div className="achievement-box box1">
                        <figure className="icon achievement-icon">
                            <img src="assets/images/achievement-clienticon.png" alt="" className="img-fluid"/>
                        </figure> 
                        <div className="wrapper">
                            <h3>3,860</h3>
                            <p className="text-size-18 mb-0">Satisfied Clients</p>
                        </div>
                    </div>  
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <div className="achievement-box box2">
                        <figure className="icon1 achievement-icon">
                            <img src="assets/images/achievement-projecticon.png" alt="" className="img-fluid"/>
                        </figure>
                        <div className="wrapper">
                            <h3>8,550</h3>
                            <p className="text-size-18 mb-0">Portfolio Completed</p>
                        </div>
                    </div>  
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <div className="achievement-box box3">
                        <figure className="icon achievement-icon">
                            <img src="assets/images/achievement-teamicon.png" alt="" className="img-fluid"/>
                        </figure> 
                        <div className="wrapper">
                            <div className="number">
                                <h3 className="value counter">90</h3>
                                <span className="plus">+</span>
                            </div>
                            <p className="text text-size-18 mb-0">Team Members</p>
                        </div>
                    </div>   
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
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
<section className="skill-section">
    <figure className="service-rightlayer mb-0">
        <img src="assets/images/service-leftlayer.png" alt="" className="img-fluid"/>
    </figure>
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="skill_wrapper">
                    <figure className="offer-circleimage mb-0">
                        <img src="assets/images/offer-circleimage.png" alt="" className="img-fluid"/>
                    </figure>
                    <figure className="skill-image mb-0">
                        <img src="assets/images/skill-image.jpg" alt="" className=""/>
                    </figure>
                    <figure className="service-dotimage mb-0">
                        <img src="assets/images/service-dotimage.png" alt="" className="img-fluid"/>
                    </figure>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="skill_content aos-init" data-aos="fade-right">
                    <h6>Professional Skills</h6>
                    <h2>Bringing new it business solutions</h2>
                    <p>Grursus mal suada faci lisis lorem ipsum dolarorit more
                        ion consectetur elit vesti at relum.</p>
                    <div className="skill-measure">
                        <p className="text text-size-18">Web Development</p>
                        <div className="percentage">
                            <span className="mb-0 counter text-size-18">75</span>
                            <span className="mb-0 plus">%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar1" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="skill-measure">
                        <p className="text text-size-18">Web Design</p>
                        <div className="percentage">
                            <span className="mb-0 counter text-size-18">85</span>
                            <span className="mb-0 plus">%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar2" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="skill-measure">
                        <p className="text text-size-18">App Development</p>
                        <div className="percentage">
                            <span className="mb-0 counter text-size-18">60</span>
                            <span className="mb-0 plus">%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar3" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="skill-measure">
                        <p className="text text-size-18">IT Solutions</p>
                        <div className="percentage">
                            <span className="mb-0 counter text-size-18">95</span>
                            <span className="mb-0 plus">%</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar4" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
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
export default About; 