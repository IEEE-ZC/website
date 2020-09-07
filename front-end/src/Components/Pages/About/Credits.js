/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Credits = ({ CreditsData }) => {
    return (
        <>
            <div className={`col-lg-6 col-md-12 mb-5 wow ${CreditsData && CreditsData.animation}`} data-wow-delay="0.2s">

                <div className="col-md-6 float-left">
                    <div className="avatar mx-auto white mb-md-0 mb-4">
                        <img src={CreditsData && CreditsData.image} className="rounded z-depth-1" alt="First sample avatar image" />
                    </div>
                </div>

                <div className="col-md-6 float-right">
                    <h3 className="text-center">
                        <strong>{CreditsData && CreditsData.name}</strong>
                    </h3>
                    <h6 className="text-center font-weight-bold grey-text mb-4">{CreditsData && CreditsData.job}</h6>
                    <p className="text-center grey-text">{CreditsData && CreditsData.about}</p>

                    <div className='mt-5 text-center'>
                        {CreditsData && CreditsData.socialLinks.map(el => {

                            return (<a key={el.website} href={el.website} target="_blank" className="p-2 m-2 fa-lg fb-ic">
                                <i style={{ color: '#1d2d50' }} className={`${el.icon} fa-2x`}> </i>
                            </a>)
                        })}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Credits
