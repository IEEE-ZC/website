import React from 'react'

const ImageText = ({ ImageTextProps }) => {
    return (
        <>
            <section id="img-text" className="mt-5 mb-5 py-3 wow fadeIn" data-wow-delay="0.2s">


                <div className="row pt-2 mt-5">


                    <div className="zoom col-lg-5 mt-5 col-md-12 mb-3 wow fadeIn" data-wow-delay="0.4s">
                        <img src={ImageTextProps.img} style={{
                            filter: 'drop-shadow(0px 1px 6px rgba(0,0,0,0.2))'
                        }} className="img-fluid "
                            alt="..." />
                        <div className="mask flex-center waves-effect waves-light">
                            <p className="white-text"></p>
                        </div>
                    </div>
                    <div className="col-lg-6 ml-auto col-md-12 wow fadeIn" data-wow-delay="0.4s">


                        <h1 className="mb-5 dark-grey-text text-center mt-5 title font-weight-bold wow fadeIn" data-wow-delay="0.2s">
                            <strong>{ImageTextProps.title}</strong>
                        </h1>


                        {/* <p align="justify" className="grey-text">
                            {ImageTextProps.para1}
                        </p>
                        <p align="justify" className="grey-text">
                            {ImageTextProps.para2}
                        </p> */}

                        <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                            <div className="card">
                                <div className="card-header" role="tab" id="headingOne1">
                                    <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                                        aria-controls="collapseOne1">
                                        <h5 className="mb-0">
                                        Zewail City of Science and Technology <i className="fas fa-angle-down rotate-icon"></i>
                                        </h5>
                                    </a>
                                </div>


                                <div id="collapseOne1" className="collapse show" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionEx">
                                    <div className="card-body">
                                        {ImageTextProps.para1}
                                    </div>
                                </div>

                            </div>

                            <div className="card">
                                <div className="card-header" role="tab" id="headingTwo2">
                                    <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
                                        aria-expanded="false" aria-controls="collapseTwo2">
                                        <h5 className="mb-0">
                                        IEEE Zewail City community  <i className="fas fa-angle-down rotate-icon"></i>
                                        </h5>
                                    </a>
                                </div>


                                <div id="collapseTwo2" className="collapse" role="tabpanel" aria-labelledby="headingTwo2" data-parent="#accordionEx">
                                    <div className="card-body">
                                        {ImageTextProps.para2}
                                    </div>
                                </div>

                            </div>

                        </div>



                    </div>


                </div>


            </section>
        </>
    )
}

export default ImageText
