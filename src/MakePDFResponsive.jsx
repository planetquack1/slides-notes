import { useWindowWidth } from '@wojtekmaj/react-hooks';
import pdfFile from './sermon.pdf'
import { Document, Page } from 'react-pdf';

export default function Component() {
  const width = useWindowWidth();

  return (
    <Document file={pdfFile}>
      <Page
        pageNumber={1}
        width={Math.min(width * 0.9, 400)} // width: 90vw; max-width: 400px
      />
    </Document>
  );
}