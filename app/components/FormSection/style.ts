import styled from "styled-components";

export const SectionWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background: #e0ecfc;

  @media (max-width: 768px) {
    margin-top: 220px;
    flex-direction: column; /* Empilhar no mobile */
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 75rem;
  margin: 0 auto;
  margin-top: 7.5rem;
  height: 48rem;

  @media (max-width: 768px) {
    width: 100%; /* Ajuste para a largura ser 100% no mobile */
    flex-direction: column; /* Empilhar no mobile */
    margin-top: 4rem;
  }
`;

export const LeftDiv = styled.div`
  margin-right: 30px;
  width: 48%; /* 50% da largura no desktop */

  h2 {
    font-size: 4rem;
    text-transform: uppercase;
    color: #6368bd;
    max-width: 22.5rem;
  }
  span {
    display: inline-block;
    color: #2a2a2a;
    margin-bottom: 60px;
  }
  div {
    color: #fff;
    font-weight: bold;
    font-size: 1.5rem;
    padding: 1.25rem 1.875rem;
    background: linear-gradient(90deg, #5567a8, #35b8ed);
    width: 24.75rem;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    width: 100%; /* Ajuste para ocupar 100% no mobile */
    margin-right: 0; /* Remover margem no mobile */
    h2 {
      font-size: 2rem;
      text-transform: uppercase;
      color: #6368bd;
      max-width: 22.5rem;
    }
    div {
      color: #fff;
      font-weight: bold;
      font-size: 1rem;
      padding: 1rem;
      background: linear-gradient(90deg, #5567a8, #35b8ed);
      width: 20.75rem;
      border-radius: 10px;
    }
  }
`;

export const RightDiv = styled.div`
  text-align: right;
  width: 48%;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
