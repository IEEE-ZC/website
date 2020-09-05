/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { JUNIORS } from '../../../EndPoints'
const JuniorTeam = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(JUNIORS)
            .then(res => {
                console.log(res.data);
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <div className="container">
            <section id="testimonials" className="mb-5">


                <h1 className="text-center display-1 mb-5 my-5 pt-5 pb-4 font-weight-bold wow fadeIn" data-wow-delay="0.2s">Our Team</h1>
                <div id="multi-item-example" className="carousel testimonial-carousel slide carousel-multi-item wow fadeIn"
                    data-ride="carousel">
                    {/* <div style={{ top: '0' }} className="controls-top carousel-indicators">
                        <a className="btn-floating light-blue darken-4" href="#multi-item-example" data-slide="prev">
                            <i className="fas fa-chevron-left"></i>
                        </a>
                        <a className="btn-floating light-blue darken-4" href="#multi-item-example" data-slide="next">
                            <i className="fas fa-chevron-right"></i>
                        </a>
                    </div> */}

                    {/* <div style={{ height: "90px" }}> </div> */}
                    <div className="carousel-inner text-center" role="listbox">
                        <div className="carousel-item active">

                            <div className="row">
                                {data !== [] ? data.map(el => {
                                    return (<div key={el.id} className="col-md-4">
                                        <div className="testimonial">

                                            <div className="avatar mx-auto mb-4">
                                                <img style={{ width: '160px', height: '160px' }} src={el.image.name}
                                                    className="rounded-circle img-fluid" />
                                            </div>

                                            <h4 className="font-weight-bold">{el.name}</h4>

                                            <p>
                                                <i className="fas fa-quote-left"></i> {el.job} </p>
                                        </div>

                                    </div>)
                                }) : null}

                            </div>

                        </div>

                       
                    </div>
                </div>
            </section>

        </div>
    )
}

export default JuniorTeam
