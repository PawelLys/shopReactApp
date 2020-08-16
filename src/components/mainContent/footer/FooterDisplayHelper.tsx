import React from 'react';
import * as Styled from './Footer.style';

interface IProps {
  option: 0 | 1 | 2;
}

export const FooterDisplayHelper = ({ option }: IProps) => {
  const myAccountOptions = (
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

  const rescourcesOptions = (
    <Styled.ElementList>
      <Styled.ListItem>
        <Styled.ListItemAHref to="/contact">Contact Us</Styled.ListItemAHref>
      </Styled.ListItem>
    </Styled.ElementList>
  );

  const helpOptions = (
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

  if (option === 0) return myAccountOptions;
  else if (option === 1) return rescourcesOptions;
  else return helpOptions;
};
