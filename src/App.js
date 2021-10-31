import React from 'react';

import Blog from './Blog';
import Main from './Main';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import './styles/app.scss';



function App() {
  return (
    <>
    <Router>
        <Route path='/' exact component={Main}></Route>
        <Route path='/blog' component={Blog}></Route>
    </Router>

    </>

  );
}

export default App;
