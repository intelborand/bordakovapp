import React from "react";
import {Link} from 'react-router-dom';


export default function CardDescribe({title, text, link, githubLink}) {
    return(
        <>
        <div className="describe-app">
            <div className="title-describe">
                <h2 className='title'>{title}</h2>
            </div>
            <div className="par-describe">
                <p>{text}</p>
                <p>GitHub repositorie with this app you can find <a href={githubLink}>here.</a></p>
            </div>
            <div className='btn'>
                    <Link to={link}>Open App</Link>
                    
            </div>

            <style jsx>{`
                .describe-app{
                    width: 50%;
                    margin-left: 25px;
                    align-items: center;
                    justify-content: center;
                }
                .btn{
                    margin-top: 25px;
                    
                }
                a{
                    color: #2c2c2c;
                    text-decoration: none;
                }
                a:hover{
                    color: #2CA8FF;
                }
            `}</style>
        </div>
        </>
    )
}