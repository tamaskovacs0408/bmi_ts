import React from 'react'
import { Props } from '../types'

const Result: React.FC<Props> = ({height, weight, bmi}) => {
  return (
    <>
      <h2>Your weight: {weight} kg</h2>
      <h2>Your height: {height} cm</h2>
      <h2>Your BMI: {bmi}</h2>
    </>
  )
}

export default Result