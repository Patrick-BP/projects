import './topbar.css';
import {SearchTwoTone, Person, Chat, Notifications} from '@mui/icons-material';
const Topbar = () => {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className="logo">
                    Social Media
                </span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <SearchTwoTone className="searchicon"/>
                    <input type="text" placeholder='Search for friend, post or video' className="searchinput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Home page</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbaricons">
                    <div className="topbariconitem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbariconitem">
                        <Chat/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbariconitem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="" className="topbarimg" />
            </div>
        </div>
    );
}

export default Topbar;
