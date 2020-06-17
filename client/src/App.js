import React from 'react';
import ChocolateBarCustomizer from './containers/ChocolateBarCustomizer/ChocolateBarCustomizer';
import Layout from './hoc/Layout/Layout';
import './App.scss';

function App() {
  return (
    <div>
      <Layout>
      <ChocolateBarCustomizer />
      </Layout>

    </div>
  );
}

export default App;
