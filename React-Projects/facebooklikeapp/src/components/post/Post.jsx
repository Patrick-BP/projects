import './post.css'
import {MoreVert } from '@mui/icons-material';
import {Users} from '../../dummyData'
import { useState } from 'react';
const Post = ({post}) => {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = ()=>{
        setLike(isLiked? like-1 : like+1)
        setIsLiked(!isLiked)
    }
const user = Users?.filter((user)=>user.id === post.userId)[0]    
    return (
        <div className='post'>
            <div className="postTopWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={user.profilePicture} alt="" className="postProfileImg" />
                    <span className="postUserName">{user.username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="assets/like.png" alt="" className="likeIcon" onClick={likeHandler} />
                    <img src="assets/heart.png" alt="" className="likeIcon" onClick={likeHandler} />
                    <span className="postLikeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} Comments</span>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Post;
