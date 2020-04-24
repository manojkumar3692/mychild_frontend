import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo'

import './App.css';
import Login from './component/login/login';
import Register from './component/register/register';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql'
})

const App = () => {
  return (
  <ApolloProvider client={client}>
   <div className="main_wrapper">
      <Router>
        <Switch>
          <Route exact path='/' component={Login}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/register' component={Register}></Route>
        </Switch>
      </Router>
      </div>
  </ApolloProvider>
  )
}

export default App;
