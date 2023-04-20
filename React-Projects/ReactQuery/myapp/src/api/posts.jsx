import axios from 'axios';
export async function fetchPosts(){
    const response = await axios.get('http://localhost:3000/posts');
    return response
}

export async function fetchPost(id){
    const response = await axios.get(`http://localhost:3000/posts/${id}` );
    return response
}

export async function createPost(data){
    const response = await axios.post(`http://localhost:3000/posts/`, data );
    return response
}

export async function updatePost(data){
    const response = await axios.put(`http://localhost:3000/posts/${data.id}`, data );
    return response
}

export async function deletePost(id){
    const response = await axios.delete(`http://localhost:3000/posts/${id}`);
    return response
}