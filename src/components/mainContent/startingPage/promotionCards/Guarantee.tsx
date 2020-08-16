import React from 'react';
import * as Styled from './Guarantee.style';

export const Guarantee = React.memo(() => {
  return (
    <Styled.Container>
      <Styled.ContainerLeftSide>
        30 days <br />
        money back!
      </Styled.ContainerLeftSide>
      <Styled.ContainerRightSide>
        100% <br /> guaranteed
      </Styled.ContainerRightSide>
      <Styled.ArrowToRightOne />
      <Styled.ArrowToRightTwo />
      <Styled.ArrowToRightThree />
    </Styled.Container>
  );
});
