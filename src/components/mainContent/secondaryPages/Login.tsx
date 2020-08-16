import React, { useState } from 'react';
import * as Styled from './Login.style';

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(false);

  const onFormBtnClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setDisabledBtn(true);
  };

  return (
    <Styled.Container>
      <Styled.LoginWindowWrapper>
        <Styled.LoginWindowTitle>Log in to your account</Styled.LoginWindowTitle>
        <form>
          <Styled.InputWrapper>
            <Styled.InputTitle>Email address</Styled.InputTitle>
            <Styled.InputIcon iconName="Accounts" />
            <Styled.Input type="Email" disabled={disabledBtn} />
          </Styled.InputWrapper>
          <Styled.InputWrapper>
            <Styled.InputTitle>Password</Styled.InputTitle>
            <Styled.InputIcon iconName="Lock" />
            <Styled.InputShowPassword onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? 'Hide' : 'Show'}
            </Styled.InputShowPassword>
            <Styled.Input
              type={showPassword ? 'text' : 'password'}
              disabled={disabledBtn}
              style={{ paddingRight: '3rem' }}
            />
          </Styled.InputWrapper>
          <Styled.FormButton onClick={onFormBtnClick} disabled={disabledBtn}>
            Log in
          </Styled.FormButton>
          {disabledBtn && (
            <Styled.LoginWarningMessage onClick={() => setDisabledBtn(false)}>
              Sorry, currently backend doesn't support authentication.
              <Styled.WarningBtnIcon iconName="Cancel" />
            </Styled.LoginWarningMessage>
          )}
        </form>
        <Styled.PasswordRemainderWrapper>
          <Styled.PasswordRemainderLink to="/forgotpass">Forgot your password?</Styled.PasswordRemainderLink>
        </Styled.PasswordRemainderWrapper>
      </Styled.LoginWindowWrapper>
      <Styled.RegisterRedirectWrapper>
        <Styled.RegisterRedirectTitle>
          New here? <Styled.RegisterRedirectLink to="/register">Sign up</Styled.RegisterRedirectLink>
        </Styled.RegisterRedirectTitle>
      </Styled.RegisterRedirectWrapper>
    </Styled.Container>
  );
};
