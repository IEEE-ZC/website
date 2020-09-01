/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const WatchUs = () => {
    const WatchUsData = [
        { id: 0, link: 'https://www.youtube.com/watch?v=Fv2-LD0Nbgw', href: '/imgs/watchus/watch1.jpg', active: "active", text: "IEEE'17 Story" },
        { id: 1, link: 'https://www.youtube.com/watch?v=8hLmetqhTZs', color: 'text-dark', href: '/imgs/watchus/watch2.jpg', text: "Future Engineers Camp" },
        { id: 2, link: 'https://www.youtube.com/watch?v=UEAOxT4F43c', href: '/imgs/watchus/watch3.jpg', text: "Walking Robots Competition" },
        { id: 3, link: 'https://www.youtube.com/watch?v=52-cuI-MCSw', href: '/imgs/watchus/watch4.jpg', text: "APPx: Hack your mind" },
    ];


    return (
        <>
            <div style={{ height: "60px" }}></div>

            <h1 className="display-1 mt-5 mb-5 text-center wow fadeInUp" data-wow-delay="0.2s" >Watch Us</h1>

            <div id="watch-us" className="container d-flex justify-content-center ">
                <div id="carousel-thumb" className="col-8 carousel slide  carousel-fade carousel-thumbnails" data-ride="carousel">
                    {/* <!--Slides--> */}
                    <div className="carousel-inner wow fadeInUp" data-wow-delay="0.2s" role="listbox">
                        {WatchUsData.map(el => {
                            return (<div key={el.id} className={`carousel-item ${el.active}`}>
                                <a target="_blank" href={el.link}>
                                    <img className="d-block w-100" src={el.href}
                                    />
                                </a>
                                <div className="carousel-caption">
                                    <h3 className={`h3-responsive mb-2 ${el.color}`}>{el.text}</h3>
                                </div>
                            </div>)
                        })}

                    </div>

                    {/* <!--Controls--> */}
                    <a className="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>

                    <ol className="carousel-indicators">

                        {WatchUsData.map(el => {
                            return (<li key={el.id} data-target="#carousel-thumb" data-slide-to={el.id}>
                                <img src={el.href} width="100" />
                            </li>)
                        })}

                    </ol>
                </div>
            </div>
            <div style={{ height: "60px" }}></div>
        </>
    )
}

export default WatchUs
