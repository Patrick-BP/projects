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
  const [menu, setMenu] = useState({dashboard:true});

  const clickMenu = (menu) => {
      setMenu(menu)
  }
  return (
    <>
   
    <div className='container-fluid d-flex ' style={{height:"92vh"}}>
       <Nav clickMenu={clickMenu}/>
        <div className='contentContainer'>
         {menu.dashboard && <Dashboard/>}
         {menu.manageCategory && <ManageCategory/>}
         {menu.manageUsers && <ManageUsers/>}
         {menu.manageOrder && <ManageOrder/>}
         {menu.manageProduct && <ManageProduct/>}
         {menu.viewBill && <ViewBill/>}
            
          
        </div>

    </div>
    </>
  )
}
