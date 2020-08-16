import React from 'react';
import * as Styled from './Contact.style';
import ScrollPageToTop from '../../ScrollPageToTop';

export const Contact = () => {
  ScrollPageToTop();

  return (
    <>
      <Styled.Title>Contact</Styled.Title>
      <Styled.Content>
        <Styled.ContentBold>Monday - Friday : 8.30 - 17.30</Styled.ContentBold>
        <Styled.ContentBreak />
        Contact us directly by:
        <Styled.ContentBreak />
        1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin lorem non venenatis tempus. Nullam
        at molestie nisl. Curabitur non arcu id mi molestie hendrerit. Phasellus eros nibh, gravida maximus lacus in,
        blandit ultricies orci. In egestas turpis id lorem finibus pretium. Etiam aliquet quam non gravida vulputate.
        <Styled.ContentBreak />
        2. Aliquam et rhoncus libero, eget euismod quam. Sed non orci eu nibh feugiat tristique. Fusce lacinia orci
        ligula. Nulla id aliquam lectus, at tempor arcu. Curabitur lectus massa, vestibulum vel sodales et, tempor eu
        urna. Aliquam in tellus magna. Ut et turpis sit amet purus sollicitudin ullamcorper vitae eget dolor.
        <Styled.ContentBreak />
        3. Nullam ut ultricies ex, sit amet euismod enim. Pellentesque consequat dui erat, id luctus nisl sagittis eu.
        Fusce gravida iaculis erat, nec fermentum leo placerat congue.
      </Styled.Content>
    </>
  );
};
