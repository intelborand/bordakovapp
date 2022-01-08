import React from "react";


import '../styles/resume.scss';

export default function Resume() {
    return(
        <>

            <div className='container-resume' id='resume'>
                <h1 className='title'>Resume</h1>
                <div className='content-resume'>
                    <div className='skills'>
                        <h2 className='skills-title'>Skills</h2>
                        <p>HTML, CSS, JavaScript, ReactJS, Redux, Next.JS, REST API</p>

                        <h2 className='skills-title'>Tools</h2>
                        <p>GitHub, Bitbucket, VSCode, Gulp, Webpack, MAMP, Slack</p>
                    </div>
                    <div className='lang'>
                        <h2 className='lang-title'>Languages</h2>
                        <ul>
                            <li><img src="https://img.icons8.com/emoji/50/000000/poland-emoji.png" alt='flag'/></li>
                            <li><img src="https://img.icons8.com/emoji/50/000000/russia-emoji.png" alt='flag'/></li>
                            <li><img src="https://img.icons8.com/emoji/50/000000/ukraine-emoji.png" alt='flag'/></li>
                            <li><img src="https://img.icons8.com/emoji/48/000000/united-kingdom-emoji.png" alt='flag'/></li>
                        </ul>
                    </div>
                    <div className='content-edu-exp'>
                        <div className='exp half'>
                            <h2>Courses</h2>
                            <div className='exp-card'>
                                <h4>Udemy ReactJS</h4>
                                <p>Vanilla JavaScript, ReactJS, Redux</p>
                            </div>
                            <div className='exp-card'>
                                <h4>Codecademy</h4>
                                <p>Learn JavaScript</p>
                            </div>
                            <div className='exp-card'>
                                <h4>FreeCodeCamp</h4>
                                <p>Responsive Web Design (HTML, CSS)</p>
                            </div>
                        </div>
                        <div className='edu half'>
                            <h2>Education</h2>
                            <div className='edu-card'>
                                <h4>ZUT</h4>
                                <p>2017- 2019</p>
                                <p><span>Master of engineering</span><br /> In the field of – Biotechnology with major in Biotechnology in Animal Production and Environmental Protection</p>
                                <h5><img src="https://img.icons8.com/color/48/000000/marker--v2.png" width='13' alt='marker' />Poland, Sczcecin city</h5>
                                
                            </div>
                            <div className='edu-card'>
                                <h4>NULES</h4>
                                <p>2013- 2017</p>
                                <p><span>Bachelor</span><br /> In the field of - Biotechnology</p>
                                <h5><img src="https://img.icons8.com/color/48/000000/marker--v2.png" width='13' alt='marker' />Ukraine, Kiev city</h5>
                            </div>
                        </div>
                    </div>
                    <div className='current-work'>
                        <h2>Current work</h2>
                        <div className='work-cont'>
                            <p>2021 - Until today</p>
                            <p><span>Junior React Developer - </span></p>
                            <p>Upwork</p>
                        </div>
                        <div className='work-cont'>
                            <p>2021 - Until today</p>
                            <p><span>Junior JS Developer - </span></p>
                            <p>Developing team-project (Next.JS)</p> 
                        </div>  
                    </div>
                </div>
            </div>

        </>
    )
};