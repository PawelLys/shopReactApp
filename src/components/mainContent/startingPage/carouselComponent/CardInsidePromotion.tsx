import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  right: -8%;
  top: 0;
  z-index: 2;
  text-align: center;
`;

const ProcContent = styled.h1`
  color: rgb(217, 30, 24, 71);
  padding: 0;
  margin-bottom: 0.1rem;

  @media (max-width: 991px) {
    font-size: 3.8vw;
  }
  @media (max-width: 767px) {
    font-size: 5.5vw;
  }
  @media (max-width: 500px) {
    font-size: 6.5vw;
  }
`;

const PriceContent = styled.h2`
  color: rgb(217, 30, 24, 71);

  @media (max-width: 991px) {
    font-size: 3.8vw;
  }
  @media (max-width: 767px) {
    font-size: 5.5vw;
  }
  @media (max-width: 500px) {
    font-size: 6.5vw;
  }
`;

interface IProps {
  discountValue: string;
  newPrice: string;
}

export const CardInsidePromotion = React.memo(({ newPrice, discountValue }: IProps) => {
  return (
    <Wrapper>
      <ProcContent>{discountValue}</ProcContent>
      <PriceContent>{newPrice}$</PriceContent>
    </Wrapper>
  );
});
