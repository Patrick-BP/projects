import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000/'

export default function Dashboard() {
const [length, setLength] = useState({})

  useEffect(()=>{
    (async function fetchData(){
      const lengthData = await axios.get('data/length');
      setLength(lengthData.data.data);
      
    })()
  },[])
  return (
    <>
     <div className='manageCategory d-flex p-3 justify-content-between shadow'>
               <h6>Dashboard</h6> 
                
      </div>
         
            <div className='tableContainer d-flex justify-content-between flex-wrap'>
           
              <div className='cards shadow d-flex flex-column  '>
                  <h4 className='text-center'>Total Category:</h4>
                  <p className='text-center fs-3 fw-bold'>{length.cat}</p>
                  <button className=' btnCards'>View Category</button>
              </div>
              <div className='cards shadow d-flex flex-column '>
                  <h4 className='text-center'>Total Product:</h4>
                  <p className='text-center fs-3 fw-bold'>{length.prod}</p>
                  <button className=' btnCards'>View Product</button>
              </div>
              <div className='cards shadow d-flex flex-column '>
                  <h4 className='text-center'>Total Bill:</h4>
                  <p className='text-center fs-3 fw-bold'>{length.ord}</p>
                  <button className=' btnCards'>View Category</button>
              </div>
              

            </div>
    
    </>
  )
}
