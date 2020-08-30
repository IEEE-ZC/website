import React from 'react'

const ImageText = ({ ImageTextProps }) => {
    return (
        <>
            <section id="img-text" class="mt-5 mb-5 py-3 wow fadeIn" data-wow-delay="0.2s">


                <div class="row pt-2 mt-5">


                    <div class="view overlay zoom col-lg-5 col-md-12 mb-3 wow fadeIn" data-wow-delay="0.4s">
                        <img src={ImageTextProps.img} class="img-fluid z-depth-1 rounded"
                            alt="..." />
                        <div class="mask flex-center waves-effect waves-light">
                            <p class="white-text"></p>
                        </div>
                    </div>



                    <div class="col-lg-6 ml-auto col-md-12 wow fadeIn" data-wow-delay="0.4s">


                        <h3 class="mb-5 dark-grey-text title font-weight-bold wow fadeIn" data-wow-delay="0.2s">
                            <strong>Award winning & most popular web studio in the world.</strong>
                        </h3>


                        <p align="justify" class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo animi
                        soluta ratione quisquam, dicta
                        ab cupiditate iure eaque? Repellendus voluptatum, magni impedit delectus, beatae maxime temporibus
      maiores quibusdam.</p>
                        <p align="justify" class="grey-text">Rem magnam ad perferendis iusto sint tempora ea voluptatibus iure,
                        animi excepturi modi aut possimus
                        in hic molestias repellendus illo ullam odit quia velit. Lorem ipsum dolor sit amet, consectetur
      adipisicing elit.</p>

                    </div>


                </div>


            </section>
        </>
    )
}

export default ImageText
