/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'

import AboutIntro from './AboutIntro'
import ImageText from './ImageText'
import WhatWeDid from './WhatWeDid'
import VissionMission from './VissionMission'
import Footer from '../../Layout/Footer'
import WOW from 'wowjs'
const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "IEEE| About";
        new WOW.WOW().init();
    }, [])

    const AboutIntroProps = {
        text: "Zewail City of Science and Technology is an independent, non-profit, learning, research, and innovation institution.",
        img: "url('https://mdbootstrap.com/img/Photos/Others/images/93.jpg')"
    }

    const ImageTextProps = {
        title: "Who are we ?",
        para1: " Zewail City of Science and Technology aims to have a transformative impact on society by raising the standards of education to continuous, world-class innovation in research, to lead scientific development in Egypt. Zewail City is the beacon of knowledge and innovation that will revive Egypt's leadership role in the region towards a prosperous future.",
        para2: "IEEE Zewail City community always has the goal of integrating the technical and the non-technical skills needed for developing world change leaders. This goal shall be accomplished through setting the cornerstones of a well-organized environment, a proper strategy, a fail-proof system, introducing long term projects that are generally beneficial to engineering students, and employing mentors to ensure the quality of the workflow and an efficient sharing of experiences."
        , img: "/imgs/about/ieee.png"
    }
    const WhatWeDidProps = {
        navList: [
            {
                ID: 1, href: "panel31", item: "2014",
                Imgs: ["/imgs/about/WhatWeDid/2014.png"]
            },
            {
                ID: 2, href: "panel32", item: "2015",
                Imgs: [
                    "/imgs/about/WhatWeDid/2015_1.png",
                    "/imgs/about/WhatWeDid/2015_2.png",
                ]
            },
            {
                ID: 3, href: "panel33", item: "2016",
                Imgs: [
                    "/imgs/about/WhatWeDid/2016_1.png",
                    "/imgs/about/WhatWeDid/2016_2.png",
                    "/imgs/about/WhatWeDid/2016_3.png",
                ]
            },
            {
                ID: 4, href: "panel34", item: "2017",
                Imgs: [
                    "/imgs/about/WhatWeDid/2017_1.png",
                    "/imgs/about/WhatWeDid/2017_2.png",
                    "/imgs/about/WhatWeDid/2017_3.png",
                ]
            },
            {
                ID: 5, href: "panel35", item: "2018",
                Imgs: [
                    "/imgs/about/WhatWeDid/2018_1.png",
                    "/imgs/about/WhatWeDid/2018_2.png",
                    "/imgs/about/WhatWeDid/2018_3.png",
                ]
            },
            {
                ID: 6, href: "panel36", item: "Show All", active: "active",
                Imgs: [
                    "/imgs/about/WhatWeDid/2014.png",
                    "/imgs/about/WhatWeDid/2015_1.png",
                    "/imgs/about/WhatWeDid/2015_2.png",
                    "/imgs/about/WhatWeDid/2016_1.png",
                    "/imgs/about/WhatWeDid/2016_2.png",
                    "/imgs/about/WhatWeDid/2016_3.png",
                    "/imgs/about/WhatWeDid/2017_1.png",
                    "/imgs/about/WhatWeDid/2017_2.png",
                    "/imgs/about/WhatWeDid/2017_3.png",
                    "/imgs/about/WhatWeDid/2018_1.png",
                    "/imgs/about/WhatWeDid/2018_2.png",
                    "/imgs/about/WhatWeDid/2018_3.png",
                ]
            },
        ]

    }
    const VissionMissionProps = [
        {
            id: 0, title: "Our Vision",
            text: `
        Continuing on the path drawn by our previous slogan "Building Community", we aim to create a friendly environment, rich in both technical and non-technical expertise. We dream to bring back the IEEE Zewail City branch as strong as it was and leave a national impact and an in-erasable fingerprint in the fields of Engineering in Egypt and worldwide. We shall strive for Zewail City to leave the message that its name holder had long fought to deliver!
        `, icon: "far fa-eye"
        },
        {
            id: 1,
            text: `We believe that the power of IEEE is the power of its people, hence our slogan: 
        "Working on the intellectual capital of the individuals to suffice the entity's needs."`,
            icon: "fas fa-bullseye",
            title: "Our Mission"
        }
    ]
    return (
        <>
            <AboutIntro AboutIntroProps={AboutIntroProps} />
            <div className="container">
                <ImageText ImageTextProps={ImageTextProps} />
            </div>
            <div className="container">
                <div className='row'>
                    <VissionMission text={'text-primary'} VissionMissionProps={VissionMissionProps[0]} />
                    <VissionMission text={'text-danger'} VissionMissionProps={VissionMissionProps[1]} />
                </div>
            </div>
            <div className="container">
                <WhatWeDid WhatWeDidProps={WhatWeDidProps} />
            </div>
            <Footer />
        </>
    )
}

export default AboutPage
