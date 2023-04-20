import React from 'react'
import PostForm from '../components/PostForm'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { fetchPost, updatePost } from '../api/posts'
import { useNavigate, useParams } from 'react-router-dom';

export default function EditPost() {

const queryClient = useQueryClient();
const {id} = useParams()

const navigate = useNavigate()
  const {isLoading, isError, data:post, error} = useQuery({
    queryKey: ["post", id],
    queryFn: ()=>fetchPost(id)
  });


  const updatePostQuery = useMutation({
    mutationFn: updatePost,
    onSuccess: ()=>{
      queryClient.invalidateQueries({queryKey:['posts']});
      navigate('/')
    }
})

const handleSubmit = (updatedPost)=>{
updatePostQuery.mutate({id, ...updatedPost})
}

  return (
    <div>
      <h1>Awesome blog</h1>
        <PostForm onSubmit={handleSubmit} initialValue={post.data}/>
    </div>
  )
}
