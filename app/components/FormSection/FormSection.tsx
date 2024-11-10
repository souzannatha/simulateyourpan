import Link from "next/link";
import { SectionWrapper, SectionContainer, LeftDiv, RightDiv } from "./style";

export function FormSection() {
  return (
    <SectionWrapper>
      <SectionContainer>
        <LeftDiv>
          <h2>
            Simule <span>seu Plano</span>
          </h2>
          <div>Passo 1: Preencha o formulário</div>
        </LeftDiv>
        <RightDiv>
          <p>formulário aqui</p>
          <Link href="/compare">Link</Link>
        </RightDiv>
      </SectionContainer>
    </SectionWrapper>
  );
}
