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
            <div className="links">
              <a target='blank' href="https://www.upwork.com/freelancers/~01f81f649c1a93d097"><img src="https://img.icons8.com/ios-filled/50/000000/upwork.png" width='30' alt='upwork'/></a>
              <a target='blank' href='https://www.linkedin.com/in/andrii-bordakov-925367152/'><img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" width='30' alt='linkedin'/></a>
              <a target='blank' href='https://github.com/intelborand'><img src="https://img.icons8.com/ios-filled/50/000000/github.png" width='30' alt='github'/></a>
              <a target='blank' href='https://www.facebook.com/b.andromed/'><img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" width='30' alt='fb'/></a>
            </div>
        </div>
    </>
    )
};