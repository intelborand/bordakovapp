import React, { useEffect } from 'react';
import Comments from './components/Comments/Comments';



export default function CommentPage() {

    useEffect(() => {
        document.title = 'Comments Page';
    })

    return(
        <>
        <Comments/>
        <style jsx>{`
            body {
              background: linear-gradient(to right, #00AAFF, #00FF6C);  
            }
        `}</style>
        </>
    ) 
    
}

