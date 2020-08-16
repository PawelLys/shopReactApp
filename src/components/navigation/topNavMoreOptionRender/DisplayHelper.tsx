import React from 'react';
import { History } from 'history';

import * as Styled from './DisplayHelper.style';

interface IProps {
  display: boolean;
  firstBreakingpoint: boolean;
  secondBreakingpoint: boolean;
  history: History<History.PoorMansUnknown>;
}

export const DisplayHelper = ({ display, firstBreakingpoint, secondBreakingpoint, history }: IProps) => {
  return (
    <Styled.MoreOptionsContainer shouldDisplay={display} _height={secondBreakingpoint ? 160 : 120}>
      {firstBreakingpoint && (
        <>
          {secondBreakingpoint && (
            <Styled.MoreOptionsItem shouldDisplay={display} onClick={() => history.push('/login')}>
              Login
            </Styled.MoreOptionsItem>
          )}
          <Styled.MoreOptionsItem shouldDisplay={display} onClick={() => history.push('/register')}>
            Register
          </Styled.MoreOptionsItem>
          <Styled.MoreOptionsItem shouldDisplay={display} delay={0.1} onClick={() => history.push('/blog')}>
            Blog
          </Styled.MoreOptionsItem>
          <Styled.MoreOptionsItem shouldDisplay={display} delay={0.2} onClick={() => history.push('/contact')}>
            Contact
          </Styled.MoreOptionsItem>
        </>
      )}
    </Styled.MoreOptionsContainer>
  );
};
