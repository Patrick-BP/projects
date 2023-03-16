

function MoviePlay() {
    return ( 
        <>
         <div>
            <div className="video-div"></div>

            <br />
            <br />

            <div className="video-overview">
              <h4>overview:</h4>
              <div className="d-flex">
                <div className="left-img ">
                  <img src="/avengers.jpg" alt="movie" />
                </div>
                <div className="right-video-info">
                  <div className="video-title">
                    <h3>Movie Title</h3>
                  </div>
                  <div className="video-rating d-flex gap-5 mt-4 ">
                    <div className="d-flex gap-2 items-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 1024 1024"
                        className="text-warning"
                        height="25"
                        width="25"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                      </svg>
                      <p>7.1</p>
                    </div>
                    <div className="d-flex gap-2 items-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 1024 1024"
                        className="text-warning"
                        height="25"
                        width="25"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M712 304c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H384v48c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H184v136h656V256H712v48z"></path>
                        <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zm0-448H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136z"></path>
                      </svg>
                      <p>2022</p>
                    </div>
                  </div>

                  <div className="info">
                    <p>
                      After more than thirty years of service, military awards,
                      medals and decorations for extraordinary heroism in
                      combat, distinguished US Navy Captain Pete Mitchell, call
                      sign Maverick, finds himself exactly where he belongs:
                      pushing the limits as a top test pilot. Having spent years
                      avoiding promotions after the events of Top Gun (1986),
                      Maverick must now confront the ugly past and an uncertain
                      future while tasked with training the next generation of
                      elite fighter pilots for a nearly impossible suicide
                      mission. But as the veteran naval aviator prepares the
                      brilliant graduates for the top-secret assignment,
                      stretching the rules to the breaking point, Mitchell has
                      to face an equally critical challenge: navigate through an
                      uncomfortable, bitter relationship with a hotshot
                      lieutenant holding a grudge. Can Maverick and his Top Guns
                      perform a miracle, give the enemy hell, and come back home
                      in one piece?
                    </p>

                    <table class="table text-light">
                      <tbody>
                        <tr>
                          <td>country:</td>
                          <td>United States</td>
                        </tr>
                        <tr>
                          <td>Genre:</td>
                          <td>Action</td>
                        </tr>
                        <tr>
                          <td>Director:</td>
                          <td>Joseph Kosinski</td>
                        </tr>
                        <tr>
                          <td>Production:</td>
                          <td>Jennifer Connelly, Tom Cruise, Miles Teller</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="video-comments">
              <div className="video-comment">
                <h4>
                  {" "}
                  <span className="numOfCmnts">17</span>Comments:
                </h4>
                <div className="input-cmnt rounded-pill d-flex">
                  <i class="fa-sharp fa-solid fa-circle-user user-icon"></i>
                  <textarea
                    type="text"
                    rows="1"
                    class="form-control-plaintext"
                    placeholder="Plaintext input"
                  />
                </div>

                <div>
                  
                  <div className="cmnt">
                  <div class=" mb-5 mt-5">
			  
        <div class="card">
       <div class="row">
         <div class="col-md-12">
           
           <div class="row">
             <div class="col-md-12">
               <div class="media">
                 <img class="mr-3 rounded-circle" alt="Bootstrap Media Preview" src="https://i.imgur.com/stD0Q19.jpg" />
                 <div class="media-body">
                   <div class="row">
                    <div class="col-8 d-flex name-fcmnt">
                       <h5>Maria Smantha</h5>
                     <span>- 2 hours ago</span>
                    </div>
                    
                    <div class="col-4">
                    
                    <div class="pull-right reply">
                    
                   <a href="#"><span><i class="fa fa-reply"></i> reply</span></a>
                    
                    </div>
                    
                    </div>
                   </div>		
                   
                   It is a long established fact that a reader will be distracted by the readable content of a page.
                                         
                   <div class="media mt-4">
                      <a class="pr-3" href="#"><img class="rounded-circle" alt="Bootstrap Media Another Preview" src="https://i.imgur.com/xELPaag.jpg" /></a>
                     <div class="media-body">
                         
                       <div class="row">
                    <div class="col-12 d-flex name-cmnt">
                       <h5>Simona Disa</h5>
                     <span>- 3 hours ago</span>
                    </div>
                    
                   
                   </div>

                       letters, as opposed to using 'Content here, content here', making it look like readable English.
                     </div>
                   </div>
                   
                   <div class="media mt-3">
                      <a class="pr-3" href="#"><img class="rounded-circle" alt="Bootstrap Media Another Preview" src="https://i.imgur.com/nAcoHRf.jpg" /></a>
                     <div class="media-body">
                         <div class="row">
                    <div class="col-12 d-flex  name-cmnt">
                       <h5>John Smith</h5>
                     <span>- 4 hours ago</span>
                    </div>
                    
                   
                   </div>
                   
                       the majority have suffered alteration in some form, by injected humour, or randomised words.
                                                 
                     </div>
                   </div>
                 </div>
               </div>
               
               
               
               
               <div class="media mt-4 ">
                 <img class="mr-3 rounded-circle" alt="Bootstrap Media Preview" src="https://i.imgur.com/xELPaag.jpg" />
                 <div class="media-body">
                   <div class="row">
                    <div class="  col-8 d-flex name-fcmnt">
                       <h5>Shad f</h5>
                     <span>- 2 hours ago</span>
                    </div>
                    
                    <div class="col-4">
                    
                    <div class="pull-right reply">
                    
                    <a href="#"><span><i class="fa fa-reply"></i> reply</span></a>
                    
                    </div>
                    
                    </div>
                   </div>		
                   
                   The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33.

                   <div>
                    
                   </div>
                   <div class="media mt-4 ">
                      <a class="pr-3" href="#"><img class="rounded-circle" alt="Bootstrap Media Another Preview" src="https://i.imgur.com/nUNhspp.jpg" /></a>
                     <div class="media-body">
                         
                       <div class="row">
                    <div class="col-12 d-flex  name-cmnt">
                       <h5>Andy flowe</h5>
                     <span>- 5 hours ago</span>
                    </div>
                    
                    
                   </div>

                       Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                     </div>
                   </div>
                   
                   <div class="media mt-3">
                      <a class="pr-3" href="#"><img class="rounded-circle" alt="Bootstrap Media Another Preview" src="https://i.imgur.com/HjKTNkG.jpg" /></a>
                     <div class="media-body">
                         <div class="row">
                    <div class="col-12 d-flex  name-cmnt">
                       <h5>Simp f</h5>
                     <span>- 5 hours ago</span>
                    </div>
                    
                   
                   </div>
                   
                       a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur
                     </div>
                   </div>
                                         
                                         
                                         <div class="media mt-3">
                      <a class="pr-3" href="#"><img class="rounded-circle" alt="Bootstrap Media Another Preview" src="https://i.imgur.com/nAcoHRf.jpg" /></a>
                     <div class="media-body">
                         <div class="row">
                    <div class="col-12 d-flex  name-cmnt">
                       <h5>John Smith</h5>
                     <span>- 4 hours ago</span>
                    </div>
                    
                   
                   </div>
                   
                       the majority have suffered alteration in some form, by injected humour, or randomised words.
                                                 
                     </div>
                   </div>
                 </div>
               </div>
               
             </div>
           </div>
         </div>
       </div>
       </div>
     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
     );
}

export default MoviePlay;