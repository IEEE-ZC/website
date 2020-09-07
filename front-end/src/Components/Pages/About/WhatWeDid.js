import React from 'react'

const WhatWeDid = ({ WhatWeDidProps }) => {
    return (
        <>
            <section id="services" className="mb-5">
                <h1 className="text-center display-3 text-uppercase font-weight-bold mb-5 mt-5 pt-4 wow fadeInUp"
                    data-wow-delay="0.2s">What We Did</h1>

                <div className="row wow fadeInUp" data-wow-delay="0.4s">
                    <div className="col-md-12">
                        <ul className="nav md-pills flex-center flex-wrap mx-0 mb-4" role="tablist">
                            {
                                WhatWeDidProps ? WhatWeDidProps.navList.map(el => {
                                    return (<li className="nav-item" key={el.ID}>
                                        <a className={`btn btn-rounded btn-white waves-effect filter  font-weight-bold ${el.active} text-uppercase`} data-toggle="tab" href={`#${el.href}`}
                                            role="tab">{el.item}</a>
                                    </li>)
                                }) : null
                            }

                        </ul>
                    </div>
                    <div className="tab-content pt-0">
                        {WhatWeDidProps ? WhatWeDidProps.navList.map(el => {
                            return (<div key={el.ID} className={`tab-pane fade show ${el.active} in`} id={el.href} role="tabpanel">
                                <br />
                                <div className="row d-flex justify-content-around">
                                    {el.Imgs ? el.Imgs.map(img => {
                                        return (<div key={img} className="col-lg-4 col-md-6 mb-5">
                                            <div className="view overlay  zoom">
                                                <img alt="..." src={img.src}
                                                    className="img-fluid" />
                                                <div className="mask  waves-effect waves-light">
                                                    <p className="text-center font-weight-bold flex-center white-text">{img.text}</p>
                                                </div>

                                            </div>
                                        </div>)
                                    }) : null}
                                </div>
                            </div>
                            )
                        }) : null}

                    </div>
                </div>
            </section>
        </>
    )
}

export default WhatWeDid
