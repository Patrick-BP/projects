import React, { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { addRoom } from '../../Apis/room'

export default function AddRoom() {
const [room, setRoom] = useState({name:"", type:'', max_count:'', rent_per_day:'', description:'', phone_number:''});
  const queryClient = useQueryClient()

const handleChanges = (e) => {
   const {value, name} = e.target;
   setRoom({...room, [name]:value})
}

const addRoomFn = () => {
  addRoomQuery.mutate(room);
console.log(room);
}

const addRoomQuery = useMutation({
    mutationFn:addRoom,
    onSuccess: ()=>{
      queryClient.invalidateQueries({queryKey:['rooms']})
    }
})
  return (
    <div>


<div className="form_back">
            
            <input type="text" name="name" value={room.name} onChange={handleChanges} className="input customeInput" placeholder="Name"/>
            <input type="number" name="rent_per_day" value={room.rent_per_day} onChange={handleChanges} className="input customeInput" placeholder="Rent per day" />
            <input type="number" name = "max_count" value={room.max_count} onChange={handleChanges} className="input customeInput" placeholder="Max count" />
            <input type="text" name='description' value={room.description} onChange={handleChanges} className="input customeInput" placeholder="Descript"/>
            <input type="number" name="phone_number" value={room.phone_number} onChange={handleChanges} className="input customeInput" placeholder="Phone Number"/>
            <input type="text" name="type" value={room.type} onChange={handleChanges} className="input customeInput" placeholder="Type"/>
           <label className="customeLabel d-flex align-items-center">Upload images
                <input type="file" name='pictures' onChange={handleChanges} className="inputfile" placeholder="images"/>
        </label >
                
            
            <br/>
            <br/>
            <br/>
            <button className="btn" type="button" onClick={addRoomFn}>ADD ROOM</button>
           
        </div>
    </div>
  )
}
