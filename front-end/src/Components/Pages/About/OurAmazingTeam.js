/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const OurAmazingTeam = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://sleepy-falls-48407.herokuapp.com/users-infos')
            .then(res => {
                console.log(res.data[0]);
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <div className="container">
                <section class="team-section pb-5 mb-4">
                    <h1 className="text-center display-3 text-uppercase font-weight-bold mb-5 mt-5 pt-4 wow fadeInUp"
                        data-wow-delay="0.2s">Our Amazing Team</h1>


                    <p class="grey-text w-responsive text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.2s">
                        Not Just Friend We are a Family
                    </p>


                    <div class="row mb-lg-4 text-center text-md-left">

                        {data !== [] ? data.map(el => {
                            return (<div ley={el.id} class="col-lg-6 col-md-12 mb-5">

                                <div class="col-md-6 float-left">
                                    <div class="avatar mx-auto white mb-md-0 mb-4">
                                        <img src={el.picture.url} class="rounded z-depth-1"
                                            alt="First sample avatar image" />
                                    </div>
                                </div>

                                <div class="col-md-6 float-right">
                                    <h4>
                                        <strong>{el.name}</strong>
                                    </h4>
                                    <h6 class="font-weight-bold grey-text mb-4">{el.job}</h6>
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
