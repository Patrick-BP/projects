import React from 'react'
import './RoomCard.css'
export default function RoomCard({data}) {
  console.log(data);
  return (
    <>
     <div className="card mb-3  shadow p-3 mb-5"  style={{maxWidth: "80%", backgroundColor:"rgb(24 23 23)"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{data.description}</h5>
        <p className="card-text">Parking, Reception, Free Wifi</p>
        <p className="card-text"><b>Max count : </b>{data.max_count}</p>
        <p className="card-text"><b>Phone number : </b> {data.phone_number}</p>
        <p className="card-text"><b>Type :</b>{data.type}</p>
        <div className=' d-flex justify-content-end'>
          <button className='btn d-flex '>View Details</button>
        </div>
        
      </div>
    </div>
  </div>
</div>
    </>
  
  )
}
