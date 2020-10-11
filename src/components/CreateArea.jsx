import React from "react";
import { useState } from "react";

function CreateArea(props) {

  const [info,setInfo] = useState({
    title: "",
    content:""
  });

  function handleContent(event) {

  const {value,name} = event.target;
  
    if (name==="title") {
      
      setInfo((prevValue)=>{
        return {...prevValue,title:value};
      })
    } else if(name==="content"){
        setInfo((prevValue)=>{
          return {...prevValue,content:value};
        })
     
    }
  }


  function o (e){
    e.preventDefault();
  }


  return (
    <div>
      <form onSubmit={o}>
        <input name="title" placeholder="Title" onChange={handleContent} value={info.title}/>
        <textarea onChange={handleContent} value={info.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={()=>{
          props.onAdd(info)
          setInfo({
            title: "",
            content:""
          })
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
