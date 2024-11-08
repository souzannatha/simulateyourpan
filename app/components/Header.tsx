"use client";

import Image from "next/image";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-image: url("/banner-header.svg");
  background-size: cover;
  background-position: center;
  height: 45.75rem;
  display: flex;
  justify-content: center;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15rem;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 44rem;
  line-height: 1.4;
`;

const Title = styled.h1`
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
const StyledImage = styled(Image)`
  margin-top: 230px;
`;
const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
`;

const Logo = styled(Image)`
  position: absolute;
  top: -7px;
  left: 240px;
`;

export function Header() {
  return (
    <HeaderWrapper>
      <Logo src="./logo.svg" width={500} height={120} alt="Logo" />
      <HeaderContent>
        <TextContent>
          <Title>
            Encontre o <span>Plano</span> <span>de Saúde</span> Ideal para Você
          </Title>
          <Subtitle>É simples, rápido e gratuito!</Subtitle>
        </TextContent>
      </HeaderContent>
      <StyledImage
        src="/person-header.svg"
        width={500}
        height={572}
        alt="banner"
      />
    </HeaderWrapper>
  );
}
