import './Dashboard.css'
import { useState, useEffect } from "react";
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:8088/api/v1'

function Dashboard() {
    const [propertyList, setPropertyList] = useState([]);
  
    const fetchProperties = async ( )=>{
      const response = await axios.get('/properties');
      setPropertyList(response.data)
    }
    
    useEffect(()=>{
      fetchProperties();
    }, [])

    return ( 
        <>
        
<div className="inside-banner">
  <div className="container"> 
    
    <h2>Dashboard</h2>
</div>
</div>
<div className="wrapper">
    <div className='leftside'>
        <div class="vertical-menu">
            <a href="#" ><i class="bi bi-house-door-fill"></i> Properties</a>
            <a href="#"><i class="bi bi-people-fill"></i> Manage Customer</a>
            <a href="#"><i class="bi bi-person-fill"></i> Manage Owner</a>
        </div>
    </div>
    <div className='rightside'>

    </div>
<div class="card">
  <div class="side side-front">
  <span class="material-symbols-outlined">home_app_logo</span>
  </div>
  <div class="side side-middle">
    <span class="property-text">Total Properties</span>
   
    <div className='line'></div>
  </div>
  <div class="side side-back">
    <span class="property-number">{propertyList.length}</span>
  </div>
</div>
</div>
        </>
     );
}

export default Dashboard;