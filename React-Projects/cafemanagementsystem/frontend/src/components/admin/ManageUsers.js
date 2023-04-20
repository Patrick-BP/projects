import React from 'react'

export default function ManageUsers() {
  return (
    <>
    <div className='manageCategory d-flex p-3 justify-content-between shadow'>
               <h6>Manage Product</h6> 
                <button className='btn btn-primary'><i className="bi bi-plus-circle-fill"></i> Add Product</button>
            </div>
            <div className='field p-4 mt-4 shadow'>
                
                <input id='input' className='filterInput' text="text" placeholder='Filter' />
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
                                <th className="text-center"><span>Action</span></th>
                                <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='tableText'>
                                    <td>Full name</td>
                                    <td> 2013/08/12</td>
                                    <td> pending</td>
                                    
                                    <td style={{width: "20%"}} className='d-flex justify-content-center w-100'>
                                    <span className="fa-stack">
                                               <input type="checkbox"  />
                                            </span>
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
