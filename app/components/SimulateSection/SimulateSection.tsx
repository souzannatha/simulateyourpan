import Image from "next/image";
import { QuestionComponent } from "../QuestionComponent/QuestionComponent";
import {
  SectionWrapper,
  SectionContainer,
  DivSimulate,
  Paragraph,
  Title,
  Description,
} from "./style";
import { styled } from "styled-components";

export const StyledImage = styled(Image)`
  @media (max-width: 768px) {
    width: 350px;
    height: 250px;
  }
`;

export function SimulateSection() {
  return (
    <SectionWrapper>
      <SectionContainer>
        <StyledImage
          src="./person-simulate.svg"
          alt="Uma mulher segurando um tablet"
          width={705}
          height={589}
        />

        <DivSimulate>
          <Paragraph>Sobre o Simule seu plano</Paragraph>
          <Title>
            Simule e Compare <br /> <span>com Facilidade</span>
          </Title>
          <Description>
            A Simule Seu Plano nasceu para facilitar o acesso ao plano de saúde
            ideal. Com uma plataforma intuitiva, ajudamos nossos clientes a
            comparar opções e fazer escolhas informadas. Trabalhamos com ética,
            transparência e compromisso com o bem-estar de quem confia em nós.
          </Description>
          <QuestionComponent
            src="./dolar-icon.svg"
            title="A simulação é gratuita?"
            paragraph="Sim! Nossa simulação é completamente gratuita e sem compromisso."
          />
          <QuestionComponent
            src="calendar-icon.svg"
            title="Como funciona a escolha do plano?"
            paragraph="Após a simulação, mostramos várias opções que atendem às suas necessidades. Basta escolher a que faz mais sentido para você."
          />
        </DivSimulate>
      </SectionContainer>
    </SectionWrapper>
  );
}
