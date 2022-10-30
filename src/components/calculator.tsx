import React from 'react';
import {Wrapper} from './calculator.style';

const Calculator: React.FC = () => {
  return (
    <Wrapper>
      <form>
        <input
          type="number"
          step="0.1"
          placeholder="Enter you weight in kg"
          required
        />
        <input
          type="number"
          step="0.1"
          placeholder="Enter you height in cm"
          required
        />
        <button type='submit'>Caluculate</button>
      </form>
    </Wrapper>
  );
}

export default Calculator;