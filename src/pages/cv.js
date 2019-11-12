import React from 'react'
import Pdf from '../documents/FredPalmerCV.pdf'
import '../assets/scss/layout/_cv.scss'

const cvPage = () => (
    <style>body {width: 100%; height: 100%; margin: 0; padding: 0;}</style>
  <body>
<iframe src={Pdf}>
</iframe>
  </body>
)
export default cvPage
