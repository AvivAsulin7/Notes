import React from "react";
import { useState } from "react";
import Note from "./components/Note";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";

function App() {
  const [myNotes, setMyNotes] = useState([]);
  function addNote(note) {
    setMyNotes([...myNotes, note]);
  }

  function deleteNote(id) {
    setMyNotes(myNotes.filter((note, index) => id !== index));
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {myNotes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
