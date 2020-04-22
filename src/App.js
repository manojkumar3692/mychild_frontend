import React from 'react';
import './App.css';
import Login from './component/login/login';
import Register from './component/register/register';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="main_wrapper">

    <Router>
    <Switch>
      <Route path='/' exact component={Login}></Route>
      <Route path='/register' exact component={Register}></Route>
     </Switch>
    </Router>
    
    </div>
  );
}

export default App;
