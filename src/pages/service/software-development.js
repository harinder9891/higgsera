import React, {Fragment, useEffect, useState } from 'react';
import Header from '../header';
import Footer from '../footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Popup from '../popup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
function SoftwareDevelopment(){
    useEffect(() => {
        AOS.init();
      }, []);
      const [isPopupOpen, setIsPopupOpen] = useState(false);    
      const togglePopup = (e) => {
        e.preventDefault(); 
        setIsPopupOpen(!isPopupOpen); 
      };
    return(
        <Fragment>
<div className="sub-banner sub-banner1">
   
    <Header/>
   
    <figure className="banner-circleright mb-0">
        <img src="assets/images/banner-circleright.png" className="img-fluid" alt=""/>
    </figure>
</div>
<section className="software-dev-section">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-5 col-md-12 col-sm-12 col-12" data-aos="fade-right">
                   
                    <div className="banner_content">
                        <figure className="banner-line mb-0"><img src="assets/images/banner-line.png" alt="" className="img-fluid"/></figure>
                        <h6 >TRANSFORMING YOUR APPROACH </h6>
                        <h1 >Innovative Software Solutions</h1>
                        <p>We bring your ideas to life with custom, efficient, and scalable software solutions. Our approach ensures that your project is tailored to meet your specific needs.</p>
                        
                        <a className="get_started button1 text-white text-decoration-none" href="contact.html">Get Started
                            <figure className="mb-0"><img src="assets/images/button-arrow.png" alt="" className="img-fluid"/></figure>
                        </a>
                        <a className="get_started button2 text-white text-decoration-none" href="/contact-us">Contact Us
                            <figure className="mb-0"><img src="assets/images/button-arrow.png" alt="" className="img-fluid"/></figure>
                        </a>
                        <figure className="banner-circleleft mb-0">
                            <img src="assets/images/offer-circleimage.png" className="img-fluid" alt=""/>
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
                       
                        <figure className="banner-circleright mb-0">
                            <img src="assets/images/offer-circleimage.png" className="img-fluid" alt=""/>
                        </figure>
                        <figure className="banner-dotright mb-0">
                            <img src="assets/images/banner-dotright.png" className="img-fluid" alt=""/>
                        </figure>
                    </div>
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
<section className="banner-slider-parent">
{/* <figure className="service-rightlayer mb-0"><img src="assets/images/service-leftlayer.png" alt="" class="img-fluid"/></figure> */}
      <div className="container-fluid">
        <div className="row align-items-center banner-row">

          {/* Left Side */}
          <div className="col-md-4">
            <div className="slider-left">
              <h1>
                Four <span className="red-color">D'</span><span className="lower-case">s</span> of our work Process!
              </h1>

              <div className="d-flex counter-d-flex">
                <h3>0</h3>
                <Swiper
                  direction={'vertical'}
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation={{
                    nextEl: '.slider-next',
                    prevEl: '.slider-previous',
                  }}
                  autoplay={{
                    delay: 3000,                   // Delay between slides in milliseconds (e.g., 3000 = 3 seconds)
                    disableOnInteraction: false,   // Keep autoplay running even after user interaction
                  }}
                  modules={[Navigation, Autoplay]} // Add the required modules
                  className="numbers"
                >
                  <SwiperSlide><h3>1</h3></SwiperSlide>
                  <SwiperSlide><h3>2</h3></SwiperSlide>
                  <SwiperSlide><h3>3</h3></SwiperSlide>
                  <SwiperSlide><h3>4</h3></SwiperSlide>
                </Swiper>
              </div>

            </div>
          </div>

          {/* Center Side */}
          <div className="col-md-4 manage-differ">
          
                <Swiper
                direction={'vertical'}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,                   // Delay between slides in milliseconds (e.g., 3000 = 3 seconds)
                    disableOnInteraction: false,   // Keep autoplay running even after user interaction
                  }}
                  modules={[Navigation, Autoplay]} // Add the required modules
                navigation={{
                  nextEl: '.slider-next',
                  prevEl: '.slider-previous',
                }}
                className="details"
              >
              <SwiperSlide>
                <div className="slider-center">
                  <h2>Discuss</h2>
                  <p>We start by understanding your vision, goals, and requirements through open communication.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-center">
                  <h2>Define</h2>
                  <p>We outline a clear plan with timelines, deliverables, and strategies tailored to your needs.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-center">
                  <h2>Develop</h2>
                  <p>Our team brings the plan to life with robust, scalable, and efficient solutions.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-center">
                  <h2>Deliver</h2>
                  <p>We ensure on-time delivery with thorough testing, ready for launch and long-term success.</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Right Side */}
          <div className="col-md-4 manage-differ">
            <div className="slider-right">
              <img src="assets/images/service/slider-border.png" alt="" className="border-slide" />
              <Swiper
                direction={'vertical'}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,                   // Delay between slides in milliseconds (e.g., 3000 = 3 seconds)
                    disableOnInteraction: false,   // Keep autoplay running even after user interaction
                  }}
                  modules={[Navigation, Autoplay]} // Add the required modules
                navigation={{
                  nextEl: '.slider-next',
                  prevEl: '.slider-previous',
                }}
                className="slide-images"
              >
                <SwiperSlide>
                  <div className="slide-img">
                    <img src="assets/images/service/slider-img.png" alt="img" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-img">
                    <img src="assets/images/service/slider-img2.png" alt="img" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-img">
                    <img src="assets/images/service/slider-img3.png" alt="img" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-img">
                    <img src="assets/images/service/slider-img4.png" alt="img" />
                  </div>
                </SwiperSlide>
              </Swiper>
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
                    <h6>YOUR TECH PARTNER FOR INNOVATION</h6>
                    <h2 className="text-white">LOOKING FOR A CONSULTATION?
                    </h2>
                    <p className="mb-0">Have questions or ready to build powerful software solutions? We're here to help! Reach out to Higgsera for expert services in custom software development, app creation, and scalable tech solutions.</p>
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



export default SoftwareDevelopment; 