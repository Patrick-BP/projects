import React from 'react'

export default function Admin() {
  return (
    <div className='container-fluid d-flex bg-light' style={{height:"100vh"}}>
        <div className=' shadow' >
            <ul class="nav-news-feed">
                <li><i class="bi bi-microsoft"></i> Dashboard</li>
                <li><i class="bi bi-diagram-3-fill"></i> Manage Category</li>
                <li><i class="bi bi-archive-fill"></i> Manage Product</li>
                <li><i class="bi bi-cart4"></i> manage Order</li>
                <li><i class="bi bi-receipt"></i> View Bill</li>
                <li><i class="bi bi-people-fill"></i> Manage Users</li>
            </ul>
        </div>
        <div className='contentContainer'>
            <div className='manageCategory d-flex p-3 justify-content-between shadow'>
               <h6>Manage Category</h6> 
                <button className='btn btn-primary'><i class="bi bi-plus-circle-fill"></i> Add Category</button>
            </div>
            <div className='filterContainer mt-4 shadow'>
                <input text="text" className='filterInput' />
            </div>
            <div className='tableContainer shadow'></div>
        </div>

    </div>
  )
}
