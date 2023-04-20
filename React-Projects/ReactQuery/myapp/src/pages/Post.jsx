import React from 'react'
import { useQuery } from 'react-query'
import { fetchPost } from '../api/posts'
import { useParams, useNavigate } from 'react-router-dom'
export default function Post() {
const {id} = useParams()
const navigate = useNavigate()
  const {isLoading, isError, data:post, error} = useQuery({
    queryKey: ["post", id],
    queryFn: ()=>fetchPost(id)
  });

  if(isLoading) return "Loading..."
  if(isError) return `Error: ${error.message}`
  return (
    <div>
      <button onClick={()=>navigate('/')}>Back to list</button>
      <h2>{post.data.title}</h2>
      <div>{post.data.body}</div>
    </div>
  )
}
