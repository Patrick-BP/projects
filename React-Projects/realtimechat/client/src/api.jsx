import axios from 'axios';

export async function fetchPost(data){
  const response =  await axios.post('http://localhost:3001/authenticate', data)
    return response
}