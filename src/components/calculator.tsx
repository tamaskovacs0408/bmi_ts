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

    const bmiForumla: number = Number(
      ((Number(weight) / Number(height) / Number(height)) * 10000).toFixed(1)
    );

    setBmi(bmiForumla);

    if(bmi < 18.5) {
      setWeightStatus('Underweight');
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setWeightStatus('Healthy Weight');
    } else if (bmi >= 25 && bmi <= 29.9) {
      setWeightStatus('Overweight')
    } else {
      setWeightStatus('Obesity')
    }

  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
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
        <Button type="submit">Calculate</Button>
      </Form>
      <Result
        height={height}
        weight={weight}
        bmi={bmi}
        weightStatus={weightStatus}
      />
    </Wrapper>
  );
};

export default Calculator;
