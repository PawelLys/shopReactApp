import styled from 'styled-components';

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

export const ContentBold = styled.div`
  font-weight: 500;
`;

export const Content = styled.div`
  font-size: 20px;
  padding: 2rem 0.5rem 1rem;
`;

export const ContentBreak = styled.p`
  margin: .7rem 0;
`;
