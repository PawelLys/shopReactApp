import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { StoreState } from '../../reducers';
import Logo from '../../images/logo.png';
import accountIcon from '../../images/accountIcon.svg';
import { DisplayHelper } from './topNavMoreOptionRender/DisplayHelper';
import { setChangeNav, setChangeNavMore, setChangeFooter, setMoreBtn } from '../../actions';

import * as Styled from './TopNav.style';

export const TopNav = (): JSX.Element => {
  const moreIconContainer = useRef(null);

  const changeNav = useSelector((state: StoreState) => state.resizeEvents.changeNav);
  const changeNavMore = useSelector((state: StoreState) => state.resizeEvents.changeNavMore);
  const displayMoreBtn = useSelector((state: StoreState) => state.headerBtnStates.topMoreBtn);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    window.addEventListener('resize', updateSize);
    return () => {
      window.addEventListener('resize', updateSize);
    };
  }, []);

  const updateSize = () => {
    window.innerWidth < 600 ? dispatch(setChangeNav(true)) : dispatch(setChangeNav(false));
    window.innerWidth < 400 ? dispatch(setChangeNavMore(true)) : dispatch(setChangeNavMore(false));
    // resize event for footer
    window.innerWidth <= 490 ? dispatch(setChangeFooter(true)) : dispatch(setChangeFooter(false));
  };

  const onClickLogo = () => history.push('/');

  const moreIconRender = () => {
    return (
      <Styled.IconContainer ref={moreIconContainer} onClick={() => dispatch(setMoreBtn(!displayMoreBtn))}>
        <Styled.Icons iconName="More" />
        <DisplayHelper
          display={displayMoreBtn}
          firstBreakingpoint={changeNav}
          secondBreakingpoint={changeNavMore}
          history={history}
        />
      </Styled.IconContainer>
    );
  };

  return (
    <Styled.HeaderTop>
      <Styled.HeaderWrapper>
        <Styled.WrapperPresent onClick={onClickLogo}>
          <Styled.PresentLogo alt="logo" src={Logo} />
          <Styled.PresentTitle>TODO</Styled.PresentTitle>
        </Styled.WrapperPresent>
        <Styled.WrapperNav>
          <Styled.NavHelpers>
            <Styled.IconContainer title="Your card" onClick={() => history.push('/card')}>
              <Styled.Icons iconName="Shop" />
              Your card
            </Styled.IconContainer>
            {changeNavMore ? (
              moreIconRender()
            ) : (
              <Styled.IconContainer title="Login" onClick={() => history.push('/login')}>
                <Styled.AccountIcon alt="account" src={accountIcon} />
                Login
              </Styled.IconContainer>
            )}
            {changeNav && !changeNavMore ? (
              moreIconRender()
            ) : !changeNavMore ? (
              <>
                <Styled.IconContainer title="Register" onClick={() => history.push('/register')}>
                  Register
                </Styled.IconContainer>
                <Styled.IconContainer title="Blog" onClick={() => history.push('/blog')}>
                  Blog
                </Styled.IconContainer>
                <Styled.IconContainer title="Contact" onClick={() => history.push('/contact')} active={false}>
                  Contact
                </Styled.IconContainer>
              </>
            ) : null}
          </Styled.NavHelpers>
        </Styled.WrapperNav>
      </Styled.HeaderWrapper>
    </Styled.HeaderTop>
  );
};
