import React from 'react'

const MemberCard = ({ Card }) => {
    return (
        <>
            <div class="col-lg-3 col-md-6 mb-4 ">
                <div style={{ height: "320px" }} class="card hoverable card-body">
                    <div class="avatar mx-auto mt-3 mb-3">
                        <img style={{ width: '150px', height: '150px' }} src={Card.img} class="rounded-circle"
                            alt="..." />
                    </div>
                    <h6 style={{ color: '#112E68' }} class="font-weight-bold title text-center text-uppercase ">{Card.name}</h6>
                    <p class="grey-text text-center text-capitalize">{Card.job}</p>
                </div>
            </div>
        </>
    )
}

export default MemberCard
