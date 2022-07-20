import React, { useEffect } from 'react';
import CalculatorApp from './components/CalculatorApp/CalculatorApp';




export default function CalculatorPage() {

    const date = new Date();
    const time = date.getHours();
    const minutes = date.getMinutes();

    const styleMorning = <style jsx>{`
                                body {
                                    background: linear-gradient(to right, rgb(250, 0, 0), rgb(27, 211, 150));  
                                }
                            `}</style>;

    const styleEvening = <style jsx>{`
                                body {
                                    background: linear-gradient(to right, rgb(140, 0, 0), rgb(27, 135, 150));  
                                }
                            `}</style>;
                            

    useEffect(() => {
        document.title = 'Calculator Page';
    })

    return(
        <>
        {time >= "15"  && minutes >= "36" ? styleEvening : styleMorning}


        <CalculatorApp/>
        
        </>
    ) 
    
}