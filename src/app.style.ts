import styled from "styled-components";

export const Wrapper = styled.main`
  width: 300px;
  height: 600px;
  color: #e6e6e6;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  margin: 20px auto;
  border: 2px solid #e6e6e6;
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 700px;
  }

  @media screen and (min-width: 992px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  h1 {
    font-size: 4rem;
    font-weight: 600;
    margin: 15px auto;
    text-align: center;

    @media screen and (min-width: 768px) {
      margin: none;
      font-size: 5.5rem;
    }
  }

  span {
    display: block;
    color: #79c12c;
  }
`;