import React from 'react'

export default function AddRoom() {
  return (
    <div>


<div className="form_back">
            
            <input type="text" className="input customeInput" placeholder="Name"/>
            <input type="text" className="input customeInput" placeholder="Rent per day" />
            <input type="text" className="input customeInput" placeholder="Max count" />
            <input type="text" className="input customeInput" placeholder="Descript"/>
            <input type="text" className="input customeInput" placeholder="Phone Number"/>
            <input type="text" className="input customeInput" placeholder="Type"/>
           <label className="customeLabel d-flex align-items-center">Upload images
                <input type="file" className="inputfile" placeholder="images"/>
        </label >
                
            
            <br/>
            <br/>
            <br/>
            <button className="btn">ADD ROOM</button>
           
        </div>
    </div>
  )
}
