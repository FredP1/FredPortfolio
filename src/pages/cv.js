import React from 'react'
import Pdf from '../documents/FredPalmerCV.pdf'
import '../assets/scss/layout/_cv.scss'

const cvPage = () => (
  <body>
<iframe src={Pdf}>
</iframe>
  </body>
)
export default cvPage
