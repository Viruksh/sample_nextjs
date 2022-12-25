import dynamic from 'next/dynamic'
import React, { useState } from "react";
import parse from 'html-react-parser';
import axios from 'axios';

export async function getServerSideProps({ context }) {
  console.log('start printing context data');
    
    
  const posts = await axios.post('http://localhost:3000/api/getallposts', 'dummy')
  .then((response)=>response.data.value)
  
  return {
    props : {
      data : posts
    }
  }
  /*.then((response) => {
    // Handle response
    console.log(response.data);
    console.log ('print data')
    return {
      props : {
        data : response.data.value
      }
    }
    
})*/
/*.catch(err => {
    // Handle errors
    console.error('#333333333333' + err);
    return {
      props : {
        
      }
    }
    
});*/
/*return {
  props : {
    data : [{id:1,'content':'testellsekr'}]
  }
}*/
}

export default function Posts({data}) {
    const [value, setValue] = useState('');
    console.log(data);
    return (
      <div>
      <ul>
      {data.map((post) => (
        <li key={post.id}>{post.content}</li>
      ))}
      <li key='2323'> fdasfsdf</li>
    </ul>
   
    </div>
    )}


