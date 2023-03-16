import React, { useState, useEffect } from "react";
import "../../formStyle.css";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function EditUser() {
  
  const userId = useParams().id;
  const [user, setUser] = useState({

    firstname: "",
    lastname: "",
    about: "",
    favColor: "",
    gender: "",
    email: "",
    dob: "",
    luckNumber: 0,
    courseSatisfaction: 0,
    phone: "",
    education: "",
    hobbies: [],
  })
  


  
  useEffect(() => {

    async function fetch (){
      const res = await axios.get(`/users/${userId}`);
      setUser(res.data);
     
    };
    fetch()
  }, [userId]);

  function handleChange(event) {
    if (user) {
        if (event.target.name === "hobbies") {
            if (user && user.hobbies) {
                if (user.hobbies.includes(event.target.value)) {
                    let newHobbies= user.hobbies.filter((hobby) => hobby !== event.target.value);
                    setUser({ ...user, [event.target.name]: newHobbies });
                } else {
                    let newHobbies = [...user.hobbies].concat(event.target.value);
                    setUser({ ...user, [event.target.name]: newHobbies });
                }
            } else if (user && !user.hobbies) {
                let newHobbies = [event.target.value];
                setUser({ ...user, [event.target.name]: newHobbies });
            }
        } else if (event.target.name === "luckNumber" && user) {
            setUser({ ...user, [event.target.name]: Number(event.target.value) });
        } else if (event.target.name === "courseSatisfaction" && user) {
            setUser({ ...user, [event.target.name]: Number(event.target.value) });
        } else if (user) {
            setUser({ ...user, [event.target.name]: event.target.value });
        }
    }
}

function updateFunc(){
  axios.put(`/users/${userId}`,user)
}
 

    return (
        <>
          <section>
        <div className="container rounded bg-white mt-5 mb-5">
          <div className="row">
            <div className="col-md-5 border-right">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="first name"
                      name="firstname"
                      value={user.firstname}
                      onChange={(e)=>handleChange(e)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Lastname</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastname"
                      value={user.lastname}
                      placeholder="Lastname"
                      onChange={(e)=>handleChange(e)}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Date of Birth</label>
                    <input
                      type="date"
                      className="form-control"
                      name="dob"
                      min='1980-01-01' max='2000-01-01'
                      placeholder="Date of Birth"
                      value={user.dob}
                      onChange={(e)=>handleChange(e)}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Education</label>
                    <select
                    name="education"
                    className="form-control"
                    value={user.education}
                    form="education"
                    onChange={(e)=>handleChange(e)}
                  >
                    <option value="" disabled>
                      ...Choose Here...
                    </option>
                    <option value="High School">High school</option>
                    <option value="Collage">Collage</option>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Master">Master</option>
                    <option value="Doctor">Doctor</option>
                  </select>
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={user.email}
                      onChange={(e)=>handleChange(e)}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                      name="phone"
                      value={user.phone}
                      patern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      onChange={(e)=>handleChange(e)}
                    />
                  </div>
                  <div className="col-md-12 mt-5 mb-4">
                    <label className="labels">course Satisfaction</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                      type="range"
                      min="0"
                      max="10"
                      step="1"
                      name="courseSatisfaction"
                      value={user.courseSatisfaction}
                      onChange={(e)=>handleChange(e)}
                    />&nbsp;<i className="fs-4"><b>{user.courseSatisfaction}</b></i>
                  </div>
                  <div className="col-md-12 mb-4">
                    <label className="labels">Favorite Color</label>
                    <input
                      type="color"
                      className="form-control"
                      name="favColor"
                     
                      value={user.favColor}
                      onChange={(e)=>handleChange(e)}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels mr-4">Gender</label>
                    <input
                    type="radio"
                    className="btn-check"
                    name="gender"
                    id="male"
                    autoComplete="off"
                    value="Male"
                    checked={user.gender === "Male"}
                    onChange={(e)=>handleChange(e)}
                    
                  />
                  <label
                    className="btn btn-sm btn-outline-secondary"
                    htmlFor="male"
                  >
                    Male
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="gender"
                    id="female"
                    autoComplete="off"
                    value="Female"
                    checked={user.gender === "Female"}
                    onChange={(e)=>handleChange(e)}
                  />
                  <label
                    className="btn btn-sm btn-outline-secondary"
                    htmlFor="female"
                  >
                    Female
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="gender"
                    id="other"
                    autoComplete="off"
                    value="Other"
                    checked={user.gender === "Other"}
                    onChange={(e)=>handleChange(e)}
                  />
                  <label
                    className="btn btn-sm btn-outline-secondary"
                    htmlFor="other"
                  >
                    Other
                  </label>
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Luck number</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Luck number"
                      name="luckNumber"
                      value={user.luckNumber}
                      onChange={(e)=>handleChange(e)}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Hobbies</label>
                     <div className="form-check">
                   <input
                      className="form-check-input"
                      type="checkbox"
                      name="hobbies"
                      value="Basketball"
                      checked={user ? user.hobbies?.includes('Basketball') : false}
                      id="flexCheckDefault"
                      onChange={(e)=>handleChange(e)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Basketball
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="hobbies"
                      checked={user ? user.hobbies?.includes('Motorcycle') : false}
                      value="Motorcycle"
                      
                      id="flexCheckChecked"
                      onChange={(e)=>handleChange(e)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      motorcycle
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="hobbies"
                      checked={user ? user.hobbies?.includes('Pool') : false}
                      value="Pool"
                      
                      id="flexCheckDefault"
                      onChange={(e)=>handleChange(e)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      pool billiards
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="hobbies"
                      checked={user ? user.hobbies?.includes('Movies') : false}
                      value="Movies"
                      
                      id="flexCheckChecked"
                      
                      onChange={(e)=>handleChange(e)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Movies
                    </label>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                 
                  
                    <label className="labels">About You</label>
                    <textarea
                      type="text"
                      className="form-control"
                      name="about"
                      value={user.about}
                      placeholder="About You...."
                      onChange={(e)=>handleChange(e)}
                    />
                  
                </div>
                <div className="mt-5 text-center">
                  <button className="btn btn-primary profile-button btn-custom" type="button" onClick={updateFunc}>
                  <Link to={`/users/${user._id}`}>  update Profile</Link> 
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

export default EditUser;