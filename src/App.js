import Notes from './Notes'

import { React } from "react"
// import { pdfjs } from "react-pdf"
// import pdfFile from "./sermon.pdf"
import 'bootstrap-icons/font/bootstrap-icons.css'

// import 'bootstrap'

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

function App() {

  const numPages = 46
  const title = "Persevering and Maturing in Christ"
  const subtitle = "Level Up!"
  const color_mode = "dark"

  return (
    <div className="app-container" color_mode={color_mode}>
      <div className="title">
        {title}
      </div>
      <div className="subtitle">
        {subtitle}
      </div>
      <Notes numPages={numPages} title={title} />
    </div>
  )
}

export default App