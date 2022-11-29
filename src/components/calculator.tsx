import React, { useState } from "react";
import { Wrapper, Form, Input, Button } from "./calculator.style";
import Result from "./Result";

const Calculator = () => {
  const [weight, setWeight] = useState<number | string | null>(null);
  const [height, setHeight] = useState<number | string | null>(null);
  const [bmi, setBmi] = useState<number>(0);
  const [weightStatus, setWeightStatus] = useState<string | undefined>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const bmiFormula: number = Number(
      ((Number(weight) / Number(height) / Number(height)) * 10000).toFixed(1)
    );

    if(bmiFormula < 18.5) {
      setWeightStatus('Underweight');
    } else if (bmiFormula >= 18.5 && bmiFormula <= 24.9) {
      setWeightStatus('Healthy Weight');
    } else if (bmiFormula >= 25 && bmiFormula <= 29.9) {
      setWeightStatus('Overweight')
    } else {
      setWeightStatus('Obesity')
    }

    setBmi(bmiFormula);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <label>
          KG
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
        </label>
        <label>
          CM
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
        </label>
        <Button type="submit">Calculate</Button>
      </Form>
      <Result bmi={bmi} weightStatus={weightStatus} />
    </Wrapper>
  );
};

export default Calculator;
