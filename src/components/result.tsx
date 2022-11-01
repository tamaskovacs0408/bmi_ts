import React from "react";
import { Props } from "../types";
import { Wrapper, Res } from "./result.style";

const Result: React.FC<Props> = ({ bmi, weightStatus }) => {
  return (
    <Wrapper>
      <h2>
        Your BMI: <Res>{bmi}</Res>{" "}
      </h2>
      <h2>
        Your weight status: <Res>{weightStatus}</Res>
      </h2>
    </Wrapper>
  );
};

export default Result;
