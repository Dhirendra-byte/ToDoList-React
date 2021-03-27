import React, { useState } from 'react';
import "./styles.css";
import Todo from "./Todo";
export default function App() {
  const [item,setItem]=useState("");
  const [list,setList]=useState([]);

const handleChange=(event)=>{
   setItem(event.target.value);
}
const handleClick=()=>{
  if(item===''){
    alert("Enter valid Task");
    return;
  }
  setList((oldList)=>{
      return [...oldList,item];
  });
  setItem("");
};

const deleteItems=(id)=>{
  setList((oldList)=>{
     return oldList.filter((arrElement,index)=>{
          return index!==id;
     })
  })
}

  return (
    <>
    <div className="App">
      <input type="text"  onChange={handleChange} placeholder="Add Task" value={item}/>
      <button onClick={handleClick} >+</button>
      <ul>
  {list.map((listval,index)=>{
    return <Todo key={index} 
                 text={listval}
                 id={index}
                 onSelect={deleteItems}/>;
  })}
      </ul>
    </div>
    </>
  );
}
