/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'

import AboutIntro from './AboutIntro'
import ImageText from './ImageText'
import WhatWeDid from './WhatWeDid'
import VissionMission from './VissionMission'
import Credits from './Credits'
import OurAmazingTeam from './OurAmazingTeam'
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
                Imgs: [{ src: "/imgs/about/WhatWeDid/2014.jpg", text: "Students visited Altaybat Farm, where they were divided into groups to explore the Karm Solar Company. They learned in both a fruitful and fun manner about the innovative off-grid solar energy solutions and the most recent companies." }]
            },
            {
                ID: 2, href: "panel32", item: "2015",
                Imgs: [
                    { src: "/imgs/about/WhatWeDid/2015_1.jpg", text: "Zewail city students had the opportunity to visit the training center of Egypt Air where they were given a lecture and demonstration for the training of the crew on how to do their job in a small prototype of an airbus." },
                    { src: "/imgs/about/WhatWeDid/2015_2.jpg", text: "ICMIS is an annual conference held in February. The international conference gathers people from all over the globe, from India to South Africa." },
                ]


            },
            {
                ID: 3, href: "panel33", item: "2016",
                Imgs: [
                    { src: "/imgs/about/WhatWeDid/2016_1.jpg", text: "AppX is the event aimed at raising interest in wearable technology via sessions about what is wearable technology, embedded systems, Sensory substitution and other topics" },
                    { src: "/imgs/about/WhatWeDid/2016_2.jpg", text: "The International Conference on Mathematics and Information Sciences is a platform for the latest and most important developments in the field of pure and applied mathematics." },
                    { src: "/imgs/about/WhatWeDid/2016_3.jpg", text: "In celebration of the 5th anniversary of the African Network for Solar Energy (ANSOLE), Zewail city of science and technology hosted the fifth international conference on renewable energy. The conference aimed to provide an environment for the discussion and dissemination of research in all aspects of renewable energy devices and systems." },
                ],
                active: "active"
            },
            {
                ID: 4, href: "panel34", item: "2017",
                Imgs: [
                    { src: "/imgs/about/WhatWeDid/2017_1.jpg", text: "In this camp, Engineer AbdurRahman ElGammal who is the owner of the American company MeNooN LLC for training and is very known for his creative technical training that takes students from zero computer knowledge to the top programmers, provided more than 150 engineers with his experience in competitive programming." },
                    { src: "/imgs/about/WhatWeDid/2017_2.jpg", text: "After the success of AppX: From Humans to Cyborgs last year, we've decided to recreate it again! This year's theme will be about Biomedical Engineering especially the neuro-engineering projects." },
                    { src: "/imgs/about/WhatWeDid/2017_3.jpg", text: "Future Engineers camp was an ingenious way to provide knowledge in the fields of programming, electronics control principles and mechanics." },
                ]
            },
            {
                ID: 5, href: "panel35", item: "2018",
                Imgs: [
                    { src: "/imgs/about/WhatWeDid/2018_1.jpg", text: "To introduce the audience to how AI is applied in robotics and teach them to differentiate between what’s real and what’s science fiction. The event had a number of talks from respectable presenters, multiple workshops held by the branch's Engineering members, Projects made by the branch's Engineering members, and and Exhibition area for different companies and entities to present their products" },
                    { src: "/imgs/about/WhatWeDid/2018_2.jpg", text: "This was the first instance of this competition in Egypt, where students from different universities would build their robots to compete in a race." },
                    { src: "/imgs/about/WhatWeDid/2018_3.jpg", text: "" },
                ]
            },
            {
                ID: 6, href: "panel36", item: "Show All",
                Imgs: [
                    { src: "/imgs/about/WhatWeDid/2014.jpg", text: "Students visited Altaybat Farm, where they were divided into groups to explore the Karm Solar Company. They learned in both a fruitful and fun manner about the innovative off-grid solar energy solutions and the most recent companies." },

                    { src: "/imgs/about/WhatWeDid/2015_1.jpg", text: "Zewail city students had the opportunity to visit the training center of Egypt Air where they were given a lecture and demonstration for the training of the crew on how to do their job in a small prototype of an airbus." },
                    { src: "/imgs/about/WhatWeDid/2015_2.jpg", text: "ICMIS is an annual conference held in February. The international conference gathers people from all over the globe, from India to South Africa." },

                    { src: "/imgs/about/WhatWeDid/2016_1.jpg", text: "AppX is the event aimed at raising interest in wearable technology via sessions about what is wearable technology, embedded systems, Sensory substitution and other topics" },
                    { src: "/imgs/about/WhatWeDid/2016_2.jpg", text: "The International Conference on Mathematics and Information Sciences is a platform for the latest and most important developments in the field of pure and applied mathematics." },
                    { src: "/imgs/about/WhatWeDid/2016_3.jpg", text: "In celebration of the 5th anniversary of the African Network for Solar Energy (ANSOLE), Zewail city of science and technology hosted the fifth international conference on renewable energy. The conference aimed to provide an environment for the discussion and dissemination of research in all aspects of renewable energy devices and systems." },

                    { src: "/imgs/about/WhatWeDid/2017_1.jpg", text: "In this camp, Engineer AbdurRahman ElGammal who is the owner of the American company MeNooN LLC for training and is very known for his creative technical training that takes students from zero computer knowledge to the top programmers, provided more than 150 engineers with his experience in competitive programming." },
                    { src: "/imgs/about/WhatWeDid/2017_2.jpg", text: "After the success of AppX: From Humans to Cyborgs last year, we've decided to recreate it again! This year's theme will be about Biomedical Engineering especially the neuro-engineering projects." },
                    { src: "/imgs/about/WhatWeDid/2017_3.jpg", text: "Future Engineers camp was an ingenious way to provide knowledge in the fields of programming, electronics control principles and mechanics." },

                    { src: "/imgs/about/WhatWeDid/2018_1.jpg", text: "To introduce the audience to how AI is applied in robotics and teach them to differentiate between what’s real and what’s science fiction. The event had a number of talks from respectable presenters, multiple workshops held by the branch's Engineering members, Projects made by the branch's Engineering members, and and Exhibition area for different companies and entities to present their products" },
                    { src: "/imgs/about/WhatWeDid/2018_2.jpg", text: "This was the first instance of this competition in Egypt, where students from different universities would build their robots to compete in a race." },
                    { src: "/imgs/about/WhatWeDid/2018_3.jpg", text: "" },

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

    const CreditsData = [
        {
            id: 1, animation: "fadeInLeft", image: "./imgs/about/Thanks/mohamed.png", about: "Full Stack Developer and Freelancer", name: "Mohamed Sayed", job: 'Junior Software Engineer', socialLinks: [
                { icon: 'fas fa-globe', website: "https://sirsayed98.web.app/" },
                { icon: 'fab fa-github', website: "https://github.com/sirSayed98" },
                { icon: 'fab fa-linkedin-in', website: "https://www.linkedin.com/in/sirsayed98/" }
            ]
        },
        {

            id: 2, animation: "fadeInRight", image: "./imgs/about/Thanks/David.png", about: "React, Vuejs Developer", name: "Devien George", job: 'Junior Front-End', socialLinks: [
                { icon: 'fab fa-twitter', website: "https://twitter.com/devo_george?s=08" },
                { icon: 'fab fa-github', website: "https://github.com/deviengeorge" },
                { icon: 'fab fa-linkedin-in', website: "https://www.linkedin.com/in/devien-george-a012a1159" }
            ]
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
            <OurAmazingTeam />
            <div className='container'>
                <h1 className="text-center  display-3 text-uppercase font-weight-bold mb-5 mt-5 pt-4 wow fadeInUp"
                    data-wow-delay="0.2s">Thanks To</h1>
                <div className='row mb-lg-4 mt-5 text-center text-md-left'>
                    <Credits CreditsData={CreditsData[0]} />
                    <Credits CreditsData={CreditsData[1]} />
                </div>
            </div>
        </>
    )
}

export default AboutPage
