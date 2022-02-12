import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from '../src/components/Footer';

import Cards from './components/Cards';


// import Timer from './components/Timer';

export default function Blog() {

    useEffect(() => {
        document.title = 'Andrii Bordakov Blog';
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