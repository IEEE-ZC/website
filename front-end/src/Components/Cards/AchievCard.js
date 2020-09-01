import React from 'react'

const AchievCard = ({ card }) => {
    return (
        <div className="col-md-6 col-sm-12 mb-4 mt-5  wow fadeInUp" data-wow-delay="0.2s">

            {/* <!-- Card --> */}
            <div style={{ height: '700px' }} className="card card-cascade hoverable">

                {/* <!-- Card image --> */}
                <div className="view view-cascade overlay">
                    <img src={card.img} className="card-img-top" alt="..." />
                    <a href="!#">
                        <div className="mask rgba-white-slight"></div>
                    </a>
                </div>
                {/* <!-- Card image --> */}

                {/* <!-- Card content --> */}
                <div className="card-body card-body-cascade text-center">
                    {/* <!-- Title --> */}
                    <h4 className="card-title"><strong>{card.title}</strong></h4>
                    <h5 className='blue-text'><strong>{card.year}</strong></h5>

                    <p className="card-text">{card.text}
                    </p>

                    {/* <!-- Facebook --> */}
                    <button className="btn aqua-gradient waves-effect btn-rounded">MORE</button>
                </div>
                {/* <!-- Card content --> */}

            </div>
            {/* <!-- Card --> */}

        </div>
    )
}

export default AchievCard
