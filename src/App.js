import React from 'react';
import {ApolloClient} from 'apollo-boost';
import {ApolloProvider} from 'react-apollo'
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import './App.css';
import Login from './component/login/login';
import Register from './component/register/register';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('valid-token');
  debugger
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

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
