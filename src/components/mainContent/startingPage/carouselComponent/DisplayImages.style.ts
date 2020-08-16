import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const WrapperStyle = css`
  min-width: 100%;
  margin: 0 15%;
  transform: translateX(-15%);
  position: relative;
`;

export const ImgWrapper = styled.div`
  ${WrapperStyle};
`;

export const ImgLinkWrapper = styled(Link)`
  ${WrapperStyle};
`;

export const ImgElement = styled.img`
  width: 100%;
`;
