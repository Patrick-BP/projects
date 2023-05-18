import React, { useContext } from 'react'
import './Home.css'
import { UserContext } from '../context/loginContext'
export default function Home() {
  const {user} = useContext(UserContext)
  console.log(user);
  return (
    <div className='d-flex'>
        <div className='col-3 bg-light vh-100 p-3'>

            <div className='d-flex align-items-center mt-3'>
                          <div className='profilepicWrapper'>
                            <img  src='assets/profile.jpg' alt="" className='profilepic '/>
                          </div>
                        <div className='fw-bold'>{user?.fname}</div>
              </div>

              <ul className='list-group mt-3 leftMenu'>
                <li className="list-group-item"><img src="assets/friends.png" className='leftMenuItems'/>Find friends</li>
                <li className="list-group-item"><img src="assets/friends.png" className='leftMenuItems'/>Find friends</li>
                <li className="list-group-item"><img src="assets/friends.png" className='leftMenuItems'/>Find friends</li>
                <li className="list-group-item"><img src="assets/friends.png" className='leftMenuItems'/>Find friends</li>
                <li className="list-group-item"><img src="assets/friends.png" className='leftMenuItems'/>Find friends</li>
                
              </ul>

        </div>
        <div className='col-6 '>
            <div className='shadow rounded m-4 p-3'>
                 <img  src='assets/profile.jpg' alt="" className='profilepic'/>  
                 <input placeholder="What's in your mind" className='searchInput '/>
                 <hr/>
                 <div className='d-flex justify-content-around text-secondary'>
                    <div className=" d-flex align-items-center gap-2 fw-bold"><span className="material-symbols-outlined text-danger fs-3">videocam</span> Live video</div>
                    <div className=" d-flex align-items-center gap-2 fw-bold"><span className="material-symbols-outlined text-success fs-3">photo_library</span> Photo/video</div>
                    <div className=" d-flex align-items-center gap-2 fw-bold"><span className="material-symbols-outlined text-warning fs-3">mood</span> Feeling/activity</div>
                 </div>

            </div>
            <div className='shadow rounded m-4 p-3'>
                <h6>Suggested for you</h6>
                <hr/>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                      <img  src='assets/profile.jpg' alt="" className='profilepic'/>  
                      <div className='d-flex flex-column'>
                        <span className='fw-bolder'>Eddina Saville</span>
                        <span className='text-secondary'>1d </span>
                      </div>
                    </div>
                  <div className='text-secondary'><span className="material-symbols-outlined fs-2">more_horiz</span>  <span className="material-symbols-outlined fs-2">close</span></div>
                </div>
                  <br/>
                <div className=''>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id libero, vero impedit, architecto mollitia placeat blanditiis explicabo ad debitis iure autem ullam earum iste nihil, eaque error? Minus, similique architecto?</p>
                    <div className='bg-dark'>
                      <img src="assets/post.jpg " className='imgPost'/>
                    </div>
                    
                </div>
                <hr/>
                  <div className='d-flex justify-content-between text-secondary'>
                    <div className='d-flex justify-content-between text-secondary'><span className="material-symbols-outlined text-danger fs-3">favorite</span>&nbsp; &nbsp; 677</div>
                    <div>6.4K comments  34 shares</div>
                  </div>
                <hr/>
                <div className='d-flex justify-content-around text-secondary'>
                    <div className=" d-flex align-items-center gap-2 fw-bold"><span className="material-symbols-outlined text-secondary fs-3">thumb_up</span> Like</div>
                    <div className=" d-flex align-items-center gap-2 fw-bold"><span className="material-symbols-outlined text-secondary fs-3">forum</span> Comment</div>
                    <div className=" d-flex align-items-center gap-2 fw-bold"><span className="material-symbols-outlined text-secondary fs-3">forward</span> Share</div>

                 </div>

            </div>
        </div>
        <div className='col-3  p-3'>
          <div>
          <span className='fw-medium text-secondary fs-5'>Sponsored</span>
            <div>

              <div className='d-flex'>
                <div><img src='assets/sponsor.png' className='sponsorImg'/></div>
                <div className='m-2'>
                  <span className='fw-bold'>Post Jobs For Fre. Find Top Talent Today.</span><br/>
                  <span className='fs-6 text-secondary'>www.ziprecruiter.com</span>
                </div>
              </div>
              <div className='d-flex'>
                <div><img src='assets/sponsor.png' className='sponsorImg'/></div>
                <div className='m-2'>
                  <span className='fw-bold'>Post Jobs For Fre. Find Top Talent Today.</span><br/>
                  <span className='fs-6 text-secondary'>www.ziprecruiter.com</span>
                </div>
              </div>

            </div>
          </div>
          <hr/>
          <div>
           <span className='fw-medium text-secondary fs-5'>Birthdays</span>
            <div className='mt-3'>
            <span ><img src="assets/giftbox.png" className='giftbox'/></span>
            <b>Badal Datta</b> and <b>Jaqui Rodrigues</b> have bathdays today.
            </div>
          </div>
          <hr/>
          <div>
          <span className='fw-medium text-secondary fs-5'>Contacts</span>
              <div className='mt-4'>

                 <div className='d-flex align-items-center mt-3 onlineFriends'>
                      <div className='profilepicWrapper'>
                        <img  src='assets/profile.jpg' alt="" className='profilepic onlineWraper'/>
                        <div className='onlineDot'></div>
                      </div>
                    <div className='fw-bold'>Monique Smith</div>
                 </div>
                 <div className='d-flex align-items-center mt-3 onlineFriends'>
                      <div className='profilepicWrapper'>
                        <img  src='assets/profile.jpg' alt="" className='profilepic onlineWraper'/>
                        <div className='onlineDot'></div>
                      </div>
                    <div className='fw-bold'>Monique Smith</div>
                 </div>
                 <div className='d-flex align-items-center mt-3 onlineFriends'>
                      <div className='profilepicWrapper'>
                        <img  src='assets/profile.jpg' alt="" className='profilepic onlineWraper'/>
                        <div className='onlineDot'></div>
                      </div>
                    <div className='fw-bold'>Monique Smith</div>
                 </div>
                 <div className='d-flex align-items-center mt-3 onlineFriends'>
                      <div className='profilepicWrapper'>
                        <img  src='assets/profile.jpg' alt="" className='profilepic onlineWraper'/>
                        <div className='onlineDot'></div>
                      </div>
                    <div className='fw-bold'>Monique Smith</div>
                 </div>

              </div>
          </div>
        </div>

    </div>
  )
}
