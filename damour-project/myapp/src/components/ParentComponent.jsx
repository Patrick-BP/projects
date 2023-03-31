import React, { useEffect, useState } from 'react'
import ChildComponent from './ChildComponent';
import axios from 'axios'

export default function ParentComponent() {
    const [news, setNews] = useState([]);


    useEffect(()=>{
        (async function fetchData(){
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
          setNews(res.data);
    })()
    },[])


  return (
    <div className='container'>
        {news && news.map((item)=>{
             return <ChildComponent key={item.id} id={item.id} title={item.title} body={item.body} />
        })}
       
   
    </div>
  )
}
