/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import AchievCard from '../Cards/AchievCard'
const AchievementsData = [
    {
        id: 1, img: './imgs/achievements/ac1.png', title: "IEEE Magazine", text: "Continuing on the path drawn by our previous slogan “Building Community”, we aim to create afriendly environment, rich in both technical and non-technical expertise. We dream to bring back the IEEE Zewail City branch as strong as it was and leave a national impact and an in-erasable fingerprint in the fields of Engineering in Egypt and world wide. We shall strive for Zewail City to leave the message that its name holder had long fought to deliver!",
        year: "2019-2020"
    },
    {
        id: 2, img: './imgs/achievements/ac2.jpg', title: "E-Academy", text: "IAn Engineering service provided through IEEE ZC aims to qualify students in ZC, specifically IEEE members to have first places in future competitions and add to their academic arsenal in-terms of technical experience",
        year: "2020-2021"
    },
    {
        id: 3, img: './imgs/achievements/ac3.jpg', title: "Youth Leaders' Foundation Competition", text: "Youth Leaders' Foundation (YLF) is a well-established non-profit organization founded in 2017 by a team of extremely passionate, active and dedicated staff who have previously worked on youth development programs nationally and internationally. IEEE'20 participated with the project of IEEE Magazine.",
        year: "2020-2021"
    },
    {
        id: 4, img: './imgs/achievements/ac4.jpg', title: "Maker Faire'20", text: "Maker Faire is the Greatest Show (and Tell) on Earth—a family-friendly festival of invention, creativity and resourcefulness, and a celebration of the Maker movement. Part science fair, part county fair, and part something entirely new, Maker Faire is an all-ages gathering of tech enthusiasts, crafters, educators, tinkerers, hobbyists, engineers, science clubs, authors, artists, students, and commercial exhibitors. All of these “makers” come to Maker Faire to show what they have made and to share what they have learned. IEEE'20 Joined representing Zewail City students' projects.",
        year: "2020-2021"
    }
]

const Achievements = () => {
    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);
    // useEffect(() => {
    //     console.log(height);
    //     console.log(width);
    // }, [height, width]);
    //1366 657
    //640  360
    // 768 1024 

    return (
        <>

            <div style={{ backgroundColor: "#F3F3F5" }} id='achievements'>
                <div style={{ height: "60px" }}></div>

                {((height >= 600) && (width >= 1020)) ? <h1 className="display-1 mt-5 text-center wow fadeInUp" data-wow-delay="0.2s">Achievements</h1>
                    : null}
                {((height === 1024) && (width >= 768)) ? <h1 className="display-1 mt-5 text-center wow fadeInUp" data-wow-delay="0.2s">Achievements</h1>
                    : null}
                {(height >= 568 && height < 1366) && (width >= 320 && width < 657) ? <h1 className="display-4 mt-5 text-center wow fadeInUp" data-wow-delay="0.2s">Achievements</h1>
                    : null}


                <div className="container">
                    <div className="row d-flex justify-content-around">
                        {AchievementsData.map(card => {
                            return (<AchievCard key={card.id} card={card} />)
                        })}
                    </div>
                    <div style={{ height: "60px" }}></div>
                </div>
            </div>
            <div style={{ height: "60px" }}></div>
        </>
    )
}

export default Achievements
