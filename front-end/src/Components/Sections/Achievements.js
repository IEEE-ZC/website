/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import AchievCard from '../Cards/AchievCard'
const AchievementsData = [
    {
        id: 1, img: './imgs/events/appx.jpg', title: "IEEE Magazine", text: "IAn Engineering service provided through IEEE ZC aims to qualify students in ZC, specifically IEEE members to have first places in future competitions and add to their academic arsenal in-terms of technical experience",
        year: "2019-2020"
    },
    {
        id: 2, img: './imgs/events/appx.jpg', title: "E-Academy", text: "IAn Engineering service provided through IEEE ZC aims to qualify students in ZC, specifically IEEE members to have first places in future competitions and add to their academic arsenal in-terms of technical experience",
        year: "2020-2021"
    }
]

const Achievements = () => {
    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        console.log(height);
        console.log(width);
    }, [height, width]);
    //1366 657
    //640  360
    // 768 1024 

    return (
        <>

            <div style={{ backgroundColor: "#F3F3F5" }} id='achievements'>
                <div style={{ height: "60px" }}></div>




                {((height >= 650) && (width >= 1020)) ? <h1 className="display-1 mt-5 text-center wow fadeInUp" data-wow-delay="0.2s">Achievements</h1>
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
