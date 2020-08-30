import React from 'react'
import { Link } from 'react-scroll'
const AboutIntro = ({ AboutIntroProps }) => {
    return (
        <>
            <div className="view" style={{ height: '100vh', backgroundImage: AboutIntroProps.img }}>
                <div className="mask rgba-indigo-light">
                    <div className="container h-100 d-flex justify-content-center align-items-center">
                        <div className="row pt-5 mt-3">
                            <div className="col-md-12 wow fadeIn mb-3">
                                <div className="text-center white-text">
                                    <ul className="list-unstyled ">
                                        <li>
                                            <h1 className="display-4 mt-md-5 mt-lg-0 mb-5 font-weight-bold white-text wow fadeIn"
                                                data-wow-delay="0.3s">
                                                <strong>ABOUT US</strong>
                                            </h1>
                                        </li>
                                        <li>
                                            <h5 className="white-text description mb-5 wow fadeIn" data-wow-delay="0.4s">
                                                {AboutIntroProps.text}
                                            </h5>
                                        </li>
                                        <li className="wow fadeIn" data-wow-delay="0.4s">
                                            <Link to="img-text" smooth={true} duration={1000}  className="btn deep-orange pink-gradient btn-rounded btn-lg font-weight-bold">Get Started</Link>
                                            <button className="btn btn-white btn-rounded btn-lg   font-weight-bold ml-lg-0">
                                                <i className="fas fa-play-circle orange-text mr-2" aria-hidden="true"></i> Video</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default AboutIntro