import React from 'react'
import AddPost from '../components/AddPost'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { deletePost, fetchPosts, updatePost } from '../api/posts';
import { useNavigate, useParams } from 'react-router-dom';

export default function PostLists() {

  const navigate = useNavigate();
  const queryClient = useQueryClient()
 
  const {isLoading, isError, data:posts, error} = useQuery({
    queryKey:["posts"],
    queryFn:fetchPosts
  })


const handledelete = (id)=>{
  deletePostQuery.mutate(id)
}
const deletePostQuery = useMutation({
  mutationFn:deletePost,
  onSuccess: ()=>{
      queryClient.invalidateQueries({queryKey:['posts']})
  }
})

if(isLoading) return "Loading...";
if(isError) return `Error: ${error.message}`;

  return (
    <div>
        <h2>Add new post</h2>
        <AddPost/>
        List 

        {posts.data.map(post=>{
          return <div key={post.id}>
            <h4 onClick={()=>navigate(`post/${post.id}`)}>{post.title}</h4>
            <button onClick={()=>navigate(`post/${post.id}/edit`)}>Edit</button>
            <button onClick={()=>handledelete(post.id)}>Delete</button>
          </div>
        })}
    </div>
  )
}
