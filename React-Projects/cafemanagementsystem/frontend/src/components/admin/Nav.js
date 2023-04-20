import React from 'react'
import './nav.css'
import Dashboard from './Dashboard'
import ManageCategory from './ManageCategory'
import ManageProduct from './ManageProduct'
import ManageOrder from './ManageOrder'
import ViewBill from './ViewBill'
import ManageUsers from './ManageUsers'
export default function Nav({currentPage}) {

  return (
    <div className=' shadow leftMenu' >
    <ul className="nav-news-feed">
        <li onClick={()=>currentPage(<Dashboard/>)} ><i className="bi bi-microsoft"  ></i> Dashboard</li>
        <li onClick={()=>currentPage(<ManageCategory/>)}><i className="bi bi-diagram-3-fill" ></i> Manage Category</li>
        <li onClick={()=>currentPage(<ManageProduct/>)}><i className="bi bi-archive-fill" ></i> Manage Product</li>
        <li onClick={()=>currentPage(<ManageOrder/>)}><i className="bi bi-cart4" ></i> manage Order</li>
        <li onClick={()=>currentPage(<ViewBill/>)}><i className="bi bi-receipt" ></i> View Bill</li>
        <li onClick={()=>currentPage(<ManageUsers/>)}><i className="bi bi-people-fill" ></i> Manage Users</li>
    </ul>
</div>
  )
}
