import React, {Fragment, useEffect, useState } from 'react';
import Header from '../header';
import Footer from '../footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // If digital.css is in src/assets/css
import Popup from '../popup';
function WebDevelopment(){
    useEffect(() => {
        AOS.init();
      }, []);
      const [isPopupOpen, setIsPopupOpen] = useState(false);    
      const [currentStep, setCurrentStep] = useState(1);
      const togglePopup = (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        setIsPopupOpen(!isPopupOpen); // Toggle the popup open/close state
      };
      useEffect(() => {
        // Automatically move to the next step after 5 seconds (5000 milliseconds)
        const timer = setTimeout(() => {
          if (currentStep < 4) {
            setCurrentStep((prevStep) => prevStep + 1);
          }
        }, 5000);
    
        // Cleanup timer on component unmount
        return () => clearTimeout(timer);
      }, [currentStep]);
    
      const nextStep = () => {
        if (currentStep < 4) {
          setCurrentStep((prevStep) => prevStep + 1);
        }
      };
    
      const prevStep = () => {
        if (currentStep > 1) {
          setCurrentStep((prevStep) => prevStep - 1);
        }
      };
    
      // Function to handle clicking on step titles
      const goToStep = (step) => {
        setCurrentStep(step);
      };
    
    return(
        <Fragment>
<div className="sub-banner sub-banner1">
    
    <Header/>
   
    <figure className="banner-circleright mb-0">
        <img src="assets/images/banner-circleright.png" className="img-fluid" alt=""/>
    </figure>
</div>
<section className="dev-section">
    <figure className="offer-toplayer mb-0">
        <img src="assets/images/offer-toplayer.png" alt="" className="img-fluid"/>
    </figure>
    <div className="container">
        <div className="row" style={{'flex-direction': 'row-reverse'}}>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1 order-2">
                <div className="web_wrapper">
                    <figure className="mb-0 aboutus-image1">
                        <img src="assets/images/service/web-dev.png" alt="" className=""/>
                        
                    </figure>
                   
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-1">
                <div className="service_content position-relative" data-aos="fade-right">
                    <figure className="service-rightcircle mb-0">
                        <img src="assets/images/service-rightcircle.png" alt="" className="img-fluid"/>
                    </figure>
                    <h2 >Transforming Vision into Digital Success</h2>
                    <p >At Higgsera, we turn your vision into reality through intuitive and agile web solutions. Our expert in-house team harnesses cutting-edge technologies to craft websites that align perfectly with your business goals and drive meaningful digital transformation.
                    </p>
                    <ul className="list-unstyled mb-0">
                        <li className="text "><i className="circle fa-duotone fa-check"></i>We focus on your unique business vision and growth.</li>
                        <li className="text "><i className="circle fa-duotone fa-check"></i>From simple web pages to advanced applications.</li>
                        <li className="text "><i className="circle fa-duotone fa-check"></i>With Higgsera, your digital growth is boundless.</li>
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

<section className="aboutoffer-section-dev">
    <figure className="service-rightlayer mb-0">
        <img src="assets/images/service-leftlayer.png" alt="" className="img-fluid"/>
    </figure>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="offer_content">
                <h6>Industries We Serve</h6>
                    <h2>Tailored Solutions for Every Sector</h2>
                    <p>At Higgsera, we specialize in delivering innovative solutions across various industries and technology. Let us help you transform your business and achieve your goals!</p>
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
<section className="stepper-container">
<div className="row">
            <div className="col-12">
                <div className="offer_content">
                    <h2>What We Provide</h2>
                    <p>We follow a meticulous four-step process to ensure the success of your project and your business. Our dedicated team works collaboratively with you at every stage to achieve exceptional results.
                    </p>
                </div>
            </div>
        </div>
  <div className="stepper">
    <div className="steps-container">
      <div className="steps">
        <div 
          className={`step ${currentStep === 1 ? 'active' : ''}`} 
          id="step-1"
          onClick={() => goToStep(1)}
        >
          <div className="step-title">
            <span className="step-icon">
              <i className="fa fa-pencil-alt"></i> {/* Planning Icon */}
            </span>
            <h4 >Planning</h4>
          </div>
        </div>
        <div 
          className={`step ${currentStep === 2 ? 'active' : ''}`} 
          id="step-2"
          onClick={() => goToStep(2)}
        >
          <div className="step-title">
            <span className="step-icon">
              <i className="fa fa-paint-brush"></i> {/* Design Icon */}
            </span>
            <h4 >Design</h4>
          </div>
        </div>
        <div 
          className={`step ${currentStep === 3 ? 'active' : ''}`} 
          id="step-3"
          onClick={() => goToStep(3)}
        >
          <div className="step-title">
            <span className="step-icon">
              <i className="fa fa-code"></i> {/* Development Icon */}
            </span>
            <h4 >Development</h4>
          </div>
        </div>
        <div 
          className={`step ${currentStep === 4 ? 'active' : ''}`} 
          id="step-4"
          onClick={() => goToStep(4)}
        >
          <div className="step-title">
            <span className="step-icon">
              <i className="fa fa-check-circle"></i> {/* Launch Icon */}
            </span>
            <h4 >Launch</h4>
          </div>
        </div>
      </div>
    </div>

    <div className="stepper-content-container">
      {/* Step 1: Planning */}
      {currentStep === 1 && (
        <div className="stepper-content active planning">
          <div className="content-inner">
            <h3>Step 1: Planning</h3>
            <p>
              Identify project requirements, define the scope, and set goals.
            </p>
          </div>
        </div>
      )}

      {/* Step 2: Design */}
      {currentStep === 2 && (
        <div className="stepper-content active design">
          <div className="content-inner">
            <h3>Step 2: Design</h3>
            <p>
              Create wireframes and design mockups based on project requirements.
            </p>
          </div>
        </div>
      )}

      {/* Step 3: Development */}
      {currentStep === 3 && (
        <div className="stepper-content active development">
          <div className="content-inner">
            <h3>Step 3: Development</h3>
            <p>
              Write code and build the website according to the design.
            </p>
          </div>
        </div>
      )}

      {/* Step 4: Launch */}
      {currentStep === 4 && (
        <div className="stepper-content active launch">
          <div className="content-inner">
            <h3>Step 4: Launch</h3>
            <p>
              Deploy the website and monitor its performance post-launch.
            </p>
          </div>
        </div>
      )}
    </div>
  </div>
</section>
<section className="dev-service-section">
    <figure className="service-rightlayer mb-0">
            <img src="assets/images/service-leftlayer.png" alt="" className="img-fluid"/>
        </figure>
    <div className="container">
        <div className="section-header">
            <h2 data-aos-delay=".7s">Enhance Your Business with Our Web Development Services</h2>
            <p className="section-description aos fadeInUp" data-aos-delay=".9s">We provide innovative solutions to turn your ideas into profitable business ventures</p>
        </div>
        <ul className="dev-service-list">
            <li className="dev-service-item aos fadeInDown" data-aos-delay=".2s">
            <i className="fas fa-laptop-code dev-service-icon"></i>
                <h5 className="dev-service-title">Web Portal Development</h5>
                <p className="dev-service-description">Build customer-centric web portals with all essential features to grow your business digitally.</p>
            </li>
            <li className="dev-service-item aos fadeInDown" data-aos-delay=".3s">
            <i className="fas fa-tools dev-service-icon"></i>
                <h5 className="dev-service-title">Custom Web Development</h5>
                <p className="dev-service-description">Create fully customized websites that streamline business processes and increase revenue.</p>
            </li>
            <li className="dev-service-item aos fadeInDown" data-aos-delay=".4s">
            <i className="fas fa-shopping-cart dev-service-icon"></i>
                <h5 className="dev-service-title">E-commerce Development</h5>
                <p className="dev-service-description">Deliver seamless shopping experiences and drive sales with our e-commerce solutions.</p>
            </li>
            <li className="dev-service-item aos fadeInDown" data-aos-delay=".5s">
            <i className="fas fa-cogs dev-service-icon"></i>
                <h5 className="dev-service-title">CMS Web Development</h5>
                <p className="dev-service-description">Create easy-to-manage CMS applications for smooth digital content management.</p>
            </li>
            <li className="dev-service-item aos fadeInDown" data-aos-delay=".6s">
            <i className="fas fa-building dev-service-icon"></i>
                <h5 className="dev-service-title">Enterprise Web Development</h5>
                <p className="dev-service-description">Empower your team with efficient ERP web solutions for enhanced productivity and results.</p>
            </li>
            <li className="dev-service-item aos fadeInDown" data-aos-delay=".7s">
            <i className="fas fa-life-ring dev-service-icon"></i>
                <h5 className="dev-service-title">Support & Maintenance</h5>
                <p className="dev-service-description">Get top-notch support and maintenance to ensure your website's performance and security.</p>
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
<section className="tech-stack">
<figure className="offer-toplayer mb-0"><img src="assets/images/offer-toplayer.png" alt="" className="img-fluid"/></figure>
    <div className="container">
    <div class="row">
            <div class="col-12">
                <div class="offer_content">
                         <h6>Our Expertise</h6>
                         <h2 >Some of Our Technologies</h2>
                         <p >We leverage cutting-edge technologies to build dynamic websites and applications. Our expertise ensures that your project is both innovative and effective.</p>
                </div>
            </div>
        </div>
        <div className="row">
       
            <div className="col-12">
                <div className="tech-stack-logo">
                    <span>
                        <img src="assets/images/techs/php.png" className="img-responsive tech-icon" alt="PHP"/>
                       
                    </span>
                    <span>
                        <img src="assets/images/techs/python.png" className="img-responsive tech-icon" alt="Python"/>
                        
                    </span>
                    <span>
                        <img src="assets/images/techs/dotnet.svg" className="img-responsive tech-icon" alt=".NET"/>
                     
                    </span>
                    <span>
                        <img src="assets/images/techs/angular.png" className="img-responsive tech-icon" alt="JavaScript"/>
                      
                    </span>
                    <span>
                        <img src="assets/images/techs/react.png" className="img-responsive tech-icon" alt="JavaScript"/>
                       
                    </span>
                   
                </div>
            </div>
        </div>
        <div className="row">
       
            <div className="col-12">
                <div className="tech-stack-logo">
                  
                    <span>
                        <img src="assets/images/techs/js.png" className="img-responsive tech-icon" alt="JavaScript"/>
                       
                    </span>
                    <span>
                        <img src="assets/images/techs/laravel.png" className="img-responsive tech-icon" alt="JavaScript"/>
                     
                    </span>
                    <span>
                        <img src="assets/images/techs/codeigniter.png" className="img-responsive tech-icon" alt="JavaScript"/>
                      
                    </span>
                    <span>
                        <img src="assets/images/techs/wordpress.png" className="img-responsive tech-icon" alt="JavaScript"/>
                     
                    </span>
                    <span>
                        <img src="assets/images/techs/shopify.png" className="img-responsive tech-icon" alt="JavaScript"/>
                     
                    </span>
                   
                </div>
            </div>
        </div>
    </div>
    <figure className="offer-bottomlayer mb-0"><img src="assets/images/offer-bottomlayer.png" alt="" className="img-fluid"/></figure>
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

<section className="consultation-section contact-query-digi">
<figure className="consultation-leftimage mb-0">
        <img src="assets/images/social-sharings.png" alt="" className="img-fluid"/>
    </figure>
    <div className="container">
   
        <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                <div className="consultation_content" >
                    <h6>WE ARE HERE TO guide you</h6>
                    <h2 className="text-white">BOOK A DEMO!</h2>
                    <p className="mb-0">Have questions or ready to elevate your web presence? We're here to help! Reach out to Higgsera for expert web development solutions tailored to your needs. Let's explore how we can transform your digital vision into reality!</p>
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


<section className="testimonial-section position-relative">
    <figure className="service-leftlayer mb-0">
        <img src="./assets/images/service-leftlayer.png" alt="" className="img-fluid"/>
    </figure>
    <div className="container">
        <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                <div className="testimonial_wrapper position-relative">
                    <figure className="service-rightcircle mb-0">
                        <img src="./assets/images/service-rightcircle.png" alt="" className="img-fluid"/>
                    </figure>
                    <div className="circle_wrapper position-relative aos-init aos-animate" data-aos="fade-right">
                        <div className="center-circle">
                            <figure className="testimonial-centerimage mb-0">
                                <img src="./assets/images/service/social-small-img.png" alt="" className="img-fluid"/>
                            </figure>
                        </div>
                        <figure className="testimonial-image1 position-absolute mb-0">
                            <img src="./assets/images/service/social-icon.png" alt="" className="img-fluid"/>
                        </figure>
                        <figure className="testimonial-image2 position-absolute mb-0">
                            <img src="./assets/images/service/social-bulb.png" alt="" className="img-fluid"/>
                        </figure>
                        <figure className="testimonial-image3 position-absolute mb-0">
                            <img src="./assets/images/service/digital-icon.png" alt="" className="img-fluid"/>
                        </figure>
                        <figure className="testimonial-image4 position-absolute mb-0">
                            <img src="./assets/images/service/social-icons.png" alt="" className="img-fluid"/>
                        </figure>
                    </div>
                </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                <div className="testimonial_contentwrapper">
                    <div className="heading">
                        <h6>TESTIMONIALS</h6>
                        <h2>What Our Customers Have To Say</h2>
                    </div>
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item">
                                <div className="testimonial_content">
                                    <div className="content-box">
                                        <p>Nemo enim ipsam voluptatem quia voluptas sit asperna aut odit aut 
                                            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem 
                                            sequi nesciuntporro quisuam est, rui dolorem ipsum quia dolor sit amet, 
                                            consectetur adieisci velit sed ruia.</p>
                                        <div className="content">
                                            <div className="circle">
                                                <figure className="testimonial-quote mb-0">
                                                    <img src="./assets/images/testimonial-quote.png" alt="" className="img-fluid"/>
                                                </figure>
                                            </div>
                                            <div className="designation-outer">
                                                <span>Kevin James</span>
                                                <p className="text-size-18 mb-0">Happy Client</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item active">
                                <div className="testimonial_content">
                                    <div className="content-box">
                                        <p>Nemo enim ipsam voluptatem quia voluptas sit asperna aut odit aut 
                                            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem 
                                            sequi nesciuntporro quisuam est, rui dolorem ipsum quia dolor sit amet, 
                                            consectetur adieisci velit sed ruia.</p>
                                        <div className="content">
                                            <div className="circle">
                                                <figure className="testimonial-quote mb-0">
                                                    <img src="./assets/images/testimonial-quote.png" alt="" className="img-fluid"/>
                                                </figure>
                                            </div>
                                            <div className="designation-outer">
                                                <span>Kevin James</span>
                                                <p className="text-size-18 mb-0">Happy Client</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pagination-outer">
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <i className="fa-solid fa-arrow-left"></i>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <i className="fa-solid fa-arrow-right-long"></i>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <figure className="service-rightlayer mb-0">
        <img src="./assets/images/service-rightlayer.png" alt="" className="img-fluid"/>
    </figure>
</section>


<Footer/>
        </Fragment>

)
}
export default WebDevelopment; 