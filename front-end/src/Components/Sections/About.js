import React from 'react'
import { Link } from 'react-router-dom'
const About = ({ AboutProps }) => {
    return (
        <>
            <div id="about"></div>
            <h1 className="display-1 mt-5 text-center wow fadeInUp" data-wow-delay="0.2s">About</h1>

            <div className="container">
                <div className="row">
                    <div className="view overlay zoom col-md-6 col-sm-12 mb-4 mt-5  wow fadeInUp" data-wow-delay="0.2s">
                        <img className="img-fluid z-depth-1 wow fadeInUp" data-wow-delay="0.2s" style={{ width: '100%' }} src="./imgs/events/appx.jpg" alt="..." />
                        <div class="mask flex-center waves-effect waves-light">
                            <p class="white-text"></p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-4">
                        <h5 className="display-3 text-center mt-5 wow fadeInUp" data-wow-delay="0.2s">{AboutProps.title}</h5>
                        <p className="text-center wow fadeInUp" data-wow-delay="0.2s">{AboutProps.text}</p>
                        <div className="d-flex justify-content-center wow fadeInUp" data-wow-delay="0.3s">
                            <Link to="/about" className="btn blue-gradient waves-effect btn-rounded btn-lg"> <i class="fas fa-heart mr-2"></i> MORE</Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About
