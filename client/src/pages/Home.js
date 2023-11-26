import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';


function Home() {

    const [listOfPosts, setListOfPosts] = useState([]);

    useEffect(() =>{
      axios.get("http://localhost:3001/posts").then((response)=>{
        console.log(response.data); // check the data in the console
        setListOfPosts(response.data);
      })
    },[]);


  return (
    <div>
      {listOfPosts.map((value,key)=>{
      console.log(value, key); // check the value and key in the console
      return <div className="post" key={key}> 
              <div className='title'>{value.title}</div>
              <div className='body'>{value.postText}</div>
              <div className='footer'>{value.username}</div>
            </div>;
    })}
    </div>
  );
}

export default Home