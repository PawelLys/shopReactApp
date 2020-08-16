import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from '../../../reducers';
import * as Styled from './InfoComponent.style';
import ScrollPageToTop from '../../ScrollPageToTop';

interface IProps {
  title: string;
}

export const InfoComponent = ({ title }: IProps) => {
  ScrollPageToTop();

  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin lorem non venenatis tempus. Nullam at
        molestie nisl. Curabitur non arcu id mi molestie hendrerit. Phasellus eros nibh, gravida maximus lacus in,
        blandit ultricies orci. In egestas turpis id lorem finibus pretium. Etiam aliquet quam non gravida vulputate.
        Vivamus quis diam nec massa venenatis imperdiet. Vivamus sodales lorem commodo, scelerisque lectus id, aliquet
        nisl.
        <Styled.ContentBreak />
        Aliquam et rhoncus libero, eget euismod quam. Sed non orci eu nibh feugiat tristique. Fusce lacinia orci ligula.
        Nulla id aliquam lectus, at tempor arcu. Curabitur lectus massa, vestibulum vel sodales et, tempor eu urna.
        Aliquam in tellus magna. Ut et turpis sit amet purus sollicitudin ullamcorper vitae eget dolor. Nam vulputate
        magna feugiat, ultrices lorem eu, commodo odio. Mauris efficitur leo sit amet arcu porta tempus. Mauris eu
        finibus tellus, quis aliquet nisl.
        <Styled.ContentBreak />
        Nullam ut ultricies ex, sit amet euismod enim. Pellentesque consequat dui erat, id luctus nisl sagittis eu.
        Fusce gravida iaculis erat, nec fermentum leo placerat congue. Donec turpis purus, tempor nec lectus eget,
        consequat varius quam. Donec faucibus efficitur varius. Suspendisse potenti. Aenean aliquam condimentum odio in
        posuere. Curabitur in nunc in tellus auctor tincidunt vitae ut leo. In finibus bibendum felis.
      </Styled.Content>
    </Styled.Container>
  );
};
