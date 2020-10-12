import React,{ useState } from "react";

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';



function CreateArea(props) {

  const [info,setInfo] = useState({
    title: "",
    content:""
  });

  const [clickTextArea,setClick] = useState(false);

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

function olvo ()
{
  setClick(true)
}
  function o (e){
    e.preventDefault();
  }


  return (
    <div>
      <form onSubmit={o} className="create-note">
        { clickTextArea ? <input name="title" placeholder="Title" onChange={handleContent} value={info.title}/> : null}
        <textarea onClick={olvo} onChange={handleContent} value={info.content} name="content" placeholder="Take a note..." rows={clickTextArea ? "3" : "1"} />
       
       <Zoom in={clickTextArea ? true:false}>
        <Fab onClick={()=>{
          props.onAdd(info)
          setInfo({
            title: "",
            content:""
          })
        }}> <AddIcon/></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
