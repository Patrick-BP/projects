import React from 'react'
import './closeFriends.css'
export default function CloseFriends({users}) {
  return (
    <>
    {users.map(user=>{
        return(
           <li key={user.id} className="sidebarFriend">
                        <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">{user.username}</span>
    </li> 
        )
    })

    } 
    </>
  )
}
