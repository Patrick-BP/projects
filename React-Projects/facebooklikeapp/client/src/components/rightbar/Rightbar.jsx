import React from 'react';
import './rightbar.css';
import Online from '../online/Online'
import {Users} from '../../dummyData'
const Rightbar = ({profile}) => {

    const HomeRightBar = ()=>{
        return(
            <>
            <div className="birthdayContainer">
             <img src="/assets/gift.png" alt="" className="birthdayImg" />
                <span className="birthdayText">
                    <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today</span>
            </div>
            <img src="/assets/ad.png" alt="" className="rigthbarAd" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
                <Online users={Users}/>
               
            </ul>
            </>
        )
    };

    const ProfileRightBar = ()=>{
        return(
            <>
            <h4 className="rightbarTitle">User Information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">New York</span>

                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">Madrid</span>

                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">Single</span>

                </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="/assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Carter</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="/assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Carter</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="/assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Carter</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="/assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Carter</span>
                </div>
              

            </div>

            </>
        )
    }
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
            
               {profile ? <ProfileRightBar/> : <HomeRightBar/>}
        </div>
        </div>
    );
}

export default Rightbar;
