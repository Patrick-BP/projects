import './ManageOrder.css'
import React from 'react'

export default function ManageOrder() {
  return (
    <>
     <div className='manageCategory d-flex p-3 justify-content-between shadow'>
               <h6>Manage Order</h6> 
                <button className='btn btn-primary'><i className="bi bi-printer-fill"></i> Submit & Get Bill</button>
            </div>

            <div className='tableContainer shadow   p-3 justify-content-between'>
            <h6>Customer Details:</h6> 
            <div className=' d-flex mt-5 center'>

                <div className="inputbox">
                    <input type='text'  name="name" placeholder='Name*'/>
                    
                </div>
                <div className="inputbox">
                    <input type='email'  name="email" placeholder='Email*'/>
                    
                </div>
                <div className="inputbox">
                    <input type='phone'  name="phone" placeholder='Phone*'/>
                    
                </div>
                <div className="inputbox">
                    <select type="select">
                        <option value="">Payment Method*</option>
                        <option value="masterCard">Master Card</option>
                    </select>
                </div>
        
                
            </div>
            </div>
            <div className='tableContainer shadow   p-3 justify-content-between'>
            <h6>Select Product:</h6> 
            <div className=' d-flex mt-5 center'>
                <div className="inputbox">
                        <select type="select">
                        <option value="">Category</option>
                        <option value="masterCard">Master Card</option>
                    </select>
                </div>
                <div className="inputbox">
                    <select type="select">
                        <option value="">Product</option>
                        <option value="masterCard">Master Card</option>
                    </select>
                </div>
                <div className="inputbox">
                    <input type='text'  name="Price*" placeholder='Price'/>   
                </div>
                <div className="inputbox">
                    <input type='text'  name="Quantity*" placeholder='Quantity*'/>  
                </div>
                <div className="inputbox">
                    <input type='text'  name="Total" placeholder='Total*'/>   
                </div>
            </div>
            <div className='d-flex justify-content-between mt-4'>
                <button className='btn btn-secondary  '>Add</button>
                <div className='totalAmount'><i className="bi bi-currency-dollar"></i> Total amount: 0</div>
            </div>
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
                                <th className="text-center"><span>Category</span></th>
                                <th className="text-center"><span>Price</span></th>
                                <th className="text-center"><span>Quatity </span></th>
                                <th className="text-center"><span>Total</span></th>
                                <th className="text-center"><span>Delete</span></th>
                                <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='tableText'>
                                    <td>Full name</td>
                                    <td> 2013/08/12</td>
                                    <td> pending</td>
                                    <td>marlon@brando.com</td>
                                    <td>marlon@brando.com</td>
                                    <td style={{width: "20%"}} className='d-flex justify-content-center w-100'>
                                      
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
