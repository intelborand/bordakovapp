import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import Cards from './components/Cards';


// import Timer from './components/Timer';

export default function Workshop() {

    useEffect(() => {
        document.title = 'Andrii Bordakov Workshop';
    })

    return(
        <>
        
        {/* <Timer date='2021-12-26'/> */}

        <Header/>


        
        <Cards/>
 
        <Footer/>
        

        </>
    )
}