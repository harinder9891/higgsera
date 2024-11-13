import React, {Fragment, useEffect, useState } from 'react';
import Header from '../header';
import Footer from '../footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // If digital.css is in src/assets/css
import Popup from '../popup';
function ECommDevelopment(){
    useEffect(() => {
        AOS.init();
      }, []);
      const [isPopupOpen, setIsPopupOpen] = useState(false);   
      const togglePopup = (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        setIsPopupOpen(!isPopupOpen); // Toggle the popup open/close state
      };
    return(
        <Fragment>
<div className="sub-banner sub-banner1">
   
    <Header/>
   
    <figure className="banner-circleright mb-0">
        <img src="assets/images/banner-circleright.png" className="img-fluid" alt=""/>
    </figure>
</div>
<section className="e-comm-section">
    <figure className="offer-toplayer mb-0">
        <img src="assets/images/offer-toplayer.png" alt="" className="img-fluid"/>
    </figure>
    <div className="container">
        <div className="row" style={{'flex-direction': 'row-reverse'}}>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1 order-2">
                <div className="web_wrapper">
                    <figure className="mb-0 aboutus-image1">
                        <img src="assets/images/service/digital-marketing.png" alt="" className=""/>
                        
                    </figure>
                   
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-1">
                <div className="service_content position-relative" data-aos="fade-right">
                    <figure className="service-rightcircle mb-0">
                        <img src="assets/images/service-rightcircle.png" alt="" className="img-fluid"/>
                    </figure>
                    <h6 >Empowering Online Success</h6>
                    <h2 >eCommerce Platforms That Convert</h2>
                    <p >Our tailored eCommerce solutions bring your brand online with stunning, intuitive platforms that engage customers and drive sales. Let us build the foundation for your online success!
                    </p>
                    <ul className="list-unstyled mb-0">
                        <li className="text"><i className="circle fa-duotone fa-check"></i>Fast, responsive performance on all devices.</li>
                        <li className="text"><i className="circle fa-duotone fa-check"></i>Unique functionalities tailored to your business.</li>
                        <li className="text"><i className="circle fa-duotone fa-check"></i> Clean layouts that guide users effortlessly.</li>
                        <li className="text text1"><i className="circle fa-duotone fa-check"></i> Safe and easy payment gateways to ensure smooth, secure transactions for customers.
                        </li>
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
<section className="skill-section">
<figure className="service-rightlayer mb-0">
        <img src="assets/images/service-leftlayer.png" alt="" className="img-fluid"/>
    </figure>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="whowe-sec">
                        <div className="whowe-text-one">
                            <h2 className="display-3">Our Vision Is<span className="color_one"> Our Mission</span></h2>
                            <p>
                                Our Vision is to be a leading IT Solution company and sustain our continuous
                                efforts to bring the best to our customers. We plan to constantly hold up standards
                                of commitment, reliability, and innovation. Our priority is always to carry out
                                world-class quality with absolute accuracy to emerge as a foremost name
                                in the industry.
                                <img src="assets/images/our-vision.png" className="img-responsive vision-img align-right" alt="img"/>
                            </p>
                        </div>
                        <div className="whowe-img-one">

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <figure className="service-leftlayer mb-0">
        <img src="assets/images/service-rightlayer.png" alt="" className="img-fluid"/>
    </figure>
    </section>
<section className="consultation-section-dev">
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
<section className="our-value">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="whowe-title">
                        <h2 className="display-3 fw-bold">Our Core Principles in 
                        <span className="color_one">Crafting eCommerce Solutions</span></h2>
                    </div>
                    
                </div>
                <div className="col-md-12">
                 <div className="our-value-sec">
                        <div className="our-value-left">
                            <h3>Our core values guide our eCommerce strategies, 

                            ensuring we deliver exceptional <strong> online experiences.</strong></h3>
                        </div>
                        <div className="whowe-hr"></div>
                        <figure className="service-rightcircle mb-0"><img src="assets/images/service-rightcircle.png" alt="" class="img-fluid"/></figure>
                
                        <div className="our-value-right">
                            <div className="our-value-block">
                                <h5 className="color_two">Adapt to Evolving Trends
                                </h5>
                                <p>Embrace change to stay ahead in the dynamic eCommerce market.
                                </p>
                            </div>
                            <div className="our-value-block">
                                <h5 className="color_two">Striving for Excellence
                                </h5>
                                <p>Precision in every step to guarantee seamless shopping experiences.</p>
                            </div>
                            <div className="our-value-block">
                                <h5 className="color_two">Innovative Thinking
                                </h5>
                                <p>Constantly exploring cutting-edge solutions for superior eCommerce growth.
                                </p>

                            </div>
                            <div className="our-value-block">
                                <h5 className="color_two">Designing Impactful Journeys
                                </h5>
                                <p>Crafting intuitive and visually appealing designs for lasting customer engagement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
<section className="consultation-section contact-query-digi">
<figure className="consultation-leftimage mb-0">
        <img src="assets/images/social-sharings.png" alt="" className="img-fluid"/>
    </figure>
    <div className="container">
   
        <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                <div className="consultation_content" >
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
                    <form className="contact_form fw-bold text-center color_two">
                        <h3 className="text-white">Send queries <span className="color_one">today!</span></h3>
                        <div className="form-group m-2">
                            <label className="text-white" htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" name="name"/>
                        </div>
                        <div className="form-group m-2">
                            <label className="text-white" htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" name="email"/>
                        </div>
                        <div className="form-group m-2">
                            <label className="text-white" htmlFor="phone">Phone</label>
                            <input type="text" className="form-control" id="phone" name="phone"/>
                        </div>
                        <div className="form-group m-2">
                            <label className="text-white" htmlFor="message">Message</label>
                            <textarea className="form-control" id="message" name="message"></textarea>
                        </div>
                        <button className="send_now">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
   

</section>
<section className="why-choose-us-circle">
<figure className="service-rightlayer mb-0">
            <img src="assets/images/service-leftlayer.png" alt="" className="img-fluid"/>
        </figure>
  <div className="container">
    <div className="why-header">
      <h2>Why Choose Us?</h2>
      <p>Higgsera delivers expert web development solutions tailored to your needs. Let's bring your digital vision to life.</p>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="why-box-circle">
          <figure className="icon-bg-circle">
            <img src="assets/images/service/fast-loading.png" alt="Fast Loading" />
          </figure>
          <h4>Ultra-Fast Performance</h4>
        
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="why-box-circle">
          <figure className="icon-bg-circle">
            <img src="assets/images/service/security.png" alt="Security First" />
          </figure>
          <h4>Top-Tier Security</h4>
        
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="why-box-circle">
          <figure className="icon-bg-circle">
            <img src="assets/images/service/3.png" alt="Scalability" />
          </figure>
          <h4>Scalable Architecture</h4>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="why-box-circle">
          <figure className="icon-bg-circle">
            <img src="assets/images/service/4.png" alt="Customizable Solutions" />
          </figure>
          <h4>Custom Solutions</h4>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="why-box-circle">
          <figure className="icon-bg-circle">
            <img src="assets/images/service/5.png" alt="24/7 Support" />
          </figure>
          <h4>24/7 Support</h4>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="why-box-circle">
          <figure className="icon-bg-circle">
            <img src="assets/images/service/6.png" alt="Innovation" />
          </figure>
          <h4>Innovative Solutions</h4>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>
        </Fragment>

)
}



export default ECommDevelopment; 
