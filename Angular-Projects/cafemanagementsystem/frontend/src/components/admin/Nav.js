import React from 'react'
import './nav.css'
export default function Nav({clickMenu}) {

const handleClick = (e) => {
  clickMenu({[e]:true});
}
  return (
    <div className=' shadow leftMenu' >
    <ul className="nav-news-feed">
        <li onClick={()=>handleClick("dashboard")} ><i className="bi bi-microsoft"  ></i> Dashboard</li>
        <li onClick={()=>handleClick("manageCategory")}><i className="bi bi-diagram-3-fill" ></i> Manage Category</li>
        <li onClick={()=>handleClick("manageProduct")}><i className="bi bi-archive-fill" ></i> Manage Product</li>
        <li onClick={()=>handleClick("manageOrder")}><i className="bi bi-cart4" ></i> manage Order</li>
        <li onClick={()=>handleClick("viewBill")}><i className="bi bi-receipt" ></i> View Bill</li>
        <li onClick={()=>handleClick("manageUsers")}><i className="bi bi-people-fill" ></i> Manage Users</li>
    </ul>
</div>
  )
}
