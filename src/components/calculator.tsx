import React, {useState} from 'react';
import {Wrapper, Form, Label, Input, Button} from './calculator.style';
import Result from './Result';

// BMI formula: [weight (kg) / height (cm) / height (cm)] * 10,000

const Calculator: React.FC = () => {
  const [weight, setWeight] = useState<number | string | null>(null)
  const [height, setHeight] = useState<number | string | null>(null);

  

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit()}>
        <Label>
          Weight
          <Input
            type="number"
            step="0.1"
            min="0"
            placeholder="Enter you weight in kg"
            onChange={(event) => {setWeight(event.target.value)}}
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
            onChange={(event) => {setHeight(event.target.value)}}
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