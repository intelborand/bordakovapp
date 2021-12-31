import React from 'react';

import Blog from './Blog';
import Main from './Main';
import CommentPage from './CommentPage';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import './styles/app.scss';
import CalculatorPage from './CalclatorPage';




function App() {
  return (
    <>
    <Router>
        <Route path='/' exact component={Main}></Route>
        <Route path='/blog' component={Blog}></Route>
        <Route path='/comments_app' component={CommentPage}></Route>
        <Route path='/calculator_app' component={CalculatorPage}></Route>
    </Router>

    </>

  );
}

export default App;
