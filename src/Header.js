import React from 'react'
import "./css/header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import PeopleIcon from '@material-ui/icons/People';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import { Avatar, IconButton } from '@material-ui/core';

import AppsIcon from '@material-ui/icons/Apps';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useStateValue } from './StateProvider';

function Header() {

    const [{user}, dispatch] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AgP8Aef8Ad/8Ae//Y6f8Afv/O4/+51f+Qvf8Adf8Aev+00v+/2f/F3f/k8P94sf/q9P+nzP9aof8li/+Juf9Blv8Ahf90rv8ZiP/l8f/T5v9wrP8AcP8tj/9YoP+fxv+Etv9jpv/0+v8Abv9MhurRAAAEhklEQVR4nO2d6XLqMAxGIXYNTdhD2C6lLPf9n/GGTju30FAUIXlhvvO74+mZGHmXOh0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkxXQ0q7blYrfs2iKTwLruercoV9VsNA0t1+kMV2tjCmudc11J6vaszYxZT0Yh9cYTZ6yo2E+scZNxKL8y19b7lMzLTQjBSv3zfXM0lXe/8Tzz5ncmm3vuqkMjG1ju48zQp+As9+x3Jp89uaBPxWEYwVrRU0cdm0CC3a7xE27mvoPMf9zch2Dld5i4JPMwLm7C9dEzRn92U/qbyTRhS23Bcag4+kWuHWwmYT9h/REnyobh4ugXTldwFDbOnFGenwbvpHU3XakarkP71aw1BafhO2ndTTW3pyL4GdaGmntTs5Azti8KzUVUFT7Q1KFGc266isJwq2hYCg74ztrCnMkK22o72WlOTRdChtbkbrF9nfVHvd5osD8cdzY35918kuFC0XAnYWjNcjL8EfGnvdmB1rzbKRouJfy2vVvND2mD0VLR8HHBfPvLeN0nDreKho92Uru8+f1aGFpFwwcHi+z99+aJhoWi4WNTmux4p3miYRarob3zBcmGJlJDwl5n4oaE/eq0e6nZ328+aUNHWZknbWj6z25I2lxJ2TAjrcuTNjw9uSFx0ZqwYTb4vd3TdLoZv4z3RbKGt0/9xtXOmfwTmmCUhjfXrKucuHURuaG7Mec+zYlfLXpDe2hubsdbb0ZoWOwbW9szzwgiNLwRSnmNRWnYPCkl7qylYdh4bMs+bY3RsPE8jL29nIwhe2syFcMT+7Q1FUP+3aNUDF+e3vDP0/dSGMIwfsPnjzQwhGFQQ2cveWs0fLPXJGPojq+XVC8NbU2r1+s/I87Fwxtyb/FSH+NEYEg5Z2qAerczXUPilnfChgdiqEnX8D2dSMM0pD6KS9eQunGTrCH5IUCyhr2nNxxQZ73JGr6mMy9lGm6f3pB8TT5ZQ6JfuoYn8oo4VUP6mj9VQ/qBaQSGrBUwde0Ug6E99AeXNL2xOPWH3xkdyeeJ4Q279io9WfNO1F9zAf3ANALDa0zTO5KkdxNhCEMYwhCGMIQhDGEIQxg+BOvxgLhhhK/VhQ01s30x/yVhQ82cCsy8GMKGmnkxmJfPZQ1Vc5sw89MIG2rmp2HmGBI21MwxRD4e0jRUTbrHzPUlbKiZ62vGG/JlDWnvwpkwc+7JGqrm3GPmTRQ2VC3rwct9KWuomvuSmXRP1FA5zS7vVaSooerPsMN8UidqqJxHmPfwU9JQPRc0602dpKF6Pm9WTnZBQ/2c7KzaD4KGHvLqc2ojyBn6qI3AqW9h/ggZ+qlvweinYoaeapS0rzMjZeirzkz7WkFChhGXQ5Ix9CnYtmaXhKHnml0t664JGHqvu9ZpVTvvYcMQtfNqNuT6hw8a2rwMVuORWMPyEcOQNSw/GE3WxmR36pDm7Q0/6pAWxqxXngNME+dasquPWrLu+trl1+3LRsO3W7VkC9td7hblNo5asgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGjDPyaoXhuRqUdoAAAAAElFTkSuQmCC"/>

                <div className="header__search">
                    <SearchIcon/>
                    <input type="text" placeholder="Search Facebook"/>
                </div>
            </div>

            <div className="header__middle">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large"/>
                </div>

                <div className="header__option">
                    <OndemandVideoIcon fontSize="large"/>
                </div>

                <div className="header__option">
                    <PeopleIcon fontSize="large"/>
                </div>

                <div className="header__option">
                    <SportsEsportsIcon fontSize="large"/>
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL}/>
                    <h5>{user.displayName}</h5>
                </div>
                <IconButton>
                    <AppsIcon/>
                </IconButton>

                <IconButton>
                    <ForumIcon/>
                </IconButton>

                <IconButton>
                    <NotificationsIcon/>
                </IconButton>

                <IconButton>
                    <ArrowDropDownIcon/>
                </IconButton>
                


            </div>
        </div>
    )
}

export default Header
