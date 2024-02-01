import React, { useState } from 'react'
import './YouTube.css'


// To passing arguments in handlers and how do i access to handler function in ts
// parameterise value passing in function

interface ISTATE{
    message: string,
}
const YouTube:React.FC = () => {
    const[state,setState]=useState<ISTATE>({message:"WELCOME"})

    let handlClick=(greet:string):void=>{
      //  console.log(message:greet)
        //console.log({message:greet})
        setState({message:greet})
        
    }

  return (
    <div className='YOUTUBE'>
        <h1 >assign3/parameterisefunction</h1>
        <h2 >{state.message}</h2>
        <button className='ybtn1' onClick={()=>{handlClick("LIKE")}}>LIKE</button>
        <button className='ybtn1' onClick={()=>{handlClick("COMMENT")}}>COMMENT</button>
        <button className='ybtn1' onClick={()=>{handlClick("SUBSCRIBE")}}> SUBSCRIBE</button>

    </div>
  )
}

export default YouTube