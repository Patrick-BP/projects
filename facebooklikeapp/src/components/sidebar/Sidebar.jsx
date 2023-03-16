import React from 'react';
import {HelpOutline, RssFeed, School,Chat, WorkOutline, EventOutlined, Bookmark, Group, PlayCircleFilledOutlined} from '@mui/icons-material'
import './sidebar.css'
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarItem">
                        <RssFeed className='sidebarIcon'/>
                        Feed
                    </li>
                    <li className="sidebarItem">
                        <Chat className='sidebarIcon'/>
                        Chat
                    </li>
                    <li className="sidebarItem">
                        <PlayCircleFilledOutlined className='sidebarIcon'/>
                        Videos
                    </li>
                    <li className="sidebarItem">
                        <Group className='sidebarIcon'/>
                        Groups
                    </li>
                    <li className="sidebarItem">
                        <Bookmark className='sidebarIcon'/>
                        Bookmarks
                    </li>
                    <li className="sidebarItem">
                        <HelpOutline className='sidebarIcon'/>
                        Questions
                    </li>
                    <li className="sidebarItem">
                        <WorkOutline className='sidebarIcon'/>
                        Jobs
                    </li>
                    <li className="sidebarItem">
                        <EventOutlined className='sidebarIcon'/>
                        Events
                    </li>
                    <li className="sidebarItem">
                        <School className='sidebarIcon'/>
                        courses
                    </li>

                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li><li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li><li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li><li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li><li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li><li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li><li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li><li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li><li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li><li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li><li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li><li className="sidebarFriend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    
                </ul>
            </div>
            
        </div>
    );
}

export default Sidebar;
