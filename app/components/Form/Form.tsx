import Link from "next/link";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 54rem;
  height: auto;
  padding: 2rem;
  border-radius: 1.25rem;
  background: #ffffff;
  gap: 10px;

  label {
    font-size: 1rem;
    font-weight: bold;
    color: #575757;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }
`;

const SelectGroup = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 23.5rem;
  height: 3.125rem;
  padding: 1rem;
  background: #f2f2f2;
  border-radius: 5px;

  select {
    width: 100%;
    height: 100%;
    background: #f2f2f2;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    color: #2a2a2a;
    padding-left: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InputFullWidth = styled.input`
  width: 100%;
  height: 3.125rem;
  padding-left: 10px;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  font-size: 1rem;
  background: #f2f2f2;
  color: #2a2a2a;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InputGroup = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 48%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InputContainerStyled = styled(InputContainer)`
  input {
    width: 100%;
    height: 3.125rem;
    padding-left: 10px;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    font-size: 1rem;
    background: #f2f2f2;
    color: #2a2a2a;
  }

  label {
    align-self: flex-start;
  }
`;

const ButtonStyled = styled.button`
  width: 100%;
  height: 50px;
  background-color: #15aad6;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #1a98c1;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 170, 214, 0.5);
  }
`;

const LinkStyled = styled(Link)`
  color: white;
  text-decoration: none;
  width: 100%;
  text-align: center;
`;

export function Form() {
  return (
    <FormContainer>
      <label>Tipo de Plano</label>
      <SelectGroup>
        <SelectContainer>
          <select>
            <option value="saude">Plano de saúde</option>
            <option value="odontologico">Plano Odontológico</option>
          </select>
        </SelectContainer>
        <SelectContainer>
          <select>
            <option value="saude">Plano de saúde</option>
            <option value="odontologico">Plano Odontológico</option>
          </select>
        </SelectContainer>
      </SelectGroup>

      <label>Estado</label>
      <SelectGroup>
        <SelectContainer>
          <select>
            <option value="saude">UF</option>
            <option value="saude">PR</option>
            <option value="odontologico">SP</option>
          </select>
        </SelectContainer>
        <SelectContainer>
          <select>
            <option value="saude">Cidade</option>
            <option value="saude">Cornélio Procópio</option>
            <option value="odontologico">Londrina</option>
          </select>
        </SelectContainer>
      </SelectGroup>

      <label>Seu nome completo</label>
      <InputFullWidth type="text" placeholder="Digite seu nome completo aqui" />

      <InputGroup>
        <InputContainerStyled>
          <label>Email</label>
          <input type="text" placeholder="Digite seu email aqui" />
        </InputContainerStyled>
        <InputContainerStyled>
          <label>WhatsApp</label>
          <input type="text" placeholder="WhatsApp" />
        </InputContainerStyled>
      </InputGroup>

      <label>Onde nos conheceu?</label>
      <InputFullWidth type="text" placeholder="Selecione" />

      <ButtonStyled>
        <LinkStyled href="/compare">Iniciar Simulação</LinkStyled>
      </ButtonStyled>
    </FormContainer>
  );
}
