import React from 'react'
import HTMLFlipBook from 'react-pageflip';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from './catalogue.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Pages = React.forwardRef((props, ref) => {
    return (
        <div className="demoPage" ref={ref} >
            <p>{props.children}</p>
            <p>Page number: {props.number}</p>
        </div>
    );
});

Pages.displayName = 'Pages';

function Flipbook() {

    const [numPages, setNumPages] = useState();

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <>

            <div className='h-screen w-screen flex flex-col mt-20 gap-5 justify-center items-center overflow-hidden'>
                {/* <h1 className='text-3xl text-white text-center font-bold'>FlipBook-</h1> */}
                <HTMLFlipBook width={400} height={550}>
                    {
                        [...Array(numPages).keys()].map((pNum) => (
                            <Pages key={pNum} number={pNum + 1}>
                                <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                                    <Page pageNumber={pNum} width={400} renderAnnotationLayer={false} renderTextLayer={false} />
                                </Document>
                                {/* <p>
                                    Page {pNum} of {numPages}
                                </p> */}
                            </Pages>
                        ))
                    }
                </HTMLFlipBook>
            </div>
        </>

    );
}

export default Flipbook