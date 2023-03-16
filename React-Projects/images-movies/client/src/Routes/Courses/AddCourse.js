import React, { useState} from "react";
import "../../formStyle.css";
import { Link } from "react-router-dom";
import axios from "axios";
function AddCourse() {
  
  const [course, setCourse] = useState({
    name: "",
    code: "",
    description: "",
    
  });
 

  function handleChange(event) {
    const { name, value} = event.target;
    setCourse(
      {
        ...course,
        [name]:  value,
        
      },
    );
  }
  

  function addFunc() {
    axios.post(`/courses/add`, course).catch((err)=>{
      console.log("Failed" + err)
    });
    
  }


  return (
    <>
      <section>
        <div className="container rounded bg-white mt-5 mb-5">
          <div className="row">
            <div className="col-md-5 border-right">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Add a New Course </h4>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                      value={course.firstname}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Code</label>
                    <input
                      type="text"
                      className="form-control"
                      name="code"
                      value={course.lastname}
                      placeholder="code"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                
                <div className="row mt-3">
                  <label className="labels">Description</label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="description"
                    value={course.about}
                    placeholder="description"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                
                <div className="mt-5 text-center">
                  <button
                    className="btn btn-primary profile-button btn-custom"
                    type="button"
                    onClick={addFunc}
                  >
                   <Link  to={`/courses`}>New Course</Link> 
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddCourse;
