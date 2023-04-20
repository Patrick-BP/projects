import React from 'react'
import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <>

<nav className="navbar navbar-inverse container" role="navigation">
    <div className="container-fluid">
        <div className="navbar-header">
            <a className="navbar-brand" href="#">Aplication</a>
        </div>
    </div>
    
</nav>
  



<div className="container bootstrap snippets bootdey">
    <div className="row well">
      <Nav/>
        <div className="col-md-10">
            <Outlet/>

        </div>
    </div>

</div>


    </>
  )
}
