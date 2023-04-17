import './ManageOrder.css'
import React, { useState , useEffect} from 'react';
import axios from 'axios';
 
axios.defaults.baseURL = "http://localhost:5000/";

export default function ManageOrder() {
    const [orders, setOrders] = useState([]);
    const [customer, setCustomer] = useState({name:"", email:"", contact_number:0, payment_method:""});
    const [order, setOrder] = useState({category:"", product:"", price:0, quantity:0, total:0});
    
    const [categories, setCategories] = useState([]);
    const [products, setProductList] = useState([]);

    const [product, setProduct] = useState();

    useEffect(()=>{
        fetchProducts();
        fetchCategories()

    },[]);

    async function fetchProducts(){
        const prodList = await axios.get('product/all');
        setProductList(prodList.data.data);
        
    };

    async function fetchCategories(){
        const res = await axios.get('category/all')
        setCategories(res.data.data);
        
    };

    const handleProdInput =(event)=> {
        const {value, name} = event.target;
        setProduct(products.find(prod=> prod.name === value));
        setOrder(prev=> ({...prev, [name]: value})); 
        
    }
    const handleCatInput = (event) => {
        const {value, name} = event.target;
        setOrder(prev=> ({...prev, [name]: value })); 
    }

    const handleOrderInput = (event) => {
        const {value, name} = event.target;
        setOrder(prev=> ({...prev, [name]: value }));  
        setOrder(prev=> ({...prev, price: product.price }))
        if(order.quantity >1){
            console.log(order.quantity*order.price);
              setOrder(prev=> ({...prev, total: (order.quantity*order.price) }))
        } 
    }

   
const addOrder = ()=>{
    setOrders(prev=>([...prev,{...order, total:order.price * order.quantity }]));
    setOrder({category:"", product:"", price:0, quantity:0, total:0});
    setProduct({})
}
 const handleCustomer = (event)=>{
    const {value, name} = event.target;
    setCustomer(prev=> ({...prev, [name]:value}));
 }
const createAbill = async ()=>{
    
    const resp = await axios.post('bill/add', {...customer, product_details:orders});
    setCustomer({name:"", email:"", contact_number:0, payment_method:""});
    setOrders([]);
}
  return (
    <>
     <div className='manageCategory d-flex p-3 justify-content-between shadow'>
               <h6>Manage Order</h6> 
                <button className='btn btn-primary'type="button" onClick={createAbill}><i className="bi bi-printer-fill"></i> Submit & Get Bill</button>
            </div>

            <div className='tableContainer shadow   p-3 justify-content-between'>
            <h6>Customer Details:</h6> 
            <div className=' d-flex mt-5 center'>

                <div className="inputbox">
                    <input type='text'  name="name" value={customer.name} onChange={handleCustomer} placeholder='Name*' required/>
                    
                </div>
                <div className="inputbox">
                    <input type='email'  name="email" value={customer.email} onChange={handleCustomer} placeholder='Email*'required/>
                    
                </div>
                <div className="inputbox">
                    <input type='phone'  name="contact_number" value={customer.contact_number} onChange={handleCustomer} placeholder='Phone*' required/>
                    
                </div>
                <div className="inputbox">
                    <select type="select" name="payment_method" value={customer.payment_method} onChange={handleCustomer} required>
                        <option defaultChecked>Payment Method*</option>
                        <option value="cash">Cash</option>
                        <option value="debit card">Debit Card</option>
                        <option value="credit card">Credit Card</option>
                    </select>
                </div>
        
                
            </div>
            </div>
            <div className='tableContainer shadow   p-3 justify-content-between'>
            <h6>Select Product:</h6> 
            <div className=' d-flex mt-3 center'>
                <div className="inputbox d-flex flex-column justify-content-end">
                <label className='fw-bold'>Category</label>
                <select className="form-select form-select-sm" disabled={categories.length == 0} aria-label=".form-select-sm example" name='category' value={order.category} onChange={handleCatInput}>
                    <option   defaultValue={true} >Choose a category</option>
                    {categories && categories.filter(cat=> products.some(prod => prod.category_id === cat.name))
                    .map(cat=><option key={cat._id} value={cat.name}>{cat.name}</option>)}
                </select>
                </div>
                <div className="inputbox d-flex flex-column justify-content-end">
                <label className='fw-bold'>Product</label>
                <select className="form-select form-select-sm" aria-label=".form-select-sm example" disabled={!order.category} name='product' value={order.product } onChange={handleProdInput}>
                    <option   defaultValue={true} >Choose a product</option>
                    {products && products.filter(prod=> prod.category_id === order.category)
                    .map(prod=><option key={prod._id} value={prod.name}>{prod.name}</option>)}
                </select>
                </div>
                <div className="inputbox d-flex flex-column justify-content-end">
                <label className='fw-bold'>Price</label>
                    <div className='fw-bold border-bottom border-2 border-dark-50'>${product?.price}</div>   
                </div>
                <div className="inputbox d-flex flex-column justify-content-end">
                    <label className='fw-bold'>Quantity</label>
                    <input type='number' name="quantity" value={order.quantity} onChange={handleOrderInput} placeholder='Quantity*'/>  
                </div>
               
            </div>
            <div className='d-flex justify-content-between mt-4'>
                <button className='btn btn-primary' onClick={addOrder}>Add New Order</button>
                
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
                            {orders.length >0 ? 
                            <>{orders && orders.map(order=>{
                                    return (
                                        <tr className='tableText'>
                                    <td>{order.product}</td>
                                    <td> {order.category}</td>
                                    <td> {order.price}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.total}</td>
                                    <td style={{width: "20%"}} className='d-flex justify-content-center w-100'>
                                      
                                        <a href="#" className="table-link fs-5 text-dark">
                                            <span className="fa-stack">
                                            <i className="bi bi-trash" onClick={()=>setOrders(prev=> prev.filter(item=> item.product != order.product))}></i>
                                            </span>
                                        </a>
                                        
                                       
                                    </td>
                                </tr>
                                    )
                                })}</> : 
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td><h2 className='text-center'>No Order yet</h2></td>
                                    <td></td>

                                </tr>}
                               {orders.length >0 && <tr className='fw-bolder fs-4 text-center'>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Total:</td>
                                    <td >${orders.reduce((a,b)=> a + b.total, 0)}</td>
                                </tr>}
                             
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
