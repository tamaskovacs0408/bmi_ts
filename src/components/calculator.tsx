import React from 'react';
import {Wrapper, Form, Label, Input, Button} from './calculator.style';
import Result from './Result';

// BMI formula: [weight (kg) / height (cm) / height (cm)] * 10,000

const Calculator: React.FC = () => {
  return (
    <Wrapper>
      <Form>
        <Label>
          Weight
          <Input
            type="number"
            step="0.1"
            min="0"
            placeholder="Enter you weight in kg"
            required
          />
        </Label>
        <Label>
          Height
          <Input
            type="number"
            step="0.1"
            min="0"
            placeholder="Enter you height in cm"
            required
          />
        </Label>
        <Button type="submit">Calculate</Button>
      </Form>
      <Result />
    </Wrapper>
  );
}

export default Calculator;