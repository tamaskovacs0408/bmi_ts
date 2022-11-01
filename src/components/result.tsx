import React, {useState} from 'react'
import { Props } from '../types'

const Result: React.FC<Props> = ({bmi, weightStatus}) => {


  return (
    <>
      <h2>Your BMI: {bmi}</h2>
      <h2>Your weight status: {weightStatus}</h2>
    </>
  )
}

export default Result