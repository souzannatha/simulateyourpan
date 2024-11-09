import Image from "next/image";
import styled from "styled-components";
import { QuestionComponent } from "../QuestionComponent/QuestionComponent";

const SectionWrapper = styled.section`
  background: #ffffff;
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90rem;
  margin: 0 auto;
  margin-top: 7.5rem;
  height: 37rem;
`;

const DivSimulate = styled.div`
  width: 43.75rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #6368bd;
  margin-bottom: 0.625rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #2a2a2a;
  text-transform: uppercase;
  margin-bottom: 2rem;

  span {
    color: #6368bd;
  }
`;

const Description = styled.p`
  font-weight: 500;
  color: #7a7a7a;
  margin-bottom: 2rem;
`;

export function SimulateSection() {
  return (
    <SectionWrapper>
      <SectionContainer>
        <Image
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
