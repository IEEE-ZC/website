/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Footer = () => {
    return (
        <div style={{ backgroundColor: 'rgb(243, 243, 245)' }}>
            <section id="contact-us" className="section container pb-5 mb-5" >
                <div style={{ height: "60px" }}></div>
                <h1 className="display-1 mt-5 mb-5 text-center wow fadeInUp" data-wow-delay="0.2s">Contact Us</h1>
                <div style={{ height: "40px" }}></div>
                <div className="row">
                    <div className="col-lg-5 mb-2  wow fadeInUp" data-wow-delay="0.2s">
                        <div className="card">
                            <div className="card-body">
                                <div className="form-header primary-color">
                                    <h3><i className="fas fa-envelope"></i> Write to us</h3>
                                </div>
                                <b />
                                <form>
                                    <div className="md-form">
                                        <i className="fas fa-user prefix"></i>
                                        <input name='name' type="text" required id="form3" className="form-control" />
                                        <label htmlFor="form3">Your Name</label>

                                    </div>

                                    <div className="md-form">

                                        <i className="fas fa-envelope prefix"></i>

                                        <input name='email' type="email" required id="form2" className="form-control" />

                                        <label htmlFor="form2">Your Email</label>

                                    </div>

                                    <div className="md-form">

                                        <i className="fas fa-tag prefix"></i>

                                        <input required name='subject' type="text" id="form32" className="form-control" />

                                        <label htmlFor="form32">Subject</label>

                                    </div>

                                    <div className="md-form">

                                        <i className="fas fa-pencil-alt prefix"></i>

                                        <textarea required name='message' type="text" id="form8" className="md-textarea form-control" rows="3"></textarea>

                                        <label htmlFor="form8"> Your Message</label>

                                    </div>

                                    <div className="text-center">

                                        <button className="btn btn-rounded btn-outline-blue waves-effect">Send <i className="far fa-paper-plane"></i></button>

                                    </div>
                                </form>

                            </div>

                        </div>

                    </div>

                    <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.2s">

                        {/* <!-- Google map --> */}
                        <div id="map-container-google-1" className="z-depth-1-half map-container wow fadeInUp mb-5" data-wow-delay="0.2s" style={{ height: "400px" }}>

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.325794257517!2d31.064643115112684!3d29.94130618191987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145851c4e4764643%3A0xc68aa33599a96301!2sZewail%20City%20of%20Science%20and%20Technology!5e0!3m2!1sen!2seg!4v1598995844270!5m2!1sen!2seg" frameBorder="0"
                                // eslint-disable-next-line react/style-prop-object
                                style={{ width: '100%', height: '100%', border: "0" }} allowFullScreen></iframe>
                        </div>
                        <b />


                        <div className="row text-center mt-1">
                            <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                                <a className=" mb-2 btn-floating btn-secondary"><i className="fas fa-map-marker-alt"></i></a>

                                <p>Giza Governorate, October</p>

                                <p>Egypt</p>

                            </div>

                            <div className="col-md-4">

                                <a className="mb-2 btn-floating btn-secondary"><i className="fas fa-phone"></i></a>

                                <p>+20 238540400</p>

                                <p>Mon - Fri, 8:00-22:00</p>

                            </div>

                            <div className="col-md-4">

                                <a className="mb-2 btn-floating btn-secondary"><i className="fas fa-envelope"></i></a>

                                <p>ieee@zewailcity.edu.eg</p>



                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </div>
    )
}

export default Footer
