import NoteText from './NoteText'
import { Document, Page } from 'react-pdf';
import { useWindowWidth } from '@wojtekmaj/react-hooks';

const NotesList = ({ notes, onNoteChange, pdfFile, title }) => {

  const width = useWindowWidth();

  return (
    <div className="notes-list">
      {notes.map((note, index) => (
        <div key={index} className="note">
          <div className='document'>
            <img
              src={"sermon-images/sermon-images-" + index + ".jpg"}
              alt={title}
              width={(width < 1350 ? width - 20 : 1000)}
            >
            </img>
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