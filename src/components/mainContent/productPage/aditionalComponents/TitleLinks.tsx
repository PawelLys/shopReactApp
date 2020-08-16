import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

interface IProps {
  brand?: string;
  secondLink: { title: string; link: string };
  firstLink?: { title: string; link: string };
  brandCallback?: () => void;
  producerCallback?: () => void;
}

const Title = styled.div`
  grid-column: 1 / -1;
  min-height: 35px;
  background-color: #bfbfbf;
  text-transform: capitalize;
  padding: 0.45rem 0.5rem;
  color: #fff;
  font-size: 14px;
`;

const TitleIcon = styled(Icon)`
  margin: 0 1rem;
  font-size: 10px;
`;

export const TitleLinks = ({ brand, secondLink, firstLink, brandCallback, producerCallback }: IProps) => {
  return (
    <Title>
      <Link to={firstLink ? firstLink.link : '/'}>{firstLink ? firstLink.title : 'Home'}</Link>
      <TitleIcon iconName="DoubleChevronLeftMedMirrored" />
      <Link to={`/${secondLink.link}`} onClick={producerCallback}>
        {secondLink.title}
      </Link>
      {brand && (
        <>
          <TitleIcon iconName="DoubleChevronLeftMedMirrored" />
          <Link to={`/${secondLink.link}`} onClick={brandCallback}>
            {brand}
          </Link>
        </>
      )}
    </Title>
  );
};
