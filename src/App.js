import React from 'react';
import {ApolloClient} from 'apollo-boost';
import {ApolloProvider} from 'react-apollo'
import { createHttpLink } from 'apollo-link-http';
import { onError } from "apollo-link-error";
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import './App.css';
import Login from './component/login/login';
import Register from './component/register/register';
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from 'react-router-dom';
import Dashboard from './component/dashboard';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
  // uri: 'https://boiling-taiga-44399.herokuapp.com/graphql'
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('valid-token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});


const linkError = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  link: authLink.concat(linkError).concat(httpLink),
  cache: new InMemoryCache()
});

const App = () => {
  return (
  <ApolloProvider client={client}>
   <div className="main_wrapper">
      <Router history>
        <Switch>
          <Route exact path='/' component={Login}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/register' component={Register}></Route>
          <Route exact path='/dashboard' component={Dashboard}></Route>
        </Switch>
      </Router>
      </div>
  </ApolloProvider>
  )
}

export default App;
