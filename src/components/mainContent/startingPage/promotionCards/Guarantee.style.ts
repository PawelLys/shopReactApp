import styled from 'styled-components';

export const Container = styled.div`
  min-width: 350px;
  height: 150px;
  position: relative;
  margin-bottom: 0.5rem;
  cursor: pointer;

  :first-of-type {
    background-image: linear-gradient(to right, rgb(255, 255, 26) 50%, rgb(0, 71, 179) 50%);
  }

  @media (max-width: 962px) and (min-width: 767px) {
    min-width: 250px;
    height: 100px;
  }

  @media (max-width: 767px) {
    margin-top: 1rem;
  }

  @media (max-width: 450px) {
    min-width: 200px;
    height: 100px;
  }
`;

const ContainerSide = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 2vw;
  font-weight: 400;
  text-transform: uppercase;

  @media (min-width: 1100px) {
    font-size: 1.6rem;
  }

  @media (max-width: 767px) {
    font-size: 5vw;
  }
`;

export const ContainerLeftSide = styled(ContainerSide)`
  left: 0;
`;

export const ContainerRightSide = styled(ContainerSide)`
  right: 0;
  color: #fff;
`;

const Arrow = styled.div`
  position: absolute;
  left: 50%;
  border-top: 1.5rem solid transparent;
  border-bottom: 1.5rem solid transparent;
  border-left: 1.5rem solid rgb(255, 255, 26);

  @media (max-width: 962px) and (min-width: 767px) {
    border-top: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
    border-left: 1rem solid rgb(255, 255, 26);
  }

  @media (max-width: 450px) {
    border-top: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
    border-left: 1rem solid rgb(255, 255, 26);
  }
`;

export const ArrowToRightOne = styled(Arrow)`
  top: 0;
`;

export const ArrowToRightTwo = styled(Arrow)`
  top: 34%;
`;

export const ArrowToRightThree = styled(Arrow)`
  top: 68%;
`;
