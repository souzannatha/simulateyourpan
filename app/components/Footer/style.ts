import styled from "styled-components";

export const SectionWrapper = styled.footer`
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, #5567a8, #35b8ed);

  @media (max-width: 768px) {
    margin-top: 50rem; /* Ajuste para mover o Footer para baixo no mobile */
  }
`;
export const SectionContainer = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 5rem;
  height: 7.5rem;

  @media (max-width: 768px) {
    height: 4rem;
  }
`;
