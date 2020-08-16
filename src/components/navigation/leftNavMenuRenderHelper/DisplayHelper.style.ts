import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import * as I from '../../../@types/style.types';

export const NavList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const NavListItem = styled.li<I.NavListItem>`
  height: 42px;
  width: 100%;
  display: flex;
  cursor: pointer;
  position: relative;

  :hover {
    background-color: ${(props) => props.theme.leftNavBgHover};
  }

  ${(props) =>
    props.show &&
    css`
      height: auto;
      min-height: 42px;
      align-items: center;
    `}
`;

export const NavItemLink = styled(Link)`
  display: flex;

  :hover {
    text-decoration: underline;
  }
`;

export const NavItemIcons = styled.div`
  flex: 0 0 48px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavItemIconsImg = styled.img`
  width: 55%;
  height: 55%;
`;

export const NavItemTitle = styled.div<I.NavListItemElements>`
  flex: 0 0 120px;
  text-transform: capitalize;
  color: #000;
  display: flex;
  align-items: center;
  padding: 10px 0 10px 8px;
  line-height: 20px;
  opacity: 0;
  visibility: hidden;
  transition: ${(props) => (props.show ? `transform .1s .1s, opacity .1s .1s, flex 0s .15s` : `none`)};
  transform: translateX(-100%);

  ${(props) =>
    props.show &&
    css`
      flex: 1 1 auto;
      transform: translateX(0%);
      opacity: 1;
      visibility: visible;
    `}
`;

export const NavItemArrowIconContainer = styled.div<I.NavListItemElements>`
  flex: 0 0 42px;
  transform: translateX(-100%);
  opacity: 0;
  visibility: hidden;
  transition: ${(props) => (props.show ? `transform .1s .13s, opacity .1s .13s` : `none`)};

  ${(props) =>
    props.show &&
    css`
      transform: translateX(0%);
      opacity: 1;
      visibility: visible;
    `}
`;

export const NavItemArrowIcon = styled(Icon)<I.NavItemArrowIcon>`
  height: 42px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(${(props) => props.theme.leftNavSize} - 2px);
  transition: transform 0.2s;

  ${(props) =>
    props.rotate &&
    css`
      transform: rotate(180deg);
    `}
`;
