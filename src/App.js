import React from 'react'
import { Router } from '@reach/router'
import QueryObject from './pages/QueryObject';
import QueryAddress from './pages/QueryAddress';
import QueryCep from './pages/QueryCep';

const App = () => {

  return( 
    <Router>
      <QueryObject path="/" />
      <QueryCep path="/consulta-de-cep" />
      <QueryAddress path="/consulta-de-enderecos" />
    </Router>
  );
}

export default App;
