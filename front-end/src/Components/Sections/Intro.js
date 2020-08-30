import React from 'react'
import Video from './video.mp4'
const Intro = ({ IntroProps: { Slogan } }) => {
    return (
        <section className="" id="home">
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

                <div className="container h-100 d-flex justify-content-center align-items-center">

                    <div className="row pt-5 mt-3">

                        <div className="col-md-12 white-text text-center smooth-scroll">

                            <div className="white-text text-center wow fadeInUp">

                                <h3 style={{ marginTop: "200px" }} className="display-1 font-weight-bold text-uppercase">IEEE|ZC</h3>

                                <h5 className="mb-5">{Slogan}</h5>

                                <button className="btn btn-outline-white btn-rounded wow fadeInUp" data-wow-delay="0.2s" href="#about"
                                    data-offset="100"> <span>EXPLORE MORE</span> </button>
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