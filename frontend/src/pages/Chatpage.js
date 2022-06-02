import React, { useEffect } from 'react';
import axios from 'axios'

const Chatpage = () => {
    const fetchChats =async() =>{
        const data = await axios.get('/api/chat')
        console.log(data);
            
    }

    useEffect(()=>{
         fetchChats();
    } , [])

    // useeffect is the hook in react which runs when the componenet is rendered for the first time 
  return (
    <div>Chatpage</div>
  )
}

export default Chatpage