import React from 'react'
import { Link } from 'react-scroll'

const WIEIntro = ({ WIEIntroProps }) => {
    return (
        <>
            <div className="view" style={{ height: '100vh', backgroundImage: WIEIntroProps.img }}>
                <div className="mask rgba-indigo-light">
                    <div className="container h-100 d-flex justify-content-center align-items-center">
                        <div className="row pt-5 mt-3">
                            <div className="col-md-12 wow fadeIn mb-3">
                                <div className="text-center white-text">
                                    <ul className="list-unstyled ">
                                        <li>
                                            <h1 className="display-2 mt-md-5 mt-lg-0 mb-5 font-weight-bold white-text wow fadeIn"
                                                data-wow-delay="0.3s">
                                                <strong>WIE</strong>
                                            </h1>
                                        </li>
                                        <li>
                                            <h5 className="white-text description mb-5 wow fadeIn" data-wow-delay="0.4s">
                                                {WIEIntroProps.text}
                                            </h5>
                                        </li>
                                        <li className="wow fadeIn" data-wow-delay="0.4s">
                                            <Link to="img-text" smooth={true} duration={1000} className="btn deep-orange pink-gradient btn-rounded btn-lg font-weight-bold">Get Started</Link>
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

export default WIEIntro
