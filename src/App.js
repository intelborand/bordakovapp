import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import CalculatorPage from './CalclatorPage';
import CommentPage from './CommentPage';
import ECommercePage from './ECommercePage';
import Main from './Main';
import SnakePage from './SnakePage';
import SynonymsPage from './SynonymsPage';
import Workshop from './Workshop';
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
        <Route path='/synonyms_app' component={SynonymsPage}></Route>
      </Router>

    </>

  );
}

export default App;
