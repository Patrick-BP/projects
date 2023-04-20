import React, { useState } from 'react'
import './Admin.css'
import ManageProduct from '../components/admin/ManageProduct'
import Dashboard from '../components/admin/Dashboard'
import ManageOrder from '../components/admin/ManageOrder'
import ManageUsers from '../components/admin/ManageUsers'
import ViewBill from '../components/admin/ViewBill'
import ManageCategory from '../components/admin/ManageCategory'
import Nav from '../components/admin/Nav'

export default function Admin() {
  const [currentPage, setCurrentPage] = useState(<Dashboard/>);

 
  return (
    <>
   
    <div className='container-fluid d-flex ' style={{height:"92vh"}}>
       <Nav currentPage={setCurrentPage}/>
        <div className='contentContainer'>
         {currentPage}
        </div>

    </div>
    </>
  )
}
