import React from 'react'

const VissionMission = ({ VissionMissionProps, text }) => {
    return (
        <>
            <div className="col-sm-12 col-lg-6  wow fadeInUp" data-wow-delay="0.2s">
                <h1 className={`text-center mb-4 ${text}`}><i className={`${VissionMissionProps.icon}  fa-3x`}></i></h1>
                <h3 className="text-center display-6 text-uppercase  mb-5 ">{VissionMissionProps.title}</h3>
                <p className="text-center text-justify">{VissionMissionProps.text}</p>
            </div>
        </>
    )
}

export default VissionMission
