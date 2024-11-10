import { styled } from "styled-components";
import {
  CardWrapper,
  CardTitle,
  Title,
  CardDescription,
  ItemDescription,
  CardPrice,
  ButtonStyled,
  CardImages,
  FilterItemsNoSepatador,
  Price,
} from "./style";
import Image from "next/image";

export const ImageStyled = styled(Image)`
  margin-bottom: 22px;
`;
export function PlansCard() {
  return (
    <CardWrapper>
      <CardTitle>
        <Title>Vida Nova Compartilhado</Title>
      </CardTitle>
      <CardDescription>
        <ItemDescription>Pessoa Física</ItemDescription>
      </CardDescription>
      <CardDescription>
        <ItemDescription>Ambulatorial + Hospitalar</ItemDescription>
      </CardDescription>
      <CardDescription>
        <ItemDescription>Nacional</ItemDescription>
      </CardDescription>
      <CardDescription>
        <ItemDescription>Apartamento privativo</ItemDescription>
      </CardDescription>
      <CardDescription>
        <ItemDescription>Obstetrícia: sim</ItemDescription>
      </CardDescription>
      <CardDescription>
        <ItemDescription>Coparticipação 30%</ItemDescription>
      </CardDescription>
      <CardImages>
        <Image src="./logo-hospitalar.svg" width={60} height={60} alt="logo" />
        <ImageStyled
          src="./logo-multplanos.svg"
          width={60}
          height={60}
          alt="logo"
        />
      </CardImages>
      <CardPrice>
        <p>R$</p>
        <Price>2.999,96</Price>
        <p>/mês</p>
      </CardPrice>
      <FilterItemsNoSepatador>
        <input type="checkbox" id="pessoaJuridica" />
        <label>Comparar</label>
      </FilterItemsNoSepatador>
      <ButtonStyled>Tenho interesse</ButtonStyled>
    </CardWrapper>
  );
}
