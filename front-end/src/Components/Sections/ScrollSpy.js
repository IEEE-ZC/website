import React from 'react'
import { Link } from 'react-scroll'
const ScrollSpy = ({ Items }) => {
    return (
        <>
            <div id="#ScrollSpy" style={{ backgroundColor: "rgba(0, 0, 0, .1)", zIndex: 1000, borderRadius: "10px" }} className="dotted-scrollspy clearfix d-none d-sm-block">
                <ul className="nav smooth-scroll flex-column">
                    {Items.map(el => {
                        return (<li key={el.href} className="nav-item"><Link className="nav-link" to={el.href} smooth={true} duration={1000}><span data-toggle="tooltip" data-placement="left"
                            title={el.name} className='my-2'
                            style={{ width: '1rem', height: '1rem'}}>
                        </span></Link></li>)
                    })}
                </ul>
            </div>
        </>
    )
}

export default ScrollSpy
