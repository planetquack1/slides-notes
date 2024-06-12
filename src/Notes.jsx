import React, { useState, useEffect } from "react";
import NotesList from "./NotesList"
import Download from "./Download";
import CopyToClipBoard from "react-copy-to-clipboard";
import dice from './dice.png'
import sound from './sound.jpg'
import notesApp from './notes-app.webp'

const Notes = ({ pdfFile, numPages, title }) => {

  const [notes, setNotes] = useState(
    Array.from({ length: numPages }, () => "")
  );

  const file = (notes) => {
    return notes.map((note, index) => (
      `<div key=${index}>
        ${note}
        <img src=${sound}>
      </div>`
    )).join('');
  };

  const handleNoteChange = (index, newValue) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = newValue;
    setNotes(updatedNotes);

    localStorage.setItem("inputNotes", JSON.stringify(updatedNotes));
  };

  useEffect(() => {
    const storedNotes = localStorage.getItem("inputNotes");
    if (storedNotes !== null) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  return (
    <div className="notes-container">
      <NotesList notes={notes} onNoteChange={handleNoteChange} pdfFile={pdfFile} title={title}/>
      {/* <Download notes={notes} title={title} /> */}
      <CopyToClipBoard
        text={file(notes)}
        onCopy={d => console.log("Copied" + d)}
        options={{ format: "text/html" }}
      >
        <div className="copy">
          <button className="copy-button"
            style={{
              display: 'flex',
              flexDirection: 'column', // Stack items vertically
              alignItems: 'center',
              cursor: 'pointer', // Add cursor pointer for better UX
              fontSize: '15px',
              padding: '15px'
            }}
          >
            <img
              src={notesApp}
              alt="Copy"
              width='100px'
              height='100px'
              style={{
                marginRight: '8px',
                borderRadius: '17.544%' // Adjust the border radius as needed
              }}
            />
            <span style={{ marginTop: '16px' }}>Copy and Paste {<br></br>} into Notes App</span>
          </button>
        </div>
      </CopyToClipBoard>
    </div>
  );
}

export default Notes
