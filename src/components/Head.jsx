import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import {toggleMenu} from '../utils/appSlice.js';
import { useEffect } from 'react';
import { API_KEY } from '../utils/contants.js';


const Head = () => {
  const [searchQuery,setSearchQuery]=useState("");
  const [suggestions,setSuggestions]=useState([]);
  const [showSuggestions,setShowSuggestions]=useState(false);

  useEffect(()=>{

   const timer=setTimeout(()=>getSearchSuggestions(),200) 
   return()=>{
    clearTimeout(timer);
   }
  },[searchQuery])

const getSearchSuggestions = async () => {

    const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q=${encodeURIComponent(
          searchQuery
        )}&key=${API_KEY}`
      );

      const data = await response.json();
   
      setSuggestions(data.items);

  }
  const dispatch=useDispatch();
  const toogleMenuHandler=()=>{
      dispatch(toggleMenu())
  }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>

      <div className='flex col-span-1'>

        <img onClick={()=>toogleMenuHandler()} className='h-8 cursor-pointer' src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png" alt="menu" />
        <a href="/">
        <img className='h-8 mx-2 cursor-pointer' src="https://logos-world.net/wp-content/uploads/2020/05/Black-YouTube-logo.png" alt="youtube-logo" />
        </a>
      </div>
      <div>

      <div className='col-span-10 px-10'>
        <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' 
        type="text"
        value={searchQuery} 
        onChange={(e)=>setSearchQuery(e.target.value)}
        onFocus={()=>setShowSuggestions(true)}
        onBlur={()=>setShowSuggestions(false)}
        />
        <button className='border border-gray-400 p-2 rounded-r-full '>Search</button>
      </div>
       { showSuggestions && (<div className='fixed bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg border border-gray-100'>
        <ul>
          {suggestions.map((s,i)=><li key={i} className='py-2 hover:bg-gray-100'>{s.snippet.title}</li>)

          }
        </ul>

         </div>)}
        </div>
      <div className='col-span-1'>
        <img className='h-8' src="https://blhd.serangkota.go.id/po-content/uploads/userlogo.png" alt="user" />
      </div>
    </div>
  )
}

export default Head