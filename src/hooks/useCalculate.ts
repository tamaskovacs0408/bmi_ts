import { useState, useCallback } from "react";
import { UseCalculateResult } from "../types";

const useCalculate = (): UseCalculateResult => {
  const [weight, setWeight] = useState<number | string | null>(null);
  const [height, setHeight] = useState<number | string | null>(null);
  const [bmi, setBmi] = useState<number>(0);
  const [weightStatus, setWeightStatus] = useState<string | undefined>("");

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      let bmi: number = Number(
        ((Number(weight) / Number(height) / Number(height)) * 10000).toFixed(1)
      );


      console.log(weight);
      console.log(height);
      console.log(bmi);

      if (bmi < 18.5) {
        setWeightStatus("Underweight");
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        setWeightStatus("Healthy Weight");
      } else if (bmi >= 25 && bmi <= 29.9) {
        setWeightStatus("Overweight");
      } else {
        setWeightStatus(  "Obesity");
      }
      
      setBmi(bmi);
    },
    [weight, height]
  );

  return {
    weight,
    setWeight,
    height,
    setHeight,
    bmi,
    weightStatus,
    handleSubmit,
  };
};

export default useCalculate;
