import React from 'react'
import Pdf from '../documents/FredPalmerCV.pdf'
import '../assets/scss/layout/_cv.scss'

const cvPage = () => (
  <body>
    <div>
      <iframe width = "100%" height = "100%" src={Pdf}></iframe>
    </div>
  </body>
)
export default cvPage
