import React from 'react';

const ToDo=(props)=>{


  return( 
    <>
  <div className="">
  <li>{props.text}
  <button onClick={
    ()=>{props.onSelect(props.id)}}>
    x
  </button>
  </li>
  
  </div>
  </>
  )
}
export default ToDo