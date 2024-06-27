import React from 'react'
import Sidebaroptions from './Sidebaroptions'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./css/sidebar.css"
import { useStateValue } from './StateProvider';
function Sidebar() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <Sidebaroptions src={user.photoURL} title={user.displayName}/>
            <Sidebaroptions  src="https://www.facebook.com/rsrc.php/v3/yx/r/-XF4FQcre_i.png" title="Friends"/>
            <Sidebaroptions src="https://www.facebook.com/rsrc.php/v3/yD/r/mk4dH3FK0jT.png" title="Groups"/>
            <Sidebaroptions  src="https://www.facebook.com/rsrc.php/v3/yG/r/A1HlI2LVo58.png" title="Watch"/>
            <Sidebaroptions  src="https://www.facebook.com/rsrc.php/v3/yv/r/QAyfjudAqqG.png" title="Events"/>
            <Sidebaroptions  Icon={ExpandMoreIcon}  title="See More"/>
            
        </div>
    )
}

export default Sidebar
