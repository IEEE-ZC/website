/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Intro from './Sections/Intro'
import Preloader from './Layout/Preloader'
import Events from './Sections/Events'
import Achievements from './Sections/Achievements'
import About from './Sections/About'

import ScrollSpy from './Sections/ScrollSpy'
import WOW from 'wowjs'
const LandingPage = () => {

    const [Load, setLoad] = useState(true);
    useEffect(() => {
        new WOW.WOW().init();
    }, [])

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoad(false);
    //     }, 1500)
    // }, [])
    
    const IntroProps = {
        Slogan: "Push Your Limits"
    }
    const AboutProps = {
        title: "A Glimpse",
        text: "When a leader, be a serving bottle that flows into others' cups. You have the responsibility of filling your bottle with sufficient knowledge to flow it into their cups, and when you do; knowledge will prevail in the whole team."

    }
    const ScrollSpyItems={
        NavItems: [
            { id: 1, name: "Home", href: "home" },
            { id: 2, name: "Events", href: "events" },
            { id: 3, name: "Achievements", href: "achievements" },
            { id: 4, name: "About", href: "about" },
            { id: 5, name: "Magazine", href: "magazine" },
            { id: 6, name: "Blog", href: "blog" },

        ]
    }
    // if (Load) {
    //     return (
    //         <Preloader />
    //     )
    // }
    return (
        <>
           
            <Intro IntroProps={IntroProps} />
            <Events />
            <ScrollSpy Items={ScrollSpyItems.NavItems} />
            <Achievements />
            <About AboutProps={AboutProps} />

        </>
    )
}

export default LandingPage