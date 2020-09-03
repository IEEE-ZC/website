/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MemberCard from '../../Cards/MemberCard'
import { JUNIORS } from '../../../EndPoints'

const WIETeam = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(JUNIORS)
            .then(res => {
                console.log(res.data[0]);
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    // const data = [
    //     { id: "1", name: 'test', img: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(5).jpg', job: "developer" },
    //     { id: "2", name: 'omar', img: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg', job: "developer" },
    //     { id: "3", name: 'test', img: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(5).jpg', job: "developer" },
    //     { id: "4", name: 'ahmed', img: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg', job: "developer" },
    // ]

    return (
        <>
            <h1 id='team-members-Wie' className="text-center display-1 mb-5 my-5 pt-5
             pb-4 font-weight-bold wow fadeIn" data-wow-delay="0.2s" >Our Team</h1>

            <div className="container mb-4 wow fadeIn" data-wow-delay="0.4s">
                <div className='row'>
                    {data !== [] ? data.map(el => <MemberCard key={el.id} Card={el} />) : null}
                </div>

            </div>

        </>
    )
}

export default WIETeam
