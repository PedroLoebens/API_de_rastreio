import React from 'react'
import { Router } from '@reach/router'
import QueryObject from './pages/QueryObject';
import QueryCep from './pages/QueryCep';

const App = () => {

  return( 
    <Router>
      <QueryObject path="/" />
      <QueryCep path="/consulta-de-enderecos" />
    </Router>
  );
}

export default App;
