import React from 'react'
import './Main.css';
import { useNavigate, Link, Outlet } from 'react-router-dom';
export default function Main() {
    const navigate = useNavigate();

  return (
    <div className='container-fluid  mainWraper '>
        <div className='topMenu  d-flex justify-content-between shadow'>
            <div className='col-4 d-flex align-items-center'>
                <span className="material-symbols-outlined logo">diversity_3</span>
                <input placeholder='Search People' className='searchInput '/>
            </div>
            <div className='col-4 d-flex align-items-center'>
                <ul className='d-flex menulist'>
                   <li className='list-group-item d-flex justify-content-center'> <Link to='/'><span className="material-symbols-outlined menuItems">home</span></Link></li>
                    <li className='list-group-item d-flex justify-content-center'><Link to='/friends'><span className="material-symbols-outlined menuItems">group</span></Link></li>
                </ul>
            </div>
            <div className='col-4 d-flex justify-content-end align-items-center dropdown'>
                <img  src='assets/profile.jpg' title='Account' alt="profile" type="button" className="profilepic dropdown-toggle"  data-bs-toggle="dropdown"/>
                <ul className="dropdown-menu ">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
            </div>
            

        </div>


        <div className='mt-1'>
            <Outlet/>
        </div>

    </div>
  )
}
