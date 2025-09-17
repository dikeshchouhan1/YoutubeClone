import React from 'react'

const ChatMessage = ({name,Message}) => {
  return (
    <div className='flex items-center shadow-sm p-2 '>
    
        <img className='h-8' src="https://blhd.serangkota.go.id/po-content/uploads/userlogo.png" alt="user" />
        <span className='font-bold px-2'>{name}</span>
        <span>{Message}</span>
    </div>
  )
}

export default ChatMessage