import React from "react";
import {Link} from 'react-router-dom';


export default function CardDescribe({title, text, link}) {
    return(
        <>
        <div className="describe">
            <div className="title-describe">
                <h2 className='title'>{title}</h2>
            </div>
            <div className="par-describe">
                <p>{text}</p>
            </div>
            <div className='btn'>
                    <Link to={link}>Open App</Link>
            </div>

            <style jsx>{`
                .describe{
                    width: 50%;
                    margin-left: 25px;
                    align-items: center;
                    justify-content: center;
                }
                .btn{
                    margin-top: 25px;
                    
                }
            `}</style>
        </div>
        </>
    )
}