import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-image: url("/banner-header.svg");
  background-size: cover;
  background-position: center;
  height: 45.75rem;
  display: flex;
  justify-content: center;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15rem;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 44rem;
  line-height: 1.4;
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
`;
