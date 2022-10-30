import React from 'react';
import {Wrapper, Form, Label, Input, Button} from './calculator.style';

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
    </Wrapper>
  );
}

export default Calculator;