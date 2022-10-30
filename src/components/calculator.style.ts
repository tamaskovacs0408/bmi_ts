import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Label = styled.label`
  display: block;
  font-size: 1.8rem;
`

export const Input = styled.input`
  width: 250px;
  margin: 15px;
  padding: 5px;
  font-size: 1.8rem;
  border: none;
  border-bottom: 2px solid white;
  background-color: transparent;
  color: white;
`

export const Button = styled.button`
  background-color: #30bced;
  color: black;
  font-size: 1.8rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 5px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    background-color: #80cde9;
  }
`;