import React from 'react';
import ChocolateBarCustomizer from './containers/ChocolateBarCustomizer/ChocolateBarCustomizer';
import Layout from './hoc/Layout/Layout';
import Success from './containers/Success/Success';
import { Router } from '@reach/router';
import './App.scss';

function App() {
  return (
    <div>
      <Layout>
        <Router>
          <ChocolateBarCustomizer path="/" />
          <Success path="/success" />
        </Router>
      </Layout>
    </div>
  );
}

export default App;
