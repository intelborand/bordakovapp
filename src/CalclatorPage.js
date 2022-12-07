import React, { useEffect } from 'react';
import CalculatorApp from './components/CalculatorApp/CalculatorApp';




export default function CalculatorPage() {

    useEffect(() => {
        document.title = 'Calculator Page';
    })

    return(
        <>
        <CalculatorApp/>
        <style jsx>{`
            body {
                background: linear-gradient(to right, rgb(250, 0, 0), rgb(27, 211, 150));  
            }
        `}</style>
        </>
    ) 
    
}