import React, { useState } from "react";
import "../../formStyle.css";
import { Link } from "react-router-dom";
import axios from "axios";
function AddUser() {
  
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
  });
  const [hobbies, setHobbies] = useState([]);



  function handleChange(event) {
    const { name, type, value, checked } = event.target;
    setUser(
      {
        ...user,
        [name]: type === "checkbox" ? checked : value,
        hobbies: hobbies,
      },
    );
  }

  function HobbiesChange(event) {
    const { value, checked } = event.target;
    if (checked) {
      setHobbies([...hobbies, value]);
    } else {
      setHobbies((prev) => prev.filter((e) => e !== value));
    }
  }

  function addFunc() {
    axios.post(`/users`, user);
    
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
                      onChange={(e) => handleChange(e)}
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
                      onChange={(e) => handleChange(e)}
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
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Education</label>
                    <select
                      name="education"
                      className="form-control"
                      value={user.education}
                      form="education"
                      onChange={(e) => handleChange(e)}
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
                      onChange={(e) => handleChange(e)}
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
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="col-md-12 mt-5 mb-4">
                    <label className="labels">course Satisfaction</label>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                      type="range"
                      min="0"
                      max="10"
                      step="1"
                      name="courseSatisfaction"
                      value={user.courseSatisfaction}
                      onChange={(e) => handleChange(e)}
                    />
                    &nbsp;
                    <i className="fs-4">
                      <b>{user.courseSatisfaction}</b>
                    </i>
                  </div>
                  <div className="col-md-12 mb-4">
                    <label className="labels">Favorite Color</label>
                    <input
                      type="color"
                      className="form-control"
                      name="favColor"
                      required
                      value={user.favColor}
                      onChange={(e) => handleChange(e)}
                      
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
                      onChange={(e) => handleChange(e)}
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
                      onChange={(e) => handleChange(e)}
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
                      onChange={(e) => handleChange(e)}
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
                      onChange={(e) => handleChange(e)}
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
                        
                        id="flexCheckDefault"
                        onChange={(e) => HobbiesChange(e)}
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
                        value="Motorcycle"
                        
                        id="flexCheckChecked"
                        onChange={(e) => HobbiesChange(e)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked"
                      >
                        Motorcycle
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="hobbies"
                        value="Pool"
                        
                        id="flexCheckDefault"
                        onChange={(e) => HobbiesChange(e)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Pool billiards
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="hobbies"
                        value="Movies"
                        id="flexCheckChecked"
                      
                        onChange={(e) => HobbiesChange(e)}
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
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="mt-5 text-center">
                  <button
                    className="btn btn-primary profile-button btn-custom"
                    type="button"
                    onClick={addFunc}
                  >
                   <Link to={`/users`}>New Profile</Link> 
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

export default AddUser;
