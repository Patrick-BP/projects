import React from 'react'
import './Home.css'
import RoomCard from '../components/RoomCard'

export default function Home() {
  return (
    <div>
<div className='d-flex justify-content-center'>
<input placeholder="Username" class="inputHome" name="text" type="text"/>
<input placeholder="Username" class="inputHome" name="text" type="text"/>
<input placeholder="Username" class="inputHome" name="text" type="text"/>
</div>
<div className='d-flex flex-column align-items-center'>
<RoomCard/>
<RoomCard/>
<RoomCard/>
<RoomCard/>
<RoomCard/>

</div>

    </div>
  )
}
