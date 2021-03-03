import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: 200px;
  background-image: linear-gradient(to right bottom, rgb(192, 192, 192) 50%, rgb(169, 169, 169) 50%);
  display: flex;
  justify-content: center;
  color: #000;
  position: relative;
  cursor: pointer;

  @media (max-width: 380px) {
    width: 250px;
  }

  @media (max-width: 990px) and (min-width: 750px) {
    width: 600px;
    height: 400px;
  }

  @media (min-width: 1030px) {
    flex: 1;
    height: 21vw;
    max-height: 300px;
  }
`;

export const ContainerText = styled.h2`
  font-weight: 600;
  text-transform: uppercase;
  margin: auto;

  @media (max-width: 990px) and (min-width: 750px) {
    font-size: 60px;
    word-spacing: 10px;
  }
`;

export const Figure = css`
  position: absolute;
  width: 10px;
  height: 20px;
  background-color: rgb(105, 105, 105);

  @media (max-width: 990px) and (min-width: 750px) {
    width: 20px;
    height: 50px;
  }
`;

export const FigureTopLeft = styled.div`
  ${Figure};
  left: 20px;
  top: 15px;

  @media (max-width: 990px) and (min-width: 750px) {
    left: 20px;
    top: 20px;
  }
`;

export const FigureTopRight = styled.div`
  ${Figure};
  top: 10px;
  left: 35px;
  transform: rotate(90deg);

  @media (max-width: 990px) and (min-width: 750px) {
    top: 5px;
    left: 55px;
  }
`;
export const FigureBottomLeft = styled.div`
  ${Figure};
  right: 20px;
  bottom: 15px;
  background-color: rgb(216, 216, 216);

  @media (max-width: 990px) and (min-width: 750px) {
    right: 20px;
    bottom: 20px;
  }
`;

export const FigureBottomRight = styled.div`
  ${Figure};
  bottom: 10px;
  right: 35px;
  transform: rotate(90deg);
  background-color: rgb(216, 216, 216);

  @media (max-width: 990px) and (min-width: 750px) {
    bottom: 5px;
    right: 55px;
  }
`;
