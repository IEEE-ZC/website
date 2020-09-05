import React, { useEffect } from 'react'
import JuniorIntro from './JuniorIntro'
import JuniorsTeam from './JuniorTeam'
import JuniorEvents from './JuniorsEvents'

import WOW from 'wowjs'
const JuniorsPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "IEEE| Juniors";
        new WOW.WOW().init();
    }, []);

    const JuniorIntroProps = {
        img: "url(https://montessorirocks.org/wp-content/uploads/2017/10/iStock-613890032-e1509016242677.jpg)",
        text: "Juniors IEEE is a sub-committee of IEEE Zewail City that is more concerned to deliver the vision of IEEE to younger generations. We achieve this mission by introducing different events, workshops, and camps to different segments of children."
    }
    return (
        <>
            <JuniorIntro JuniorIntroProps={JuniorIntroProps} />
            <JuniorEvents />
            <div className='text-center' style={{ backgroundColor: "#F3F3F5" }}>
                <div className="container">
                    <h1 className='text-center display-1 mb-5 my-5 pt-5 pb-4 font-weight-bold wow fadeIn' data-wow-delay="0.2s">Future Plans</h1>
                    <p className=" wow fadeIn" data-wow-delay="0.2s">We still have a lot to add to the society and give more values, this time and under the conditions of covid 19, we started a new project that we aim to spread it all over Egypt. We started working on a YouTube channel that provides scientific content that fits with children from 10 to 15 years old. Providing different scientific topics out of their curriculum that will give them the opportunity to think in a different way, and to spread the vision of IEEE</p>
                </div>
                <div style={{ height: "60px" }}> </div>
            </div>
            <JuniorsTeam />
        </>
    )
}

export default JuniorsPage
