import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ManageCategory.css';
import {tosterError, tosterSuccess} from '../tosterMessage';
import axios from 'axios'


export default function ManageCategory() {
    const [newCategory, setNewCategory] = useState({name:""});
    const [categoryList, setCategoryList] = useState([]);
    const [filter, setFilter] = useState("");
    const [editData, setEditData] = useState({});

    
    axios.defaults.baseURL = "http://localhost:5000/";

    const fetchData = async()=>{
        const list = await axios.get('category/all');
        setCategoryList(list.data.data);
        
    }

useEffect(()=>{
    fetchData()
   
},[]);


const handleSearch = (event) => {
        const {value} = event.target;
        setFilter(value);
        if(value.length >0){
            const filterResult = categoryList.filter(cat => cat.name.toLowerCase().includes(filter.toLowerCase()));
            setCategoryList(filterResult);
        }else{
            fetchData()
        }
}

const handleChanges = (event) => {
const {value, name} = event.target;

setEditData(prev=> ({...prev, [name]:value}));
}

const handleEdit = async ()=>{
   const result = await axios.put(`category/update/${editData._id}`, editData);
   
   if(result.data.error){
    tosterError(result.data.message);
}else{
    tosterSuccess(result.data.message);
    setEditData({});
    fetchData()
}
  
}

const submitNewCategory = async () => {
    const result = await axios.post('category/add', newCategory);
    if(result.data.error){
        tosterError(result.data.message);
        setEditData({name:""});
       
    }else{
        tosterSuccess(result.data.message);
        fetchData();
    }
    

}

const deleteCategory = async (id) => {
   
 const result = await axios.delete(`category/delete/${id}`);
 if(result.data.error){
    tosterError(result.data.message);

}else{
    tosterSuccess(result.data.message);
    fetchData();
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
               <h6>Manage Category</h6> 
                <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#addproduct"><i className="bi bi-plus-circle-fill"></i> Add Category</button>
            </div>
            <div className='field p-4 mt-4 shadow'>
                
                <input id='input' className='filterInput' value={filter} onChange={handleSearch} text="text" placeholder='Filter' />
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
                                <th className="text-center"><span>Action</span></th>
                                <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categoryList && categoryList.map((category, index)=>{
                                    return (
                                        <>
                                        {category._id === editData._id ? <tr key={index} className='tableText'>
                                        <td style={{width: "60%"}}>
                                            <input type='text' name="name" value={editData.name} onChange={handleChanges}/>
                                        </td>
                                        <td style={{width: "20%"}} className='d-flex justify-content-center w-100'>
                                            <a href="#" className="table-link fs-5  text-dark" onClick={handleEdit} >
                                               
                                                <span className="material-symbols-outlined"  title="Save Changes">save</span>
                                                
                                            </a>
                                        </td>
                                    </tr> :
                                    <tr key={index} className='tableText'>
                                        <td style={{width: "60%"}}>{category.name}</td>
                                        <td style={{width: "20%"}} className='d-flex justify-content-center w-100'>
                                            <a href="#" className="table-link fs-5  text-dark" onClick={()=>setEditData(category)} >
                                                <span className="fa-stack">
                                                <i className="bi bi-pencil" title="Edit Category"></i>
                                                </span>
                                            </a>
                                            <a href="#" className="table-link fs-5  text-dark" data-bs-toggle="modal" data-bs-target="#deletecategory" onClick={()=>setEditData({id:category._id, name:category.name})}  >
                                                <span className="fa-stack">
                                                <i className="bi bi-trash3" title="Delete category" style={{color:"red"}}></i>
                                                </span>
                                            </a>
                                        </td>
                                    </tr>}
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
        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Category</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <input  type="text" placeholder='Category Name' name="name" value={newCategory.name}  onChange={(e)=>setNewCategory({name: e.target.value})} className='addCategoryInput' />
      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={submitNewCategory}>Add</button>
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
        
        Are you sure you want to delete <b>{editData.name}</b> category ?

      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={()=>deleteCategory(editData.id)}  >Delete</button>
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        
      </div>
    </div>
  </div>
</div>
    
    </>
  )
}
