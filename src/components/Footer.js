// {/* <a href="https://icons8.com/icon/PZTTDl8ML4vy/marker">Marker icon by Icons8</a> */}
import React from "react";


import '../styles/footer.scss';

export default function Footer() {
    return(
        <>
            <footer className='footer'>
                <div className='footer-container'>
                    <nav>
                        <ul>
                            <li><a href='/workshop'>Workshop</a></li>
                            <li><a href='/'>Contact</a></li>
                        </ul>
                    </nav>
                    <div className='copyright'>
                        © 2021, Designed by <a href='/'>AndriiBordakov</a>. Coded by <a href='/'>AndriiBordakov</a>.<a href="https://icons8.com/icon/PZTTDl8ML4vy/marker">Marker icon by Icons8</a>.
                    </div>
                </div>
            </footer>
        </>
    )
};  