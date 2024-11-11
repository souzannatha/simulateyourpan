import Link from "next/link";
import {
  CardItems,
  CardTitle,
  CardWrapper,
  FilterTitle,
  LeftDiv,
  RightDiv,
  Title,
  TitleItems,
  FilterTitleContainer,
  FilterWrapper,
  FilterItemsNoSepatador,
  FilterItemsWidthSepatador,
  TitleContainer,
} from "./style";
import { SectionWrapper, SectionContainer } from "./style";
import { PencilSimpleLine, User, MapPin, CaretDown } from "phosphor-react";
import { PlansCard } from "../PlansCard/PlansCard";
import styled from "styled-components";

const LinkStyled = styled(Link)`
  font-size: 1rem;
  color: #15aad6;
  text-decoration: none;
  margin-top: 3rem;
  @media (max-width: 768px) {
    margin-top: 3.5rem;
  }
`;

export function Quotation() {
  return (
    <SectionWrapper>
      <TitleContainer>
        <LinkStyled href="/">Voltar</LinkStyled>
        <h2>
          resultado <span>da sua cotação</span>
        </h2>
      </TitleContainer>
      <SectionContainer>
        <LeftDiv>
          <CardWrapper>
            <CardTitle>
              <Title>Sua cotação</Title>
              <PencilSimpleLine size={25} color="#ffffff" />
            </CardTitle>
            <CardItems>
              <PencilSimpleLine size={25} color="#15AAD6" />
              <TitleItems>Plano de Saúde</TitleItems>
            </CardItems>
            <CardItems>
              <User size={25} color="#15AAD6" />
              <TitleItems>Camila Tsuruda</TitleItems>
            </CardItems>
            <CardItems>
              <MapPin size={25} color="#15AAD6" />
              <TitleItems>Londrina/PR</TitleItems>
            </CardItems>
          </CardWrapper>
          <CardWrapper>
            <CardTitle>
              <Title>Quantidade de Pessoas</Title>
              <PencilSimpleLine size={25} color="#ffffff" />
            </CardTitle>
            <CardItems>
              <TitleItems>24 a 28 anos</TitleItems>
              <TitleItems>1</TitleItems>
            </CardItems>
            <CardItems>
              <TitleItems>29 a 33 anos</TitleItems>
              <TitleItems>1</TitleItems>
            </CardItems>
            <CardItems>
              <TitleItems>Acima de 59 anos</TitleItems>
              <TitleItems>1</TitleItems>
            </CardItems>
          </CardWrapper>
          <h3>Filtrar</h3>
          <FilterWrapper>
            <FilterTitleContainer>
              <FilterTitle>Cobertura</FilterTitle>
              <CaretDown size={15} color="#AAAAAA" />
            </FilterTitleContainer>
            <FilterItemsNoSepatador>
              <input type="checkbox" id="pessoaJuridica" />
              <label>Hospitalar</label>
            </FilterItemsNoSepatador>
            <FilterItemsNoSepatador>
              <input type="checkbox" id="pessoaJuridica" />
              <label>Ambulatorial</label>
            </FilterItemsNoSepatador>
            <FilterItemsWidthSepatador>
              <input type="checkbox" id="pessoaJuridica" />
              <label>Odontológica</label>
            </FilterItemsWidthSepatador>
            <FilterTitleContainer>
              <FilterTitle>Operadora</FilterTitle>
              <CaretDown size={15} color="#AAAAAA" />
            </FilterTitleContainer>
            <FilterItemsNoSepatador>
              <input type="checkbox" id="pessoaJuridica" />
              <label>Unimed</label>
            </FilterItemsNoSepatador>
            <FilterItemsNoSepatador>
              <input type="checkbox" id="pessoaJuridica" />
              <label>SulAmerica</label>
            </FilterItemsNoSepatador>
            <FilterItemsNoSepatador>
              <input type="checkbox" id="pessoaJuridica" />
              <label>Hospitalar</label>
            </FilterItemsNoSepatador>
            <FilterItemsNoSepatador>
              <input type="checkbox" id="pessoaJuridica" />
              <label>Bradesco Saúde</label>
            </FilterItemsNoSepatador>
            <FilterItemsNoSepatador>
              <input type="checkbox" id="pessoaJuridica" />
              <label>Alcance</label>
            </FilterItemsNoSepatador>
            <FilterItemsWidthSepatador>
              <input type="checkbox" id="pessoaJuridica" />
              <label>Amil</label>
            </FilterItemsWidthSepatador>
            <FilterTitleContainer>
              <FilterTitle>Abrangência</FilterTitle>
              <CaretDown size={15} color="#AAAAAA" />
            </FilterTitleContainer>
            <FilterItemsNoSepatador>
              <input type="checkbox" id="pessoaJuridica" />
              <label>Regional</label>
            </FilterItemsNoSepatador>
            <FilterItemsNoSepatador>
              <input type="checkbox" id="pessoaJuridica" />
              <label>Nacional</label>
            </FilterItemsNoSepatador>
            <FilterItemsWidthSepatador>
              <input type="checkbox" id="pessoaJuridica" />
              <label>Exterior</label>
            </FilterItemsWidthSepatador>
            <FilterTitleContainer>
              <FilterTitle>Acomodação</FilterTitle>
              <CaretDown size={15} color="#AAAAAA" />
            </FilterTitleContainer>
            <FilterItemsNoSepatador>
              <input type="checkbox" id="pessoaJuridica" />
              <label>Apartamento privativo</label>
            </FilterItemsNoSepatador>
            <FilterItemsWidthSepatador>
              <input type="checkbox" id="pessoaJuridica" />
              <label>Enfermaria</label>
            </FilterItemsWidthSepatador>
            <FilterTitleContainer>
              <FilterTitle>Obstetrícia</FilterTitle>
              <CaretDown size={15} color="#AAAAAA" />
            </FilterTitleContainer>
            <FilterItemsNoSepatador>
              <input type="checkbox" id="pessoaJuridica" />
              <label>Sim</label>
            </FilterItemsNoSepatador>
            <FilterItemsWidthSepatador>
              <input type="checkbox" id="pessoaJuridica" />
              <label>Não</label>
            </FilterItemsWidthSepatador>
            <FilterTitleContainer>
              <FilterTitle>Modalidade</FilterTitle>
              <CaretDown size={15} color="#AAAAAA" />
            </FilterTitleContainer>
            <FilterItemsNoSepatador>
              <input type="checkbox" id="pessoaJuridica" />
              <label>Com coparticipação</label>
            </FilterItemsNoSepatador>
            <FilterItemsWidthSepatador>
              <input type="checkbox" id="pessoaJuridica" />
              <label>Sem coparticipação</label>
            </FilterItemsWidthSepatador>
          </FilterWrapper>
        </LeftDiv>
        <RightDiv>
          <PlansCard />
          <PlansCard />
          <PlansCard />
          <PlansCard />
          <PlansCard />
          <PlansCard />
          <PlansCard />
          <PlansCard />
          <PlansCard />
          <PlansCard />
          <PlansCard />
          <PlansCard />
        </RightDiv>
      </SectionContainer>
    </SectionWrapper>
  );
}
