import styled from "styled-components";

export const SectionWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background: #e0ecfc;

  @media (max-width: 768px) {
    margin-top: 220px;

    flex-direction: column;
  }
`;

export const SectionContainer = styled.div`
  width: 75rem;
  margin: 0 auto;
  margin-top: 7.5rem;
  height: 48rem;
  @media (max-width: 768px) {
    margin-top: 4rem;
    width: 20rem;
  }
`;

export const LeftDiv = styled.div`
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
  @media (max-width: 768px) {
    margin-top: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
