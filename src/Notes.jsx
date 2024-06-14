import React, { useState, useEffect } from "react";
import NotesList from "./NotesList"
import Download from "./Download";
import CopyToClipBoard from "react-copy-to-clipboard";
import dice from './dice.png'
import sound from './sound.jpg'
import notesApp from './notes-app.webp'
// import sermon from './sermon.jpg'
import sermonTitle from './sermon-title.jpeg'
import sermonLq from './sermon-lq.jpg'
import sermonMq from './sermon-mq.jpg'

import metadata from './sermons/level-up/persevering-and-maturing-in-christ/metadata.json'

const title = 'persevering-and-maturing-in-christ';
const series = 'level-up';

// const images_path = './sermons/' + series + '/' + title + '/slideshow-images';

const images = require.context('./sermons/level-up/persevering-and-maturing-in-christ/slideshow-images', true);
const imageList = images.keys().map(image => images(image));

const Notes = ({ numPages, title }) => {

  const [notes, setNotes] = useState(
    Array.from({ length: numPages }, () => "")
  );

  const file = (notes, imageList) => {
    return (
      notes.map((note, index) => (
        `<div key=${index}>
        ${note}
        <img src=${imageList[index]} width='200'>
      </div>`
      )).join('')
    );
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

  async function copyToClipboard(notes, imgUrls) {
    try {
      // Create an HTML string that includes all the data
      let htmlString = '<html><body>';
      imgUrls.forEach((imgUrl, index) => {

        const slideTitleData = metadata[index + 1]
        const slideTitle = slideTitleData ? `<h2>${slideTitleData}</h2>` : ''

        const notesData = notes[index]
        const note = notesData ? `<p>${notesData}</p>` : ''

        htmlString += (slideTitle + `<img src="${imgUrl}" />` + note + '<p></p>');
      });
      htmlString += '</body></html>';

      // Convert the HTML string to a blob
      const blob = new Blob([htmlString], { type: 'text/html' });

      // Write the HTML blob to the clipboard
      await navigator.clipboard.write([
        new ClipboardItem({
          'text/html': blob,
        }),
      ]);

      console.log('All images copied as HTML.');
    } catch (err) {
      console.error('Error copying images:', err.name, err.message);
    }
  }

  return (
    <div className="notes-container">
      <NotesList notes={notes} imageList={imageList} onNoteChange={handleNoteChange} title={title} metadata={metadata} />
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
          onClick={() => copyToClipboard(notes, imageList)}>
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

    </div>
  );
}

export default Notes
