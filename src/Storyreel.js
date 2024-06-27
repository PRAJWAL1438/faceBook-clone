import { Avatar } from '@material-ui/core'
import React from 'react'
import "./css/story.css"
function Storyreel() {
    return (
        <div className="storyReel">
            <div className="story" style={{backgroundImage:`url('https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')`}}>
                <Avatar />
                <h4>Prajwal</h4>
            </div>

            <div className="story" style={{backgroundImage:`url('https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')`}}>
                <Avatar />
                <h4>Prajwal</h4>
            </div>


            <div className="story" style={{backgroundImage:`url('https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')`}}>
                <Avatar />
                <h4>Prajwal</h4>
            </div>

            <div className="story" style={{backgroundImage:`url('https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')`}}>
                <Avatar/>
                <h4>Prajwal</h4>
            </div>

            <div className="story" style={{backgroundImage:`url('https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')`}}>
                <Avatar/>
                <h4>Prajwal</h4>
            </div>
        </div>
    )
}

export default Storyreel
