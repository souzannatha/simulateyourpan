import { SectionWrapper, SectionContainer, LeftDiv, RightDiv } from "./style";
import { Form } from "../Form/Form";

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
          <Form />
        </RightDiv>
      </SectionContainer>
    </SectionWrapper>
  );
}
