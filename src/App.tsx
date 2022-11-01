import React from 'react';
import {Wrapper} from './app.style';
import Calculator from './components/Calculator';

function App() {
  return (
    <Wrapper>
      <h1>
        <span>BMI</span> Calculator
      </h1>
      <Calculator />
    </Wrapper>
  );
}

export default App;
