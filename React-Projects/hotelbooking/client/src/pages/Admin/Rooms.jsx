import React from 'react'
import {QueryClient, useQuery} from 'react-query'
import { getAllRooms } from '../../Apis/room'
export default function Rooms() {


  const {isLoading, isError, data:rooms, error} = useQuery({
    queryKey: ['rooms'],
    queryFn: getAllRooms
  })

  if(isLoading)return<div>Loading...</div>; 
  if(isError) return<div>"Error:" + error.message</div>; 
 
  return (
    <div>
    <h3>Rooms</h3>

<table className="table table-dark table-hover">
<thead>
<tr>
  
  <th scope="col">Name</th>
  <th scope="col">Type</th>
  <th scope="col">Rent Per day</th>
  <th scope="col">Max Count</th>
  <th scope="col">Phone Number</th>
  
</tr>
</thead>
<tbody>
{rooms && rooms.map(room=>{
return <tr key={room._id}>
  <th scope="row">{room.name}</th>
  <td>{room.type}</td>
  <td>{room.rent_per_day}</td>
  <td>{room.max_count}</td>
  <td>{room.phone_number}</td>
</tr>
})}

</tbody>
</table>
</div>
)
}
