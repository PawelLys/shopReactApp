import styled, { css } from 'styled-components';

import * as I from '../../../@types/style.types';

export const MoreOptionsContainer = styled.div<I.MoreOptionsContainer>`
  height: 0px;
  width: 10rem;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 2px 1px, rgba(0, 0, 0, 0.16) 0px 4px 8px 0px;
  transition: none;
  position: fixed;
  z-index: 2;
  right: 0;
  top: 48px;
  min-width: 265px;
  color: ${({ theme }) => theme.settingsColor};
  font-weight: 600;
  overflow: hidden;
  transform: translateX(100%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: height 0.5s;

  ${({ shouldDisplay }) =>
    shouldDisplay &&
    css`
      transform: translateX(0);
      height: ${({ _height }: I.MoreOptionsContainer) => _height}px;
    `}
`;

export const MoreOptionsItem = styled.div<I.MoreOptionsItem>`
  width: 100%;
  height: 40px;
  list-style: none;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.navBorderColor};
  border-left: 1px solid ${({ theme }) => theme.navBorderColor};
  border-right: 1px solid ${({ theme }) => theme.navBorderColor};
  background-color: rgb(250, 250, 250);
  font-size: calc(${({ theme }) => theme.leftNavSize} + 2px);
  display: flex;
  align-items: center;
  padding-left: 10px;

  transform: translateY(-200%);
  opacity: 0;
  transition: all 0.2s ${({ delay }) => delay || 0}s;

  ${({ shouldDisplay }) =>
    shouldDisplay &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
  :hover {
    background-color: ${({ theme }) => theme.settingsExitBtnHover};
  }

  :active {
    background-color: ${({ theme }) => theme.settingsExitBtnActive};
  }
`;
