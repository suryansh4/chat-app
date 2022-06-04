import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';   
import axios from 'axios'

const Chatpage = () => {
   const [Chats , setChats] = useState([]);
   
    const fetchChats =async() =>{
        const data = await axios.get('/api/chat')
        setChats(data);
            
    }
// useeffect is the hook in react which runs when the componenet is rendered for the first time 
    useEffect(()=>{
         fetchChats();
    } , [])

    
  return (
    <div></div>
  );
}

export default Chatpage