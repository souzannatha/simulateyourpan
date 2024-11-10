import styled from "styled-components";

export const SectionWrapper = styled.section`
  background: #e0ecfc;
`;

export const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 90rem;
  margin: 0 auto;
  height: 182.125rem;
`;

export const LeftDiv = styled.div`
  width: 18.75rem;
  height: 15rem;
  margin-top: 7.5rem;
  h3 {
    margin-bottom: 10px;
  }
`;

export const RightDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 7.5rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 1400px;
  margin-left: 200px;

  h2 {
    font-size: 4rem;
    text-transform: uppercase;
    color: #6368bd;
  }
  span {
    display: inline-block;
    color: #2a2a2a;
    margin-top: 60px;
  }
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 240px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #15aad6;
  height: 60px;
  border-radius: 10px 10px 0 0;
  padding: 20px;
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
`;

export const CardItems = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  height: 60px;
  padding: 20px;

  &:not(:last-child) {
    border-bottom: 1px solid #dcdcdc;
  }
`;

export const TitleItems = styled.h3`
  display: flex;
  justify-items: space-between;
  font-size: 1rem;
  font-weight: 400;
  color: #000;
  margin-left: 30px;
`;

export const FilterTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  height: 60px;
  padding: 20px;
`;

export const FilterTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #000;
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 1528px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const FilterItemsNoSepatador = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  height: 60px;
  padding: 20px;
  gap: 10px;
`;

export const FilterItemsWidthSepatador = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  height: 60px;
  padding: 20px;
  gap: 10px;
  border-bottom: 1px solid #dcdcdc;
`;
