import Image from "next/image";
import { SectionWrapper, SectionContainer } from "./style";

export function Announcement() {
  return (
    <SectionWrapper>
      <SectionContainer>
        <Image
          src="./Announcement01.svg"
          alt="Uma mulher segurando um tablet"
          width={460}
          height={460}
        />
        <Image
          src="./Announcement02.svg"
          alt="Uma mulher segurando um tablet"
          width={460}
          height={460}
        />
        <Image
          src="./Announcement03.svg"
          alt="Uma mulher segurando um tablet"
          width={460}
          height={460}
        />
      </SectionContainer>
    </SectionWrapper>
  );
}
