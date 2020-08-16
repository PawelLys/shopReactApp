import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Styled from './Login.style';

export const RemainderPassword = () => {
  const [disabledBtn, setDisabledBtn] = useState(false);

  const history = useHistory();

  const onFormBtnClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setDisabledBtn(true);
  };

  return (
    <Styled.Container>
      <Styled.LoginWindowWrapper style={{ textAlign: 'left' }}>
        <Styled.LoginWindowTitle>Forgot password?</Styled.LoginWindowTitle>
        <form>
          <Styled.InputWrapper>
            <Styled.InputPasswordRemainderInfo>
              Please enter your e-mail address and we will send you a new password by e-mail.
            </Styled.InputPasswordRemainderInfo>
          </Styled.InputWrapper>
          <Styled.InputWrapper style={{ textAlign: 'center' }}>
            <Styled.InputIcon iconName="Accounts" />
            <Styled.Input type="email" placeholder="E-mail" disabled={disabledBtn} />
          </Styled.InputWrapper>
          <Styled.FormButton onClick={onFormBtnClick} disabled={disabledBtn}>
            Get your password
          </Styled.FormButton>
          {disabledBtn && (
            <Styled.LoginWarningMessage onClick={() => setDisabledBtn(false)}>
              Sorry, currently we are unable to confirm your email.
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
