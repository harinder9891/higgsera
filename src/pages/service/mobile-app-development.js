import React, {Fragment, useEffect, useState } from 'react';
import Header from '../header';
import Footer from '../footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // If digital.css is in src/assets/css
import Popup from '../popup';
function MobileAppDevelopment(){
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
<section className="app-dev-section">
    <figure className="offer-toplayer mb-0">
        <img src="./assets/images/offer-toplayer.png" alt="" className="img-fluid"/>
    </figure>
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="expert_content aos-init aos-animate" data-aos="fade-right">
                    <h2 >Your Vision, Our Expertise – Mobile Apps that Engage</h2>
                    <p className="text1 ">Our mobile app development service brings your ideas to life with intuitive, user-friendly apps for both iOS and Android. We design apps with scalable architecture and secure frameworks to ensure lasting success and smooth performance. Whether for business or consumer use, we deliver apps that make a meaningful impact.</p>
                    <a className="get_started text-white text-decoration-none" href="./team.html">Get Started
                        <figure className="mb-0"><img src="./assets/images/button-arrow.png" alt="" className="img-fluid"/></figure>
                    </a>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="expert_wrapper">
                    <figure className="offer-circleimage mb-0">
                        <img src="./assets/images/offer-circleimage.png" alt="" className="img-fluid"/>
                    </figure>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="team-box">
                                <figure>
                                    <img src="./assets/images/service/app1.png" alt="" className="img-fluid"/>
                                </figure>
                               
                            </div>   
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="team-box">
                                <figure>
                                    <img src="./assets/images/service/app2.png" alt="" className="img-fluid"/>
                                </figure>
                               
                            </div>
                        </div>
                    </div>
                    <div className="team-downcontent">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="team-box">
                                    <figure>
                                        <img src="./assets/images/service/app3.png" alt="" className="img-fluid"/>
                                    </figure>
                                   
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="team-box">
                                    <figure>
                                        <img src="./assets/images/service/app4.png" alt="" className="img-fluid"/>
                                    </figure>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <figure className="offer-bottomlayer mb-0">
        <img src="./assets/images/offer-bottomlayer.png" alt="" className="img-fluid"/>
    </figure>
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
<section className="mob-app-service-section">
    
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
                                <h4>Customized Innovation</h4>
                                <p className="text-size-18">Apps tailored to your vision.
Targeted features for unique business needs.
Interactive, user-focused designs.
Smooth performance for higher engagement.
</p>
                                <a className="arrow text-decoration-none" href="service.html"><i className="circle fa-thin fa-arrow-right"></i></a>
                            </div>   
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="box-top">
                                <div className="service-box box-mb">
                                    <figure className="service-producticon">
                                        <img src="assets/images/service-producticon.png" alt="" className="img-fluid"/>
                                    </figure>
                                    <h4>Future-Proof Scaling
                                    </h4>
                                    <p className="text-size-18">Cross-platform compatibility for wider reach.
Scalable solutions for business growth.
Flexible, adaptable frameworks.
Easily adjustable to market demands.</p>
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
                                <h4>Comprehensive Support
                                </h4>
                                <p className="text-size-18">Stunning visuals and creative designs that leave a lasting impression.Full support from idea to launch and beyond.
Regular updates and new features.
Proactive issue resolution.
Data security at the forefront.</p>
                                <a className="arrow text-decoration-none" href="service.html"><i className="circle fa-thin fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="box-top">
                                <div className="service-box">
                                    <figure className="service-dataicon">
                                        <img src="assets/images/service-dataicon.png" alt="" className="img-fluid"/>
                                    </figure>
                                    <h4>Data-Driven Insights</h4>
                                    <p className="text-size-18">Leverage insights for informed app improvements.
Optimize features based on actual usage patterns.
Fine-tune app performance with actionable data.
Drive app success through data-backed decisions.
</p>
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
                    <h2>Building Intuitive, Scalable Apps to Drive Engagement and Growth</h2>
                    <p>We create visually stunning and intuitive web and mobile app designs that captivate users and enhance engagement. Our design approach focuses on blending creativity with functionality, ensuring smooth user journeys across all platforms.</p>
                    <ul className="list-unstyled mb-0">
                        <li className="text"><i className="circle fa-duotone fa-check"></i>Tailored experiences that prioritize user needs.</li>
                        <li className="text"><i className="circle fa-duotone fa-check"></i>Seamless performance across all devices.
                        </li>
                        <li className="text"><i className="circle fa-duotone fa-check"></i>Designs that reflect your brand identity.</li>
                        <li className="text text1"><i className="circle fa-duotone fa-check"></i>Intuitive layouts for better engagement and retention.</li>
                    </ul>
                    <a className="get_started text-white text-decoration-none" href="/services">Get Started
                        <figure className="mb-0"><img src="assets/images/button-arrow.png" alt="" className="img-fluid"/></figure>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="dev-service-section">
    <figure className="service-rightlayer mb-0">
            <img src="assets/images/service-leftlayer.png" alt="" className="img-fluid"/>
        </figure>
    <div className="container">
        <div className="section-header">
            <h2 data-aos-delay=".7s">Empower Your Business with Custom Mobile App Solutions</h2>
            <p className="section-description aos fadeInUp" data-aos-delay=".9s">We craft innovative, user-friendly mobile applications designed to engage and drive growth.
            </p>
        </div>
        <ul className="dev-service-list">
            <li className="dev-service-item aos fadeInDown" data-aos-delay=".2s">
            <i className="fas fa-laptop-code dev-service-icon"></i>
                <h5 className="dev-service-title">Custom Mobile App Development
                </h5>
                <p className="dev-service-description">Build tailored mobile apps that cater to your unique business needs, enhancing user experience and driving performance.
                </p>
            </li>
            <li className="dev-service-item aos fadeInDown" data-aos-delay=".3s">
            <i className="fas fa-tools dev-service-icon"></i>
                <h5 className="dev-service-title">Cross-Platform App Development</h5>
                <p className="dev-service-description">Reach a wider audience with apps designed to work seamlessly across multiple platforms, including iOS and Android.
                </p>
            </li>
            <li className="dev-service-item aos fadeInDown" data-aos-delay=".4s">
            <i className="fas fa-shopping-cart dev-service-icon"></i>
                <h5 className="dev-service-title">Enterprise Mobile Solutions
                </h5>
                <p className="dev-service-description">Create secure, scalable mobile apps that streamline business operations and increase productivity.
                </p>
            </li>
          
          
        </ul>
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



export default MobileAppDevelopment; 