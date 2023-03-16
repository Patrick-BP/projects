import { useParams, Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../../userStyle.css";

axios.defaults.baseURL = "http://localhost:3001";

function User() {
    let {id} = useParams();


  const [user, setUser] = useState([
    {
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
      }
  ]);
  
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`/users/${id}`);
      setUser([res.data]);
      
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
function deleteFunc(){
    axios.delete(`/users/del/${id}`)
}
  return (
    <>
      {user.map((user, index) => {
        return (
          <section
            key={index}
            className="section about-section gray-bg"
            id="about"
          >
            <div className="container">
              <div className="row align-items-center flex-row-reverse">
                <div className="col-lg-6">
                  <div className="about-text go-to">
                    <h3 className="dark-color">About Me</h3>
                    <h6 className="theme-color lead">
                      {user.firstname} {user.lastname}
                    </h6>
                    <p>{user.about}</p>
                    <div className="row about-list">
                      <div className="col-md-6">
                        <div className="media">
                          <label>Birthday</label>
                          <p>{user.dob}</p>
                        </div>
                        <div className="media">
                          <label>Gender</label>
                          <p>{user.gender}</p>
                        </div>
                        <div className="media">
                          <label>Hobbies</label>
                          <p>{user.hobbies.join(", ")}</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="media">
                          <label>Education</label>
                          <p>{user.education}</p>
                        </div>
                        <div className="media">
                          <label>E-mail</label>
                          <p>{user.email}</p>
                        </div>
                        <div className="media">
                          <label>Phone</label>
                          <p>{user.phone}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-avatar">
                    <img
                      src={
                        user.gender === "Male"
                          ? "https://bootdey.com/img/Content/avatar/avatar7.png"
                          : "https://bootdey.com/img/Content/avatar/avatar3.png"
                      }
                      title=""
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="counter">
                <div className="row">
                  <div className="col-6 col-lg-3">
                    <div className="count-data text-center">
                      <h6 className="count h2" data-to="500" data-speed="500">
                        {user.courseSatisfaction}
                      </h6>
                      <p className="m-0px font-w-600">Course satisfaction</p>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3">
                    <div className="count-data text-center">
                      <h6 className="count h2" data-to="150" data-speed="150">
                        {user.luckNumber}
                      </h6>
                      <p className="m-0px font-w-600">Luck Number</p>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3">
                    <div className="count-data text-center">
                      <h6
                        className="count h2 d-flex justify-content-center"
                        data-to="850"
                        data-speed="850"
                      >
                        <div
                          style={{
                            height: "30px",
                            width: "80px",
                            backgroundColor: user.favColor,
                            justifyContent: "center",
                          }}
                        ></div>
                      </h6>
                      <p className="m-0px font-w-600">Favorite Color</p>
                    </div>
                  </div>

                  <div className="col-6 col-lg-3">
                    <div className="count-data text-center">
                      <Link to={`/users/edit/${id}`}>
                      <p className="m-0px font-w-600 btn btn-primary btn-round btn-simple btn-custom">
                        Update
                      </p></Link>
                      &nbsp;
                      <p className="m-0px font-w-600 bg-danger btn btn-primary btn-round btn-simple btn-custom" onClick={deleteFunc}>
                      <Link to='/users'>Delete</Link>  
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

    
    </>
  );
}

export default User;
<></>;
