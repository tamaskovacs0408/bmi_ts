import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  h2 {
    font-size: 2.2rem;
    text-align: center;
    margin: 10px auto;

    @media screen and (min-width: 768px) {
      font-size: 2.7rem;
    }
  }
`;

export const Res = styled.span`
  margin: 10px auto !important;
  font-size: 2.3rem !important;
  letter-spacing: 1.5px !important;
  text-transform: uppercase !important;

  @media screen and (min-width: 768px) {
    font-size: 2.8rem !important;
  }
`;
