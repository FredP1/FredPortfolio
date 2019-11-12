import React from 'react'
import Pdf from '../documents/FredPalmerCV.pdf';
import '../assets/scss/layout/_cv.scss';

const cvPage = () =>(

        <iframe src={Pdf} style="width: 100%;height: 100%;border: none;"></iframe>
)
export default cvPage;
