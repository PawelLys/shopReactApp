import styled from 'styled-components';

export const Container = styled.div`
  min-height: 66vh;

  @media (max-width: 978px) {
    min-height: 61vh;
  }
`;

export const Title = styled.h5`
  font-size: 2.5rem;
  margin: 2rem 1rem 1rem 3rem;
  position: relative;

  @media (max-width: 650px) {
    margin: 2rem 1rem 1rem;
  }

  ::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 0;
    width: 4rem;
    height: 2px;
    background: #000;
  }
`;

export const Content = styled.div`
  font-size: 20px;
  padding: 2rem 0.5rem 1rem;
`;

export const ContentBreak = styled.p`
  margin: 1rem 0;
`;
