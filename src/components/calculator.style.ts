import styled from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: flex-start;
  align-items: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  label {
    font-size: 1.2rem;
    color: #79c12c;
  }
  @media screen and (min-width: 768px){
    label {
      font: 1.8rem;
    }
  }
`;

export const Input = styled.input`
  width: 200px;
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

  @media screen and (min-width: 768px){
    width: 220px;
    font-size: 2rem;
  }

  @media screen and (min-width: 992px){
    width: 250px;
  }
`

export const Button = styled.button`
  background-color: #79c12c;
  color: black;
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 10px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    background-color: #c5e26c;
  }

  @media screen and (min-width: 768px){
    font-size: 2.5rem;
  }
`;