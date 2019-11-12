import React from 'react'
import Pdf from '../documents/FredPalmerCV.pdf';
import '../assets/scss/layout/_cv.scss';

const cvPage = () =>(
    <body>
        <iframe src={Pdf} style="width: 100%;height: 100%;border: none;"></iframe>
    </body>
)
export default cvPage;
