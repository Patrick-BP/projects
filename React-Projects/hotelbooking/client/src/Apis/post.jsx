import axios from 'axios';

const url = process.env.URL;
export const getAllUsers = async ()=>{
   const response =  await axios.get('http://localhost:3004/user/all');
    return response.data.data;
};

export const addUser = ()=>{
    
};

export const deleteUser = ()=>{
    
};