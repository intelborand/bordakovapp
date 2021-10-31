import React from "react";
import bgHeader from '../img/bg21.jpg';
import face from '../img/face.jpg';

import '../styles/intro.scss';

export default function Intro() {
    let pageHeader = React.createRef();

    React.useEffect(() => {
      if (window.innerWidth > 991) {
        const updateScroll = () => {
          let windowScrollTop = window.pageYOffset / 3;
          pageHeader.current.style.transform =
            "translate3d(0," + windowScrollTop + "px,0)";
        };
        window.addEventListener("scroll", updateScroll);
        return function cleanup() {
          window.removeEventListener("scroll", updateScroll);
        };
      }
    });

    return(
    <>
        <div className='container'>
            <div className="page-header-image" ref={pageHeader}>
                <img src={bgHeader} width='100%' alt='title'/>
            </div>
            <div className='content'>
                <div className='photo'>
                    <img src={face} width='100' alt='photoface'></img>
                </div>
                <h1 className='title'>Andrii Bordakov</h1>
                <h3 className='describe'>Junior Front-End Developer</h3>
            </div>
        </div>
    </>
    )
};