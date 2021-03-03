import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

export const Container = styled.div`
  min-height: 69vh;
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;

  @media (max-width: 978px) {
    min-height: 65vh;
  }

  @media (max-width: 880px) {
    min-height: 52vh;
  }
`;

export const LoginWindowWrapper = styled.div`
  text-align: center;
  padding-top: 5rem;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 2px 1px, rgba(0, 0, 0, 0.08) 0px 2px 4px 0px;
  padding: 0.5rem 0.75rem;
  border-radius: 16px;
  margin: 1rem auto 0;
  width: 100%;
  max-width: 450px;
  min-width: 230px;
`;

export const LoginWindowTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 1.75rem;
  margin-top: 0px;
  word-break: break-word;
`;

export const InputWrapper = styled.div`
  margin-bottom: 1.3rem;
  position: relative;
`;

export const InputTitle = styled.h5`
  color: #62748e;
  font-size: 12px;
  font-weight: bold;
  text-align: left;
  padding-left: 0.4rem;
`;

export const Input = styled.input`
  font-size: 14px;
  line-height: 38px;
  height: 40px;
  color: rgb(26, 26, 26);
  width: 100%;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 666px;
  padding-left: 3rem;
  padding-right: 1rem;

  :focus {
    outline: none;
  }
`;

const showFadeBorder = () => {
  return css`
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    opacity: 0.5;
    background-color: rgba(212, 212, 212, 0);
    background-image: -webkit-linear-gradient(
      bottom,
      rgba(212, 212, 212, 0) 0,
      #d4d4d4 30%,
      #d4d4d4 70%,
      rgba(212, 212, 212, 0) 100%
    );
    background-image: linear-gradient(
      to top,
      rgba(212, 212, 212, 0) 0,
      #d4d4d4 30%,
      #d4d4d4 70%,
      rgba(212, 212, 212, 0) 100%
    );
  `;
};

export const InputIcon = styled(Icon)`
  position: absolute;
  left: 0;
  width: 2.7rem;
  height: 40px;
  padding-top: 0.1rem;
  line-height: 38px;
  font-size: 16px;

  ::after {
    right: 4px;
    ${showFadeBorder()}
  }
`;

export const InputShowPassword = styled.div`
  position: absolute;
  right: 0;
  width: 2.8rem;
  height: 40px;
  padding-top: 0.1rem;
  line-height: 38px;
  font-size: 14px;
  border-top-right-radius: 666px;
  border-bottom-right-radius: 666px;
  cursor: pointer;
  user-select: none;

  ::after {
    left: 0px;
    ${showFadeBorder()}
  }
`;

export const FormButton = styled.button`
  font-size: 14px;
  line-height: 20px;
  height: 40px;
  width: 100%;
  padding: 0.5rem 1.5rem;
  background-color: rgb(0, 130, 250);
  font-size: 16px;
  color: rgb(255, 255, 255);
  border-radius: 666px;
  border: none;

  :focus {
    outline: none;
  }

  :hover {
    background-color: rgb(5, 140, 255);
  }

  :disabled {
    background: rgba(5, 140, 255, 0.6);
  }
`;

export const LoginWarningMessage = styled.p`
  margin: 0;
  margin-top: 0.3rem;
  font-size: 14px;
  color: rgb(240, 128, 128);
  font-weight: 500;
  cursor: pointer;
  width: fit-content;
  text-align: center;
  padding: 0 0.3rem;
`;

export const WarningBtnIcon = styled(Icon)`
  margin-left: 0.3rem;
  margin-top: 0.1rem;
`;

export const PasswordRemainderWrapper = styled.div`
  margin-top: 1rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgb(204, 204, 204);
`;

export const PasswordRemainderLink = styled(Link)`
  :hover {
    text-decoration: underline;
    color: #000;
  }
`;

export const RegisterRedirectWrapper = styled.div`
  margin: 2rem auto 0;
`;

export const RegisterRedirectTitle = styled.h1`
  font-weight: 600;
  margin-bottom: 25px;
  font-size: 26px;
`;

export const RegisterRedirectLink = styled(Link)`
  color: rgb(121, 88, 159);
  text-decoration: underline;

  :hover {
    color: rgb(84, 61, 110);
    text-decoration: underline;
  }
`;

//password remainder

export const InputPasswordRemainderInfo = styled.div`
  margin-bottom: 1.3rem;
  font-size: 16px;
  line-height: 24px;
  color: rgb(117, 117, 117);
`;

export const ReturnBtnWrapper = styled.div`
  margin: 3rem auto 0;

  @media (max-width: 520px) {
    margin-left: 0;
  }
`;

export const ReturnBtn = styled.button`
  font-size: 13px;
  line-height: 16px;
  background-color: rgb(240, 240, 240);
  color: rgb(26, 26, 26);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 666px;
  margin-left: -14rem;

  :focus {
    outline: none;
  }

  :hover {
    background-color: rgb(235, 235, 235);
  }

  @media (max-width: 520px) {
    margin-left: 0;
  }
`;

export const ReturnBtnIcon = styled(Icon)`
  margin-right: 0.2rem;
  margin-top: 0.1rem;
`;
