import React from "react"
import {Link} from 'react-router-dom';
import '../../src/styles/card.scss';


export default function Card({title, url, text, link}) {
    return(
        <>
            <div className='cardContainer'>
                <div className='imageContainer'>
                    <img src={url} alt={title}></img>
                </div>
                {/* <h6 className='category'>Features</h6> */}
                <div className='title'>
                    <h5>{title}</h5>
                </div>
                <div className='contentText'>
                    <p className="content-p">{text}</p>
                </div>
                <div className='btn'>
                        <Link to={link}>Open App</Link>
                        
                </div>
            </div>

            

        </>
    )
};