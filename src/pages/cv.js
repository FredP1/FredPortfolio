import React from 'react'
import Pdf from '../documents/FredPalmerCV.pdf';
import '../assets/scss/layout/_cv.scss';

const cvPage = () =>(
    <body>
        <object data={Pdf} min-height='100%' height='1050vh' width='100%' role='alert' type="application/pdf"></object>
    </body>
)
export default cvPage;
