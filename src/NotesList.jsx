import NoteText from './NoteText'
import { Document, Page } from 'react-pdf';
import { useWindowWidth } from '@wojtekmaj/react-hooks';

import { Interweave } from 'interweave';

const NotesList = ({ notes, imageList, onNoteChange, title, metadata}) => {

  // const metadata = JSON.parse(metadataJson)

  const width = useWindowWidth();

  return (
    <div className="notes-list">
      {notes.map((note, index) => (
        <div key={index} className="note">
          <div className="slide-title">
            <Interweave content={metadata[index + 1]} />
          </div>
          <div className='document'>
            <img 
              key={index} 
              src={imageList[index]} 
              alt={`image-${index}`} 
              width={(width < 1350 ? width - 20 : 1000)}/>
          </div>
          <div className='note-text'>
            <NoteText
              value={note}
              onChange={(newValue) => onNoteChange(index, newValue)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};


export default NotesList