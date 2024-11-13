import React, {Fragment, useEffect, useState } from 'react';
import Header from '../header';
import Footer from '../footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Popup from '../popup';

function ItConsulting(){
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
<section className="section1-bussiness-c h-100">
        <div className="container-fluid">
            <div className="row  mt-5">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div className="center-text">
                        <h1 className="display-4 fw-bold text-white">Strategic Business Consulting</h1>
                        <p className="text-white">Our business consulting services empower you to adapt and excel in today’s ever-changing market landscape. We partner with you to navigate and overcome complex challenges, providing tailored strategies that drive growth and success. Together, we’ll transform obstacles into opportunities for your business!</p>
                    </div>
                </div>
                <div className="col-12  col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0">
                    <div className="">
                        <img className="img-responsive" src="assets/images/consultation-1.jpeg"/>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section className="section2-bussiness-c colm-reverse">
        <div className="container-fluid">
            <div className="row">
				<div className="business-consultation colm-reverse">
					<div className="busi-img">
						<img className="img-responsive" src="assets/images/standard_post_img01.jpg"/>
					</div>
					<div className="busi-info align-center">
						<h3>Strategic Business Planning</h3>
                        <p>We collaborate with you to turn your business vision into a comprehensive, goal-oriented strategy. By analyzing data and market trends, we extract valuable insights that inform your decision-making and drive sustainable growth. Let us help you create a roadmap to success!</p>
					</div>
				</div>
            </div>
			
			
			<div className="row">
				<div className="business-consultation">
					<div className="busi-info align-center">
						<h3>Strategic Risk Management</h3>
                        <p>Risk is an inherent part of every business. While it cannot be eliminated, it can be effectively managed and minimized. Our risk management services empower businesses to conduct insightful evaluations, identify potential threats, and develop strategies to mitigate them. We help you stay resilient, ensuring your business is prepared for challenges and ready to seize opportunities.</p>
					</div>
					<div className="busi-img1">
						<img className="img-responsive" src="assets/images/standard_post_img06.jpg"/>
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
    <section className="section2-bussiness-c">
        <div className="container-fluid">
           
			<div className="row">
				<div className="business-consultation colm-reverse">
					<div className="busi-img2">
						<img className="img-responsive" src="assets/images/standard_post_img05.jpg"/>
					</div>
					<div className="busi-info align-center">
						<h3>Business Transformation and Optimization</h3>
                        <p>In today’s dynamic market, sustained growth requires continuous evolution. No matter how far you’ve come, updating and optimizing your business is essential to stay ahead. Backed by data-driven insights, we collaborate with you to identify necessary changes and implement strategic improvements, ensuring your business remains agile and competitive.
                        </p>
					</div>
				</div>
            </div>
			
			<div className="row">
				<div className="business-consultation">
					<div className="busi-info align-center">
						<h3>Organizational Excellence</h3>
                        <p>We help build a framework that ensures your organization operates efficiently and delivers optimal results on time. By aligning processes, resources, and goals, we create sustainable structures that drive performance and unlock new growth opportunities. Our expertise ensures your organization is well-prepared to adapt and thrive in a dynamic market.</p>
					</div>
					<div className="busi-img3">
						<img className="img-responsive" src="assets/images/standard_post_img02.jpg"/>
					</div>
				</div>
            </div>
    </div>
    </section>
<Footer/>
        </Fragment>
    )
}
export default ItConsulting; 