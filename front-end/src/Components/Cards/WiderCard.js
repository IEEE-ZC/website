import React from 'react'

const WiderCard = ({ event }) => {

    return (

        <div className="col-md-4 col-sm-12 mb-4 mt-5  wow fadeInUp" data-wow-delay="0.2s">
            <div style={{ height: "500px" }} className="card card-cascade wider card-transparent">
                {/* <!-- Card image --> */}
                <div className="view view-cascade overlay">
                    <img src={event.imgSource} alt="..." className="card-img-top" />
                    <a href="#!">
                        <div className="mask rgba-white-slight"></div>
                    </a>
                </div>

                {/* <!-- Card content --> */}
                <div className="card-body  card-body-cascade text-center">
                    {/* <!-- Title --> */}
                    <h4 className="card-title"><strong>{event.title}</strong></h4>
                    <h5 className="blue-text"><strong>{event.date}</strong></h5>

                    <p className="card-text">{event.text}</p>

                    <div style={{ position: "absolute", left: "30%", bottom: "5%" }}>
                        {event.eventLinks !== undefined ? event.eventLinks.map(el => {
                            return (<a key={el.website} className={`p-2 m-2 fa-lg ${el.class}`} href={`${el.link}`}><i className={`fab fa-${el.website}`}> </i></a>
                            )
                        }) : null}
                    </div>
                </div>

            </div>

        </div>

    )
}

export default WiderCard
