import React ,{useState, useEffect}from 'react';
import './ManageProduct.css';
import { ToastContainer, toast } from 'react-toastify';
import {tosterError, tosterSuccess} from '../tosterMessage';
import axios from 'axios';
 
axios.defaults.baseURL = "http://localhost:5000/";

export default function ManageProduct() {
    const [newProduct, setNewProduct] = useState({name:"", category_id:"", description: "" , price: 0});
    const [productList, setProductList] = useState([]);
    const [filter, setFilter] = useState("");
    const [editData, setEditData] = useState({});
    const [list, setlist] = useState([]);
    const [categories, setCategories] = useState([]);

    async function fetchData(){
        const category = await axios.get('category/all');
        setCategories(category.data.data)
        const list = await axios.get('product/all');
        setProductList(list.data.data);
        setlist(list.data.data);
    };

    useEffect(()=>{
        fetchData()
    },[]);

    const handleSearch = (event) => {
        const {value} = event.target;
        setFilter(value);
        if(filter.length >0){
            const filterResult = productList.filter(prod => prod.name.toLowerCase().includes(filter.toLowerCase()));
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
       const result = await axios.put(`product/update/${editData._id}`, editData);
       if(result.data.error){
        tosterError(result.data.message);
    
    }else{
    
        tosterSuccess(result.data.message);
       setEditData({name:"", category_id:"", description: "" , price: 0});
    }
    
        
    }
    const handleAddInput = (event) => {
        const {value, name} = event.target;
        setNewProduct(prev=> ({...prev, [name]:value}));
        }

    const submitNewProduct = async () => {
        let result;
        try{
         result = await axios.post('product/add', newProduct);
        }catch(error){
            tosterError(error.message); 
        }
        console.log(newProduct)
        if(result?.data?.error){
            tosterError(result?.data?.message);  
        }else{
            tosterSuccess(result?.data?.message);
            fetchData();
        }
        
    
    }
    
    const deleteCategory = async (id) => {
       
     const result = await axios.delete(`delete/${id}`);
     if(result.data.error){
        tosterError(result.data.message);
    
    
    }else{
        tosterSuccess(result.data.message);
    
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
        <form className='d-flex flex-column gap-4'>
            <input  type="text" placeholder='Name' name='name' value={newProduct.name} onChange={handleAddInput} className='addCategoryInput mb-3' />
            <select className="form-select form-select-sm" aria-label=".form-select-sm example" name='category_id' value={newProduct.category_id} onChange={handleAddInput}>
                <option   defaultValue={true} >Choose a category</option>
                {categories && categories.map(cat=><option key={cat._id} value={cat._id}>{cat.name}</option>)}
            </select>
        
        <input  type="text" placeholder='description' className='addCategoryInput mb-3' name='description' value={newProduct.description} onChange={handleAddInput} />
        <input  type="number" placeholder='price' className='addCategoryInput mb-3' name='price' value={newProduct.price} onChange={handleAddInput}/>
        </form>
        
        
      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={submitNewProduct}>Add</button>
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>



<div className="modal fade" id="deletecategory" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header bg-danger">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Delete Category</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        
        Are you sure you want to delete <b>{editData.name}</b> ?

      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-danger"   data-bs-dismiss="modal" onClick={()=>deleteCategory(editData.id)}  >Delete</button>
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        
      </div>
    </div>
  </div>
</div>

    </>
  )
}
