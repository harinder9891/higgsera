import React, {Fragment, useEffect, useState } from 'react';
import Header from '../header';
import Footer from '../footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // If digital.css is in src/assets/css
import Popup from '../popup';
function MaintenanceSupport(){
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
<section className="section-maintenance" >
       <div className="container">
           <div className="row mt-5 pt-5">
            <h1 className="display-3 fw-bold color_one">Together <span className="color_two"> we Grow</span></h1>
               <div className="col-12 col-md-12 col-lg-7 col-xl-7 mt-5">
                   <img className="img-responsive maintenance-img" src="assets/images/maintenance.png"/>
               </div>
               <div className="col-12 col-md-12 col-lg-5 col-xl-5 maintenance-text">
                   <p>There are jobs, and then there are <strong>maintenanceS!</strong>  Work with us to explore new boundaries of your maintenance growth.</p>
					<button className="btn btn_color_one"><a href="application.html">Join Our Team</a></button>
               </div>
           </div>
       </div>
   </section>
   <section className="aboutoffer-section-dev">
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
                            <img src="assets/images/service/building.png" alt="" className="img-fluid"/>
                        </figure> 
                        <div className="wrapper">
                            <h5>Real Estate</h5>
                        </div>
                    </div>  
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <div className="achievement-box box2">
                        <figure className="icon1 achievement-icon">
                            <img src="assets/images/service/weightlifting.png" alt="" className="img-fluid"/>
                        </figure>
                        <div className="wrapper">
                            <h5>Sports&Fitness</h5>
                        </div>
                    </div>  
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <div className="achievement-box box3">
                        <figure className="icon achievement-icon">
                            <img src="assets/images/service/truck.png" alt="" className="img-fluid"/>
                        </figure> 
                        <div className="wrapper">
                                <h5 >Logistics</h5>
                              
                        </div>
                    </div>   
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <div className="achievement-box box4">
                        <figure className="icon1 achievement-icon">
                            <img src="assets/images/service/manufacture.png" alt="" className="img-fluid"/>
                        </figure>
                        <div className="wrapper">
                                <h5 >Manufacturing</h5>
                        </div>
                    </div>  
                </div>
            </div>
            <div className="row">
                <figure className="offer-circleimage mb-0">
                    <img src="assets/images/offer-circleimage.png" alt="" className="img-fluid"/>
                </figure>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <div className="achievement-box box1">
                        <figure className="icon achievement-icon">
                            <img src="assets/images/service/social-mediax.png" alt="" className="img-fluid"/>
                        </figure> 
                        <div className="wrapper">
                            <h5>Media</h5>
                        </div>
                    </div>  
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <div className="achievement-box box2">
                        <figure className="icon1 achievement-icon">
                            <img src="assets/images/service/hypoallergenic.png" alt="" className="img-fluid"/>
                        </figure>
                        <div className="wrapper">
                            <h5>HealthCare</h5>
                        </div>
                    </div>  
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <div className="achievement-box box3">
                        <figure className="icon achievement-icon">
                            <img src="assets/images/service/graduate.png" alt="" className="img-fluid"/>
                        </figure> 
                        <div className="wrapper">
                                <h5>Education</h5>
                             
                        </div>
                    </div>   
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <div className="achievement-box box4">
                        <figure className="icon1 achievement-icon">
                            <img src="assets/images/service/travel.png" alt="" className="img-fluid"/>
                        </figure>
                        <div className="wrapper">
                                <h5>Tourism & Hospitality</h5>
                             
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
                        <img src="assets/images/about-ui-ux-rightcircle.png" alt="" className="img-fluid"/>
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
                        <img src="assets/images/about-ui-ux-rightcircle.png" alt="" className="img-fluid"/>
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



export default MaintenanceSupport; 
