import styled from "styled-components";

export const SectionWrapper = styled.section`
  background: #ffffff;
`;

export const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90rem;
  margin: 0 auto;
  margin-top: 7.5rem;
  height: 37rem;
`;

export const DivSimulate = styled.div`
  width: 43.75rem;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #6368bd;
  margin-bottom: 0.625rem;
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #2a2a2a;
  text-transform: uppercase;
  margin-bottom: 2rem;

  span {
    color: #6368bd;
  }
`;

export const Description = styled.p`
  font-weight: 500;
  color: #7a7a7a;
  margin-bottom: 2rem;
`;
