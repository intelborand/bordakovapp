import React, { useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

import Cards from './components/Cards';



export default function Workshop() {

    useEffect(() => {
        document.title = 'Andrii Bordakov Workshop';
    })

    return (
        <>
            <Header />
            <Cards />
            <Footer />
        </>
    )
}