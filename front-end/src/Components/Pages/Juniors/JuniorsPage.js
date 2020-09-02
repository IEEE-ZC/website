import React, { useEffect } from 'react'
import JuniorIntro from './JuniorIntro'
import JuniorsTeam from './JuniorTeam'
import WOW from 'wowjs'
const JuniorsPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "IEEE| Juniors";
        new WOW.WOW().init();
    }, []);

    const JuniorIntroProps = {
        img: "url(https://montessorirocks.org/wp-content/uploads/2017/10/iStock-613890032-e1509016242677.jpg)",
        text: "The mission is incremental to reach a final goal that is constructing a robot, starting from basics in programming then mechanics until construction of a simple robot that achieve certain task. Workshops will be mainly on Robotics through brief introduction about programming, mechanics, electronics and robotics (the product of the three previous fields combined)."
    }
    return (
        <>
            <JuniorIntro JuniorIntroProps={JuniorIntroProps} />
            <JuniorsTeam />

        </>
    )
}

export default JuniorsPage
