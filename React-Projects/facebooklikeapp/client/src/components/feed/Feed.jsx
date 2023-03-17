import React, { useEffect, useState } from 'react';
import Post from '../post/Post';
import Share from '../share/share';
import './feed.css';
import axios from 'axios';
const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        const fetchPosts = async ()=>{
            const res = await axios.get(`posts/timeline/6413fe3fb8b429a8a9e9c6b7`);
            setPosts(res.data)
            console.log(res.data);  
        };
        fetchPosts();
        
    },[])
    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share/>
                {posts.map(post=>{
                   return <Post key={post.id} post={post}/>
                })}
               

            </div>

        </div>
    );
}

export default Feed;
