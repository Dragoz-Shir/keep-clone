import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [newNote,setNewNote] = useState([
    {title:"holi",content:"contenido"},{title:"holi",content:"contenido"}
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



  return (
    <div>
      <Header />
      <CreateArea onAdd={clickedButton}/>
     {
     newNote.map((n,index)=>{return <Note key={index} title={n.title} content={n.content}/> })
     } 
     <Footer />
    </div>
  );
}

export default App;
/*  <Note key={1} title="Note title" content="Note content" /> */