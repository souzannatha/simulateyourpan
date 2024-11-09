import Image from "next/image";
import { SectionWrapper, SectionContainer } from "./style";
import { styled } from "styled-components";

const Logo = styled(Image)`
  position: absolute;
  bottom: 150px;
  left: -210px;
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
