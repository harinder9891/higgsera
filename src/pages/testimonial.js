import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

function Testimonial(){
    return(
        <Fragment>
<section className="testimonial-section position-relative">
    <figure className="service-rightlayer mb-0">
        <img src="assets/images/service-leftlayer.png" alt="" className="img-fluid"/>
    </figure>
    <div className="container">
        <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                <div className="testimonial_wrapper position-relative" data-aos="fade-right">
                    <figure className="service-rightcircle mb-0">
                        <img src="assets/images/service-rightcircle.png" alt="" className="img-fluid"/>
                    </figure>
                    <div className="circle_wrapper position-relative">
                        <div className="center-circle">
                            <figure className="testimonial-centerimage mb-0">
                                <img src="assets/images/testimonial-centerimage.png" alt="" className="img-fluid"/>
                            </figure>
                        </div>
                        <figure className="testimonial-image1 position-absolute mb-0">
                            <img src="assets/images/testimonial-image1.png" alt="" className="img-fluid"/>
                        </figure>
                        <figure className="testimonial-image2 position-absolute mb-0">
                            <img src="assets/images/testimonial-image2.png" alt="" className="img-fluid"/>
                        </figure>
                        <figure className="testimonial-image3 position-absolute mb-0">
                            <img src="assets/images/testimonial-image3.png" alt="" className="img-fluid"/>
                        </figure>
                        <figure className="testimonial-image4 position-absolute mb-0">
                            <img src="assets/images/testimonial-image4.png" alt="" className="img-fluid"/>
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
                            <div className="carousel-item active">
                                <div className="testimonial_content">
                                    <div className="content-box">
                                        <p>"HIGGSERA transformed our online presence! Their marketing strategies drove engagement like never before, and our business has grown significantly. Highly recommend!"</p>
                                        <div className="content">
                                            <div className="circle">
                                                <figure className="testimonial-quote mb-0">
                                                    <img src="assets/images/testimonial-quote.png" alt="" className="img-fluid"/>
                                                </figure>
                                            </div>
                                            <div className="designation-outer">
                                                <span>Sarah L., Marketing Director</span>
                                                <p className="text-size-18 mb-0">Happy Client</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="testimonial_content">
                                    <div className="content-box">
                                        <p>"The team at HIGGSERA crafted a stunning website that perfectly reflects our brand. It's user-friendly and has received countless compliments from our clients!"</p>
                                        <div className="content">
                                            <div className="circle">
                                                <figure className="testimonial-quote mb-0">
                                                    <img src="assets/images/testimonial-quote.png" alt="" className="img-fluid"/>
                                                </figure>
                                            </div>
                                            <div className="designation-outer">
                                                <span>James T., CEO</span>
                                                <p className="text-size-18 mb-0">Happy Client</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="testimonial_content">
                                    <div className="content-box">
                                        <p>"We were impressed by HIGGSERA's innovative mobile solutions. Our customers love the enhanced experience, and it has made a huge difference in our sales!"</p>
                                        <div className="content">
                                            <div className="circle">
                                                <figure className="testimonial-quote mb-0">
                                                    <img src="assets/images/testimonial-quote.png" alt="" className="img-fluid"/>
                                                </figure>
                                            </div>
                                            <div className="designation-outer">
                                                <span>Priya M., Operations Manager</span>
                                                <p className="text-size-18 mb-0">Happy Client</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="testimonial_content">
                                    <div className="content-box">
                                        <p>"The visuals HIGGSERA created for our brand truly capture our essence. They understood our vision and brought it to life beautifully!"</p>
                                        <div className="content">
                                            <div className="circle">
                                                <figure className="testimonial-quote mb-0">
                                                    <img src="assets/images/testimonial-quote.png" alt="" className="img-fluid"/>
                                                </figure>
                                            </div>
                                            <div className="designation-outer">
                                                <span>David R., Creative Director</span>
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
    <figure className="service-leftlayer mb-0">
        <img src="assets/images/service-rightlayer.png" alt="" className="img-fluid"/>
    </figure>
</section>

        </Fragment>

       
    )
}

export default Testimonial;