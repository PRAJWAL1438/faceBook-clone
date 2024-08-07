import { Avatar } from '@material-ui/core'
import React from 'react'
import "./css/sidebarrow.css"
function Sidebaroptions({src,Icon, title}) {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src}/> }
            {Icon && <Icon/> }
            <p>{title}</p>
        </div>
    )
}

export default Sidebaroptionsgit 

