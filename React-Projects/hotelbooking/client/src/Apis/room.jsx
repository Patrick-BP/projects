import axios from 'axios';

export const getAllRooms = async ()=>{
   const response =  await axios.get('http://localhost:3004/room/all');
    return response.data.data;
};

export const addRoom = async (room)=>{
    const response =  await axios.post('http://localhost:3004/room/add', room);
    return response.data.data;
};

export const deleteRoom = (id)=>{
    
};