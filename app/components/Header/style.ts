import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-image: url("/banner-header.svg");
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 40rem;
    flex-direction: column;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15rem;

  @media (max-width: 768px) {
    justify-content: center;
    padding: 0px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 44rem;
  line-height: 1.4;

  @media (max-width: 768px) {
    width: 20rem;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #15aad6;
  text-transform: uppercase;

  span {
    background: #6368bd;
    color: #ffffff;
    border-radius: 20px;
    padding: 4px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-top: 100px;
    color: #15aad6;
    text-transform: uppercase;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;
