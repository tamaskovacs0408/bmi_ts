import styled from "styled-components";

export const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  color: #e6e6e6;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  margin: 20px auto;

  @media screen and (min-width: 768px) {
    height: 800px;
    justify-content: center;
  }

  h1 {
    font-size: 4rem;
    font-weight: 600;
    margin: 15px auto;
    text-align: center;

    @media screen and (min-width: 768px) {
      font-size: 6rem;
    }
  }

  span {
    display: block;
    color: #79c12c;
  }
`;