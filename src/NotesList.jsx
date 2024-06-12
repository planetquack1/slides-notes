import NoteText from './NoteText'
import { Document, Page } from 'react-pdf';
import { useWindowWidth } from '@wojtekmaj/react-hooks';

const NotesList = ({ notes, onNoteChange, pdfFile }) => {

  const width = useWindowWidth();

  return (
    <div className="notes-list">
      {notes.map((note, index) => (
        <div key={index} className="note">
          <div className='document'>
            <Document file={pdfFile}>
              <Page 
                pageNumber={index + 1} 
                renderAnnotationLayer={false} 
                renderTextLayer={false} 
                width={(width < 1350 ? width - 20 : 1000)}
              >
              </Page>
            </Document>
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