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
                    <div style={{ top: '0' }} className="controls-top carousel-indicators">
                        <a className="btn-floating light-blue darken-4" href="#multi-item-example" data-slide="prev">
                            <i className="fas fa-chevron-left"></i>
                        </a>
                        <a className="btn-floating light-blue darken-4" href="#multi-item-example" data-slide="next">
                            <i className="fas fa-chevron-right"></i>
                        </a>
                    </div>

                    <div style={{ height: "90px" }}> </div>
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

                                <div className="col-md-4">
                                    <div className="testimonial">

                                        <div className="avatar mx-auto mb-4">
                                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
                                                className="rounded-circle img-fluid" />
                                        </div>

                                        <h4 className="font-weight-bold">John Doe</h4>

                                        <p>
                                            <i className="fas fa-quote-left"></i> job
                                     </p>


                                    </div>
                                </div>

                                <div className="col-md-4 ">
                                    <div className="testimonial">

                                        <div className="avatar mx-auto mb-4">
                                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                                                className="rounded-circle img-fluid" />
                                        </div>

                                        <h4 className="font-weight-bold">Abbey Clark</h4>

                                        <p>
                                            <i className="fas fa-quote-left"></i> test</p>
                                    </div>
                                </div>


                            </div>

                        </div>

                        <div className="carousel-item">
                            <div className='row'>

                                <div className="col-md-4">

                                    <div className="testimonial">

                                        <div className="avatar mx-auto mb-4">
                                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg"
                                                className="rounded-circle img-fluid" />
                                        </div>

                                        <h4 className="font-weight-bold">Blake Dabney</h4>

                                        <p>
                                            <i className="fas fa-quote-left"></i> test</p>


                                    </div>

                                </div>

                                <div className="col-md-4 ">
                                    <div className="testimonial">

                                        <div className="avatar mx-auto mb-4">
                                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(6).jpg"
                                                className="rounded-circle img-fluid" />
                                        </div>

                                        <h4 className="font-weight-bold">Andrea Clay</h4>

                                        <p>
                                            <i className="fas fa-quote-left"></i> test</p>


                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="testimonial">

                                        <div className="avatar mx-auto mb-4">
                                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(7).jpg"
                                                className="rounded-circle img-fluid" />
                                        </div>

                                        <h4 className="font-weight-bold">Cami Gosse</h4>

                                        <p>
                                            <i className="fas fa-quote-left"></i>te</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="carousel-item ">
                            <div className="row">
                                <div className="col-md-4">

                                    <div className="testimonial">

                                        <div className="avatar mx-auto mb-4">
                                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                                                className="rounded-circle img-fluid" />
                                        </div>

                                        <h4 className="font-weight-bold">Bobby Haley</h4>

                                        <p>
                                            <i className="fas fa-quote-left"></i> yes</p>
                                    </div>

                                </div>

                                <div className="col-md-4">
                                    <div className="testimonial">

                                        <div className="avatar mx-auto mb-4">
                                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                                                className="rounded-circle img-fluid" />
                                        </div>

                                        <h4 className="font-weight-bold">Elisa Janson</h4>

                                        <p><i className="fas fa-quote-left"></i> tesw </p>

                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="testimonial">
                                        <div className="avatar mx-auto mb-4">
                                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                                                className="rounded-circle img-fluid" />
                                        </div>
                                        <h4 className="font-weight-bold">Robert Jacobs</h4>

                                        <p>
                                            <i className="fas fa-quote-left"></i> uu</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default JuniorTeam
