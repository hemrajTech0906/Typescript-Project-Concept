import React, { useState } from 'react'

//AIM--> value get from state props inside function
interface IPROPS{
    name: string,
    title:string,
}


// if u are redeclare in same component of interface of props 
//assign value {No need} to pass argument /destructuring 
// directly accessing value of that assign variable just like 
//  options.name---->john 
//options.title----->title

const options: IPROPS= {
    name:'john',
    title:"developer"
}

interface ISTATE{
    name:string,
    age:number,
}

const FunComp:React.FC<IPROPS> = ({name,tittle}) => {

    const[state,setState] = useState<ISTATE>({
        name:"SCIENCE AND TECH",
        age:22,
    })
  return (
    <div>
        <hr></hr>
      <h1>assignment2</h1>
        <h3>getValueFromProps</h3>
        <h2>name:{options.name}</h2>
        <h2>title:{options.title}</h2>
        <br></br>
        <h3>getValueFromState</h3>
        <h2>name:{state.name}</h2>
        <h2>age:{state.age}</h2>
        <hr></hr>

   

    </div>

  )
}

export default FunComp