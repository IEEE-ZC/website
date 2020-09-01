import React from 'react'

const CoreCard = ({ CoreCardProps }) => {
    return (
        <div className="col-md-4 col-sm-12 mb-5 wow fadeInUp" data-wow-delay="0.2s">
            <div style={{ height: '400px' }} className={`card ${CoreCardProps.color} card-body  hoverable`}>
                <i className={`fas  ${CoreCardProps.icon} fa-3x mb-4 text-center`} aria-hidden="true"></i>
                <h5 className="font-weight-bold text-uppercase text-center mb-4">{CoreCardProps.title}</h5>
                <p className="dark-grey-text text-center">{CoreCardProps.text}</p>
            </div>
        </div>
    )
}

export default CoreCard
