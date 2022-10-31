import React, {useState} from 'react';
import {Wrapper, Form, Label, Input, Button} from './calculator.style';
import Result from './Result';

// BMI formula: [weight (kg) / height (cm) / height (cm)] * 10,000

const Calculator = () => {
  const [weight, setWeight] = useState<number | string | null>(null)
  const [height, setHeight] = useState<number | string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Label>
          Weight
          <Input
            type="number"
            step="0.1"
            min="0"
            placeholder="Enter you weight in kg"
            onChange={(e) => {
              setWeight(e.target.value);
            }}
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
            onChange={(e) => {
              setHeight(e.target.value);
            }}
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