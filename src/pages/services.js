import React, {Fragment,useEffect} from 'react';
import Header from './header';
import Footer from './footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Services(){
    useEffect(() => {
        AOS.init();
      }, []);
    return(
        <Fragment>
            <div className="sub-banner sub-banner4">
    <figure className="sub-bannerleftlayer mb-0">
        <img src="assets/images/sub-bannerleftlayer.png" alt="" className="img-fluid"/>
    </figure>
    <Header/>
    <section className="banner-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="banner_content" data-aos="fade-up">
                        <figure className="service-rightcircle mb-0">
                            <img src="assets/images/service-rightcircle.png" alt="" className="img-fluid"/>
                        </figure>
                        <h1 className="text-white">Our Services</h1>
                        <p>Eoidunt eget semper nec ruam sed hendrerit morbi ac feliseao augue pellentesue morbi acer.</p>
                        <div className="box">
                            <span className="mb-0">Home</span>
                            <figure className="mb-0 arrow"><img src="assets/images/button-arrow.png" alt="" className="img-fluid"/></figure>
                            <span className="mb-0 box_span">Services</span>
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
<section className="servicepage-section service-section">
    <figure className="service-leftlayer mb-0">
        <img src="assets/images/service-leftlayer.png" alt="" className="img-fluid"/>
    </figure>
    <figure className="service-dotimage mb-0">
        <img src="assets/images/service-dotimage.png" alt="" className="img-fluid"/>
    </figure>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="servicepage_content" data-aos="fade-right">
                    <h6>Our Sevrices</h6>
                    <h2>BEST IT SOLUTION Services</h2>
                    <p>Dursus mal suada faci lisis lorem ipsum dolarorit more ame ion consectetur elit vesti at bulum nec
                        odio aea the dumm recreo that dolocons.</p>
                    <figure className="offer-circleimage mb-0">
                        <img src="assets/images/offer-circleimage.png" alt="" className="img-fluid"/>
                    </figure>
                </div>
            </div>
        </div>
        <div className="service_contentbox">
            <div className="row">
                <div className="owl-carousel owl-theme">
                    <div className="item">
                        <div className="service-box box-mb">
                            <figure className="service-marketicon">
                                <img src="assets/images/service-marketicon.png" alt="" className="img-fluid"/>
                            </figure>
                            <h4>Digital Marketing</h4>
                            <p className="text-size-18">Nostrum exercitationem ae ullam corporis suscipit labo riosam aliruiea.</p>
                            <a className="arrow text-decoration-none" href="service.html"><i className="circle fa-thin fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="service-box box-mb">
                            <figure className="service-producticon">
                                <img src="assets/images/service-producticon.png" alt="" className="img-fluid"/>
                            </figure>
                            <h4>Product Development</h4>
                            <p className="text-size-18">Nostrum exercitationem ae ullam corporis suscipit labo riosam aliruiea.</p>
                            <a className="arrow text-decoration-none" href="service.html"><i className="circle fa-thin fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="service-box">
                            <figure className="service-designicon">
                                <img src="assets/images/service-designicon.png" alt="" className="img-fluid"/>
                            </figure>
                            <h4>Ui/Ux Designing</h4>
                            <p className="text-size-18">Nostrum exercitationem ae ullam corporis suscipit labo riosam aliruiea.</p>
                            <a className="arrow text-decoration-none" href="service.html"><i className="circle fa-thin fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="service-box">
                            <figure className="service-dataicon">
                                <img src="assets/images/service-dataicon.png" alt="" className="img-fluid"/>
                            </figure>
                            <h4>Data Analysis</h4>
                            <p className="text-size-18">Nostrum exercitationem ae ullam corporis suscipit labo riosam aliruiea.</p>
                            <a className="arrow text-decoration-none" href="service.html"><i className="circle fa-thin fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="service-box box-mb">
                            <figure className="service-marketicon">
                                <img src="assets/images/service-marketicon.png" alt="" className="img-fluid"/>
                            </figure> 
                            <h4>Digital Marketing</h4>
                            <p className="text-size-18">Nostrum exercitationem ae ullam corporis suscipit labo riosam aliruiea.</p>
                            <a className="arrow text-decoration-none" href="service.html"><i className="circle fa-thin fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="service-box box-mb">
                            <figure className="service-producticon">
                                <img src="assets/images/service-producticon.png" alt="" className="img-fluid"/>
                            </figure>
                            <h4>Product Development</h4>
                            <p className="text-size-18">Nostrum exercitationem ae ullam corporis suscipit labo riosam aliruiea.</p>
                            <a className="arrow text-decoration-none" href="service.html"><i className="circle fa-thin fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="service-box">
                            <figure className="service-designicon">
                                <img src="assets/images/service-designicon.png" alt="" className="img-fluid"/>
                            </figure>
                            <h4>Ui/Ux Designing</h4>
                            <p className="text-size-18">Nostrum exercitationem ae ullam corporis suscipit labo riosam aliruiea.</p>
                            <a className="arrow text-decoration-none" href="service.html"><i className="circle fa-thin fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="service-box">
                            <figure className="service-dataicon">
                                <img src="assets/images/service-dataicon.png" alt="" className="img-fluid"/>
                            </figure>
                            <h4>Data Analysis</h4>
                            <p className="text-size-18">Nostrum exercitationem ae ullam corporis suscipit labo riosam aliruiea.</p>
                            <a className="arrow text-decoration-none" href="service.html"><i className="circle fa-thin fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="service-box box-mb">
                            <figure className="service-marketicon">
                                <img src="assets/images/service-marketicon.png" alt="" className="img-fluid"/>
                            </figure>
                            <h4>Digital Marketing</h4>
                            <p className="text-size-18">Nostrum exercitationem ae ullam corporis suscipit labo riosam aliruiea.</p>
                            <a className="arrow text-decoration-none" href="service.html"><i className="circle fa-thin fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="service-box box-mb">
                            <figure className="service-producticon">
                                <img src="assets/images/service-producticon.png" alt="" className="img-fluid"/>
                            </figure>
                            <h4>Product Development</h4>
                            <p className="text-size-18">Nostrum exercitationem ae ullam corporis suscipit labo riosam aliruiea.</p>
                            <a className="arrow text-decoration-none" href="service.html"><i className="circle fa-thin fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="service-box">
                            <figure className="service-designicon">
                                <img src="assets/images/service-designicon.png" alt="" className="img-fluid"/>
                            </figure>
                            <h4>Ui/Ux Designing</h4>
                            <p className="text-size-18">Nostrum exercitationem ae ullam corporis suscipit labo riosam aliruiea.</p>
                            <a className="arrow text-decoration-none" href="service.html"><i className="circle fa-thin fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="service-box">
                            <figure className="service-dataicon">
                                <img src="assets/images/service-dataicon.png" alt="" className="img-fluid"/>
                            </figure>
                            <h4>Data Analysis</h4>
                            <p className="text-size-18">Nostrum exercitationem ae ullam corporis suscipit labo riosam aliruiea.</p>
                            <a className="arrow text-decoration-none" href="service.html"><i className="circle fa-thin fa-arrow-right"></i></a>
                        </div>
                    </div>
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
                    <p>Grursus mal suada faci lisis lorem ipsum dolarorit more ame ion consectetur elit vesti at bulum nec odio aea the dumm recreo that dolocons.</p>
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
<section className="consultation-section">
    <figure className="consultation-leftimage mb-0">
        <img src="assets/images/service-consultationleftimage.png" alt="" className="img-fluid"/>
    </figure>
    <div className="container">
        <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                <div className="consultation_content" data-aos="fade-right">
                    <h6>WE ARE HERE TO guide you</h6>
                    <h2 className="text-white">NEED A CONSULTATION?</h2>
                    <p className="mb-0">Grursus mal suada faci lisis lorem ipsum dolarorit more ame ion consea odio aea the dumm recreo that dolocons.</p>
                </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                <div className="consultation_wrapper">
                    <figure className="service-rightcircle mb-0">
                        <img src="assets/images/service-rightcircle.png" alt="" className="img-fluid"/>
                    </figure>
                    <a className="get_started button1 text-white text-decoration-none" href="about.html">Get a Quote
                        <figure className="mb-0"><img src="assets/images/button-arrow.png" alt="" className="img-fluid"/></figure>
                    </a>
                    <a className="get_started button2 text-white text-decoration-none" href="contact.html">Contact Us
                        <figure className="mb-0"><img src="assets/images/button-arrow.png" alt="" className="img-fluid"/></figure>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
<div className="vedio-section">
    <figure className="service-rightlayer mb-0">
        <img src="assets/images/service-leftlayer.png" alt="" className="img-fluid"/>
    </figure>
    <div className="container">
        <div className="row position-relative" data-aos="fade-up">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="position-relative">
                    <figure className="mb-0 servicepage-dotimage">
                        <img src="assets/images/service-dotimage.png" alt="" className="img-fluid"/>
                    </figure>
                    <figure className="mb-0 service-vedioimage">
                        <img src="assets/images/service-vedioimage.jpg" alt="" className="img-fluid"/>
                    </figure>
                    <a className="popup-vimeo" href="https://video-previews.elements.envatousercontent.com/h264-video-previews/d1c81f1e-849f-4d45-ae57-b61c2f5db34a/25628048.mp4">
                        <div className="vedio-circle">
                            <figure className="mb-0 service-vedioicon">
                                <img className="thumb img-fluid" style={{cursor: 'pointer'}} src="assets/images/service-vedioicon.png" alt=""/>
                            </figure>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <figure className="service-leftlayer mb-0">
        <img src="assets/images/service-rightlayer.png" alt="" className="img-fluid"/>
    </figure>
</div>
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
            <Footer/>
        </Fragment>
    )
}
export default Services; 