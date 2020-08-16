import styled from 'styled-components';

export const Container = styled.div`
  min-width: 350px;
  margin-bottom: 0.5rem;
  cursor: pointer;

  @media (max-width: 962px) and (min-width: 767px) {
    min-width: 250px;
  }

  @media (max-width: 767px) {
    margin-top: 1rem;
  }

  @media (max-width: 450px) {
    min-width: 200px;
  }
`;

export const Photo = styled.img`
  width: 100%;
  cursor: pointer;
`;
