import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [newNote,setNewNote] = useState([
   
  ]);

  function clickedButton(info){
   /*  const otro = newNote;
    otro.push(info);
    setNewNote(otro)
    console.log(newNote); */
    setNewNote(prevVa=>{
     return [...prevVa,info]
    })
  }
  
function deleteNote(id){
  
   setNewNote(newNote.filter((n,index)=>{
  return index!==id
  
}))
   
}


  return (
    <div>
      <Header />
      <CreateArea onAdd={clickedButton}/>
     {
     newNote.map((n,index)=>{return <Note key={index} title={n.title} content={n.content} delete={()=>{deleteNote(index)}}/> })
     } 
     <Footer />
    </div>
  );
}

export default App;
/*  <Note key={1} title="Note title" content="Note content" /> */