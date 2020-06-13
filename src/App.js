import React from 'react';
import Navbar from './components/Navbar';
import FormContainer from './containers/FormContainer';
import ChocolateBarCustomizer from './containers/ChocolateBarCustomizer/ChocolateBarCustomizer';
import './App.scss';

function App() {
  return (
    <div>
      <Navbar />
      <FormContainer />
      {/* <ChocolateBarCustomizer /> */}

    </div>
  );
}

export default App;
