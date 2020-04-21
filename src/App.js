import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Login from './component/login.js';

const client = new ApolloClient({
  uri: 'https:localhost:3001'
})

const App = () => {
  return (
  <ApolloProvider client={client}>
   
      <Router>
        <Switch>
          <Route exact path='/' component={Login}></Route>
          <Route exact path='/login' component={Login}></Route>
        </Switch>
      </Router>
    
  </ApolloProvider>
  )
}

export default App;
