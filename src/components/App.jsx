import React from "react";

import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";
//Challenge. Render all the notes inside notes.js as a seperate Note
//component.

function App() {
  return (
    <div>
      <Header />
      {notes.map((n) => (
        <Note key={n.key} title={n.title} content={n.content} />
      ))}
      <Footer />
    </div>
  );
}
export default App;
