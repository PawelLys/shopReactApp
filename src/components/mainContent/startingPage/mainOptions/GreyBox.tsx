import React from 'react';
import { History } from 'history';
import * as Styled from './GreyBox.style';

interface IGreyBox {
  content: string;
  goto: string;
  history: History;
}

export const GreyBox = React.memo(({ content, goto, history }: IGreyBox) => {
  return (
    <Styled.Container onClick={() => history.push(`/${goto}`)}>
      <Styled.FigureTopLeft />
      <Styled.FigureTopRight />
      <Styled.FigureBottomLeft />
      <Styled.FigureBottomRight />
      <Styled.ContainerText>{content}</Styled.ContainerText>
    </Styled.Container>
  );
});
