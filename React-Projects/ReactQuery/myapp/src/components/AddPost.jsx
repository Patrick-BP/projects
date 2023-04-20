import React from 'react'
import PostForm from './PostForm'
import { useMutation, useQueryClient } from 'react-query'
import { createPost } from '../api/posts'
import {v4 as uuid4} from 'uuid'

export default function AddPost() {
const queryClient = useQueryClient();

  const createPostMutation = useMutation({
    mutationFn:createPost,
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey: ['posts']})
    }
  });

  const handleAddPost = (post)=>{
    createPostMutation.mutate({
      id: uuid4(),
      ...post,
    })
  }
  return (
    <div>AddPost
<PostForm onSubmit={handleAddPost} initialValue={{}}/>

    </div>

  )
}
