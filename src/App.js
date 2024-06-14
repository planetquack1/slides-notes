import Notes from './Notes'

import { React } from "react"
// import { pdfjs } from "react-pdf"
// import pdfFile from "./sermon.pdf"
import 'bootstrap-icons/font/bootstrap-icons.css'
import metadata from './sermons/level-up/persevering-and-maturing-in-christ/metadata.json'

// import 'bootstrap'

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

function App() {

  const color_mode = "dark"

  return (
    <div className="app-container" color_mode={color_mode}>
      <div className="title">
        {metadata['title']}
      </div>
      <div className="subtitle">
        {metadata['series']  + ' #' + metadata['series_number']}
      </div>
      <Notes numSlides={metadata['number_of_slides']} title={metadata['title']} series={metadata['series']} seriesNumber={metadata['series_number']} />
    </div>
  )
}

export default App