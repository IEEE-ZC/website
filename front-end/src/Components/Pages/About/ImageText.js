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


                        <p align="justify" className="grey-text">
                            {ImageTextProps.para1}
                        </p>
                        <p align="justify" className="grey-text">
                            {ImageTextProps.para2}
                        </p>

                    </div>


                </div>


            </section>
        </>
    )
}

export default ImageText
