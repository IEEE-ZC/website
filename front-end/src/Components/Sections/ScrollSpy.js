import React from 'react'
import {Link} from 'react-scroll'
const ScrollSpy = ({Items}) => {
    return (
        <>
            <div id="#ScrollSpy" style={{zIndex:1000,borderRadius:"10px"}} className="dotted-scrollspy clearfix d-none d-sm-block">
                <ul className="nav smooth-scroll flex-column">
                   { Items.map(el=>{
                       return(<li className="nav-item"><Link className="nav-link" to={el.href} smooth={true} duration={1000} ><span></span></Link></li>                       )
                   })}
                </ul>
            </div>
        </>
    )
}

export default ScrollSpy
