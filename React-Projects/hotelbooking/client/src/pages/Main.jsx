import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

export default function Main() {
  return (
   <div className='' >
        <NavBar/>
        <div className='position-relative container'>
            <Outlet/>
        </div>
        
   </div>
  )
}
