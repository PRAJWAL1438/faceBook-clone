import React from 'react'
import "./css/right.css"
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Avatar } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VideocamIcon from '@material-ui/icons/Videocam';
import SearchIcon from '@material-ui/icons/Search';
function RightSidebar() {
    return (
        <div className="widget">
            <div className="widget__header">
                <div className="widget__headerLeft">
                    <h4>Your Pages</h4>
                </div>
                <MoreHorizIcon/>

            </div>

            <div className="widget__body">
                <div className="widget__bodyOptions">
                    <Avatar />
                    <h4>Prajwal jc</h4>
                </div>

                <div className="widget__bodyOptions ml10">
                    <NotificationsNoneIcon/>
                    <p>1 Notification</p>
                </div>

                <div className="widget__bodyOptions ml10">
                    <VolumeUpIcon/>
                    <p>Create Promotions</p>
                </div>
            </div>

            <hr/><br/>

            <div className="widget__header">
                <div className="widget__headerLeft">
                    <h4>Contact</h4>
                </div>
                <div className="widget__headerRight">
                    <VideocamIcon/>
                    <SearchIcon/>
                    <MoreHorizIcon/>
                </div>
            </div>


            <div className="widget__body">
                <div className="widget__bodyOptions">
                    <Avatar />
                    <h4>Prajwal Reddy</h4>
                </div>

                <div className="widget__bodyOptions">
                    <Avatar/>
                    <h4>Charan Gowda</h4>
                </div>

                <div className="widget__bodyOptions">
                    <Avatar />
                    <h4>Ambressh</h4>
                </div>

                <div className="widget__bodyOptions">
                    <Avatar src="https://yt3.ggpht.com/yti/APfAmoFihr9GGKOV9IJLmdn7eDw4zJb39rk-whzFuNJa=s108-c-k-c0x00ffffff-no-rj"/>
                    <h4>Kshipra</h4>
                </div>

                <div className="widget__bodyOptions">
                    <Avatar src="https://yt3.ggpht.com/yti/APfAmoFihr9GGKOV9IJLmdn7eDw4zJb39rk-whzFuNJa=s108-c-k-c0x00ffffff-no-rj"/>
                    <h4>Rahul</h4>
                </div>

            </div>
        </div>
    )
}

export default RightSidebar
