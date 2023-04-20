import React from 'react'
import {Link } from "react-router-dom"
export default function Nav() {
  return (
   <>
     <div className="col-md-2">
            <ul className="nav nav-pills nav-stacked well">
                <li className="active"><a href="#"><i className="fa fa-envelope"></i> Menu</a></li>
                <li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
                <li><Link to="blogs"><i className="fa fa-user"></i>  Blogs </Link></li>
                <li><Link to="contact"><i className="fa fa-sign-out"></i> Contact us</Link></li>
            </ul>
        </div>
   </> )
}
