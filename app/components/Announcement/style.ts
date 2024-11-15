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
  margin-top: 6.25rem;
  height: 48rem;
  @media (max-width: 768px) {
    gap: 2rem;
    width: 100%;
    height: 28rem;
    flex-direction: column;
  }
`;
