import React from 'react'
import { Document } from 'react-pdf'
import Pdf from '../documents/FredPalmerCV.pdf'
import '../assets/scss/layout/_cv.scss'

const cvPage = () => (
  <html height="100%" min-height="100%">
    <body width="100%" height="100%" min-height="100%">
      <div width="100%" height="100%" min-height="100%">
        <Document file="./1.pdf" onLoadSuccess={this.onDocumentLoad}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </body>
  </html>
)
export default cvPage
