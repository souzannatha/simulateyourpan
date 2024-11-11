import Image from "next/image";
import { SectionWrapper, SectionContainer } from "./style";

import styled from "styled-components";

const StyledImage = styled(Image)`
  @media (max-width: 768px) {
    width: 360px;
  }
`;

export function Announcement() {
  return (
    <SectionWrapper>
      <SectionContainer>
        <StyledImage
          src="./Announcement01.svg"
          alt="Uma mulher segurando um tablet"
          width={460}
          height={460}
        />
        <StyledImage
          src="./Announcement02.svg"
          alt="Uma mulher segurando um tablet"
          width={460}
          height={460}
        />
        <StyledImage
          src="./Announcement03.svg"
          alt="Uma mulher segurando um tablet"
          width={460}
          height={460}
        />
      </SectionContainer>
    </SectionWrapper>
  );
}
