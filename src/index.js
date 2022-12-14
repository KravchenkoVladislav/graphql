import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/App'
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider> 
);