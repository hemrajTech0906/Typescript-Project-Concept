import React, { useState } from 'react'
import  './Counter.css'



// STEP 1->Create function/arrow function and give that type {:react.FC->it is an function component}

// need--> state or props

interface IPROPS{}
interface ISTATE{
    count: number,
}

const Counter:React.FC= () => {
const[state,setState]=useState<ISTATE>({count:0})

// add increment

const incrementHandler=()=>{
    setState({count:state.count+1})
}

const decrementHandler=()=>{
    if(state.count <=0){
        state.count=0
    }else{
        setState({count:state.count-1})
    }
   
}

  return (
    <div className='shado-box'>
      <hr></hr>  
    <h1 style={{textAlign:'center'}}>COUNTpro1:Assignment:1</h1>
    <div className='ctr'>
    <button className="btn1" onClick={incrementHandler}>INC</button>
    <span className='nbr1'>{state.count}</span>
    <button className='btn2' onClick={decrementHandler}>DEC</button>
     <hr></hr>

    </div>
    
    </div>
    
  )
}

export default Counter