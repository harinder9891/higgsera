import React, {Fragment, useEffect, useState } from 'react';
import Header from '../header';
import Footer from '../footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // If digital.css is in src/assets/css
import Popup from '../popup';
function UiUxDesign(){
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
<section id="home" className="ui-container-fluid uipt-5 hero-header uilightBg section">
    <div className="container uipt-5">
      <div className="row g-5 uipt-5">
        <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
          <div className="btn btn-sm border rounded-pill px-3 mb-3 animated slideInRight">
          Your Vision,  

          </div>
          <h1 className="display-4 mb-4 animated slideInRight fw-bold">
          Our Design – <span>Engaging Interfaces for</span>  Exceptional Experiences
          </h1>
          <p className="mb-4 animated slideInRight">
          Our UI/UX design services bring your ideas to life with visually stunning, intuitive designs that captivate users. We focus on creating seamless journeys, blending creativity with usability to ensure an impactful experience across all devices.
.
          </p>
          <a href="" className="btn btn-primary rounded-pill px-4 animated slideInRight">Read More</a>
        </div>
        <div className="col-lg-6 align-self-end text-center text-lg-end pb-3">
          <img className="img-fluid ui-bounce-object" src="assets/images/offer-image1.png" alt=""/>
        </div>
      </div>
    </div>
  </section>
  <section id="about-ui-ux" className="about-ui-ux-area section-padding section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 order-lg-2 animated slideInUp" data-aos-delay="0.5s">
          <div className="about-ui-ux-content">
            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
              about-ui-ux OUR COMPANY
            </div>
            <h2 className="mb-4">
            User-Centric Experiences

            </h2>
            <p>
            We craft designs centered around user needs, ensuring functionality and enjoyment with every interaction.

            </p>
            <ul className="list">
              <li>
                <i className="fas fa-check"></i>
                Fluid performance on all screens.
              </li>
              <li>
                <i className="fas fa-check"></i>
                Reflecting your unique brand identity.

              </li>
              <li>
                <i className="fas fa-check"></i>
                Intuitive layouts that boost engagement.

              </li>
            </ul>
            <div className="about-ui-ux-btn">
              <a href="#contacts" className="btn btn-primary rounded-pill px-4">LEARN MORE</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="about-ui-ux-image">
            <img src="assets/images/about-image1.jpg" alt="image" className="bounce-object"/>
          </div>
        </div>
      </div>
    </div>
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
<section id="services" className="services-section lightBg section-padding section">
    <div className="container py-5">
      <div className="row align-items-start">
        <div className="col-lg-5 sticky mb-4 aos fadeIn" data-aos-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn'}}>
          <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
            Our Services
          </div>
          <h2 className="mb-4">How Our UI/UX Services Can Transform Your Product
          </h2>
          <p className="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
            sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
            et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
            tempor eirmod magna dolore erat amet
          </p>
        </div>
        <div className="col-lg-7">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="row g-4">
                <div className="col-12 aos fadeIn" data-aos-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn',marginBottom: '19px'}}>
                  <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                    <div className="service-icon btn-square">
                      <i className="fas fa-chart-area fa-2x"></i>
                    </div>
                    <h5 className="mb-3">Personalized Innovation
                    </h5>
                    <p>
                    Custom-tailored experiences that resonate with your audience.
Designs that enhance usability and engagement.

                    </p>
                  </div>
                </div>
                <div className="col-12 aos fadeIn" data-aos-delay="0.5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeIn',marginBottom: '19px'}}>
                  <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                    <div className="service-icon btn-square">
                      <i className="fas fa-chart-pie fa-2x"></i>
                    </div>
                    <h5 className="mb-3">Cross-Platform Consistency</h5>
                    <p>
                    Cohesive, high-quality experiences on any device.
                    Scalable designs adaptable to future growth.
                    </p>
                  </div>
                </div>
                <div className="col-12 aos fadeIn" data-aos-delay="0.5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeIn',marginBottom: '19px'}}>
                  <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                    <div className="service-icon btn-square">
                      <i className="fas fa-share-alt fa-2x"></i>
                    </div>
                    <h5 className="mb-3">Ongoing Optimization
                    </h5>
                    <p>
                    From ideation to testing and refinement, we support your success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 pt-md-4">
              <div className="row g-4">
                <div className="col-12 aos fadeIn" data-aos-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeIn',marginBottom: '19px'}}>
                  <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                    <div className="service-icon btn-square">
                      <i className="fas fa-rocket fa-2x"></i>
                    </div>
                    <h5 className="mb-3">Strategic Innovation
                    </h5>
                    <p>
                    From concept to execution, we deliver designs that align with your unique goals.

                    </p>
                  </div>
                </div>
                <div className="col-12 aos fadeIn" data-aos-delay="0.7s" style={{visibility: 'visible', animationDelay: '0.7s', animationName: 'fadeIn',marginBottom: '19px'}}>
                  <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                    <div className="service-icon btn-square">
                      <i className="fas fa-search-location fa-2x"></i>
                    </div>
                    <h5 className="mb-3">Adaptive Flexibility
                    </h5>
                    <p>
                    Ready for growth with designs that adapt to new features and market trends.

                    </p>
                  </div>
                </div>
                <div className="col-12 aos fadeIn" data-aos-delay="0.7s" style={{visibility: 'visible', animationDelay: '0.7s', animationName: 'fadeIn',marginBottom: '19px'}}>
                  <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                    <div className="service-icon btn-square">
                      <i className="fas fa-paper-plane fa-2x"></i>
                    </div>
                    <h5 className="mb-3">Holistic Support
                    </h5>
                    <p>
                    Proactive improvements based on emerging best practices.

                    </p>
                  </div>
                </div>
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
                    <h2>User-Focused Design Solutions</h2>
                    <p>Transforming ideas into engaging, intuitive digital experiences.
Tailored to elevate user satisfaction and interaction on every platform.
</p>
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



export default UiUxDesign; 
