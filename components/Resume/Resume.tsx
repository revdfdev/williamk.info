import React from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';

export const Resume: React.FC = () => {
    return <>
        <PDFExport paperSize={'Letter'}
            fileName="WilliamKwokResume.pdf"
            title="William Kwok"
            subject="William Kwok"

        >
            <div style={
                {
                    height: 792,
                    width: 612,
                    padding: 'none',
                    backgroundColor: 'white',
                    boxShadow: '5px 5px 5px #888888',
                    margin: 'auto',
                    overflowX: 'hidden',
                    overflowY: 'hidden'
                }
            }>
                test
            </div>
        </PDFExport>
    </>
}
