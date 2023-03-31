import React from 'react'
import { Link } from 'react-router-dom';

export default function ChildComponent({id,title,body}) {
  const readMore = ()=>{
      console.log("readmore" + id);
  }
  return (
    <div className='item'>
      <div className="title">{title}</div>
      <div className="textBody">{body}</div>
      <br/>
      <a href="https://www.google.com"><div>Read More</div></a>
    </div>
  )
}
