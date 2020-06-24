import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChocolateBarCustomizer from './containers/ChocolateBarCustomizer/ChocolateBarCustomizer';
import Layout from './hoc/Layout/Layout';
import Success from './containers/Success/Success';
import './App.scss';

function App() {
  return (
    <Router>
      <div>
        <Layout>
          <Switch>
            <Route exact path="/" component={ChocolateBarCustomizer} />
            <Route exact path="/success" component={Success} />
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
