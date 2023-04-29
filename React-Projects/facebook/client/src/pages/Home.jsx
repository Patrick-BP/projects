import React from 'react'
import './Home.css'
export default function Home() {
  return (
    <div className='d-flex'>
        <div className='col-3 bg-light vh-100'></div>
        <div className='col-6 bg-warning'>
            <div className='shadow rounded m-4 p-3'>
                 <img  src='assets/profile.jpg' alt="" className='profilepic'/>  
                 <input placeholder="What's in your mind" className='searchInput '/>
                 <hr/>
                 <div className='d-flex justify-content-around text-secondary'>
                    <div class=" d-flex align-items-center gap-2 fw-bold"><span class="material-symbols-outlined text-danger fs-3">videocam</span> Live video</div>
                    <div class=" d-flex align-items-center gap-2 fw-bold"><span class="material-symbols-outlined text-success fs-3">photo_library</span> Photo/video</div>
                    <div class=" d-flex align-items-center gap-2 fw-bold"><span class="material-symbols-outlined text-warning fs-3">mood</span> Feeling/activity</div>

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
                  <div className='text-secondary'><span class="material-symbols-outlined fs-2">more_horiz</span>  <span class="material-symbols-outlined fs-2">close</span></div>
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
                    <div className='d-flex justify-content-between text-secondary'><span class="material-symbols-outlined text-danger fs-3">favorite</span>&nbsp; &nbsp; 677</div>
                    <div>6.4K comments  34 shares</div>
                  </div>
                <hr/>
                <div className='d-flex justify-content-around text-secondary'>
                    <div class=" d-flex align-items-center gap-2 fw-bold"><span class="material-symbols-outlined text-secondary fs-3">thumb_up</span> Like</div>
                    <div class=" d-flex align-items-center gap-2 fw-bold"><span class="material-symbols-outlined text-secondary fs-3">forum</span> Comment</div>
                    <div class=" d-flex align-items-center gap-2 fw-bold"><span class="material-symbols-outlined text-secondary fs-3">forward</span> Share</div>

                 </div>

            </div>
        </div>
        <div className='col-3 bg-success p-3'>
          <div>
            Sponsored
          </div>
          <hr/>
          <div>
            Contacts
          </div>
        </div>

    </div>
  )
}
