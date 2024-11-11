import Image from "next/image";
import styled from "styled-components";
import {
  HeaderContent,
  HeaderWrapper,
  Subtitle,
  TextContent,
  Title,
} from "./style";

const StyledImage = styled(Image)`
  top: 295px;
  position: relative;

  @media (max-width: 768px) {
    top: 30px;
    width: 350px;
    margin: 0 auto;
  }
`;

const Logo = styled(Image)`
  position: absolute;
  top: -7px;
  left: 240px;

  @media (max-width: 768px) {
    width: 350px;
    left: 20px;
    margin-top: -10px;
    flex-direction: column;
  }
`;

export function Header() {
  return (
    <HeaderWrapper>
      <Logo src="./logo.svg" width={700} height={120} alt="Logo" />
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
