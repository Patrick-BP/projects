import React from 'react';
import {PermMedia, Label, Room, EmojiEmotions} from '@mui/icons-material'
import './share.css'
const Share = () => {
    return (
        <div className="share">
            <div className="shareContainer">
                <div className="shareTop">
                    <img className='shareProfileImg' src="/assets/person/1.jpeg" alt="" />
                    <input placeholder="What's in your mind" type="text" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOption">
                        <PermMedia className="shareIcon" htmlColor='tomato'/>
                        <span className="shareOptionText">
                            Photo or Video
                        </span>
                    </div>
                    <div className="shareOption">
                        <Label className="shareIcon" htmlColor='blue'/>
                        <span className="shareOptionText">
                            Tag
                        </span>
                    </div>
                    <div className="shareOption">
                        <Room className="shareIcon" htmlColor='green'/>
                        <span className="shareOptionText">
                           Location
                        </span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor='goldenrod' className="shareIcon"/>
                        <span className="shareOptionText">
                            Feelings
                        </span>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
                
            </div>
            
        </div>
    );
}

export default Share;
