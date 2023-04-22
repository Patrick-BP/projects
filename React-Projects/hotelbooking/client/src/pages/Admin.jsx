import React from "react";
import "./Admin.css";

import { Outlet, Link } from "react-router-dom";
export default function Admin() {
  
  return (
    <div>
      <h1 className="d-flex justify-content-center mb-5">Admin Panel</h1>
      <div className="mb-5">
        <ul className="nav nav-underline">
          <li className="nav-item ">
            <Link className="nav-link" aria-current="page" to="bookings">
              Bookings
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="rooms">
              Rooms
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="addroom">
              Add Rooms
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="users">
              Users
            </Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
}
