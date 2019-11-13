import React, {Component} from 'react'
import { Document, Page } from 'react-pdf'
import Pdf from '../documents/FredPalmerCV.pdf'
import '../assets/scss/layout/_cv.scss'

class cvPage extends Component {
    state = {
      numPages: null,
      pageNumber: 1,
    }
   
    onDocumentLoadSuccess = ({ numPages }) => {
      this.setState({ numPages });
    }
   
    render() {
      const { pageNumber, numPages } = this.state;
   
      return (
        <div div width="100%" height="100%" min-height="100%">
          <Document
            file={Pdf}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
      );
    }
  }
export default cvPage
