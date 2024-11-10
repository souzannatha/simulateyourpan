import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  height: 624px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
  background: #fff;
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #6368bd;
  height: 6.25rem;
  border-radius: 10px 10px 0 0;
  padding: 35px;
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
`;

export const CardDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  height: 50px;
`;

export const ItemDescription = styled.p`
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  padding: 12px;
  color: #2a2a2a;
  border-bottom: 1px solid #dcdcdc;
  width: 340px;
`;

export const CardImages = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #fff;
  margin-bottom: #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
`;

export const CardPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6368bd;
  font-weight: 500;
  background: #fff;
`;

export const Price = styled.p`
  margin-top: 10px;
  font-size: 2rem;
`;

export const FilterItemsNoSepatador = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  height: 60px;
  padding: 20px;
  gap: 10px;
`;

export const ButtonStyled = styled.button`
  align-self: center;
  width: 18.75rem;
  height: 2.5rem;
  background: #15aad6;
  color: #fff;
  margin-bottom: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 100px;
  font-weight: 700;
`;
