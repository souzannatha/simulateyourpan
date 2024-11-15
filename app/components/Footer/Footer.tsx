import Image from "next/image";
import { SectionWrapper, SectionContainer } from "./style";
import { styled } from "styled-components";

const Logo = styled(Image)`
  position: absolute;
  bottom: 150px;
  left: -210px;
  @media (max-width: 768px) {
    width: 350px;
    left: -140px;
    bottom: 60px;
    flex-direction: column;
  }
`;

export function Footer() {
  return (
    <SectionWrapper>
      <SectionContainer>
        <Logo src="./logo.svg" width={500} height={120} alt="Icone Codie" />
        <Image
          src="./codie-logo.svg"
          width={66}
          height={20}
          alt="Icone Codie"
        />
      </SectionContainer>
    </SectionWrapper>
  );
}
