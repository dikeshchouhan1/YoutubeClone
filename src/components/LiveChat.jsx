import React from 'react'
import ChatMessage from './ChatMessage'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { useSelector } from 'react-redux'
import { generateRandomName } from '../utils/helper'
import { randomMessage } from '../utils/helper'
import { useState } from 'react'

const LiveChat = () => {
    const [liveMessage,setLiveMessage]=useState("");
    const dispatch = useDispatch();
   const chatMessage=useSelector((store)=>store.chat.message )  
    useEffect(()=>{
        const i = setInterval(()=>{
           
           dispatch(addMessage({name:generateRandomName(),Message: randomMessage(20)}))
        },1500)

        return()=>clearInterval(i);
    },[])

  return (
    <>
    
    <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex  flex-col-reverse '>
        <div>

        {chatMessage.map((c,i)=>(<ChatMessage key={i} name={c.name} Message={c.Message}/>))}
        </div>
        
       
    </div>
    <form className='w-full p-2 ml-2 border border-black ' onSubmit={(e)=>{
        e.preventDefault();
      
        dispatch(addMessage({name:"dikesh",Message:liveMessage}))
        setLiveMessage("");
     }}>
        <input className='w-96 px-2' type="text"  value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)}/>
        <button className='px-2 mx-2 bg-green-100 '>Submit</button>

    </form>
    
    </>
  )
}

export default LiveChat