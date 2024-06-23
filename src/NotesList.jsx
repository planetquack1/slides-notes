import NoteText from './NoteText'
import { Document, Page } from 'react-pdf';
import { useWindowWidth } from '@wojtekmaj/react-hooks';

import { Interweave } from 'interweave';

const NotesList = ({ notes, imageList, onNoteChange, title, metadata }) => {

  // const metadata = JSON.parse(metadataJson)

  const width = useWindowWidth();

  // console.log(notes)

  return (
    <div className="notes-list">
      {notes.map((note, index) => (
        <div key={index} style={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap'
        }}>
          <div className="slide-title" style={{
            width: width - 20,
            wordWrap: 'break-word', // Ensure long words are broken to fit within the width
            overflow: 'hidden', // Hide any overflow text
            textOverflow: 'ellipsis', // Optionally, add ellipsis for overflowed text
            whiteSpace: 'normal', // Ensure text wraps normally
          }}>
            <Interweave content={metadata[index + 1]} />
          </div>
          <div key={index} className="note">
            <div className='document'>
              <img
                key={index}
                src={imageList[index]}
                alt={`image-${index}`}
                width={(width < 1350 ? width - 20 : 1000)} />
            </div>
            <div className='note-text'>
              <NoteText
                value={note}
                onChange={(newValue) => onNoteChange(index, newValue)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default NotesList