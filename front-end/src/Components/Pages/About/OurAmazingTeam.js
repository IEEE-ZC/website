/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ABOUT_US } from '../../../EndPoints'

const OurAmazingTeam = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(ABOUT_US)
            .then(res => {
                console.log(res.data);
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <div className="container">
                <section className="team-section pb-5 mb-4">
                    <h1 className="text-center display-3 text-uppercase font-weight-bold mb-5 mt-5 pt-4 wow fadeInUp"
                        data-wow-delay="0.2s">Our Amazing Team</h1>


                    <p className="grey-text w-responsive text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.2s">
                        Not Just Friend We are a Family
                    </p>


                    <div className="row mb-lg-4 text-center text-md-left">

                        {data !== [] ? data.map(el => {
                            return (<div key={el.id} className="col-lg-6 col-md-12 mb-5">

                                <div className="col-md-6 float-left">
                                    <div className="avatar mx-auto white mb-md-0 mb-4">
                                        <img src={el.image[0].name} className="rounded z-depth-1"
                                            alt="First sample avatar image" />
                                    </div>
                                </div>

                                <div className="col-md-6 float-right">
                                    <h4>
                                        <strong>{el.name}</strong>
                                    </h4>
                                    <h6 className="font-weight-bold grey-text mb-4">{el.job}</h6>
                                </div>
                            </div>
                            )
                        }) : null}

                    </div>


                </section>

            </div>
        </>
    )
}

export default OurAmazingTeam
