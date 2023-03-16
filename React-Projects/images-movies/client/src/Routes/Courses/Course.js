import {Link, useParams} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import "../../courseStyle.css";
axios.defaults.baseURL ='http://localhost:3001'
function Course() {
  const courseId = useParams().courseId

  const [course, setcourse] = useState(
    {
        name: "",
        code: "",
        description: "",
        
      }
  );
  console.log(courseId);
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`/courses/${courseId}`);
      setcourse(res.data);
      
    };
    fetch();
  }, [courseId]);


  return <>
  <div className="site-wrap">

<div className="site-section ftco-subscribe-1 site-blocks-cover pb-4" style={{backgroundImage: "url('/bg_1.jpg')"}}>
    <div className="container">
      <div className="row align-items-end">
        <div className="col-lg-7">
          <h2 className="mb-0">{course.name}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
    </div>
  </div> 

<div className="site-section">
    <div className="container">
        <div className="row">
            <div className="col-md-6 mb-4">
                <p>
                    <img src="/course_5.jpg" alt="Image" className="img-fluid"/>
                </p>
            </div>
            <div className="col-lg-5 ml-auto align-self-center">
                    <h2 className="section-title-underline mb-5">
                        <span>Course Details</span>
                    </h2>
                    
                    <p><strong className="text-black d-block">Teacher:</strong> Craig Daniel</p>
                    <p className="mb-5"><strong className="text-black d-block">Hours:</strong> 8:00 am &mdash; 9:30am</p>
                    <p>{course.description}</p>
                    <p>Modi sit dolor repellat esse! Sed necessitatibus itaque libero odit placeat nesciunt, voluptatum totam facere.</p>

                    <ul className="ul-check primary list-unstyled mb-5">
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                        <li>consectetur adipisicing  </li>
                        <li>Sit dolor repellat esse</li>
                        <li>Necessitatibus</li>
                        <li>Sed necessitatibus itaque </li>
                    </ul>

                    <p>
                        <a href="#" className="btn btn-primary rounded-0 btn-lg px-5">Enroll</a>
                    </p>

                </div>
        </div>
    </div>
</div>

</div>
  </>;
}

export default Course;
