import './post.css'
import {MoreVert } from '@mui/icons-material';
import {users} from '../../dummyData'
const Post = ({post}) => {
    
    return (
        <div className='post'>
            <div className="postTopWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={post.photo} alt="" className="postProfileImg" />
                    <span className="postUserName">Safak Kocaoglu</span>
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
                    <img src="assets/like.png" alt="" className="likeIcon" />
                    <img src="assets/heart.png" alt="" className="likeIcon" />
                    <span className="postLikeCounter">{post.like}</span>
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
