import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from '../../../reducers';
import * as Styled from './Footer.style';
import MastercardIcon from '../../../images/mastercardIcon.png';
import PaypalIcon from '../../../images/paypalIcon.png';
import VisaIcon from '../../../images/visaIcon.png';
import VisaElecIcon from '../../../images/visaelIcon.png';

export const Footer = React.memo(() => {
  const changeFooter = useSelector((state: StoreState) => state.resizeEvents.changeFooter);
  const [options, setOptions] = useState([false, false, false]);

  const showOptions = (num: number) => {
    setOptions(
      options.map((value, index) => {
        if (index === num) return !value;
        else return value;
      })
    );
  };

  const displayArrow = () => {
    if (changeFooter)
      return (
        <Styled.TitleArrowIconContainer>
          <Styled.ArrowIcon iconName="ChevronDown" />
        </Styled.TitleArrowIconContainer>
      );
    else return null;
  };

  const displayMyAccountOptions = () => {
    return (
      <Styled.ElementList>
        <Styled.ListItem>
          <Styled.ListItemAHref to="/">My Account</Styled.ListItemAHref>
        </Styled.ListItem>
        <Styled.ListItem>
          <Styled.ListItemAHref to="/">Purchace history</Styled.ListItemAHref>
        </Styled.ListItem>
        <Styled.ListItem>
          <Styled.ListItemAHref to="/">Login / Register</Styled.ListItemAHref>
        </Styled.ListItem>
      </Styled.ElementList>
    );
  };

  const displayResourcesOptions = () => {
    return (
      <Styled.ElementList>
        <Styled.ListItem>
          <Styled.ListItemAHref to="/contact">Contact Us</Styled.ListItemAHref>
        </Styled.ListItem>
      </Styled.ElementList>
    );
  };

  const displayHelpOptions = () => {
    return (
      <Styled.ElementList>
        <Styled.ListItem>
          <Styled.ListItemAHref to="/about">About Us</Styled.ListItemAHref>
        </Styled.ListItem>
        <Styled.ListItem>
          <Styled.ListItemAHref to="/faq">FAQ</Styled.ListItemAHref>
        </Styled.ListItem>
        <Styled.ListItem>
          <Styled.ListItemAHref to="/terms">Terms & Conditions</Styled.ListItemAHref>
        </Styled.ListItem>
      </Styled.ElementList>
    );
  };

  return (
    <Styled.Container>
      <Styled.NavWrapper>
        <Styled.NavElement>
          <Styled.ElementTitle onClick={() => changeFooter && showOptions(0)}>
            My Account
            {displayArrow()}
          </Styled.ElementTitle>
          {changeFooter ? (options[0] ? displayMyAccountOptions() : null) : displayMyAccountOptions()}
        </Styled.NavElement>
        <Styled.NavElement>
          <Styled.ElementTitle onClick={() => changeFooter && showOptions(1)}>
            Resources
            {displayArrow()}
          </Styled.ElementTitle>
          {changeFooter ? (options[1] ? displayResourcesOptions() : null) : displayResourcesOptions()}
        </Styled.NavElement>
        <Styled.NavElement>
          <Styled.ElementTitle onClick={() => changeFooter && showOptions(2)}>
            Help
            {displayArrow()}
          </Styled.ElementTitle>
          {changeFooter ? (options[2] ? displayHelpOptions() : null) : displayHelpOptions()}
        </Styled.NavElement>
      </Styled.NavWrapper>
      <Styled.RightSideContainer>
        <Styled.PresentationWrapper>
          <Styled.PresentationTitle>Sign up and stay up to date!</Styled.PresentationTitle>
          <Styled.PresentationInput placeholder="Email Adress" />
          <Styled.PresentationSendBtn>
            <Styled.PresentationSendIcon iconName="Mail" />
          </Styled.PresentationSendBtn>
        </Styled.PresentationWrapper>
        <Styled.PartnersWrapper>
          <Styled.PartnersIcons>
            <Styled.Icons src={PaypalIcon} alt="Paypal" />
            <Styled.Icons src={VisaIcon} alt="Visa" />
            <Styled.Icons src={VisaElecIcon} alt="VisaElec" />
            <Styled.Icons src={MastercardIcon} alt="Zip" />
          </Styled.PartnersIcons>
        </Styled.PartnersWrapper>
      </Styled.RightSideContainer>
    </Styled.Container>
  );
});
