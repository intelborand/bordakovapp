import React from 'react';

import Blog from './Blog';
import Main from './Main';
import CommentPage from './CommentPage';
import CalculatorPage from './CalclatorPage';
import SnakePage from './SnakePage';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import './styles/app.scss';





function App() {
  return (
    <>
    <Router>
        <Route path='/' exact component={Main}></Route>
        <Route path='/blog' component={Blog}></Route>
        <Route path='/comments_app' component={CommentPage}></Route>
        <Route path='/calculator_app' component={CalculatorPage}></Route>
        <Route path='/snake_app' component={SnakePage}></Route>
    </Router>

    </>

  );
}

export default App;
