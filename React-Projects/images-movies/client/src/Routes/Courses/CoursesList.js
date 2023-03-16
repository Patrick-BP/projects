import React, { useState,useEffect } from 'react';
 import {Link, Outlet} from 'react-router-dom'
import axios from 'axios'
axios.defaults.baseURL ="http://localhost:3001"

function CoursesList() {
const [course, setcourse] = useState([])

const fetch = async ()=>{
   const allcourses = await axios.get('/courses')
   setcourse(allcourses.data)
}

useEffect(()=>{
fetch()
},[course])

  return (
    <>
      <div className="container profile-page ">
        <h2>All Courses</h2>
        <Link to='/courses/add' className=" fw-bolder ">Add a Course</Link>
        
        <div className="row">
          {course.map((course, index) => {
            return (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sl-6 ">
                <div className="card profile-header">
                  <div className="body">
                    <div className="row">
                      
                      <div className="col-lg-12 col-md-12 col-12">
                        <h4 className="m-t-0 m-b-0">
                          <strong>{course.name}</strong> {course.code}
                        </h4>
                        <span className="job_post">{course.description?.substring(100,0)} ...</span>
                        <p>
                        
                        </p>
                        <div>
                          <span className="btn btn-primary btn-round btn-simple btn-custom">
                           
                           <Link to={`/courses/${course._id}`} className=" fw-bolder ">Learn More </Link>
                          </span>&nbsp;
                          
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Outlet/>
      </div>

      
    </>
  );
}

export default CoursesList;
