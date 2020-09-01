import React from 'react'
import Video from './video.mp4'
import { Link } from 'react-scroll'
const Intro = ({ IntroProps: { Slogan } }) => {
    return (
        <section style={{ height: "100vh" }} className="" id="home">
            <video
                autoPlay
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: "-1"
                }} muted loop>

                <source src={Video} type="video/mp4" />

            </video>

            <div className="mask rgba-gradient">

                <div style={{ height: "100vh" }} className="container d-flex justify-content-center align-items-center">

                    <div className="row pt-5 mt-3">

                        <div className="col-md-12 white-text text-center smooth-scroll">

                            <div className="white-text text-center wow fadeInUp">

                                <h3 className="display-1 font-weight-bold text-uppercase">IEEE| Zewail City</h3>

                                <h5 className="mb-5">{Slogan}</h5>

                                <Link to='events' smooth={true} duration={1000} className="btn btn-outline-white btn-rounded wow fadeInUp" data-wow-delay="0.2s" href="#about"
                                    data-offset="100"> <span>EXPLORE MORE</span> </Link>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div style={{ marginTop: '135px' }}></div>
        </section>
    )
}

export default Intro
