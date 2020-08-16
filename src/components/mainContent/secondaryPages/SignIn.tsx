import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Styled from './Login.style';

export const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(false);

  const history = useHistory();

  const onFormBtnClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setDisabledBtn(true);
  };

  return (
    <Styled.Container>
      <Styled.LoginWindowWrapper>
        <Styled.LoginWindowTitle>Create an Account</Styled.LoginWindowTitle>
        <form>
          <Styled.InputWrapper>
            <Styled.InputIcon iconName="Contact" />
            <Styled.Input type="text" disabled={disabledBtn} placeholder="First name" />
          </Styled.InputWrapper>
          <Styled.InputWrapper>
            <Styled.InputIcon iconName="Group" />
            <Styled.Input type="text" disabled={disabledBtn} placeholder="Last name" />
          </Styled.InputWrapper>
          <Styled.InputWrapper>
            <Styled.InputIcon iconName="Accounts" />
            <Styled.Input type="Email" disabled={disabledBtn} placeholder="E-mail" />
          </Styled.InputWrapper>
          <Styled.InputWrapper>
            <Styled.InputIcon iconName="Lock" />
            <Styled.InputShowPassword onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? 'Hide' : 'Show'}
            </Styled.InputShowPassword>
            <Styled.Input
              type={showPassword ? 'text' : 'password'}
              disabled={disabledBtn}
              style={{ paddingRight: '3rem' }}
              placeholder="Password"
            />
          </Styled.InputWrapper>
          <Styled.FormButton onClick={onFormBtnClick} disabled={disabledBtn}>
            Register
          </Styled.FormButton>
          {disabledBtn && (
            <Styled.LoginWarningMessage onClick={() => setDisabledBtn(false)}>
              Sorry, currently backend doesn't support authentication.
              <Styled.WarningBtnIcon iconName="Cancel" />
            </Styled.LoginWarningMessage>
          )}
        </form>
      </Styled.LoginWindowWrapper>
      <Styled.ReturnBtnWrapper>
        <Styled.ReturnBtn onClick={() => history.push('/login')}>
          <Styled.ReturnBtnIcon iconName="ChevronLeft" />
          Go back
        </Styled.ReturnBtn>
      </Styled.ReturnBtnWrapper>
    </Styled.Container>
  );
};
