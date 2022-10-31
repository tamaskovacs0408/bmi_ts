import styled from "styled-components";

export const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  margin: 20px auto;

  @media screen and (min-width: 768px){
    height: 800px;
    justify-content: center;
  }

  h1 {
    font-size: 4rem;
    margin: 15px auto;

    @media screen and (min-width: 768px){
      font-size: 6rem;
    }
  }
`;