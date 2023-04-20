import React, { useEffect, useState } from 'react'
import './ViewBill.css';
import axios from 'axios';
import {saveAs} from 'file-saver';
axios.defaults.baseURL = "http://localhost:5000/";


export default function ViewBill() {
    const [orders, setOrders] = useState([]);
    const [viewBill, setViewBill] = useState();
    const [customer, setCustomer] = useState({name:"", email:"", contact_number:0, payment_method:""});

    const fetchData = async()=>{
        const resp =  await axios.get('bill/all');
        setOrders(resp.data.data);
    }
    useEffect(()=>{
        fetchData();
    },[]);

    const ViewBill = (id)=>{
        setViewBill(orders.find(order=> order._id === id));
    }

const deletBill = (id)=>{
        axios.delete(`bill/delete/${id}`);
        fetchData()
}

const createAndDownload = (id)=>{
    const findOrder = orders.find(order=> order._id === id); 
    axios.post('create-pdf', findOrder)
    .then(()=> axios.get('fetch-pdf',{responseType:'blob'}))
    .then((res)=>{
        const pdfBlod = new Blob([res.data], {type:"application/pdf"})
        saveAs(pdfBlod, `newPdf${findOrder._id}.pdf`);
    })
 }

 const downloadPdf = async(id)=>{
 
    createAndDownload(id);

}
  return (
    <>
    <div className='manageCategory d-flex p-3 justify-content-between shadow'>
               <h6 className='fw-bold'>View Bill</h6> 
            </div>
            <div className='field p-4 mt-4 shadow'>
                
                <input id='input' className='filterInput' type="text" placeholder='Filter' />
                <label  htmlFor='input'>Filter</label>
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
                            {orders && orders.map(order=>{

                           return   <tr key={order._id} className='tableText'>
                                    <td>{order.name}</td>
                                    <td> {order.email}</td>
                                    <td> {order.contact_number}</td>
                                    <td>{order.product_details.reduce((a, b)=> a + b.total, 0)}</td>
                                    <td style={{width: "20%"}} className='d-flex justify-content-center w-100'>
                                        <a href="#" className="table-link fs-5  text-dark">
                                            <span className="fa-stack">
                                            <i type="button" className="bi bi-eye-fill" onClick={()=>ViewBill(order._id)} data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                                            </span>
                                        </a>
                                        <a href="#" className="table-link fs-5 text-dark">
                                            <span className="fa-stack">
                                            <i className="bi bi-download" onClick={()=>downloadPdf(order._id)}></i> </span>
                                        </a>
                                        <a href="#" className="table-link fs-5 text-dark">
                                            <span className="fa-stack">
                                            <i className="bi bi-trash" onClick={()=>deletBill(order._id)}></i>
                                            </span>
                                        </a>
                                        
                                          
                                       
                                    </td>
                                </tr> })}
                                   
                             
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

            </div>
    

            {/* <!-- Modal --> */}
            <div className="modal fade modalCustom" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">View Bill</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        
      <table className='w-100 table table-success table-striped-columns'>
        <thead></thead>
        <tbody>
                    <tr>
                        <td><b>Name:</b> {viewBill?.name} </td>
                        <td><b>Email:</b> {viewBill?.email} </td>
                    </tr>
                    <tr>
                        <td><b>Contact Number:</b> {viewBill?.contact_number} </td>
                        <td><b>Payment method: </b>{viewBill?.payment_method} </td>
                    </tr>
        </tbody>
                   
        </table>
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
                                <th className="text-center"><span>Quantity </span></th>
                                <th className="text-center"><span>Total</span></th>
                                
                                <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                            {viewBill && viewBill.product_details.map((bill, index)=>{
                                    return (
                                        <>
                                        
                                <tr key={index} className='tableText'>
                                    <td>{bill.product}</td>
                                    <td>{bill.category}</td>
                                    <td>{bill.price}</td>
                                    <td>{bill.quantity}</td>
                                    <td>{bill.total}</td>
                                </tr> 
                                </>
                                )
                            })}
                             
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
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
