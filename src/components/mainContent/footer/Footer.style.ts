import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Icon } from 'office-ui-fabric-react/lib/Icon';

export const Container = styled.footer`
  border-top: 1px solid rgb(189, 195, 199);
  margin-top: 1.5rem;
  width: 100%;
  background-color: rgba(210, 215, 211, 0.8);
  padding: 2rem 0 2.5rem;
  display: flex;

  @media (max-width: 880px) {
    flex-direction: column;
  }
`;

export const NavWrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: space-around;

  @media (max-width: 490px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const NavElement = styled.div`
  margin: 0 0.2rem;
`;

export const ElementTitle = styled.div`
  font-size: 19px;
  font-weight: 700;
  margin: 0.3rem 0 0.5rem;
  display: flex;

  @media (max-width: 880px) {
    font-size: 17px;
  }

  @media (max-width: 490px) {
    cursor: pointer;
    justify-content: center;
    margin-left: 0.5rem;
  }
`;

export const TitleArrowIconContainer = styled.div`
  display: flex;
  margin-top: 0.2rem;
  margin-left: 0.5rem;
`;

export const ArrowIcon = styled(Icon)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 13px;
`;

export const ElementList = styled.ul`
  padding: 0;
  margin: 0;

  @media (max-width: 490px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  font-size: 17px;
  padding: 0.3rem 0;

  @media (max-width: 880px) {
    font-size: 15px;
  }
`;

export const ListItemAHref = styled(Link)`
  transition: 0.2s;
  cursor: pointer;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.7);

  :hover {
    color: rgba(0, 0, 0, 1);
  }
`;

export const RightSideContainer = styled.div`
  flex: 2 1 auto;
  display: flex;

  @media (max-width: 978px) {
    flex-direction: column;
  }
`;

export const PresentationWrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin: 0.3rem 0.8rem;
  font-size: 20px;

  @media (max-width: 880px) {
    margin-left: 15%;
    font-size: 18px;
  }

  @media (max-width: 770px) {
    margin-left: 10%;
  }

  @media (max-width: 680px) {
    margin-left: 7%;
  }

  @media (max-width: 630px) {
    margin-left: 5%;
  }

  @media (max-width: 550px) {
    margin-left: 4%;
  }
`;

export const PresentationTitle = styled.div`
  font-weight: 700;
  margin-bottom: 0.6rem;

  @media (max-width: 490px) {
    text-align: center;
  }
`;

export const PresentationInput = styled.input`
  height: 40px;
  max-width: 500px;
  border: 1px solid #ccc;
  padding-left: 0.2rem;
  outline: none;
  background-color: #f5f5f5;
  font-size: 15px;
`;

export const PresentationSendBtn = styled.div`
  height: 45px;
  width: 70px;
  background-color: #e9e9e9;
  border: 1px solid #ccc;
  border-top: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PresentationSendIcon = styled(Icon)`
  font-size: 40px;
  color: #a3a3a3;
  cursor: pointer;
`;

export const PartnersWrapper = styled.div`
  flex: 0 1 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 978px) {
    margin-top: 0.5rem;
    flex: auto;
  }
`;

export const PartnersIcons = styled.div``;

export const Icons = styled.img`
  width: 3.75rem;
  min-height: 1.3rem;
`;
