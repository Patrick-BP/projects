import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000/'

export default function Dashboard() {
const [category, setCategory] = useState(0)

  useEffect(()=>{
    (async function fetchCategory(){
      const result = await axios.get('category/all');
      setCategory(result.data.data.length)
    })()
  },[category])
  return (
    <>
     <div className='manageCategory d-flex p-3 justify-content-between shadow'>
               <h6>Dashboard</h6> 
                
      </div>
         
            <div className='tableContainer d-flex justify-content-between flex-wrap'>
           
              <div className='cards shadow d-flex flex-column  '>
                  <h4 className='text-center'>Total Category:</h4>
                  <p className='text-center fs-3 fw-bold'>{category}</p>
                  <button className=' btnCards'>View Category</button>
              </div>
              <div className='cards shadow d-flex flex-column '>
                  <h4 className='text-center'>Total Product:</h4>
                  <p className='text-center fs-3 fw-bold'>8</p>
                  <button className=' btnCards'>View Product</button>
              </div>
              <div className='cards shadow d-flex flex-column '>
                  <h4 className='text-center'>Total Bill:</h4>
                  <p className='text-center fs-3 fw-bold'>2</p>
                  <button className=' btnCards'>View Category</button>
              </div>
              

            </div>
    
    </>
  )
}
