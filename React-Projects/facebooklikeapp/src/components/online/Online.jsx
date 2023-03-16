import React from "react";
import './online.css'
export default function online({users}) {
  return (
    <>
     {users.map(user=>{
        return (
            <li key={user.id} className="rigthbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src={user.profilePicture}
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rigthbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
          </li>
        )
     })}
    </>
  );
}
