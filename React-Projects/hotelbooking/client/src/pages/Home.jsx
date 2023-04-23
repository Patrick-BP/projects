import React, { useState } from 'react'
import './Home.css'
import RoomCard from '../components/RoomCard';
import {QueryClient, useQuery} from 'react-query'
import { getAllRooms } from '../Apis/room'

export default function Home() {
  const [startType, setStartType] = useState({type:"text"});
  const [endType, setEndType] = useState({type:"text"});

  const {isLoading, isError, data:rooms, error} = useQuery({
    queryKey: ['rooms'],
    queryFn: getAllRooms
  })

  if(isLoading)return "Loading..."; 
  if(isError) return "Error:" + error.message; 
  console.log(rooms);
  return (
    <div>
<div className='d-flex justify-content-center'>
<input onFocus={() =>setStartType({type: 'date'})} onBlur={() =>setStartType({type: 'text'})} type={startType.type} placeholder="Start date" className="inputHome" name="text" />
<input onFocus={() =>setEndType({type: 'date'})} onBlur={() =>setEndType({type: 'text'})} type={endType.type} placeholder="End date" className="inputHome" name="text" />
<input placeholder="Search rooms" className="inputHome" name="text" type="text"/>
<select className="inputHome" >
  <option>All</option>
  <option>Delux</option>
  <option>Non Delux</option>
</select>
</div>
<div className='d-flex flex-column align-items-center'>

  {rooms && rooms.map(room=>{
    return<RoomCard data={room}/>
  })}


</div>

    </div>
  )
}
