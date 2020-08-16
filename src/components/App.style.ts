import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        line-height: 1.4;
        font-family: "Segoe UI", "Segoe UI Web (West European)", "Helvetica Neue", sans-serif;
        font-weight: 300;
    }

    a {
      color: inherit;

      :hover {
        text-decoration: none;
        color: inherit;
      }
    }

    p { margin: 0; }

    .loader {
      overflow: hidden;
      margin: 10vw auto;
      border: .5rem solid #f3f3f3;
      border-radius: 50%;
      border-top: .5rem solid #93b5ff;
      width: 5rem;
      height: 5rem;
      animation: spin 2s linear infinite;
    }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  
    input[type='number'] {
      -moz-appearance: textfield;
    }


`;

export const ComponentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const PageContent = styled.div`
  display: flex;
  position: relative;
`;

export const MainContent = styled.div`
  height: calc(100vh - 48px);
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 1rem;
  background-color: rgb(254, 254, 254);
  max-width: 1920px;
  margin: 0 auto;

  @media (max-width: 690px) {
    margin-left: 3rem;
  }
`;
