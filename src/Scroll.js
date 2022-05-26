import React from "react";
import './scroll.css'

const Scroll = (prop) => {
    return (
        <div style={{overflowY:'scroll', height:'100vh'}}>
            {prop.children}
        </div>
    )

}

export default Scroll;