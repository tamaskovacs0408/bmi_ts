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

    let bmi: number = Number(
      ((Number(weight) / Number(height) / Number(height)) * 10000).toFixed(1)
    );

    setBmi(bmi);

    if (bmi < 18.5) {
      setWeightStatus((weightStatus) => (weightStatus = "Underweight"));
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setWeightStatus((weightStatus) => (weightStatus = "Healthy Weight"));
    } else if (bmi >= 25 && bmi <= 29.9) {
      setWeightStatus((weightStatus) => (weightStatus = "Overweight"));
    } else {
      setWeightStatus((weightStatus) => (weightStatus = "Obesity"));
    }
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
