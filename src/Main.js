import React, { useEffect } from 'react';
import About from './components/About';
import Header from './components/Header';
import Intro from './components/Intro';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Contact from './components/Contact';








import './styles/app.scss';



function App() {

  useEffect(() => {
    document.title = 'Andrii Bordakov';
  })

  return (
    <>


      <Header/>
      <Intro/>
      <About/>
      <Resume/>
      <Contact/>
      <Footer/>




    </>

  );
}

export default App;