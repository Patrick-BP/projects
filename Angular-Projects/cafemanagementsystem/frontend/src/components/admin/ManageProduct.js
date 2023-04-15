import React ,{useState, useEffect}from 'react';
import './ManageProduct.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
 
axios.defaults.baseURL = "http://localhost:5000/";

export default function ManageProduct() {
    const [newProduct, setNewProduct] = useState({name:""});
    const [productList, setProductList] = useState([]);
    const [filter, setFilter] = useState("");
    const [editData, setEditData] = useState({});
    const [list, setlist] = useState([]);
    const [categories, setCategories] = useState([]);



    useEffect(()=>{
        (async function fetchData(){
            const category = await axios.get('category/all');
            setCategories(category.data.data)
            const list = await axios.get('product/all');
            setProductList(list.data.data);
            setlist(list.data.data);
        })()
    },[]);

    const handleSearch = (event) => {
        const {value} = event.target;
        setFilter(value);
        if(filter.length >0){
            const filterResult = productList.filter(cat => cat.name.toLowerCase().includes(filter.toLowerCase()));
            setProductList(filterResult);
        }else{
            setProductList(list);
        }
}

const handleChanges = (event) => {
    const {value, name} = event.target;
    setEditData(prev=> ({...prev, [name]:value}));
    }
    
    const handleEdit = async ()=>{
       const result = await axios.put(`update/${editData._id}`, editData);
       if(result.data.error){
            
        toast.error(result.data.message, {
       position: "top-right",
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "light",
       });
       
    
    }else{
    toast.success(result.data.message, {
       position: "top-right",
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "light",
       });
    setEditData({});
    }
    
        
    }
    
    const submitNewCategory = async () => {
        const result = await axios.post('add', newProduct);
        if(result.data.error){
            
                 toast.error(result.data.message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            setEditData({name:""});
           
        }else{
            toast.success(result.data.message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
    
        }
        
    
    }
    
    const deleteCategory = async (id) => {
       
     const result = await axios.delete(`delete/${id}`);
     if(result.data.error){
        toast.error(result.data.message, {
       position: "top-right",
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "light",
       });
    
    
    }else{
    toast.success(result.data.message, {
       position: "top-right",
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "light",
       });
    
    }
    
    }

  return (
    <>
    <div>
        
        <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        
        />
      </div>
     <div className='manageCategory d-flex p-3 justify-content-between shadow'>
               <h6>Manage Product</h6> 
                <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#addproduct"><i className="bi bi-plus-circle-fill"></i> Add Product</button>
            </div>
            <div className='field p-4 mt-4 shadow'>
                
                <input id='input' className='filterInput' value={filter} onChange={handleSearch} type="text" placeholder='Filter' />
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
                                <th className="text-center"><span>Category</span></th>
                                <th className="text-center"><span>Description</span></th>
                                <th className="text-center"><span>price </span></th>
                                <th className="text-center"><span>Action</span></th>
                                <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                            {productList && productList.map((product, index)=>{
                                    return (
                                        <>
                                        
                           {product._id === editData._id  ? (<tr key={product._id} className='tableText'>
                                    <td><input type='text' name="name" value={editData.name} onChange={handleChanges}/></td>
                                    <td> <input type='text' name="category" value={editData.category_id} onChange={handleChanges}/></td>
                                    <td> <input type='text'name="description" value={editData.description} onChange={handleChanges}/></td>
                                    <td><input type='text'name="price" value={editData.price} onChange={handleChanges}/></td>
                                    <td style={{width: "20%"}} className='d-flex justify-content-center w-100'>
                                        <a href="#" className="table-link fs-5  text-dark"onClick={handleEdit}>
                                        <span className="material-symbols-outlined"  title="Save Changes">save</span>
                                        </a>
                                        
                                    </td>
                                </tr>) : (
                                <tr key={index} className='tableText'>
                                    <td>{product.name}</td>
                                    <td> {product.category_id}</td>
                                    <td> {product.description}</td>
                                    <td>{product.price}</td>
                                    <td style={{width: "20%"}} className='d-flex justify-content-center w-100'>
                                        <a href="#" className="table-link fs-5  text-dark"  onClick={()=>setEditData(product)}>
                                            <span className="fa-stack">
                                            <i className="bi bi-pencil" title="Edit Product"></i>
                                            </span>
                                        </a>
                                        <a href="#" className="table-link fs-5 text-dark" data-bs-toggle="modal" data-bs-target="#deletecategory" onClick={()=>setEditData({id:product._id, name:product.name})}>
                                            <span className="fa-stack">
                                            <i className="bi bi-trash" title="Delete product" style={{color:"red"}}></i>
                                            </span>
                                        </a>
                                        
                                            <span className="fa-stack">
                                               <input type="checkbox"  />
                                            </span>
                                       
                                    </td>
                                </tr> )}
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




  <div className="modal fade" id="addproduct" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Product</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body ">
        <form>
            <input  type="text" placeholder='Name' className='addCategoryInput mb-3' />
        <section class="form-select" aria-label="Default select example">
            {categories && categories.map(cat=><option key={cat._id} value={cat._id}>{cat.name}</option>)}
        </section>
        <input  type="text" placeholder='description' className='addCategoryInput mb-3' />
        <input  type="text" placeholder='price' className='addCategoryInput mb-3' />
        </form>
        
        
      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-primary">Add</button>
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>

    </>
  )
}
