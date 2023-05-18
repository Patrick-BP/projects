import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4000/user/'



export const login = async (credentials)=>{
    const response = await axios.post('login', credentials);
    return response.data
}
export const getAllUsers = async ()=>{
    const response = await axios.get('all')
    return response.data
}
export const registerUser = async (newUser)=>{
    const response = await axios.post('save', newUser)
    return response.data
}
export const deleteUser = async (userId)=>{
    const response = await axios.post(`del/${userId}` )
    return response.data
}
export const updateUser = async (userId, updatedUser)=>{
    const response = await axios.post(`update/${userId}`, updatedUser)
    return response.data
}