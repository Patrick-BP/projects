import React, { useState,useEffect } from 'react';
 import {Link} from 'react-router-dom'
import axios from 'axios'
axios.defaults.baseURL ="http://localhost:3001"

function UserList() {
const [users, setUsers] = useState([])



useEffect(()=>{
  const fetch = async ()=>{
    const allusers = await axios.get('/users')
    setUsers(allusers.data)
 }
fetch()
},[])

  return (
    <>
      <div className="container profile-page">
        <h2 >All Users</h2><span className='mt-3 '><Link to='/users/add' className="fw-bolder ">Add a User</Link></span>
        <div className="row">
          {users?.map((user, index) => {
            return (
              <div key={index} className="col-xl-6 col-lg-7 col-md-12">
                <div className="card profile-header">
                  <div className="body">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-12">
                        <div className="profile-image float-md-right">
                          {" "}
                          <img
                            src={user.gender === "Male" ? "https://bootdey.com/img/Content/avatar/avatar7.png" : "https://bootdey.com/img/Content/avatar/avatar3.png" }
                            alt=""
                          />{" "}
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-8 col-12">
                        <h4 className="m-t-0 m-b-0">
                          <strong>{user.firstname}</strong> {user.lastname}
                        </h4>
                        <span className="job_post">{user.education}</span>
                        <p>
                        {user.about?.substring(200,1)} ...
                        </p>
                        <div>
                          <span className="btn btn-primary btn-round btn-simple btn-custom">
                           <Link to={`/users/${user._id}`}>More Details</Link> 
                          </span>
                        </div>
                        <p className="social-icon m-t-5 m-b-0">
                          <a title="Twitter" href="">
                            <i className="fa fa-twitter"></i>
                          </a>
                          <a title="Facebook" href="">
                            <i className="fa fa-facebook"></i>
                          </a>
                          <a title="Google-plus" href="">
                            <i className="fa fa-twitter"></i>
                          </a>
                          <a title="Behance" href="">
                            <i className="fa fa-behance"></i>
                          </a>
                          <a title="Instagram" href="">
                            <i className="fa fa-instagram "></i>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default UserList;
