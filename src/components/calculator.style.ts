import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

  &:focus {
    outline: none;
  }
`

export const Button = styled.button`
  background-color: #79c12c;
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
    background-color: #c5e26c;
  }
`;