import styled, { css } from 'styled-components';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import * as I from '../../../../@types/style.types';

const CarouselBtnContainer = styled.div`
  z-index: 2;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 15%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  opacity: 0;
  transition: 0.5s;
`;

export const CarouselContainer = styled.div`
  min-height: 150px;
  min-width: 200px;
  width: 100%;
  border: 1px solid rgb(0, 0, 0, 0.2);
  display: flex;
  overflow: hidden;
  justify-content: center;
  position: relative;

  &:hover ${CarouselBtnContainer} {
    opacity: 1;
  }

  @media (max-width: 420px) {
    height: 50vw;
  }
`;

export const Carousel = styled.div<I.Carousel>`
  width: 70%;
  display: flex;
  transition: 0.3s;
  transform: translateX(${(props) => props.x}%);
`;

export const CarouselLeftBtn = styled(CarouselBtnContainer)`
  left: 0;
`;

export const CarouselRigthBtn = styled(CarouselBtnContainer)`
  right: 0;
`;

export const ChevronBtn = styled(Icon)`
  font-size: 18px;
  color: rgb(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BelowNavBtnContainer = styled.div<I.BelowNavBtnContainer>`
  position: absolute;
  bottom: 2%;
  display: flex;
`;

export const BelowNavBtn = styled.button<I.ActiveBoolean>`
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  background-color: rgba(226, 159, 114, 0.4);
  height: 1.1rem;
  width: 1.1rem;
  margin-right: 0.2rem;
  transition: 0.3s;

  :focus {
    outline: none;
  }

  ${(props) =>
    props.active &&
    css`
      background-color: rgba(226, 159, 114, 0.9);
    `}

  @media (max-width: 440px) {
    width: 0.9rem;
    height: 0.9rem;
  }
`;
