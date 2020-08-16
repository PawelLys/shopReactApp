import React, { useEffect, useReducer } from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from '../../../reducers';
import { IProductTypes } from '../../../actions';
import { LeftNavMenuDisplayHelper } from './NestedDisplayHelper';
import * as Styled from './DisplayHelper.style';
import { booleanArrayReducer, actionTypeUpdate, actionTypeReset } from './arrayReducerComponent';

export const LeftNavMenuDisplay = () => {
  const menuContent = useSelector((state: StoreState) => state.products.menu);
  const burgerBtn = useSelector((state: StoreState) => state.headerBtnStates.burgerBtn);

  const [navArrow, setNavArrow] = useReducer(
    booleanArrayReducer,
    menuContent.map(() => false)
  );

  useEffect(() => {
    if (navArrow.includes(true)) setNavArrow({ type: actionTypeReset });
  }, [!burgerBtn]);

  const iconsNameArr = menuContent.map((value) => {
    const title = value.title.split(' ');
    return title
      .map((value, index) => {
        if (title.length > 1) {
          return index === 0
            ? value.charAt(0).toLowerCase() + value.slice(1)
            : value.charAt(0).toUpperCase() + value.slice(1);
        } else {
          return title.map((value) => value.toLowerCase());
        }
      })
      .join('');
  });

  const renderHelper = menuContent.map((content, index) => {
    return (
      <Styled.NavList key={index}>
        <Styled.NavListItem>
          <Styled.NavItemLink to={`/${content.link}`} title={content.title}>
            <Styled.NavItemIcons>
              <Styled.NavItemIconsImg src={require(`../../../images/${iconsNameArr[index]}.svg`)} alt="icon" />
            </Styled.NavItemIcons>
            <Styled.NavItemTitle show={burgerBtn}>{content.title}</Styled.NavItemTitle>
          </Styled.NavItemLink>
          <Styled.NavItemArrowIconContainer
            show={burgerBtn}
            onClick={() => setNavArrow({ type: actionTypeUpdate, payload: index })}>
            <Styled.NavItemArrowIcon iconName="ChevronUpMed" rotate={navArrow[index]} />
          </Styled.NavItemArrowIconContainer>
        </Styled.NavListItem>
        {burgerBtn && navArrow[index] && (
          <LeftNavMenuDisplayHelper
            content={menuContent[index].menuOptions}
            subContent={menuContent[index].menuSubOptions || null}
            type={menuContent[index].link as IProductTypes}
            burgerBtn={burgerBtn}
          />
        )}
      </Styled.NavList>
    );
  });

  return <>{renderHelper}</>;
};
