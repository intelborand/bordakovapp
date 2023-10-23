import React from "react";
import { Link } from 'react-router-dom';
import '../styles/header.scss';

export default function Header() {


    return (
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
            </header>
        </>
    )
};