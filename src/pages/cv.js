import React, { Component } from 'react'
import { Document, Page } from 'react-pdf'
import Pdf from '../documents/Fred_CV.pdf'
import '../assets/scss/layout/_cv.scss'

function removeTextLayerOffset() {
  const textLayers = document.querySelectorAll('.react-pdf__Page__textContent')
  textLayers.forEach(layer => {
    const { style } = layer
    style.top = '0'
    style.left = '0'
    style.transform = ''
  })
}

;<Page onLoadSuccess={() => removeTextLayerOffset()} />

class cvPage extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages })
  }

  render() {
    const { pageNumber, numPages } = this.state

    return (
      <div>
        <Document file={Pdf} onLoadSuccess={this.onDocumentLoadSuccess}>
          <Page
            pageNumber={pageNumber}
            onLoadSuccess={() => removeTextLayerOffset()}
          />
        </Document>
      </div>
    )
  }
}
export default cvPage
