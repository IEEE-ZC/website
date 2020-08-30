import React, { useEffect } from 'react'

import AboutIntro from './AboutIntro'
import ImageText from './ImageText'
import WOW from 'wowjs'
const AboutPage = () => {
    useEffect(() => {
        new WOW.WOW().init();
    }, [])

    const AboutIntroProps = {
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae iste."
        , img: "url('https://mdbootstrap.com/img/Photos/Others/images/93.jpg')"
    }

    const ImageTextProps = {
        title: "Award winning & most popular web studio in the world",
        para1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo animi soluta ratione quisquam, dicta ab cupiditate iure eaque? Repellendus voluptatum, magni impedit delectus, beatae maxime temporibus maiores quibusdam.",
        para2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo animi soluta ratione quisquam, dicta ab cupiditate iure eaque? Repellendus voluptatum, magni impedit delectus, beatae maxime temporibus maiores quibusdam"
        , img: "https://mdbootstrap.com/img/Photos/Others/images/72.jpg"
    }
    return (
        <>
            <AboutIntro AboutIntroProps={AboutIntroProps} />
            <div className="container">
                <ImageText ImageTextProps={ImageTextProps} />
            </div>
        </>
    )
}

export default AboutPage
