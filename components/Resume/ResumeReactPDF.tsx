import React from 'react';
import { Page, View, Text, Document, StyleSheet, PDFViewer, Font } from '@react-pdf/renderer'

Font.register({
    family: 'Quicksand',
    src: "/static/fonts/Quicksand-Regular.ttf"
})

const s = StyleSheet.create({
    page: {
        backgroundColor: "#ffffff",
        fontFamily: 'Quicksand'
    },
})

export const Resume: React.FC = () => {
    return <Document>
        <Page size="A4" style={s.page}>
            <View>
                asdfasfd
            </View>
        </Page>
    </Document>
}