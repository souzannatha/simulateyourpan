import Image from "next/image";
import styled from "styled-components";
import { HeaderContent, HeaderWrapper, TextContent, Title } from "./style";

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
