import React, {useState} from 'react';
import {Wrapper, Form, Label, Input, Button} from './calculator.style';
import Result from './Result';

// BMI formula: [weight (kg) / height (cm) / height (cm)] * 10,000

const Calculator = () => {
  const [weight, setWeight] = useState<number | string>(0);
  const [height, setHeight] = useState<number | string>(0);
  const [bmi, setBmi] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const bmi: number = (Number(weight) / Number(height) / Number(height)) * 10000;

    console.log(Number(bmi.toFixed(1)))
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
      <Result height={height} weight={weight} bmi={bmi}/>
    </Wrapper>
  );
}

export default Calculator;