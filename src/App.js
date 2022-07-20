import React from 'react';

import Workshop from './Workshop';
import Main from './Main';
import CommentPage from './CommentPage';
import CalculatorPage from './CalclatorPage';
import SnakePage from './SnakePage';
import ECommercePage from './ECommercePage';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import './styles/app.scss';






function App() {
  return (
    <>
    <Router>
        <Route path='/' exact component={Main}></Route>
        <Route path='/workshop' component={Workshop}></Route>
        <Route path='/comments_app' component={CommentPage}></Route>
        <Route path='/calculator_app' component={CalculatorPage}></Route>
        <Route path='/snake_app' component={SnakePage}></Route>
        <Route path='/e_commerce_app' component={ECommercePage}></Route>
    </Router>

    </>

  );
}

export default App;
