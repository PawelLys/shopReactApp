import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

export const Container = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: min-content min-content min-content;
  gap: 0.5rem;
  margin: 0 0.3rem;
  min-height: 69.2vh;
  color: #000;

  @media (max-width: 375px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export const Title = styled.div`
  grid-column: 1 / -1;
  height: 35px;
  background-color: #bfbfbf;
  text-transform: capitalize;
  padding: 0.45rem 0.5rem;
  color: #fff;
  font-size: 14px;
`;

export const TitleLinks = styled(Link)``;

export const TitleIcon = styled(Icon)`
  margin: 0 1rem;
  font-size: 10px;
`;

const ProductCardBtnWrapperForHover = styled.div``;

export const Product = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgb(245, 245, 245);
  padding: 0.5rem 0;
  border-radius: 5px;
  cursor: pointer;
  position: relative;

  @media (max-width: 682px) {
    padding: 0.5rem 10vw;
  }

  @media (max-width: 600px) {
    padding: 0.5rem 0;
  }

  :hover {
    box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 2px 1px, rgba(0, 0, 0, 0.16) 0px 4px 8px 0px;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    border-radius: 8px;
  }

  :hover ${ProductCardBtnWrapperForHover} {
    opacity: 1;
  }
`;

export const ProductCardBtn = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`;

export const ProductCardBtnWrapper = styled(ProductCardBtnWrapperForHover as any)`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgb(255, 255, 255);
  padding: 0px;
  border-radius: 666px;
  border: 1px solid rgb(19, 172, 0);
  border-image: initial;
  opacity: 0;
  color: rgb(19, 172, 0);
  position: relative;
  transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s, background-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  :hover {
    background-color: rgb(19, 172, 0);
    color: rgb(255, 255, 255);
  }
`;

export const ProductCardIcon = styled(Icon)`
  font-size: 18px;
  padding-right: 0.1rem;
`;

export const ProductPhotoContainer = styled.div`
  width: 80%;
`;

export const ProductPhoto = styled.img`
  width: 100%;
`;

export const ProductTitle = styled.h3`
  text-align: center;
  font-size: 15px;
  margin: 0.5rem 0.3rem;
  min-height: 2.25rem;
`;

export const ProductPrice = styled.h2`
  font-size: 18px;
  margin: 0;
  margin: 1rem 1rem 0.5rem 0;
`;

export const ProductOldPrice = styled.span`
  font-size: 15px;
  color: #4c4c4c;
  position: absolute;
  left: -3.7rem;
  text-decoration: line-through;
`;

export const ProductNewPrice = styled.span`
  font-size: 18px;
  position: relative;
`;
