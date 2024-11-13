import React, {Fragment, useEffect, useState } from 'react';
import Header from '../header';
import Footer from '../footer';
import AOS from 'aos';
import Popup from '../popup';
import 'aos/dist/aos.css'; // If digital.css is in src/assets/css

function DigitalMarketing(){
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
<section className="digital-marketing-section">
    <figure className="offer-toplayer mb-0">
        <img src="assets/images/offer-toplayer.png" alt="" className="img-fluid"/>
    </figure>
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1 order-2">
                <div className="about_wrapper">
                    <figure className="mb-0 aboutus-image1">
                        <img src="assets/images/service/digital-marketing.png" alt="" className=""/>
                        
                    </figure>
                    <figure className="mb-0 aboutus-image2">
                        <img src="assets/images/service/digital-marketing.gif" alt="" className="img-fluid"/>
                    </figure>
                    <div className="image-circle">
                       
                        <figure className="mb-0 about-imagecircle">
                            <img src="assets/images/service/digi-3.png" alt="" className=""/>
                        </figure>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-1">
                <div className="service_content position-relative" data-aos="fade-right">
                    <figure className="service-rightcircle mb-0">
                        <img src="assets/images/service-rightcircle.png" alt="" className="img-fluid"/>
                    </figure>
                    <h6>Digital Marketing at Higgsera</h6>
                    <h2>Amplifying Your Online Presence</h2>
                    <p>In the ever-evolving digital landscape, Higgsera transforms your brand's vision into impactful marketing strategies. Our expert team harnesses innovative techniques to engage your audience and drive measurable results. </p>
                    <ul className="list-unstyled mb-0">
                        <li className="text"><i className="circle fa-duotone fa-check"></i>Tailored campaigns based on insights.
                        </li>
                        <li className="text"><i className="circle fa-duotone fa-check"></i>Captivating narratives that resonate.</li>
                        <li className="text"><i className="circle fa-duotone fa-check"></i>Boost visibility and organic traffic.</li>
                        <li className="text text1"><i className="circle fa-duotone fa-check"></i>Build community and foster engagement.</li>
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

<section className="pricing-section">
    <figure className="offer-toplayer mb-0">
        <img src="./assets/images/offer-toplayer.png" alt="" className="img-fluid"/>
    </figure>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="pricing_content aos-init aos-animate" data-aos="fade-up">
                    <h6>Digital Marketing Solutions</h6>
                    <h2>Driving Success Across Channels</h2>
                    <p>Unlock the full potential of your brand with our comprehensive suite of digital marketing services tailored to your unique goals.
                    </p>
                    <figure className="offer-circleimage mb-0">
                        <img src="./assets/images/offer-circleimage.png" alt="" className="img-fluid"/>
                    </figure>
                </div>
            </div>
        </div>
        <div className="price-block">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-md-0 mb-4">
                    <div className="price_content">
                        <div className="icon">
                            <figure className="price-basicicon">
                                <img src="./assets/images/service/seo.png" alt="" className="img-fluid"/>
                            </figure>
                        </div>
                        <h4>SEO</h4>
                        <ul className="list-unstyled mb-0">
                            <li className="for-space social-text-size-18">Search engine optimization</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-md-0 mb-4">
                    <div className="price_content">
                        <div className="icon">
                            <figure className="price-silvericon">
                                <img src="./assets/images/service/social-media.png" alt="" className="img-fluid"/>
                            </figure>
                        </div>
                        <h4>SMM</h4>
                        <ul className="list-unstyled mb-0">
                            <li className="for-space social-text-size-18">Social media marketing</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="price_content">
                        <div className="icon">
                            <figure className="price-goldicon">
                                <img src="./assets/images/service/ppc.png" alt="" className="img-fluid"/>
                            </figure>
                        </div>
                        <h4>PPC</h4>
                        <ul className="list-unstyled mb-0">
                            <li className="for-space social-text-size-18">Pay per click</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-md-0 mb-4">
                    <div className="price_content">
                        <div className="icon">
                            <figure className="price-basicicon">
                                <img src="./assets/images/service/writer.png" alt="" className="img-fluid"/>
                            </figure>
                        </div>
                        <h4>Content Marketing</h4>
                        <ul className="list-unstyled mb-0">
                            <li className="for-space social-text-size-18">Content marketing</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-md-0 mb-4">
                    <div className="price_content">
                        <div className="icon">
                            <figure className="price-silvericon">
                                <img src="./assets/images/service/email.png" alt="" className="img-fluid"/>
                            </figure>
                        </div>
                        <h4>Email Marketing</h4>
                        <ul className="list-unstyled mb-0">
                            <li className="for-space social-text-size-18">Email marketing</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="price_content">
                        <div className="icon">
                            <figure className="price-goldicon">
                                <img src="./assets/images/service/cro.png" alt="" className="img-fluid"/>
                            </figure>
                        </div>
                        <h4>CRO</h4>
                        <ul className="list-unstyled mb-0">
                            <li className="for-space social-text-size-18">Conversion rate optimization</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <figure className="offer-bottomlayer mb-0">
        <img src="./assets/images/offer-bottomlayer.png" alt="" className="img-fluid"/>
    </figure>
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
<figure class="consultation-leftimage mb-0">
        <img src="assets/images/social-sharings.png" alt="" class="img-fluid"/>
    </figure>
    <div className="container">
   
        <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                <div class="consultation_content" >
                    <h6>YOUR PARTNER IN GROWTH</h6>
                    <h2 className="text-white">READY FOR A CONSULTATION?</h2>
                    <p className="mb-0">Get in touch with Higgsera for customized digital marketing strategies that elevate your brand and drive results.</p>
                </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                <div className="consultation_wrapper">
                    <figure className="service-rightcircle mb-0">
                        <img src="assets/images/about-rightcircle.png" alt="" className="img-fluid"/>
                    </figure>
                    <form class="contact_form fw-bold text-center color_two">
                        <h3 class="text-white">Send queries <span class="color_one">today!</span></h3>
                        <div class="form-group m-2">
                            <label class="text-white" for="name">Name</label>
                            <input type="text" class="form-control" id="name" name="name"/>
                        </div>
                        <div class="form-group m-2">
                            <label class="text-white" for="email">Email</label>
                            <input type="email" class="form-control" id="email" name="email"/>
                        </div>
                        <div class="form-group m-2">
                            <label class="text-white" for="phone">Phone</label>
                            <input type="text" class="form-control" id="phone" name="phone"/>
                        </div>
                        <div class="form-group m-2">
                            <label class="text-white" for="message">Message</label>
                            <textarea class="form-control" id="message" name="message"></textarea>
                        </div>
                        <button class="send_now">Submit</button>
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
export default DigitalMarketing; 