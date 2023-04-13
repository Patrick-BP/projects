import React from 'react'

export default function Topmenu() {
  return (
    <div className='container-fluid d-flex justify-content-between shadow' style={{backgroundColor:"#095DB2", height:"70px"}}>
        <div className='fs-4 fw-bolder text-light text-center p-2'><i class="bi bi-cup-hot fs-2"></i> &nbsp;   Cafe Management System</div>
        <div className='p-2'><i class="bi bi-person-circle text-light fs-2 " ></i></div>
    </div>
  )
}
