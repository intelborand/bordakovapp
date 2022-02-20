import React from "react";
import '../styles/header.scss';
import {Link} from 'react-router-dom';

export default function Header() {


    return(
        <>
        <header>
            <h3 className='link'>
                <Link to='/'>Andrii Bordakov</Link>
            </h3>
            <nav>
                <ul>
                    {/* <li>
                        <Link to='/resume'>Resume</Link>
                    </li> */}
                    <li>
                        <Link to='/workshop'>Workshop</Link>
                    </li>
                </ul>
            </nav>
            {/* <div className='btn'><Link to='/'>Contact</Link></div> */}
        </header>
        </>
    )
};