import React, { useEffect, useState } from 'react'
import './ViewBill.css';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:5000/";

export default function ViewBill() {
    const [orders, setOrders] = useState([]);

    const fetchData = async()=>{
        const resp =  await axios.get('bill/all')
    }
    useEffect(()=>{

    },[])
  return (
    <>
    <div className='manageCategory d-flex p-3 justify-content-between shadow'>
               <h6>View Bill</h6> 
            </div>
            <div className='field p-4 mt-4 shadow'>
                
                <input id='input' className='filterInput' type="text" placeholder='Filter' />
                <label  htmlFor='input' >Filter</label>
            </div>
            <div className='tableContainer shadow'>
           
<div className=" bootstrap snippets bootdey">
    <div className="row">
        <div className="col-lg-12">
            <div className="main-box no-header clearfix">
                <div className="main-box-body clearfix">
                    <div className="table-responsive">
                        <table className="table user-list">
                            <thead>
                                <tr>
                                <th className="text-center"><span>Name</span></th>
                                <th className="text-center"><span>Email</span></th>
                                <th className="text-center"><span>Contact Number</span></th>
                                <th className="text-center"><span>Total</span></th>
                                <th className="text-center"><span>Action</span></th>
                                <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='tableText'>
                                    <td>Full name</td>
                                    <td> 2013/08/12</td>
                                    <td> pending</td>
                                    <td>marlon@brando.com</td>
                                    <td style={{width: "20%"}} className='d-flex justify-content-center w-100'>
                                        <a href="#" className="table-link fs-5  text-dark">
                                            <span className="fa-stack">
                                            <i className="bi bi-eye-fill"></i>
                                            </span>
                                        </a>
                                        <a href="#" className="table-link fs-5 text-dark">
                                            <span className="fa-stack">
                                            <i className="bi bi-download"></i>                                            </span>
                                        </a>
                                        <a href="#" className="table-link fs-5 text-dark">
                                            <span className="fa-stack">
                                            <i className="bi bi-trash"></i>
                                            </span>
                                        </a>
                                        
                                          
                                       
                                    </td>
                                </tr>
                                
                                   
                             
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

            </div>
    
    </>
  )
}
