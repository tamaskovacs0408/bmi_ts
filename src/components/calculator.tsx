import useCalculate from "../hooks/useCalculate";
import { Wrapper, Form, Input, Button } from "./calculator.style";
import Result from "./Result";

const Calculator = () => {
  const {
    setWeight,
    setHeight,
    bmi,
    weightStatus,
    handleSubmit,
  } = useCalculate();

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <label>
          KG
          <Input
            type="number"
            step="0.1"
            min="0"
            placeholder="Enter your weight in kg"
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
            placeholder="Enter your height in cm"
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
