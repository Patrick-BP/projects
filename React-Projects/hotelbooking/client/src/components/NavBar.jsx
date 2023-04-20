import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function NavBar() {
    const navigate = useNavigate()
  return (
    <nav className="navbar navbar-expand-lg pt-4">
  
  <div className="container">
   
   
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

   
    <div className="collapse navbar-collapse" id="navbarButtonsExample">
     
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link  fs-1 fw-bolder text-light webname" href="#">5 Star Getaway</a>
        </li>
      </ul>
    

      <div className="d-flex align-items-center">
       
        <button type="button" className="btn" onClick={()=>navigate('login')}>
        Login
        </button>
        
      </div>
    </div>
    
  </div>
 
</nav>

  )
}
